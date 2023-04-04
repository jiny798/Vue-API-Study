<template>
  <div>
    <div v-for="(job,index) in this.$store.state.jobs" v-bind:key="index"> {{job.title}}</div>
  </div>
</template>

<script>
import {fetchJobsList} from '../api/index.js';
export default {

  created(){
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>