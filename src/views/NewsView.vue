<template>
  <div>
    <div v-for="(user,index) in users" v-bind:key="index"> {{user.title}}</div>
  </div>
</template>

<script>
import {fetchNewList} from '../api/index.js';
export default {
  data(){
    return{
      users:[]
    }
  },

  created(){
   
    fetchNewList()
      .then(response => {
        console.log(response);
        this.users = response.data;
      })
      .catch(function(error){
        console.log(error);
      })
  }
}
</script>

<style>

</style>