<template>
  <div>
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
        	<router-link to="/" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>统计页面</span>
      </div>
    </div>
    <div id="box">
      <div class="boxleft">
        <div id="outchart0" :style="{ height: screenHeight - 145 + 'px',width: screenWidth/2 - 55 + 'px'}"></div>
      </div>
      <div id="box-right" class="boxright">
        <div id="outchart1" :style="{ height: screenHeight/2 - 83 + 'px',width: screenWidth/2 - 310 + 'px'}"></div>
        <div id="outchart2" :style="{ height: screenHeight/2 - 83 + 'px',width: screenWidth/2 - 310 + 'px'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { statistics } from "../../../apis/apis.js";
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
	  screenHeight: document.body.clientHeight,
	  screenWidth: document.body.clientWidth,
      data: [1, 1, 901, 934, 1290, 1330, 1320]
    };
  },
  mounted() {
    //this.drawLine0();
    //this.drawLine1();
    this.drawLine2();
  },
 methods: {
			dateList() {
				var n = 0;
//				var myddy=3;  //测试其他星期数
				var mydate = new Date();
				var myddy = mydate.getDay(); //获取存储当前日期
				var newWeek = [];
				var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
				for(var i = 0; i < weekday.length; i++) {
					if(myddy === i) {
						for(var j = i + 1; j < 7; j++) {
							newWeek[n] = weekday[j];
							n++;
						}
						for(var k = 0; k <= i; k++) {
							newWeek[n] = weekday[k];
							n++;
						}
						return newWeek;
					}
				}
			},
			drawLine0(arrtjoa,arrtjob) {
				 var weekday = this.dateList();
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("outchart0"));
				// 绘制图表
				myChart.setOption({
					title: {
						//text: '代理会员排行榜',
						textStyle: {
							color: "#FFF",
							fontSize: 25
						},
						x: "center",
						padding: [
							50,
							0,
							0,
							0
						]
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['代理贡献', '会员贡献'],
						textStyle: {
							color: '#fff',
							fontSize: 18
						},
						icon: "rect",
						itemWidth: 40,
						itemHeight: 20,
						itemGap: 80,
						top: 40
					},
					//  backgroundColor:'#01184c',
					grid: {
						left: '5%',
						//      right: '4%'
						top: '20%',
						bottom: '3%',
						containLabel: true
					},
					//  toolbox: {
					//      feature: {
					//          saveAsImage: {}  //将表保存为图片
					//      }
					//  },
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data:weekday,
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						}
					},
					yAxis: {
						type: 'value',
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						}
					},
					series: [{
							name: '代理贡献',
							type: 'line',
							smooth: true,
							areaStyle: {},
							stack: '总量',
							data: arrtjoa
						},
						{
							name: '会员贡献',
							type: 'line',
							smooth: true,
							areaStyle: {},
							stack: '总量',
							data: arrtjob
						}
					]
				});
			},
			drawLine1(arrtjta,arrtjtb) {
				var weekday = this.dateList();
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("outchart1"));
				// 绘制图表
				myChart.setOption({
					title: {
						//text: '代理总数',
						textStyle: {
							color: "#FFF",
							fontSize: 20
						},
						x: "center",
						padding: [
							25,
							0,
							0,
							0
						]
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: { //图例的设置
						data: ['新增代理', '会员'],
						textStyle: {
							color: '#fff',
							fontSize: 16
						},
						icon: "rect",
						itemWidth: 40,
						itemHeight: 20,
						itemGap: 40,
						top: 10
					},
					grid: { //边距
						left: '3%',
						//      right: '4%',
						bottom: '3%',
						top: '20%',
						containLabel: true
					},
					//  toolbox: {
					//      feature: {
					//          saveAsImage: {}  //将表保存为图片
					//      }
					//  },
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: weekday,
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						}
					},
					yAxis: {
						type: 'value',
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						}
					},
					series: [{
							name: '新增代理',
							type: 'line',
							smooth: true,
							areaStyle: {},
							stack: '总量',
							data: arrtjta
						},
						{
							name: '会员',
							type: 'line',
							smooth: true,
							areaStyle: {},
							stack: '总量',
							data: arrtjtb
						}
					]
				});
			},
			drawLine2() {
				var weekday = this.dateList();
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("outchart2"));
				// 绘制图表
				myChart.setOption({
					title: {
						//text: '会员总数',
						textStyle: {
							color: "#FFF",
							fontSize: 20
						},
						x: "center",
						padding: [
							25,
							0,
							0,
							0
						]
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['新增员工', '管理员'],
						textStyle: {
							color: '#fff',
							fontSize: 16
						},
						icon: "rect",
						itemWidth: 40,
						itemHeight: 20,
						itemGap: 40,
						top: 10
					},
					grid: {
						left: '3%',
						//      right: '4%',
						bottom: '3%',
						top: '20%',
						containLabel: true
					},
					//  toolbox: {
					//      feature: {
					//          saveAsImage: {}  //将表保存为图片
					//      }
					//  },
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data:weekday,
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						}
					},
					yAxis: {
						type: 'value',
						axisLabel: {
							show: true,
							textStyle: {
								color: '#fff'
							}
						}
					},
					series: [{
							name: '新增员工',
							type: 'line',
							smooth: true,
							areaStyle: {},
							stack: '总量',
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '管理员',
							type: 'line',
							smooth: true,
							areaStyle: {},
							stack: '总量',
							data: [220, 182, 191, 234, 290, 330, 310]
						}
					]
				});
			}
		},
		created() {
		  // 初始化用户
		  let numa = "7"
		  let numb = "86400000"
		  statistics(numa,numb).then(res => {
		    //console.log(res.data);
			let datatj = res.data.data.offer
			let arrtjoa = []
			let arrtjob = []
			let arrtjta = []
			let arrtjtb = []
			for (var i = 0; i < datatj.length; i++){
				arrtjoa.push(datatj[i].agentOffer)
				arrtjob.push(datatj[i].memberOffer)
				arrtjta.push(datatj[i].agentNum)
				arrtjtb.push(datatj[i].memberNum)
			}
			this.drawLine0(arrtjoa,arrtjob);
			this.drawLine1(arrtjta,arrtjtb);
		  });
		}
	};
</script>

<style lang="less" scoped>
// 面包屑
.bigbread {
  // width: 1454px;
  height: 40px;
//   background-color: #01184c;
  border: 1px solid #064259;
  margin-bottom: 10px;
  margin-left: 10px;
}

.bread {
  line-height: 40px;
  // width: 80%;
  height: 100%;
  padding-left: 30px;
  color: #fff;
  font-size: 14px;
  text-align: start;
  cursor: pointer;
}


#box {
  margin-top: 10px;
  justify-content: start;
  width: 100%;
  display: flow-root;
}

.boxleft{
	float: left;
}

#outchart0 {
   width: 500px;
  margin-left: 10px;
  border: 1px solid #064259;
  color: #fff;
}

#box-right {
  float: right;
  /*margin-top: -8px;*/
}

#outchart1 {
  width: 540px;
  height: 190px;
  border: 1px solid #064259;
}

#outchart2 {
  width: 540px;
  height: 190px;
  margin-top: 18px;
  border: 1px solid #064259;
  float: right;
}

h3 {
  text-align: start;
  padding: 16px 0;
  margin-top: 0;
}
</style>