export const host = process.env.REACT_APP_BASE_URL;

export const loginRoute = `${host}/api/auth/login`;
export const SignupRoute = `${host}/api/auth/signup`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;
export const forgotPasswordRoute = `${host}/api/auth/forgotpassword`;
