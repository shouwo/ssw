<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>子代理账目结账</span>
      </div>
    </div>
    <!-- 输入框 -->
       <div class="inputcolor">
			<div class="inputcolors" style='padding:8px 0 0 20px;text-align: left;font-size: 14px;'>
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
            <el-radio-group class="time" v-model="form.resource">
              <el-radio label="今天"></el-radio>
              <el-radio label="昨天"></el-radio>
              <el-radio label="本月"></el-radio>
              <el-radio label="上月"></el-radio>
              <el-radio label="全部"></el-radio>
            </el-radio-group>
            <el-button
              type="primary"
              size="mini"
              style="background:#05339C;border:#05339C;color:#fff;"
              @click="onSubmit1"
            >查看</el-button>
            <el-button
              size="mini"
              style="background:#05339C;border:#05339C;color:#fff;"
              @click="onSubmit2"
            >导出</el-button>
               <el-button
              size="mini"
              style="background:#05339C;border:#05339C;color:#fff;"
              @click="onSubmit3"
            >查看详情</el-button>
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
			//类型
			choices:[],
			//下注方式
			betMethods:[],
			//注码
			injectionCodes:[],
      value1: "",
      form: {
        table_number: "",
        boots_number: "",
        mold: "",
        betsize: "",
        bet_way: "",
        agent_card: "",
        agent_id: "",
        agent_name: "",
        resource: "全部",
				
				choice: "" ,//类型的下拉框
				bets:"",//下注的下拉框
				injections:"",//注码
      },
      value: "",
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
      currentPage4: 4
    };
  },
  methods: {
		//输入框非空判断
    onSubmit1() {
    //  var table_numbers=this.form.table_number;
    //  var boots_numbers=this.form.boots_number;
    //  var molds=this.form.mold;
    //  var  betsizes=this.form. betsize;
    //  var  bet_ways=this.form. bet_way;
    //  var  agent_cards=this.form. agent_card;
    //  var agent_ids=this.form.agent_id;
    //  var agent_names=this.form.agent_name;
    //   var reps=/^[0-9]+$/;

    //  if(table_numbers==null||table_numbers==""||boots_numbers==null||
    //  boots_numbers==""||molds==""||molds==null||betsizes==""||betsizes==null
    //  ||bet_ways==null||bet_ways==""||agent_cards==null||agent_cards==""||
    //  agent_ids==null||agent_ids==""||agent_names==null||agent_names==""){
    //  	alert("输入框不能为空");
    //  	document.getElementById('table_number').focus()
    //  }else if(!reps.test(agent_cards)){
		// 		alert("代理卡号为数字！！")
		// 		document.getElementById('agent_card').focus()
		// 	}else{
    //  	alert("输入成功"+table_numbers+", "+boots_numbers+", "+molds+", "
    //  	+betsizes+", "+bet_ways+", "+agent_cards+", "+agent_ids+", "+agent_names);
    //  }
    alert('查看')
    },
    onSubmit2() {
      alert("导出会员账目!");
    },
         onSubmit3() {
      this.$router.push('/index/csettledetails')
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