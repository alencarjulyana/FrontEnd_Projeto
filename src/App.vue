<template>
  <div id="app">
    <router-view></router-view>
        
  </div>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
 
}
</script>

<style>
  * {
  text-align: left;
  background-color: #c2f1d6;
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}

.main-container{
  margin: 50px;
  min-height: 200px;
  width: 100%;
  
}

h1{
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
