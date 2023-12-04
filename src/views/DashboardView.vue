<template>
  <div class="box">
    <div class="chart0">
      <div id="chart"  style="width: 500px;height:300px;"></div>
      <div id="chart2" class="chart"></div>
    </div>
  </div>
</template>

<script>
import api from "@/axios";
import * as echarts from "echarts";
export default {
  data() {
    return {
      chart: "",
      chart2: "",
      data:[],
      data2:[{
        value:'',
        name:''
      }],
      dailydate: [],
      dailycount: [],
      topday: [],
      topmonth: []
    };
  },
  mounted() {
    api.get('/topday').then(res=>{
      console.log(res.data)
      this.topday = res.data;
    });
    api.get('/topmonth').then(res=>{
      console.log(res.data)
      this.topmonth = res.data;
    });
    this.chart= echarts.init(document.getElementById('chart'));
    api.get('/getdata').then(res=>{
      console.log(res.data)
       res.data.forEach(item=>{
          this.dailydate.push(item.date);
          this.dailycount.push(item.dailycount);
        })
      console.log(this.dailydate);
      console.log(this.dailycount);
      const option = {
        title: {
          text: '日活量',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: this.dailydate
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.dailycount,
            type: 'line',
            smooth: true
          }
        ]

      };
      this.chart.setOption(option);
    });
    this.chart2= echarts.init(document.getElementById('chart2'));
    api.get('/form/get').then(res=>{
      console.log(res.data)
      res.data.forEach(item=>{
        this.data2.push({
          value:item.count,
          name:item.name
        });
      })
      const option = {
        title: {
          text: '用户使用排名',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: this.data2,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]

      };
      this.chart2.setOption(option);
    });

  }
}


</script>

<style scoped>
.chart {
  width: 500px;
  height: 400px;
}
.box {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.chart0{
  display: flex;
  flex-direction: column;
}
.Rankings{
  margin-left: 100px;
  display: flex;
  flex-direction: row;
}
.RankingsDay{
  width: 300px;
  height: 500px;
  background-color: #eae8e2;

  border-radius: 30px;
}
.RankingsMon{
  margin-left: 50px;
  width: 300px;
  height: 500px;
  background-color: #eae8e2;
  border-radius: 30px;
}
.item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 10px;
}
.index{
  margin-left: 30px;
  color: #e6b003;
  margin-right: 20px;
  font-size: 20px;
  font-weight: bolder;
}
.name{



}
</style>
