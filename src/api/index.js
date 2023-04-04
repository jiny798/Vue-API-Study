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


export{
    fetchNewList, 
    fetchAskList,
    fetchJobsList
}