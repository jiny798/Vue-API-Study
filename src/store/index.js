import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewList} from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[]
    },
    mutations:{
        SET_NEWS(state,news){ //첫인자는 state
            state.news = news;
        }
    }
    ,
    actions:{
        FETCH_NEWS(context){
            fetchNewList()
                .then(res =>{
                    console.log(res);
                    context.commit('SET_NEWS',res.data); //context로 mutation 실행 
                })
                .catch(err=>{
                    console.log(err);
                });
        }
    }

});