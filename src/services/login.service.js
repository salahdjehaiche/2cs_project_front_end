export const loginService = {
    login
};
function login(email, password) {
    if(email != "" && password != "") {
        if (password=="1111")
        {
            return {role:"dpgr"};
        }else{
            return {role:"membre"};
        }

    }
}