import axios from "axios";

//http 요청 응답에 관련된 기본 설정 가능
const config = {
    baseUrl: 'https://api.hnpwa.com/v0'
}

//API 함수들을 정리 
function fetchNewList(){
    return axios.get(`${config.baseUrl}/news/1.json`);
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}/ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}/show/1.json`);
}

async function fetchList(pageName){
    try{
        return axios.get(`${config.baseUrl}/${pageName}/1.json`);
    }catch(err){
        console.log(err);
    }
    
}

function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}/user/${username}.json`);
}

function fetchCommentItem(id){
    return axios.get(`${config.baseUrl}/item/${id}.json`);
}


export{
    fetchNewList, 
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList
}