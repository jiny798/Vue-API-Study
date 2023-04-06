import { fetchNewList, fetchAskList, fetchJobsList,fetchUserInfo } from '../api/index.js';
export default {
    FETCH_NEWS(context) {
        fetchNewList()
            .then(res => {
                console.log(res);
                context.commit('SET_NEWS', res.data); //context로 mutation 실행 
            })
            .catch(err => {
                console.log(err);
            });
    },
    FETCH_JOBS(context) {
        fetchJobsList()
            .then(({ data }) => {  //res 내부 필드 바로 받아오기 
                console.log(data);
                context.commit('SET_JOBS', data); //context로 mutation 실행 
            })
            .catch(err => {
                console.log(err);
            });
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                console.log(data);
                commit('SET_ASK', data); //context로 mutation 실행 
            })
            .catch(err => {
                console.log(err);
            });
    },
    FETCH_USER({commit},name){
        fetchUserInfo(name)
            .then(({data}) =>{
                commit('SET_USER',data);
            })
            .catch(err => {
                console.log(err);
            });
    }
}