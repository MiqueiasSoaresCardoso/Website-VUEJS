<template>
    <div id="image_fundo">
        <h1>Make Your Burguer</h1>
    </div>
</template>

<script>
export default{
    name:'Banner'
}
</script>

<style scoped>
#image_fundo{
    background-image: url('../assets/hamburger.jpg');
    background-position: 0 -250px;
    background-size: cover;
    height: 500px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
}
#image_fundo h1{
    color: white;
    text-align: center;
    background-color: #222;
    font-size: 55px;
    padding: 20px 40px;
    
}
</style>
