export const APP_NAME = 'Lib Space';

export const USER_ROLES = ['user', 'admin', 'librarian'];

export const AUTH_ERRORS = {
    EMAIL_ALREADY_REGISTERED: 'Email already registered',
    REPOSITORY_LAYER: 'Something went wrong in the auth repository',
    SERVICE_LAYER: 'Something went wrong in the auth service',
    CONTROLLER_LAYER: 'Something went wrong in the auth controller',
    AUTH_NOT_FOUND: 'User not found',
    USER_NOT_FOUND: 'User not found in the database',
    INVALID_CREDENTIALS: 'Invalid credentials',
    USER_NOT_VERIFIED: 'User not verified. Please verify your email',
    INVALID_TOKEN: 'Invalid token or token expired or missing',
    VERIFICATION_EMAIL_SENT: 'User verification email sent to your email. Please verify your email to login',
    VERIFICATION_EMAIL_SENT_RECENTLY: 'User verification email sent recently. Please verify your email.'
};
export const LIBRARY_ERRORS = {
    LIBRARY_ALREADY_EXISTS: 'Library already exists',
    REPOSITORY_LAYER: 'Something went wrong in the library repository',
    SERVICE_LAYER: 'Something went wrong in the library service',
    CONTROLLER_LAYER: 'Something went wrong in the library controller',
    LIBRARY_NOT_FOUND: 'Library not found',
};
export const BOOK_ERRORS = {
    BOOK_ALREADY_EXISTS: 'Book already exists',
    REPOSITORY_LAYER: 'Something went wrong in the book repository',
    SERVICE_LAYER: 'Something went wrong in the book service',
    CONTROLLER_LAYER: 'Something went wrong in the book controller',
    BOOK_NOT_FOUND: 'Book not found',
};
