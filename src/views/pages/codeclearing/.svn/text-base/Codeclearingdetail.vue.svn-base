<template>
   <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
        	<router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>洗码账目详单</span>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="inputcolor">
	<div id="thisbox" style='padding:8px 0 0 26px;text-align: left;font-size:14px;'>
	    <div id="bigbox">
	      <el-form id="box" style='margin-bottom:10px;' ref="form" :model="form" label-width="80px">
	       <div class="block">
              <span
                class="demonstration"
                style="color: #FFFFFF;font-size: 14px;padding: 0 12px 0 0;margin-left: 12px;"
              >日期选择</span>
              <el-date-picker
                v-model="value1"
                type="daterange"
                style="width:230px;"
                size="mini"
                range-separator="——"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </div>
	        <el-radio-group class="time" size="mini" v-model="form.resource">
	          <el-radio label="今天"></el-radio>
	          <el-radio label="昨天"></el-radio>
	          <el-radio label="本月"></el-radio>
	          <el-radio label="上月"></el-radio>
	          <el-radio label="全部"></el-radio>
	        </el-radio-group>
	        <el-button type="primary" style="background:#05339C;border:#05339C;color:#fff;" size="mini" @click="see">查看</el-button>
	        <el-button size="mini" style="background:#05339C;border:#05339C;color:#fff;" @click="exportss">导出</el-button>
	      </el-form>
	    </div>
	    <div id="bigmain">
      <el-form id="main" ref="form" :model="form" label-width="80px">
        <el-form-item label="桌号">
          <el-input size="mini" v-model="form.tablenumber" style="width:120px;" placeholder="请输入桌号"></el-input>
        </el-form-item>
        <el-form-item label="靴号">
          <el-input size="mini" v-model="form.bootnumber" style="width:120px;" placeholder="请输入靴号"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input size="mini" v-model="form.types" style="width:120px;" placeholder="请输入类型"></el-input>
        </el-form-item>
        <el-form-item label="注码">
          <el-input size="mini" v-model="form.injectioncode" style="width:120px;" placeholder="请输入注码"></el-input>
        </el-form-item>
        <el-form-item label="下注方式">
          <el-input size="mini" v-model="form.bets" style="width:120px;" placeholder="请输入下注方式"></el-input>
        </el-form-item>
      </el-form>
      <el-form id="main1" ref="form" :model="form" label-width="80px">
        <el-form-item label="代理卡号">
          <el-input size="mini" v-model="form.agentcard" style="width:120px;" placeholder="请输入代理卡号"></el-input>
        </el-form-item>
        <el-form-item label="代理账号">
          <el-input size="mini" v-model="form.agentaccount" style="width:120px;" placeholder="请输入代理账号"></el-input>
        </el-form-item>
        <el-form-item label="代理姓名">
          <el-input size="mini" v-model="form.agentname" style="width:120px;" placeholder="请输入代理姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" style="background:#05339C;border:#05339C;color:#fff;" @click="ettleAccounts">查看结账记录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button  size="mini" style="background:#05339C;border:#05339C;color:#fff;" @click="exportAgent">导出代理洗码量</el-button>
        </el-form-item>
      </el-form>
    </div>
    </div>
    </div>

    <div id="list">
	<div class="tabellist">
      <!-- 台桌类型 / 下注方式 / 帐号 / 姓名 / 总押 / 总赢 / 总洗码  / 洗码率 / 洗码费 / 
      占股 / 币种 / 占股收益 / 总收益 / 未结收益 / 总公司 / 上次结账 / 操作-->
      <el-table :data="tableData" border style="width: 100%">
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
        <el-table-column prop="province" label="中队" width="120"></el-table-column>


        <el-table-column fixed="right" label="操作" width="110">
          <el-form ref="form" :model="form" label-width="80">
                <el-button
              @click="details"
              style="background:#05339C;border:#05339C;color:#fff;"
              size="mini"
            >详情</el-button>
          </el-form>
        </el-table-column>
      </el-table>
	</div>
       <!-- 分页 -->
      <div class="fen">
        <div class="fenleft">
          <Custombtn></Custombtn>
          
          <p class="bottomp" style="margin-left: 30px;">
            <span>本页显示：</span>
            <span>1-20</span>
            <span>总记录数：</span>
            <span>2000</span>
          </p>
        </div>
        <div class="block fenright">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="5"
            :page-sizes="[]"
            layout="total, sizes, prev, pager, next, jumper"
            background
            :total="400"
          ></el-pagination>
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
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      currentPage4: 4,
    };
  },
  methods: {
    //详情
    details(){
    	alert("详情！！")
    },
    //查看
    see() {
     	alert("查看！！")
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