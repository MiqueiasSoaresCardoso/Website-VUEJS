<template>
    <div>
        <Notificacao :msg="msg" v-show="msg"/>
        <form id="burguer_form"  @submit="CreateBurguer">
            <div id="entrada">
                <label for="nome_cliente">Nome do cliente</label>
                <input type="text" id="nome_cliente" name="nome_cliente" v-model="Burguer.name_client" placeholder=" digite o nome aqui..">
            </div>
            <div id="entrada">
                <label for="breads">selecione o pão desejado:</label>
                <select name="breads" id="breads" v-model="Burguer.bread">
                    <option value="">Selecione o seu pão...</option>
                    <option v-for="bread in resultbread" :key="bread.id" :value="bread.name">{{ bread.name }}</option>
                </select>
            </div>
            <div id="entrada">
                <label for="meats">selecione a carne desejada:</label>
                <select name="meats" id="meats" v-model="Burguer.meat">
                    <option value="">Selecione a carne do seu hamburguer...</option>
                    <option v-for="meat in resultMeat" :key="meat.id" :value="meat.name" >{{ meat.name}}</option>
                </select>
            </div>
            <div id="checkbox">
                <label id="optional_title" for="options">Lista de complementos:</label>
                <div id="selection_box" v-for="optional in resultOptional" :key="optional.id">
                    <ul>
                        <li>{{ optional.name }}</li>
                    </ul>
                </div> 
            </div>
            <div>
                <label id="optional_items" for="list_items">Digite os complementos abaixo</label>
                <input type="text" id="optional_items" name="optional_items" v-model="Burguer.opcionais" placeholder="Ex: Cebola, Tomate">
            </div>
            
            <div id="entrada">
                <input type="submit" class="submit-btn" id="submit" value="Realizar Pedido!">
            </div>

        </form>
    </div>
</template>

<script>
import Notificacao from './Notificacao.vue'
import axios from 'axios'  
    export default{
        name: 'BurguerForm',
        data(){
            return{
                //dados que vem do banco de dados
                resultbread:[],
                bread:{
                    id:'',
                    name:''
                },
                resultMeat:[],
                meat:{
                    id:'',
                    name:''
                },
                resultOptional:[],
                optional:{
                    id:'',
                    name:''
                },

                Burguer:{
                    name_client:"",
                    bread:"",
                    meat:"",
                    opcionais:"",
                    status: "solicitado"
                },
               
                optionaldata:null,
                //dados que vão para o banco de dados
                
                msg: null,
            }
        },
        methods:{
            async getIngredientes(){
                axios.all([
                axios.get('http://localhost:8081/breads/list'),
                axios.get('http://localhost:8081/meat/list'),
                axios.get('http://localhost:8081/optional/list')
                ]).then(axios.spread((Breadres,MeatRes,OptionalRes) =>{
                    this.resultbread = Breadres.data
                    this.resultMeat = MeatRes.data
                    this.resultOptional = OptionalRes.data
                })).catch((error) =>{
                    alert("Falha ao acessar o servidor...")
                }
                )   
            },
            
            CreateBurguer(e){
                e.PreventDefault
                const formdata = new FormData();
                formdata.append('name_client',this.Burguer.name_client)
                formdata.append('bread',this.Burguer.bread)
                formdata.append('meat',this.Burguer.meat)
                formdata.append('opcionais',this.Burguer.opcionais)
                formdata.append('status',this.Burguer.status)
                
                axios
                .post('http://localhost:8081/burguers/new',formdata)
            
                .then(({dados})=>{
                    this.msg="Pedido Realizado com Sucesso!"
                }).catch(({error})=>{
                    this.msg="Falha ao Salvar o Pedido"
                    console.log(error)
                })
                
                //Limpar dados 
                setTimeout(() => this.msg="",4000)
                
                
            },


          
           
            
        },
        mounted(){
            this.getIngredientes();
            
        },
        components:{
            Notificacao
        }
    }
</script>

<style scoped>
    #burguer_form{
        max-width: 400px;
        margin:auto;
    }
    #entrada{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        
    }
    label{
        font-weight: bold;
        color:#222;
        margin-bottom: 10px;
        padding: 2px 4px;
        border-left: 4px solid #FCBA03;
    }
    
    #optional_title{
        width:100%;
    }
    #optional{
        align-items:center;
        width: auto;
        margin-bottom: 15px;
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    #optional li{
       
    }
    .submit-btn{
        margin-top: 10px;
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        cursor: pointer;
        transition: .5s;
    }
    .submit-btn:hover{
        background-color: white;
        color: tomato;
    }
    #optional_items{
        width: 100%;
    }

  
</style>