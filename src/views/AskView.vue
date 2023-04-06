<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li class="post" v-for="(item,index) in fetchedAsk" v-bind:key="index"> 

        <div class="points">
          {{item.points}}
        </div>

        <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${item.id}`">
              {{item.title}}
            </router-link>
          </p>
          <small class="link-text">
            {{item.time_ago}} by
            <router-link class="link-text" v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
          </small> 
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import {mapGetters} from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
  components:{
    ListItem,
  }
  ,
  computed:{
    // ...mapGetters([
    //   'fetchedAsk' //배열 표기로하면 하나만 써도 가능 
    // ])
    // ...mapGetters({
    //   fetchedAsk : 'fetchedAsk' //store의 'fetchedAsk' 를 불러온 후 변수 fetchedAsk 리턴 해준다
    // })

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

