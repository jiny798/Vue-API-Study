import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewList,fetchAskList,fetchJobsList} from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        jobs:[],
        ask:[]

    },
    mutations:{
        SET_NEWS(state,news){ //첫인자는 state
            state.news = news;
        },
        SET_JOBS(state, jobs) { //첫인자는 state
            state.jobs = jobs;
        },
        SET_ASK(state, ask) { //첫인자는 state
            state.ask = ask;
        }
    }
    ,
    getters:{
        fetchedAsk(state){
            return state.ask;
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
        },
        FETCH_JOBS(context){
            fetchJobsList()
                .then(({data}) => {  //res 내부 필드 바로 받아오기 
                    console.log(data);
                    context.commit('SET_JOBS', data); //context로 mutation 실행 
                })
                .catch(err => {
                    console.log(err);
                });
        },
        FETCH_ASK({commit}){
            fetchAskList()
                .then(({data}) => {
                    console.log(data);
                    commit('SET_ASK', data); //context로 mutation 실행 
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

});