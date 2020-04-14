<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
        	<router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>子会员账目列表</span>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="inputcolor">
			<div class="inputcolors" style='padding:8px 0 0 20px;text-align: left;'>
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
                style="width:210px;"
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
          <el-button
            type="primary"
            size="mini"
            style="background:#05339C;border:#05339C;"
            @click="see"
          >查询</el-button>
          <el-button
            size="mini"
            style="background:#05339C;border:#05339C;color:#fff;"
            @click="exportss"
          >导出</el-button>
        </el-form>
      </div>
      <div id="bigmain">
        <el-form id="main" ref="form" :model="form" label-width="80px">
          <el-form-item label="桌号">
            <el-input
            	id="tablenumber"
              v-model="form.tablenumber"
              size="mini"
              style="width:120px;"
              placeholder="请输入桌号"
            ></el-input>
          </el-form-item>
          <el-form-item label="靴号">
            <el-input
              v-model="form.bootnumber"
              size="mini"
              style="width:120px;"
              placeholder="请输入靴号"
            ></el-input>
          </el-form-item>
           <el-form-item label="类型"   size="mini" style="width:200px;" label-width="80px">
              <!-- 下拉框 -->
                  <el-select  v-model="form.choice" placeholder="全部">
                  	<el-option v-for='item in choices' :key="item" :label="item.indexNameCn" :value="item.codeIndex"></el-option>
                  </el-select>
           	
           </el-form-item>
           <el-form-item label="注码"   size="mini" style="width:200px;" label-width="80px">
             <!-- 注码方式下拉框 -->
                 <el-select  v-model="form.injections" placeholder="全部">
                 	<el-option v-for='item in injectionCodes' :key="item" :label="item.indexNameCn" :value="item.codeIndex"></el-option>
                 </el-select>
          	
          </el-form-item>
          <el-form-item label="下注方式"   size="mini" style="width:200px;" label-width="80px">
             <!-- 下注方式下拉框 -->
                 <el-select  v-model="form.betss" placeholder="全部">
                 	<el-option v-for='item in betMethods' :key="item" :label="item.indexNameCn" :value="item.codeIndex"></el-option>
                 </el-select>
          	
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
        <el-table-column prop="types" label="台桌类型" width="150"></el-table-column>
       <el-table-column prop="codenumber" label="洗码号" width="120"></el-table-column>
       <el-table-column prop="name" label="名称" width="120"></el-table-column>
       <el-table-column prop="frequency" label="下注次数" width="120"></el-table-column>
       <el-table-column prop="total" label="下注总额" width="120"></el-table-column>
       <el-table-column prop="insurance" label="总保险" width="120"></el-table-column>
       <el-table-column prop="generalcode" label="总洗码" width="120"></el-table-column>
       <el-table-column prop="lotterywins" label="派彩所赢" width="120"></el-table-column>
       <el-table-column prop="rates" label="洗码率" width="120"></el-table-column>
       
       <el-table-column prop="fees" label="洗码费" width="150"></el-table-column>
       <el-table-column prop="neutralization" label="中和" width="120"></el-table-column>
       <el-table-column prop="squadron" label="中队"></el-table-column>
			 
        <el-table-column fixed="right" label="操作" width="120">
          <el-form ref="form" :model="form" label-width="80">
            <el-button @click="details" style="background:#05339C;border:#05339C;color:#fff;" size='mini'>查看详情</el-button>
            
          </el-form>
        </el-table-column>
      </el-table>
			</div>
      <!-- 分页 -->
      <div class="fen">
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
</template>

<script>
import { types,betMethods,injectionCodes} from "../../../apis/apis.js";
export default {
  data() {
    return {
      value1:'',
				//类型
			choices:[],
			//下注方式
			betMethods:[],
			//注码
			injectionCodes:[],
      form: {
        timebegin: "",
        timeend: "",

        tablenumber: "",
        bootnumber: "",
        types: "",
        injectioncode: "",
        bets: "",
        agentcard: "",
        agentaccount: "",
        agentname: "",

        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "全部",
        desc: "",
				choice: "" ,//类型的下拉框
				betss:"",//下注的下拉框
				injections:"",//注码
      },
      tableData: [
        {
       	types:"10",
       	codenumber:"150096",
       	name:"王小虎",
       	frequency:"5",
       	total:"80000",
       	insurance:"5000",
       	generalcode:"583",
       	lotterywins:"895656",
       	rates:"80%",
       	fees:"8000",
       	neutralization:"普陀区",
       	squadron:"15323"
       },
    
      ],
      currentPage4: 4,
    };
  },
  methods: {
    //详情
    details() {
			 //直接跳转
      this.$router.push('/index/Cvipaccountslistdetails');
    },
    //查看
    // see() {
    //     var table_numbers=this.form.tablenumber;
    //  var boots_numbers=this.form.bootnumber;
    //  var molds=this.form.types;
    //  var  betsizes=this.form. injectioncode;
    //  var  bet_ways=this.form. bets;
    //  if(table_numbers==null||table_numbers==""||boots_numbers==null||
    //  boots_numbers==""||molds==""||molds==null||betsizes==""||betsizes==null
    //  ||bet_ways==null||bet_ways==""){
    //  	alert("输入框不能为空");
    //  	document.getElementById('tablenumber').focus()
    //  }else{
    //  	alert("输入成功"+table_numbers+", "+boots_numbers+", "+molds+", "
    //  	+betsizes+", "+bet_ways);
    //  }
    // },
    //导出
    exportss() {
      alert("导出！！");
    },
    //查看结账记录
    ettleAccounts() {
      alert("查看结账记录!!");
    },
    //导出代理洗码量
    exportAgent() {
      alert("导出代理洗码量!!");
    },
    

    // 分页
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
created(){
	// 类型
		 types().then(res => {
						 console.log(res.data);
					var gameType = JSON.parse(JSON.stringify(res.data.data));
					for (var i = 0; i < gameType.length; i++) {
						this.choices.push({indexNameCn:gameType[i].indexNameCn,codeIndex:gameType[i].codeIndex});
		}
	});
	
	// 下注方式
		 betMethods().then(res => {
						 console.log(res.data);
					var gameType = JSON.parse(JSON.stringify(res.data.data));
					for (var i = 0; i < gameType.length; i++) {
						this.betMethods.push({indexNameCn:gameType[i].indexNameCn,codeIndex:gameType[i].codeIndex});
		}
	});
	
		// 注码
		 injectionCodes().then(res => {
						 console.log(res.data);
					var gameType = JSON.parse(JSON.stringify(res.data.data));
					for (var i = 0; i < gameType.length; i++) {
						this.injectionCodes.push({indexNameCn:gameType[i].indexNameCn,codeIndex:gameType[i].codeIndex});
		}
	});
	}
};
</script>

<style  scoped>
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