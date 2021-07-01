import axios from 'axios'

export const loginService = {
    login
};
async function login(username, password) {
    if(username != "" && password != "") {
        const data ={
            "username": username, 
            "password": password
        }
        let response = await axios({
            method: 'post',
            url: 'https://django-app-dpgr.herokuapp.com/api/token/',
            headers:{
                "Content-Type":"application/json", 
                },
            data: data
            }); 
            
            if (response.status==200){
               return response.data.access
            }
            return false
            
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