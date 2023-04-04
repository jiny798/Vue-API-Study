<template>
  <div>
    <div v-for="(item,index) in ask" v-bind:key="index"> {{item.title}}</div>
    
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';
export default {
  data(){
    return{
      ask: []
    }
  }
  ,
  created(){
    this.$store.dispatch('FETCH_ASK');
  },
  
}
</script>

<style>

</style>