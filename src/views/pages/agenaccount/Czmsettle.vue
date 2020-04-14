<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>子代理账目列表</span>
      </div>
    </div>
    <!-- 输入框 -->
      <div class="inputcolor">
			<div class="inputcolors" style='padding:8px 0 0 20px;text-align: left;font-size: 14px;'>
      <div id="bigbox">
          <el-form
            id="box"
            style="margin-bottom:10px;"
            size="mini"
            ref="form"
            :model="form"
            label-width="80px"
          >
            <div class="block">
              <span
                class="demonstration"
                style="color: #FFFFFF;font-size: 14px;padding: 0 12px 0 0;margin-left: 12px;"
              >日期选择</span>
              <el-date-picker
                v-model="value1"
                style="width:210px;"
                type="daterange"
                size="mini"
                range-separator="——"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </div>

            <el-radio-group class="time" v-model="single.resource">
              <el-radio label="今天"></el-radio>
              <el-radio label="昨天"></el-radio>
              <el-radio label="本月"></el-radio>
              <el-radio label="上月"></el-radio>
              <el-radio label="全部"></el-radio>
            </el-radio-group>
            <el-button
              style="background:#05339C;border:#05339C;"
              size="mini"
              type="primary"
              @click="onSubmit1"
            >查询</el-button>
            <el-button
              style="background:#05339C;border:#05339C;color:#fff;"
              size="mini"
              @click="onSubmit2"
            >导出</el-button>
          </el-form>
        </div>
        <div id="bigmain">
          <el-form id="main" ref="form" :model="form" label-width="80px">
            <el-form-item label="桌号">
              <el-input
              	id="table_number"
                size="mini"
                v-model="form.table_number"
                style="width:120px;"
                placeholder="请输入桌号"
              ></el-input>
            </el-form-item>
            <el-form-item label="靴号">
              <el-input
                size="mini"
                v-model="form.boots_number"
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
                  <el-select  v-model="form.bets" placeholder="全部">
                  	<el-option v-for='item in betMethods' :key="item" :label="item.indexNameCn" :value="item.codeIndex"></el-option>
                  </el-select>
           	
           </el-form-item>
          </el-form>
          <el-form id="main1" ref="form" :model="form" label-width="80px">
            <el-form-item label="代理卡号">
              <el-input
                size="mini"
                v-model="form.agent_card"
                id="agent_card"
                style="width:120px;"
                placeholder="请输入代理卡号"
              ></el-input>
            </el-form-item>
            <el-form-item label="代理账号">
              <el-input
                size="mini"
                v-model="form.agent_id"
                style="width:120px;"
                placeholder="请输入代理账号"
              ></el-input>
            </el-form-item>
            <el-form-item label="代理姓名">
              <el-input
                size="mini"
                v-model="form.agent_name"
                style="width:120px;"
                placeholder="请输入代理姓名"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div id="list">
      <div class="tabellist">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="type" label="台桌类型" width="150"></el-table-column>
          <el-table-column prop="mode" label="下注方式" width="120"></el-table-column>
          <el-table-column prop="accountnumber" label="帐号" width="120"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="pledge" label="总押" width="120"></el-table-column>
          <el-table-column prop="win" label="总赢" width="120"></el-table-column>
          <el-table-column prop="codecleaning" label="总洗码" width="120"></el-table-column>
          <el-table-column prop="rate" label="洗码率" width="120"></el-table-column>
          <el-table-column prop="cost" label="洗码费" width="120"></el-table-column>
          
          <el-table-column prop="shares" label="占股" width="150"></el-table-column>
          <el-table-column prop="currency" label="币种" width="120"></el-table-column>
          <el-table-column prop="profit" label="占股收益" width="120"></el-table-column>
          <el-table-column prop="totalrevenue" label="总收益" width="120"></el-table-column>
          <el-table-column prop="noincome" label="未结收益" width="120"></el-table-column>
          <el-table-column prop="company" label="总公司" width="120"></el-table-column>
          <el-table-column prop="settleaccounts" label="上次结账" ></el-table-column>

          <el-table-column fixed="right" label="操作" width="110">
            <el-button
              style="background:#05339C;border:#05339C;"
              size="mini"
              type="primary"
              @click="onSubmit3"
            >查看详情</el-button>
          </el-table-column>
        </el-table>
      </div>

      <!-- 分页 -->
      <div class="fen">
        <div class="fenleft">        
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
</template>

<script>
import { types,betMethods,injectionCodes} from "../../../apis/apis.js";
export default {
  data() {
    return {
      // 日期选择器
      value1: "",
				//类型
			choices:[],
			//下注方式
			betMethods:[],
			//注码
			injectionCodes:[],
      // 单选默认
      single: {
        resource: "全部"
      },
      form: {
        table_number: "",
        boots_number: "",
        mold: "",
        betsize: "",
        bet_way: "",
        agent_card: "",
        agent_id: "",
        agent_name: "",
				
				choice: "" ,//类型的下拉框
				bets:"",//下注的下拉框
				injections:"",//注码
      },
      value: "",
      tableData: [
         {
       	type:"双色球",
       	mode:"全压",
       	accountnumber:"201585687",
         name: "王小虎",
       	pledge:"500",
       	win:"1500",
       	codecleaning:"50",
       	rate:"20%",
       	cost:"150",
       	shares:"10%",
       	currency:"美元",
       	profit:"150%",
       	totalrevenue:"200%",
       	noincome:"500",
       	company:"普陀区",
       	settleaccounts:"2015-08-09"
       },
             
      ],
      currentPage4: 4
    };
  },
  methods: {
    onSubmit1() {
    //输入框非空判断
      // var table_numbers=this.form.table_number;
			// var boots_numbers=this.form.boots_number;
			// var molds=this.form.mold;
			// var  betsizes=this.form. betsize;
			// var  bet_ways=this.form. bet_way;
			// var  agent_cards=this.form. agent_card;
			// var agent_ids=this.form.agent_id;
      // var agent_names=this.form.agent_name;
      //  var reps=/^[0-9]+$/;
			// if(table_numbers==null||table_numbers==""||boots_numbers==null||
			// boots_numbers==""||molds==""||molds==null||betsizes==""||betsizes==null
			// ||bet_ways==null||bet_ways==""||agent_cards==null||agent_cards==""||
			// agent_ids==null||agent_ids==""||agent_names==null||agent_names==""){
			// 	alert("输入框不能为空");
			// 	document.getElementById('table_number').focus()
			// }else if(!reps.test(agent_cards)){
			// 	alert("代理卡号为数字！！")
			// 	document.getElementById('agent_card').focus()
			// }else{
			// 	alert("输入成功"+table_numbers+", "+boots_numbers+", "+molds+", "
			// 	+betsizes+", "+bet_ways+", "+agent_cards+", "+agent_ids+", "+agent_names);
      // }
      alert('查看')
    },
 		onSubmit2() {
      alert("导出代理账目!");
    },
    onSubmit3() {
      this.$router.push('/index/czmsettledetails')
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

<style scoped>
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
</style>