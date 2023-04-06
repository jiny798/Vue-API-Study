<template>
  <div>

    <ul class="news-list">
      <li class="post" v-for="(item,index) in listItems" v-bind:key="index"> 
        <!--포인트 영역-->
        <div class="points">
          {{item.points || 0}}
        </div>

        <!--기타 정보 영역-->
        <div>
          <!--타이틀 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{item.title}}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{item.title}}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            by
            <router-link
             v-if="item.user"
             class="link-text" v-bind:to="`/user/${item.user}`">
              {{item.user}}
             </router-link>
             <a :href="item.url" v-else>
              {{item.domain}}
            </a>
          </small> 
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
    created(){
        // this.$store.dispatch('FETCH_NEWS');
        const name = this.$route.name;
        let ACTION_NAME = '';
        if(name === 'news'){
            ACTION_NAME = 'FETCH_NEWS';
        }else if(name === 'ask'){
            ACTION_NAME = 'FETCH_ASK';
        }else if(name ==='jobs'){
            ACTION_NAME = 'FETCH_JOBS';
        }
        this.$store.dispatch(ACTION_NAME);
    },
    computed:{
        // eslint-disable-next-line vue/return-in-computed-property
        listItems() {
            const name = this.$route.name;
            if(name === 'news'){
                return this.$store.state.news;
            }else if(name === 'ask'){
               return this.$store.state.ask;
            }else if(name ==='jobs'){
               return this.$store.state.jobs;
            }
        }
    }
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