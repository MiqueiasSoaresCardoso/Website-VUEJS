<template>
    <div id="nav">
        <router-link to="/" id="logo">
            <img id="img" src="../assets/logo.png" >
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/pedidos">Pedidos</router-link>
        
        
    </div>
    
</template>

<script>
export default{
    name: 'Navbar',
    
}
</script>

<style scoped>
#nav{
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display:flex;
    justify-content: flex-end;
    align-items: center;
}

#nav #logo{
    margin: auto;
    margin-left: 0;
}

#img{
    width: 40px;
}

#nav a{
    color:#FCBA03;
    text-decoration: none;
    margin:12px;
    transition: .5s;
} 

#nav a:hover{
    color: tomato;
}



</style>
