export const loginService = {
    login
};
function login(email, password) {
    if(email != "" && password != "") {
        return true;
    }
}