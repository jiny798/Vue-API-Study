import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        jobs:[],
        ask:[],
        user:{},
        item:{}

    },
    mutations: mutations, //속성:속성 같은 변수 타입이면 줄이기 가능 속성 : 문자열 은 불가 
    getters:{
        fetchedAsk(state){
            return state.ask;
        },
        fetchedItem(state){
            return state.item;
        }
    }
    ,
    actions

});