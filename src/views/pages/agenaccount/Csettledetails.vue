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
          <router-link to="/index/csettle" style="text-decoration:none;color:#fff;">子代理账目结账</router-link>
        </span>/
        <span>详情</span>
      </div>
    </div>
 
    <div id="list">
      <div class="tabellist">
     <table class="tableInfo" id="printTest" v-for="(item, index) in tableData" :key="index">
              <tr>
                <td class="tds">代理占股</td>
                <td>{{item.share}}</td>
								 <td></td>
								 <td></td>
								  <td></td>
									<td></td>
              </tr>
              <tr>
                <td class="tds">上次结账周期</td>
                <td>{{item.cycle}}</td>
								 <td></td>
								 <td></td>
								 <td></td>
								  <td></td>
              </tr>
              <tr>
                <td class="tds">币种</td>
                 <td>{{item.currencys}}</td>
                 <td></td>
                 <td></td>
                  <td></td>
                	<td></td>
              </tr>
              <tr>
                <td class="tds">本次结账周期</td>
                 <td>{{item.bcjzzq}}</td>
                 <td></td>
                 <td></td>
                  <td></td>
                	<td></td>
              </tr>
              <tr>
                <td class="tds">吃住费用</td>
                 <td>{{item.enoughtoeat}}</td>
                 <td></td>
                 <td></td>
                  <td></td>
                	<td></td>
              </tr>
              <tr>
                <td class="tds">机票费用</td>
                 <td>{{item.planeticket}}</td>
                 <td></td>
                 <td></td>
                  <td></td>
                	<td></td>
              </tr>
							  <tr>
							  <td class="tds">车费</td>
							   <td>{{item.fare}}</td>
							   <td></td>
							   <td></td>
							    <td></td>
							  	<td></td>
							</tr>
							  <tr>
							  <td class="tds">娱乐级其他</td>
							   <td>{{item.entertainment}}</td>
							   <td></td>
							   <td></td>
							    <td></td>
							  	<td></td>
							</tr>
							  <tr>
							  <td class="tds">返点</td>
							   <td>{{item.returnpoint}}</td>
							   <td></td>
							   <td></td>
							    <td></td>
							  	<td></td>
							</tr>
							  <tr>
							  <td class="tds">生成收益明细</td>
							  <td>{{item.detailed}}</td>
								<td class="tds">生成返点</td>
								<td>{{item.generate}}</td>
								<td class="tds">生成客人统计表</td>
								<td>{{item.guest}}</td>
							</tr>
          </table>
      </div>
   
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
       {
      	share:"双色球",
      	cycle:"全压",
      	currencys:"201585687",
      	bcjzzq:"",
        enoughtoeat:"",
				planeticket:"",
				fare:"",
				entertainment:"",
				returnpoint:"",
				detailed:"",
				generate:"",
				guest:"",
      },
      ],
    };
  },
  methods: {

  },
};
</script>

<style scoped>
#thisbox >>> .el-form-item__label,
.el-radio {
  color: #ffffff;
}
.inputcolors >>> .el-form-item__label,
.el-radio {
  color: #ffffff;
}
.el-form-item {
  margin-bottom: 8px;
}
.tableInfo{
	border: 1px solid red;
	color: #FFFFFF;
}
td{ /* border:1px solid rgb(6, 66, 89); */
border: 1px solid #000000;
    padding: 12px 0;
    min-width: 0;
		width: 120px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: center;
		height: 50px;
		font-size: 14px;
		background: rgb(1, 23, 82);
}
table { border-collapse: collapse; border-spacing: 0;}
.tds{
	background-color: rgb(0, 36, 117);
}
</style>