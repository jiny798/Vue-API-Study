export default{
    SET_NEWS(state, news) { //첫인자는 state
        state.news = news;
    },
    SET_JOBS(state, jobs) { //첫인자는 state
        state.jobs = jobs;
    },
    SET_ASK(state, ask) { //첫인자는 state
        state.ask = ask;
    },
    SET_USER(state,user){
        state.user=user;
    },
    SET_ITEM(state,item){
        state.item = item;
    }
}