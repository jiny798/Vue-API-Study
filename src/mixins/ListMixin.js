//mixin
import bus from '../utils/bus.js';
export default {
    //재사용할 컴포넌트 옵션

    created() {
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('API fetched');
                console.log(5);
                bus.$emit('end:spinner');
            })
            .catch((err) => {
                console.log(err);
            });
    }
}