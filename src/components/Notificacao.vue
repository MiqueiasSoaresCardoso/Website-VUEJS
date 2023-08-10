<template>
    <div>
        <div class="message_container">
            <p>{{ msg }}</p>
        </div>
    </div>
    
</template>

<script>
export default{
    name: "Notificacao",
    props:{
        msg: String,
        
    }
}


</script>

<style scoped>
.message_container{
    color: #004085;
    background-color: #CCE5FF;
    border: 2px solid #B8DAFF;
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    margin:30px auto;
    text-align: center;
  
}

</style>
