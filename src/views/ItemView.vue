<template>
  <div>
    <section>
        <user-profile :info="fetchedItem">
            <!-- <div slot="username">{{fetchedItem.user}}</div> -->
            <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                {{fetchedItem.user}}
            </router-link>

            <template slot="time">{{'Posted '+fetchedItem.time_ago}}</template>
        </user-profile>
    </section>
    <section>
        <div v-html="fetchedItem.content"></div>

    </section>

  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import {mapGetters} from 'vuex';

export default {
    components:{
        UserProfile
    }
    ,
    computed:{
        ...mapGetters(['fetchedItem'])

    },
    created(){
        const itemId = this.$route.params.id;
        console.log(itemId);
        this.$store.dispatch('FETCH_ITEM',itemId);
    }
}
</script>

<style scoped>
.user-container{
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user{
    font-size: 2.5rem;
}
.user-description{
    padding-left: 8px;
}
.time{
    font-size: 0.7rem;
}

</style>