<template>
    <div>
        <h1> Cadastrar </h1>

        <div class="main-container">
            
        <form id="formulario">
            <div class="input-container">
                <label for="nickname">Nickname do Usuário:</label>
                <input type="text" id="nickname" name="nickname" v-model="nickname" placeholder="Digite seu nickname">
            </div>
            
            <div class="input-container">
                <label for="nome">Nome do Usuário:</label>
                <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
            </div>

            <div class="input-container">
                <label for="senha">Senha do Usuário:</label>
                <input type="text" id="senha" name="senha" v-model="senha" placeholder="Digite sua senha">
            </div>

            <div class="input-container">
                <label for="id">Id do Usuário:</label>
                <input type="text" id="id" name="id" v-model="id" placeholder="Digite sua senha">
            </div>
            
            <div class="input-container">
                <input type="submit" class="submit-btn" value="Cadastrar">
            </div>
        </form>    
        
            

    </div>
          
        <router-link to="/listagem_page">Ir para pagina seguinte</router-link>
    </div>
</template>

<script>

export default{
    name: 'Home-page', 
    data(){
        return{
            nickname: '',
            nome: '',
            senha: '',
            id: ''
        }
    },
    methods:{
        cadastrar(){
            console.log(this.nickname)
            console.log(this.nome)
            console.log(this.senha)
            console.log(this.id)
        }
    }  

}

</script>

<style scoped>
    .main-container{
        max-width: 400px;
        margin: 0 auto;
                
    }

    .input-container{
        display: flex;
        text-align: center;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
    }

    input {
        padding: 5px 10px;
        width: 300px;
    }

    .submit-btn {
        background-color: #222;
        color: #fff;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        transition: .5s;

    }

    .submit-btn:hover {
        background-color: transparent;
        color: #222;
    }
</style>