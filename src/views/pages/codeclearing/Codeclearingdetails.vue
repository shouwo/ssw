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
        	<router-link to="/index/codeclearing" style="text-decoration:none;color:#fff;">洗码结账</router-link>
        </span>/
        <span>详情</span>
      </div>
    </div>

  <div id="list">
	<div class="tabellist"  id="tabellists">
      <!-- 台桌类型 / 下注方式 / 帐号 / 姓名 / 总押 / 总赢 / 总洗码  / 洗码率 / 洗码费 / 
      占股 / 币种 / 占股收益 / 总收益 / 未结收益 / 总公司 / 上次结账 / 操作-->
      <el-table v-tableDrag :data="tableData" border style="width: 100%">
				<div id="zz">
        <el-table-column prop="date" label="台桌类型" width="150"></el-table-column>
        <el-table-column prop="name" label="洗码号" width="120"></el-table-column>
        <el-table-column prop="province" label="名称" width="120"></el-table-column>
        <el-table-column prop="city" label="下注次数" width="120"></el-table-column>
        <el-table-column prop="address" label="下注总额" width="120"></el-table-column>
        <el-table-column prop="zip" label="总保险" width="120"></el-table-column>
        <el-table-column prop="zip" label="总洗码" width="120"></el-table-column>
        <el-table-column prop="zip" label="派彩所赢" width="120"></el-table-column>
        <el-table-column prop="zip" label="洗码率" width="120"></el-table-column>

        <el-table-column prop="date" label="洗码费" width="150"></el-table-column>
        <el-table-column prop="name" label="中和" width="120"></el-table-column>
        <el-table-column prop="province" label="中队"></el-table-column>
				</div>
       
      </el-table>
	</div>
		<!-- <button  style="margin-left:5px;" type="primary" v-print="'#tabellists'">打印</button> -->
 
      
    </div>
  </div>
</template>
<script>
import {detailsclear} from '../../../apis/apis'
export default {
  data() {
    return {
     
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
      ],
    };
  },
 created(){
   detailsclear().then(res=>{
     console.log(res)
   })
 }
  
};
</script>

<style scoped>
	.tabellist>>>.el-table__body tr:hover>td{
		background:rgb(1,23,82);;
	} 
	.tabellist>>>.el-table td, .el-table th.is-leaf{
		background: rgb(1, 19, 71);
		color: #FFFFFF;
		border-collapse:collapse;
		border-color:rgb(6, 66, 89);
	}
	.tabellist>>>.el-table--border{
		color: #FFFFFF;
		border-collapse:collapse;
		border-color:rgb(6, 66, 89);
	}
	.tabellist>>>.el-table--border th, .el-table__fixed-right-patch{
		background: rgb(0, 36, 117);
		border-collapse:collapse;
		color: #FFFFFF;
	}
	.tabellist>>>.el-table th{
		background: rgb(0, 36, 117);
		border-collapse:collapse;
		border-color:rgb(6, 66, 89);
		color: #FFFFFF;
	}
	#thisbox>>>.el-form-item__label,.el-radio{
		color: #FFFFFF;
	}
	.inputcolors>>>.el-form-item__label,.el-radio{
		color: #FFFFFF;
	}
        .el-form-item{
    margin-bottom: 8px;
    
  }
</style>