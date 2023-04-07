import Chart from 'chart.js/auto'; //플러그인에서 한번만 로딩해오고 공통으로 쓰겠다 



export default{
    install(Vue){
        console.log('chart plugin');
        Vue.prototype.$_Chart = Chart;  //객체의 속성을 확장하는것이 프로토타입  $_ 는 내부적 충돌방지를 위해 권고사항 
    }
}