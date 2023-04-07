import { fetchNewList, fetchAskList, fetchJobsList,fetchUserInfo,fetchCommentItem,fetchList } from '../api/index.js';
export default {
    FETCH_NEWS(context) {
        fetchNewList()
            .then(res => {
                context.commit('SET_NEWS', res.data); //context로 mutation 실행 
                return res; //프로미스 객체 반환
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
    },
    FETCH_ITEM({commit},id){
        fetchCommentItem(id)
            .then(({data})=> {
                commit('SET_ITEM',data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    FETCH_LIST({commit},pageName){
        fetchList(pageName)
            .then(({data}) =>{
                commit('SET_LIST',data);
            })
            .catch(err => {
                console.log(err);
            });
    }


}