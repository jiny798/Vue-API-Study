<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li class="post" v-for="(item,index) in this.$store.state.jobs" v-bind:key="index"> 
        <div class="points">
          {{item.points || 0}}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">{{item.title}}</a>
          </p>
          <small class="link-text">
            {{item.time_ago}} by
            <a :href="item.url">{{item.domain}}</a>
          </small> 
        </div>
      </li>
    </ul> -->

  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js';
export default {
  components:{
    ListItem,
  }
  ,
  mixins:[ListMixin],
  // created(){
    
  //   bus.$emit('start:spinner');
  //   setTimeout(()=>{
  //     this.$store.dispatch('FETCH_JOBS')
  //     .then(()=>{
  //       console.log('API fetched');
  //       bus.$emit('end:spinner');
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     });
  //   },1500)
  // }
}
</script>
