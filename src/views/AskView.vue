<template>
  <div>
    <div v-for="(item,index) in this.$store.state.ask" v-bind:key="index"> {{item.title}}</div>
    
  </div>
</template>

<script>
export default {

  created(){
    this.$store.dispatch('FETCH_ASK');
  },
  
}
</script>

<style>

</style>