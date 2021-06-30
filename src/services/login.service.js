export const loginService = {
    login
};
function login(email, password) {
    if(email != "" && password != "") {
        if (password=="1111")
        {
            return {role:"dpgr"};
        }else if (password=="2222"){
            return {role:"membre"};
        }else if (password=="3333"){
            return {role:"CS"};
        }else if (password=="4444"){
            return {role:"CL"};
        }


    }
}