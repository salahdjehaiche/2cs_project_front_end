<template>
  <div>
      <div><h1>Login {{appName}}</h1> </div>
      <div>
          <form  @submit.prevent="onLogin"
          class="text-center bg-blue-200 w-4/5">
              <div class="py-2 my-2  ">
                <label class="mr-5  " >Email</label>
                <input type="email" class=" w-2/3 " v-model="input.email" />
              </div>
              <div class="py-2 my-2  ">
                <label class="mr-3  " >Password</label>
                <input type="password" class=" w-2/3 " v-model="input.password" />
              </div>
              <div class="my-3">
                <button class="border bg-red-200" type="submit">
                    Login
                </button>
              </div>                            
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data(){ 
        return{
            mail:'',
            input: {
                email: '',
                password: ''
            }
        }
    },
    methods:{        
        onLogin(){
            
            if(this.input.email != "" && this.input.password != "") {
                if(this.input.email == "saleh@esi.dz" && this.input.password == "12345678") {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "GestionUtilisateur" });
                } else {
                    console.log("The email and / or password is incorrect");
                }
            } else {
                console.log("A email and password must be present");
            }            
        }
    },
    

}
</script>

<style>

</style>