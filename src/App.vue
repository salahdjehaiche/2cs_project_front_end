<template>
 <div id="app">        
        <router-view  />
</div>
 <!-- <router-view/>-->
</template>
<script>

export default {
  components:{
    },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#nav a {
  font-weight: bold;
  }

#nav a.router-link-exact-active {
  color: #0077ff;
}
#nav a.router-link-exact-active p{
 display:inherit;
    border-bottom:1px solid rgb(160, 158, 158);
    padding-bottom:1px;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #ccc; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #aaa; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #888; 
}
</style>
