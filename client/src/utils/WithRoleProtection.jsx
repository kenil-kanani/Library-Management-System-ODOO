'use client';

import React, { useContext } from 'react';
import useRole from '../hooks/useRole';
import { ROLE } from '@/constant.js';
import AppContext from '@/context/AppContext';
import { useNavigate } from 'react-router-dom';

const withRoleProtection = (Component, allowedRoles) => {
    return (props) => {
        const { user, role } = useContext(AppContext);
        const isAuthorized = useRole(allowedRoles);
        const navigate = useNavigate();

        React.useEffect(() => {
            if (!user || !role) {
                navigate('/sign-in');
            } else if (!isAuthorized && role === ROLE.USER) {
                navigate('/books');
            } else if (!isAuthorized && role === ROLE.ADMIN) {
                navigate('/admin');
            } else if (!isAuthorized && role === ROLE.LIBRARIAN) {
                navigate('/librarian');
            }
        }, [user, role, isAuthorized, navigate]);

        if (!user || !role || !isAuthorized) {
            return null;
        }

        return <Component {...props} />;
    };
};

export default withRoleProtection;