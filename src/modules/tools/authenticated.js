export const isAuthenticated = (type) => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    console.log(userToken)
    // return userToken

    if (userToken) {
        let sessiontype = sessionStorage.getItem('type')
        if (sessiontype == type) {
            return true
        }
    }
    return false
}