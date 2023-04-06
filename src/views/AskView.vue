<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="(item,index) in fetchedAsk" v-bind:key="index"> 
        <!--포인트 영역-->
        <div class="points">
          {{item.points}}
        </div>

        <!--기타 정보 영역-->
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
    </ul>
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

<style scoped>

.news-list{
  margin:0;
}
.post{
  list-style: none;
  display:flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;     /*세로에서 중앙 */ 
  justify-content: center;  /*가로에서 중앙*/
  color: #42b883;
}
.news-title{
  margin: 0px;
}
.link-text{
  color: #828282
}

</style>