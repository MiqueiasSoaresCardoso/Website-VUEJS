<template>
    <div class="padrao">
        <Banner/>
        <h1>Monte o seu Hamburguer</h1>
        <BurguerForm/>
    </div>
    
</template>

<script>
import Banner from './Banner.vue'
import BurguerForm from './BurguerForm.vue'
export default{
    name: 'Home',
    components:{
        Banner,
        BurguerForm
    }
}
</script>

<style scoped>

</style>
