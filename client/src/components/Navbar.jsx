import { APP_NAME, ROLE } from "../constant.js"
import AppContext from '@/context/AppContext'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { FiLogOut } from "react-icons/fi";

const NavBar = () => {

    const withoutAuthNavItems = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'Sign In',
            path: '/sign-in',
        },
        {
            label: 'Sign Up',
            path: '/sign-up',
        },
        {
            label: 'About',
            path: '/about',
        },
        {
            label: 'Contact',
            path: '/contact',
        },
    ]

    const withAuthNavItemsForUser = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'Books',
            path: '/books',
        },
    ]

    const withAuthNavItemsForAdmin = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'Add Library',
            path: '/add-library',
        },
    ]

    const withAuthNavItemsForLibrarian = [
        {
            label: 'Home',
            path: '/',
        },
    ]

    const { user, logOutUser } = useContext(AppContext);

    const [navItems, setNavItems] = useState(withoutAuthNavItems)

    useEffect(() => {
        if (!user) {
            setNavItems(withoutAuthNavItems)
        } else if (user.role === ROLE.ADMIN) {
            setNavItems(withAuthNavItemsForAdmin)
        } else if (user.role === ROLE.LIBRARIAN) {
            setNavItems(withAuthNavItemsForLibrarian)
        } else {
            setNavItems(withAuthNavItemsForUser)
        }
    }, [user])

    return (
        <header className="px-4 lg:px-6 h-16 flex items-center bg-gray-200">
            <Link to="/" className="flex items-center justify-center">
                <span className="ml-2 text-xl font-bold text-gray-900 ">{APP_NAME}</span>
            </Link>
            <nav className="ml-auto flex items-center gap-4 sm:gap-6">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="text-sm font-medium text-gray-700 hover:underline"
                    >
                        {item.label}
                    </Link>
                ))}

                {
                    user && (
                        <Button
                            onClick={logOutUser}
                            className='flex items-center gap-2'
                        >
                            Logout <FiLogOut />
                        </Button>
                    )
                }

            </nav>
        </header>
    )
}

export default NavBar
