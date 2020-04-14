<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
        	<router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>龙虎和局详单</span>
      </div>
    </div>
  
		<div class="tabellist">
    <div id="list">
      <!-- 台桌类型 / 下注方式 / 帐号 / 姓名 / 总押 / 总赢 / 总洗码  / 洗码率 / 洗码费 / 
      占股 / 币种 / 占股收益 / 总收益 / 未结收益 / 总公司 / 上次结账 / 操作-->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="时间" width="150"></el-table-column>
        <el-table-column prop="xmh" label="洗码号" width="120"></el-table-column>
        <el-table-column prop="th" label="台号" width="120"></el-table-column>
        <el-table-column prop="xh" label="靴号" width="120"></el-table-column>
        <el-table-column prop="ph" label="铺号" width="120"></el-table-column>
        <el-table-column prop="long" label="龙" width="150"></el-table-column>
        <el-table-column prop="hu" label="虎" width="120"></el-table-column>
        <el-table-column prop="he" label="和" width="120"></el-table-column>
        <el-table-column prop="long_hu" label="龙虎返和" width="120"></el-table-column>
        <el-table-column prop="bets" label="注码" ></el-table-column>
      </el-table>
         <!-- 分页 -->
      <div class="fen">
        <div class="fenleft">
          <Custombtn></Custombtn>
     
        </div>
        <div class="block fenright">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="5"
            :page-sizes="['5','10']"
            layout="total, sizes, prev, pager, next, jumper"
            background
            :total="400"
          ></el-pagination>
        </div>
      </div>
    </div>
  	</div>
		</div>
</template>

<script>
import Custombtn from "../../../components/Custombtn";
export default {
  data() {
    return {
      value1:'',
      form: {
				timebegin:"",
				timeend:"",
				
				tablenumber:"",
				bootnumber:"",
				types:"",
				injectioncode:"",
				bets:"",
				agentcard:"",
				agentaccount:"",
				agentname:"",
				
				
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "全部",
        desc: ""
      },
      tableData: [
        {
          date:"1",
				xmh:"1",
				th:"1",
				xh:"1",
				ph:"1",
				long_:"1",
				hu:"1",
				he:"1",
				long_hu:"1",
				bets:"1"
        }
      ],
      currentPage4: 4,
    };
  },
  methods: {
   //查看
   see() {
    	alert("查看！！")
   },
     details(){
    	alert("详情！！")
    },
   //导出
   exportss() {
     alert("导出！！")
   },
   //查看结账记录
   ettleAccounts(){
   	alert("查看结账记录!!")
   },
   //导出代理洗码量
   exportAgent(){
   	alert("导出代理洗码量!!")
   },
    // 分页
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
   components: {
    "Custombtn": Custombtn
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