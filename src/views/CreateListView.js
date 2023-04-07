import ListView from './ListView.vue';
import bus from '../utils/bus.js';

//HOC 
export default function createListView(name) {
    return {
        //재사용할 인스턴스 옵션들이 들어갈 자리
        // el : '' , 등등
        name : name,
        render(createElement){
            return createElement(ListView);
        },
        created() {
            bus.$emit('start:spinner');
                this.$store.dispatch('FETCH_LIST',this.$route.name)
                    .then(() => {
                        console.log('API fetched');
                        bus.$emit('end:spinner');
                    })
                    .catch((err) => {
                        console.log(err);
                    });
        }
        
    }
}