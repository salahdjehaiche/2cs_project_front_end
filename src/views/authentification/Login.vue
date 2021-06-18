<template>
    <div id="login">
        <div class="h-100 bg-gray-300">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class="modal-dialog w-100 mx-auto">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="h5 modal-title text-center">
                                    <h4 class="mt-2">
                                        <div>Welcome,</div>
                                        <span>Please sign in to your account below.</span>
                                    </h4>
                                </div>
                                <form ref="form" @submit.prevent="doLogin">
                                    <div id="usernameGroup1">
                                        <label class="mr-5  " >Email</label>
                                        <input id="usernameInput"
                                                    type="email"
                                                    name="email" 
                                                    v-model="email"
                                                    required
                                                    placeholder="Enter email..." />
                                    </div>
                                    <div id="exampleInputGroup2"
                                            >
                                        <label class="mr-3  " >Password</label>x
                                        <input id="exampleInput2"
                                                    type="password"
                                                    name="password" 
                                                    v-model="password"
                                                    required
                                                    placeholder="Enter password..." />
                                       
                                    </div>
                                   <div class="my-3">
                                <button class="border bg-red-700 p-1 rounded-lg text-white" type="submit" >
                                    Login
                                </button>
                            </div>          
                                </form>
                                <div class="divider"/>
                            </div>                                                                          
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        <strong> Copyright &copy; camellabs.com </strong>
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>
<script>
    import {  mapActions } from 'vuex'
    export default {
        name: 'Login',
        data: () => ({
            email: "",
            password: "",
        }),
        methods: {
            ...mapActions('login', {
                login: 'login'
            }),
                reset() {
                this.$refs.form.reset();
            },
            doLogin() {
                const { email, password } = this;
                if(this.email != "" && this.password != "") {
                    this.login({ email, password });
                }else{
                    alert('Please fill the text!');
                }
            }
        },
    }
</script>



<!--<template>
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

</style>-->