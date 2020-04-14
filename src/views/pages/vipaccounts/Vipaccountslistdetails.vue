<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>
          <router-link to="/index/vipaccountslist" style="text-decoration:none;color:#fff;">会员账目列表</router-link>
        </span>/
        <span>详情</span>
      </div>
    </div>

    <div id="list">
      <div class="tabellist">
    	<el-table v-tableDrag :data="tableData" border style="width: 100%">
          <el-table-column prop="time" label="时间" width="150"></el-table-column>
          <el-table-column prop="tableId" label="台桌号" width="120"></el-table-column>
          <el-table-column prop="shoeId" label="靴号" width="120"></el-table-column>
          <el-table-column prop="playId" label="铺号" width="120"></el-table-column>
          <el-table-column prop="zhuangkey" label="庄" width="120"></el-table-column>
          <el-table-column prop="zxkey" label="和" width="120"></el-table-column>
          <el-table-column prop="xiankey" label="闲" width="120"></el-table-column>
          <el-table-column prop="zxdkey" label="庄对" width="120"></el-table-column>
		      <el-table-column prop="xindkey" label="闲对" width="120"></el-table-column>
          <el-table-column prop="bxkey" label="保险" width="120"></el-table-column>
          <el-table-column prop="longey" label="龙" width="120"></el-table-column>
          <el-table-column prop="hukey" label="虎" width="120"></el-table-column>
          <el-table-column prop="lhkey" label="和" width="120"></el-table-column>
          <el-table-column prop="handOut" label="盈亏" width="120"></el-table-column>
          <el-table-column prop="kpjgkey" label="开牌结果" width="120"></el-table-column>
          <el-table-column prop="washCodeMoney" label="洗码费" width="120"></el-table-column>
          <el-table-column prop="zmkey" label="注码" width="120"></el-table-column>
          <el-table-column prop="xzfskey" label="下注方式" width="120"></el-table-column>
          <el-table-column prop="pairWin" label="记录人" width="120"></el-table-column> 
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  detailsvipaccountlist
} from "../../../apis/apis.js";
export default {
  data() {
    return {
		tableData: []
    }
  },

  methods: {
    fanhui(){
      this.$router.push('/index/vipaccountslist')
    }
  },
  created(){
    // alert(this.$route.query.data)
    var	a = this.$route.query.data;

		detailsvipaccountlist(a).then(res => {
			let datalist = res.data.data.list;
			let tabledata = [];
			let strs= new Array();
			let strd= new Array();
            let baijl = [
                        	{
                        		id: 0,
                        		name: 'zhuangkey'
                        	},
                        	{
                        		id: 1,
                        		name: 'xiankey'
                        	},
                        	{
                        		id: 2,
                        		name: 'zxkey'
                        	},
                        	{
                        		id: 3,
                        		name: 'xindkey'
                        	},{
                        		id: 4,
                        		name: 'zxdkey'
                        	}
                        ]
			let longh = [
			            	{
			            		id: 0,
			            		name: 'longey'
			            	},
			            	{
			            		id: 1,
			            		name: 'hukey'
			            	},
			            	{
			            		id: 2,
			            		name: 'lhkey'
			            	}
			            ]
			for (var i=0;i<datalist.length ;i++ ){
				let kpjg;
				let zhum;
				let xiazfs;
				if(datalist[i].gameType == "1"){
					strs=datalist[i].amounts.split(",");
					strd=datalist[i].position.split(",");
					let arrval = []
					for (var j=0;j<strd.length ;j++ ){
						for (var f=0;f<baijl.length ;f++ ){
							if(strd[j] == baijl[f].id){
								arrval.push(baijl[f].name)
							}
						}
					}
					strd.pop()
					strs.pop()
					let objToStr = {}
					for (var a=0;a<arrval.length ;a++ ){
						for (var d=0;d<strs.length ;d++ ){
							if(a == d){
								let key = arrval[a]
								let value = strs[d]
								objToStr[key] = value
							}
						}
					}
									let jsonjg = JSON.parse(datalist[i].result);
									if(jsonjg.result == "1"){
										kpjg = '庄赢'
									}if(jsonjg.result == "2"){
										kpjg = '闲赢'
									}if(jsonjg.result == "3"){
										kpjg = '和'
									}
									if(datalist[i].moneyType == "1"){
										zhum = 'RMB'
									}
									if(datalist[i].moneyType == "0"){
										zhum = 'USD'
									}
									if(datalist[i].betWay == "1"){
										xiazfs = '筹码'
									}else{
										xiazfs = '现金'
									}
									tabledata.push({
										time:datalist[i].time,
										tableId:datalist[i].tableId,
										shoeId:datalist[i].shoeId,
										playId:datalist[i].playId,
										handOut:datalist[i].handOut,
										washCodeMoney:datalist[i].washCodeMoney,
										zhuangkey:objToStr.zhuangkey,//庄
										xiankey:objToStr.xiankey,//闲
										zxkey:objToStr.zxkey,//和
										xindkey:objToStr.xindkey,//闲对
										bxkey:'无',//保险
										kpjgkey:kpjg,//开牌结果
										zmkey:zhum,//注码
										xzfskey:xiazfs,//下注方式
										pairWin:datalist[i].pairWin,
										zxdkey:objToStr.zxdkey,//庄对
									})
				}else{
					strs=datalist[i].amounts.split(",");
					strd=datalist[i].position.split(",");
					let arrval = []
					for (var p=0;p<strd.length ;p++ ){
						for (var o=0;o<longh.length ;o++ ){
							if(strd[p] == longh[o].id){
								arrval.push(longh[o].name)
							}
						}
					}
					strd.pop()
					strs.pop()
					let objToStr = {}
					for (let a=0;a<arrval.length ;a++ ){
						for (let d=0;d<strs.length ;d++ ){
							if(a == d){
								let key = arrval[a]
								let value = strs[d]
								objToStr[key] = value
							}
						}
					}
									let jsonjg = JSON.parse(datalist[i].result);
									if(jsonjg.result == "1"){
										kpjg = '庄赢'
									}if(jsonjg.result == "2"){
										kpjg = '闲赢'
									}if(jsonjg.result == "3"){
										kpjg = '和'
									}
									if(datalist[i].moneyType == "1"){
										zhum = 'RMB'
									}
									if(datalist[i].moneyType == "0"){
										zhum = 'USD'
									}
									if(datalist[i].betWay == "1"){
										xiazfs = '筹码'
									}else{
										xiazfs = '现金'
									}
									tabledata.push({
										time:datalist[i].time,
										tableId:datalist[i].tableId,
										shoeId:datalist[i].shoeId,
										playId:datalist[i].playId,
										handOut:datalist[i].handOut,
										washCodeMoney:datalist[i].washCodeMoney,
										longey:objToStr.longey,//龙
										hukey:objToStr.hukey,//虎
										lhkey:objToStr.lhkey,//和
										bxkey:'无',//保险
										kpjgkey:kpjg,//开牌结果
										zmkey:zhum,//注码
										xzfskey:xiazfs,//下注方式
										pairWin:datalist[i].pairWin,
									})
				}
			}
			this.tableData = tabledata
    });
		
  },
  // mounted(){
  //   this.form=this.$route.query.data

  // }
};
</script>

<style lang="less" scoped>
.tabellist {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top:20px ;
}

</style>
<style  scoped>
.tabellist >>> .el-table__body tr:hover > td {
  background: rgb(1, 23, 82);
}
.tabellist >>> .el-table td,
.el-table th.is-leaf {
  background: rgb(1, 19, 71);
  color: #ffffff;
  border-collapse: collapse;
  border-color: rgb(6, 66, 89);
}
.tabellist >>> .el-table--border {
  color: #ffffff;
  border-collapse: collapse;
  border-color: rgb(6, 66, 89);
}
.tabellist >>> .el-table--border th,
.el-table__fixed-right-patch {
  background: rgb(0, 36, 117);
  border-collapse: collapse;
  color: #ffffff;
}
.tabellist >>> .el-table th {
  background: rgb(0, 36, 117);
  border-collapse: collapse;
  border-color: rgb(6, 66, 89);
  color: #ffffff;
}

</style>
