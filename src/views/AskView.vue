<template>
  <div>
    <div v-for="(item,index) in fetchedAsk" v-bind:key="index"> {{item.title}}</div>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed:{
    // ...mapGetters([
    //   'fetchedAsk' //배열 표기로하면 하나만 써도 가능 
    // ])
    ...mapGetters({
      fetchedAsk : 'fetchedAsk' //store의 'fetchedAsk' 를 불러온 후 변수 fetchedAsk 리턴 해준다
    })

    //2
    // ...mapState({
    //   ask: state => state.ask
    // }),

    // 1
    // ask(){
    //   return this.$store.state.ask;
    // }

  }
  ,
  created(){
    this.$store.dispatch('FETCH_ASK');
  },
  
}
</script>

<style>

</style>