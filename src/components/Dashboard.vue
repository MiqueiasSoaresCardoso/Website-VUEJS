<template>
    
    <div id="burger_table" v-if="resultBurger">
    <div>
      <div id="burger_table_heading">
        <div class="order-id"></div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
    </div>
    <div id="burger_table_rows">
      <div class="burger_table_row" v-for="burger in resultBurger" :key="burger.id">
        <div class="order-number"></div>
        <div>{{ burger.name_client }}</div>
        <div>{{ burger.bread }}</div>
        <div>{{ burger.meat }}</div>
        <div>
          <ul>
            <li>{{ burger.opcionais }}</li>
          </ul>
        </div>
        <div>
          <select name="status" class="status">
            <option v-for="s in status" value="" :key="s.id" :selected="burger.status == s.name">
              {{ s.name }}</option>
          </select>
          <button class="delete-btn" @click="deleteburger(burger.id)">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
<div v-else>
    <h2>Ainda não temos pedidos</h2>
</div>
  
        
</template>

<script>
import axios from 'axios' 
export default{
    name:'Dashboard',
    data(){
        return{
            Burguer:{
            name_client:"",
            bread:"",
            meat: "",
            opcionais:"",
            status:""
            },
            resultBurger:[],
            status:[]
        }
    },
    methods:{
            async getInfo(){
                axios.all([
                axios.get('http://localhost:8081/burguers/list'),
                axios.get('http://localhost:8081/status/list'),
                ]).then(axios.spread((Burgers,Status) =>{
                    this.resultBurger = Burgers.data
                    this.status = Status.data
                })).catch((error) =>{
                    alert("Falha ao acessar o servidor...")
                }
                )   
            },
            deleteburger(id){
              axios.delete(`http://localhost:8081/burguers/${id}`)
              .then(({dados})=>{
                    alert('Atualize a pagina')
                }).catch(({error})=>{
                    alert('Falha ao remover')
                    console.log(error)
                })
            },
            updateStatus(event,id){

            }
            
    },
    mounted(){
        this.getInfo();
    }
}

</script>


<style scoped>

#burger_table{
    max-width: 1200px;
    margin:0 auto;
}
#burger_table_heading{
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
}
#burger_table_heading,
#burger_table_rows,
.burger_table_row{
    display: flex;
    flex-wrap: wrap;
}

.burger_table_row{
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
}
.burger_table_row li{
  list-style-type: none;
}

#burger_table_heading div,
.burger_table_row div{
    width:19%;
}

#burger_table_heading .order-id,
  .burger_table_row .order-number {
    width: 5%;
}

select{
    padding: 12px 6px;
    margin-right: 12px;
}

.delete-btn{
    background-color: #222;
    color: #fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}
.delete-btn:hover{
    background-color: transparent;
    color: #222;
}


</style>