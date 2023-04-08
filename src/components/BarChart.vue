<template>
  <div>
    <canvas ref="myChart" id="myChart"></canvas>
  </div>
</template>

<script>
// import Chart from 'chart.js/auto';

export default {
    props:['propsdata'],

    mounted(){
    const ctx = this.$refs.myChart ; 

    new this.$_Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsdata
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
</script>

<style>

</style>