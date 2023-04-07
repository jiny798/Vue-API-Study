import Vue from 'vue';
import VueRouter from 'vue-router';
import  AskView  from '../views/AskView.vue';
import  NewsView  from '../views/NewsView.vue';
import  JobsView  from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';
// import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/',
            redirect: '/news'
        },

        {
            path:'/news',
            name: 'news',
            component: NewsView,
            // component: createListView('NewsView'),
            beforeEnter: (to,from,next) => {
                console.log('to',to);
                console.log('from', from);
                console.log('next', next);

                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('API fetched');
                        console.log(5);

                        next() // dispatch 보내고 다 끝나고나서 next 호출 
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                console.log('to', to);
                console.log('from', from);
                console.log('next', next);

                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('API fetched');
                        console.log(5);
                        // bus.$emit('end:spinner');
                        next() // dispatch 보내고 다 끝나고나서 next 호출 
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                console.log('to', to);
                console.log('from', from);
                console.log('next', next);

                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('API fetched');
                        console.log(5);
                        // bus.$emit('end:spinner');
                        next() // dispatch 보내고 다 끝나고나서 next 호출 
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView,
        }

    ]
});
