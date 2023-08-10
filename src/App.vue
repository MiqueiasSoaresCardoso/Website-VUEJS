<template>
   <div>
    <Navbar :logo="logo_src" :alt="name_app"/>
    <div>
      <router-view></router-view>
    </div>
    
    <Footer />
  </div>
   
    
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components:{
    Navbar,
    Footer
  },
  data(){
    return{
      logo_src: "./assets/logoo.png",
      name_app: "Make Your Burguer"
    }
  }
}
</script>

<style>
.padrao{
  
  min-height: 250px;
}

h1{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 38px;
}
</style>


