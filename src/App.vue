<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>  
    <spinner-load :loading='loadingStatus'></spinner-load>
    <bar-chart :propsdata="chartDataSet"></bar-chart>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import SpinnerLoad from './components/SpinnerLoad.vue';
import bus from './utils/bus.js';
import BarChart from './components/BarChart.vue';

export default {
  components: {
    ToolBar,
    SpinnerLoad,
    BarChart
  },
  data(){
    return{
      loadingStatus: false,
      chartDataSet: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }],
    };
  },
  methods:{
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  },
  created(){
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);

    // axios.get('charts/line/1')
    //   .then(response => this.chartDataSet =  response.data)
    //   .catch(err => console.log(err))

  },
  beforeDestroy(){
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
a{
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active{
  text-decoration: underline;
}
a:hover{
  color:#42b883;
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: opacity .5s ;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

</style>
