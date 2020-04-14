<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>代理账目列表</span>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="inputcolor">
      <div class="inputcolors" style="padding:8px 0 0 20px;text-align: left;font-size: 14px;">
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
                onclick="timeChange"
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
            <el-form-item label="类型" size="mini" style="width:200px;" label-width="80px">
              <!-- 类型下拉框 -->
              <el-select v-model="form.choice" placeholder="全部">
                <el-option
                  v-for="item in choices"
                  :key="item"
                  :label="item.indexNameCn"
                  :value="item.codeIndex"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="注码" size="mini" style="width:200px;" label-width="80px">
              <!-- 注码方式下拉框 -->
              <el-select v-model="form.injections" placeholder="全部">
                <el-option
                  v-for="item in injectionCodes"
                  :key="item"
                  :label="item.indexNameCn"
                  :value="item.codeIndex"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="下注方式" size="mini" style="width:200px;" label-width="80px">
              <!-- 下注方式下拉框 -->
              <el-select v-model="form.bets" placeholder="全部">
                <el-option
                  v-for="item in betMethods"
                  :key="item"
                  :label="item.indexNameCn"
                  :value="item.codeIndex"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-form id="main1" ref="form" :model="form" label-width="80px">
            <el-form-item label="代理卡号">
              <el-input
                size="mini"
                id="agent_card"
                v-model="form.agent_card"
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
        <el-table v-tableDrag :data="tableData" border style="width: 100%">
          <el-table-column prop="gameType" label="台桌类型" width="150"></el-table-column>
          <el-table-column prop="betType" label="下注方式" width="120"></el-table-column>
          <el-table-column prop="account" label="帐号" width="120"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="uid" label="用户ID" width="120"></el-table-column>
          <el-table-column prop="totalBet" label="总押" width="120"></el-table-column>
          <el-table-column prop="totalWinOrLose" label="总赢" width="120"></el-table-column>
          <el-table-column prop="totalWashCode" label="总洗码" width="120"></el-table-column>
          <el-table-column prop="cardShufflerRatio" label="洗码率" width="120"></el-table-column>
          <el-table-column prop="washCodeFee" label="洗码费" width="120"></el-table-column>

          <el-table-column prop="proportion" label="占股" width="150"></el-table-column>
          <el-table-column prop="moneyType" label="币种" width="120"></el-table-column>
          <el-table-column prop="proportionMoney" label="占股收益" width="120"></el-table-column>
          <el-table-column prop="shouldGetMoney" label="总收益" width="120"></el-table-column>
          <el-table-column prop="notGetMoney" label="未结收益" width="120"></el-table-column>
          <el-table-column prop="totalGain" label="总公司"></el-table-column>
          <!--       <el-table-column prop="settleaccounts" label="上次结账"></el-table-column> -->

          <el-table-column fixed="right" label="操作" width="110">
            <template slot-scope="scope">
              <el-button
                style="background:#05339C;border:#05339C;"
                size="mini"
                type="primary"
                @click="onSubmit3(scope.row.uid,scope.row.moneyType)"
              >结账</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 分页 -->
      <div class="fen">
        <div class="fenleft"></div>
        <div class="block fenright">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="5"
            :page-sizes="['10']"
            layout="total, sizes, prev, pager, next, jumper"
            background
            :total="total"
            :pager-count="5"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//下拉列表--类型,下注方式,注码,初始化数据,查询记录
import {
  accountlist,
  queryaccountlist,
  accountlistExport
} from "../../../apis/apis.js";
export default {
  data() {
    return {
      stars: "",
      end: "",
      //下拉 类型
      choices: [
        {
          indexNameCn: "百家乐",
          codeIndex: 1
        },
        {
          indexNameCn: "龙虎",
          codeIndex: 3
        }
      ],
      //下注方式
      betMethods: [
        {
          indexNameCn: "现金",
          codeIndex: 0
        },
        {
          indexNameCn: "筹码",
          codeIndex: 1
        }
      ],
      //注码
      injectionCodes: [
        {
          indexNameCn: "RMB",
          codeIndex: 1
        },
        {
          indexNameCn: "USD",
          codeIndex: 0
        }
      ],

      // 日期选择器
      value1: "",
      // 单选
      single: {
        resource: "全部"
      },

      // 输入框
      form: {
        table_number: "",
        boots_number: "",
        agent_card: "",
        agent_id: "",
        agent_name: "",

        startTime: "", //开始时间
        endTime: "", //结束时间

        choice: 1, //类型的下拉框
        bets: 0, //下注的下拉框
        injections: 1 //注码
      },

      value: "",

      tableData: [
        // {
        //   gameType: "",
        //   betType: "",
        //   account: "",
        //   name: "",
        //   totalBet: "",
        //   totalWinOrLose: "",
        //   totalWashCode: "",
        //   cardShufflerRatio: "",
        //   washCodeFee: "",
        //   moneyType: 1,
        //   proportion: "",
        //   notGetMoney: "",
        //   proportionMoney: "",
        //   shouldGetMoney: "",
        //   totalGain: "",
        //   uid: ""
        // }
      ],
      // 分页
      currentPage4: 1,
      // 总条数
      total: "",
      size: "10",
      // 替代list的空数组
      listdata: []
    };
  },
  methods: {
    // 查询
    onSubmit1() {
      console.log(this.value1);
      //获取当前时间
      this.stars = new Date();
      if (this.value1 == null || this.value1 == "") {
        // alert("kong");
        var timeType = this.single.resource;
        switch (timeType) {
          case "今天":
            //开始时间
            var resDate =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth() + 1) +
              "-" +
              this.p(this.stars.getDate());
            var resTime = this.p("00:00:00");
            this.form.startTime = resDate + " " + resTime;
            //结束时间
            this.end = new Date();
            var resDates =
              this.end.getFullYear() +
              "-" +
              this.p(this.end.getMonth() + 1) +
              "-" +
              this.p(this.end.getDate());
            var resTimes =
              this.p(this.end.getHours()) +
              ":" +
              this.p(this.end.getMinutes()) +
              ":" +
              this.p(this.end.getSeconds());
            this.form.endTime = resDates + " " + resTimes;
            // alert(this.form.startTime+","+this.form.endTime+"今天");
            break;
          case "昨天":
            //开始时间
            var resDate_yesterday =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth() + 1) +
              "-" +
              this.p(this.stars.getDate() - 1);
            var resTime_yesterday = this.p("00:00:00");
            this.form.startTime = resDate_yesterday + " " + resTime_yesterday;
            //结束时间
            var resDates_yesterday =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth() + 1) +
              "-" +
              this.p(this.stars.getDate());
            var resTimes_yesterday = this.p("00:00:00");
            this.form.endTime = resDates_yesterday + " " + resTimes_yesterday;
            // alert(this.form.startTime+","+this.form.endTime);
            break;
          case "本月":
            //开始时间
            var resDate_dayMoth =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth() + 1) +
              "-" +
              this.p(1);
            var resTime_dayMoth = this.p("00:00:00");
            this.form.startTime = resDate_dayMoth + " " + resTime_dayMoth;
            //结束时间
            var resDates_dayMoth =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth() + 1) +
              "-" +
              this.p(this.stars.getDate());
            var resTimes_dayMoth = this.p("00:00:00");
            this.form.endTime = resDates_dayMoth + " " + resTimes_dayMoth;
            // alert(this.form.startTime+","+this.form.endTime);
            break;
          case "上月":
            //开始时间
            var resDate_lastMoth =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth()) +
              "-" +
              this.p(1);
            var resTime_lastMoth = this.p("00:00:00");
            this.form.startTime = resDate_lastMoth + " " + resTime_lastMoth;
            //结束时间
            var resDates_lastMoth =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth()) +
              "-" +
              this.p(30);
            var resTimes_lastMoth = this.p("00:00:00");
            this.form.endTime = resDates_lastMoth + " " + resTimes_lastMoth;
            break;
          case "全部":
            this.form.startTime = "";
            this.form.endTime = "";
            // alert(this.form.startTime+","+this.form.endTime);
            break;
          default:
            this.form.startTime = "";
            this.form.endTime = "";
            // alert(this.form.startTime+","+this.form.endTime);
            break;
        }
      } else {
        //开始结束时间
        var d = new Date(this.value1[0]);
        //const d = new Date(Thu Mar 07 2019 12:00:00 GMT+0800 (中国标准时间))
        const resDate =
          d.getFullYear() +
          "-" +
          this.p(d.getMonth() + 1) +
          "-" +
          this.p(d.getDate());
        const resTime =
          this.p(d.getHours()) +
          ":" +
          this.p(d.getMinutes()) +
          ":" +
          this.p(d.getSeconds());
        this.startTime = resDate + " " + resTime;

        //结束时间
        var e = new Date(this.value1[1]);
        //const d = new Date(Thu Mar 07 2019 12:00:00 GMT+0800 (中国标准时间))
        const resDates =
          e.getFullYear() +
          "-" +
          this.p(e.getMonth() + 1) +
          "-" +
          this.p(e.getDate());
        const resTimes =
          this.p(e.getHours()) +
          ":" +
          this.p(e.getMinutes()) +
          ":" +
          this.p(e.getSeconds());
        this.endTime = resDates + " " + resTimes;

        // alert(this.startTime+","+this.endTime);
      }
      //下注类型

      // alert(this.form.injections);
      queryaccountlist(
        // this.value1,
        // this.single.resource,
        this.startTime,
        this.endTime,
        this.form.table_number,
        this.form.boots_number,
        this.form.choice,
        this.form.injections,
        this.form.bets,
        this.form.agent_card,
        this.form.agent_id,
        this.form.agent_name
      ).then(res => {
        // alert("xx");
        console.log(res);
        // this.listdata.push(res.data)
        console.log(111111111111111111111111111111);
        console.log(res);
        this.tableData = res.data.data.list;
        var list = res.data.data.list;

        //台桌类型
        for (var i = 0; i < list.length; i++) {
          var gameType = list[i].gameType;
          switch (gameType) {
            case null:
              this.tableData[i].gameType = "全部";
              break;
            case 1:
              this.tableData[i].gameType = "百家乐";
              break;
            case 3:
              this.tableData[i].gameType = "龙虎";
              break;
            case 7:
              this.tableData[i].gameType = "牛牛";
              break;
            default:
              this.tableData[i].gameType = "全部";
              break;
          }
          //下注方式
          var betTypes = list[i].betType;
          switch (betTypes) {
            case null:
              this.tableData[i].betType = "全部";
              break;
            case 0:
              this.tableData[i].betType = "现金";
              break;
            case 1:
              this.tableData[i].betType = "筹码";
              break;
            default:
              this.tableData[i].betType = "全部";
              break;
          }
          //洗码率
          var cardShufflerRatios = list[i].cardShufflerRatio * 100;
          cardShufflerRatios = cardShufflerRatios.toFixed(2);
          this.tableData[i].cardShufflerRatio = cardShufflerRatios + "%";
          //占股
          var proportions = list[i].proportion * 100;
          proportions = proportions.toFixed(2);
          this.tableData[i].proportion = proportions + "%";

          //币种
          var moneyTypes = list[i].moneyType;
          switch (moneyTypes) {
            case 0:
              this.tableData[i].moneyType = "USD";
              break;
            case 1:
              this.tableData[i].moneyType = "RMB";
              break;
            default:
              break;
          }
        }

        this.total = res.data.data.totalCount;
        this.currentPage4 = res.data.data.currPage;
      });
    },
    p(s) {
      return s < 10 ? "0" + s : s;
    },
    onSubmit2() {
      //获取当前时间
      this.stars = new Date();
      if (this.value1.length == 0) {
        var timeType = this.single.resource;
        switch (timeType) {
          case "今天":
            //开始时间
            var resDate =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth() + 1) +
              "-" +
              this.p(this.stars.getDate());
            var resTime = this.p("00:00:00");
            this.form.startTime = resDate + " " + resTime;
            //结束时间
            this.end = new Date();
            var resDates =
              this.end.getFullYear() +
              "-" +
              this.p(this.end.getMonth() + 1) +
              "-" +
              this.p(this.end.getDate());
            var resTimes =
              this.p(this.end.getHours()) +
              ":" +
              this.p(this.end.getMinutes()) +
              ":" +
              this.p(this.end.getSeconds());
            this.form.endTime = resDates + " " + resTimes;
            // alert(this.form.startTime+","+this.form.endTime+"今天");
            break;
          case "昨天":
            //开始时间
            var resDate_yesterday =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth() + 1) +
              "-" +
              this.p(this.stars.getDate() - 1);
            var resTime_yesterday = this.p("00:00:00");
            this.form.startTime = resDate_yesterday + " " + resTime_yesterday;
            //结束时间
            var resDates_yesterday =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth() + 1) +
              "-" +
              this.p(this.stars.getDate());
            var resTimes_yesterday = this.p("00:00:00");
            this.form.endTime = resDates_yesterday + " " + resTimes_yesterday;
            // alert(this.form.startTime+","+this.form.endTime);
            break;
          case "本月":
            //开始时间
            var resDate_dayMoth =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth() + 1) +
              "-" +
              this.p(1);
            var resTime_dayMoth = this.p("00:00:00");
            this.form.startTime = resDate_dayMoth + " " + resTime_dayMoth;
            //结束时间
            var resDates_dayMoth =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth() + 1) +
              "-" +
              this.p(this.stars.getDate());
            var resTimes_dayMoth = this.p("00:00:00");
            this.form.endTime = resDates_dayMoth + " " + resTimes_dayMoth;
            // alert(this.form.startTime+","+this.form.endTime);
            break;
          case "上月":
            //开始时间
            var resDate_lastMoth =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth()) +
              "-" +
              this.p(1);
            var resTime_lastMoth = this.p("00:00:00");
            this.form.startTime = resDate_lastMoth + " " + resTime_lastMoth;
            //结束时间
            var resDates_lastMoth =
              this.stars.getFullYear() +
              "-" +
              this.p(this.stars.getMonth()) +
              "-" +
              this.p(30);
            var resTimes_lastMoth = this.p("00:00:00");
            this.form.endTime = resDates_lastMoth + " " + resTimes_lastMoth;
            break;
          case "全部":
            this.form.startTime = "";
            this.form.endTime = "";
            // alert(this.form.startTime+","+this.form.endTime);
            break;
          default:
            this.form.startTime = "";
            this.form.endTime = "";
            alert(this.form.startTime + "," + this.form.endTime);
            break;
        }
      } else {
        //开始结束时间
        var d = new Date(this.value1[0]);
        //const d = new Date(Thu Mar 07 2019 12:00:00 GMT+0800 (中国标准时间))
        const resDate =
          d.getFullYear() +
          "-" +
          this.p(d.getMonth() + 1) +
          "-" +
          this.p(d.getDate());
        const resTime =
          this.p(d.getHours()) +
          ":" +
          this.p(d.getMinutes()) +
          ":" +
          this.p(d.getSeconds());
        this.startTime = resDate + " " + resTime;

        //结束时间
        var e = new Date(this.value1[1]);
        //const d = new Date(Thu Mar 07 2019 12:00:00 GMT+0800 (中国标准时间))
        const resDates =
          e.getFullYear() +
          "-" +
          this.p(e.getMonth() + 1) +
          "-" +
          this.p(e.getDate());
        const resTimes =
          this.p(e.getHours()) +
          ":" +
          this.p(e.getMinutes()) +
          ":" +
          this.p(e.getSeconds());
        this.endTime = resDates + " " + resTimes;

        // alert(this.startTime+","+this.endTime);
      }
     

     this.$confirm('此操作将导出该页面, 是否继续?', '提示', {
          confirmButtonText: '导出',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '正在导出!'
          });
         

   accountlistExport(
        // this.value1,
        // this.single.resource,
        this.startTime,
        this.endTime,
        this.form.table_number,
        this.form.boots_number,
        this.form.choice,
        this.form.injections,
        this.form.bets,
        this.form.agent_card,
        this.form.agent_id,
        this.form.agent_name
      ).then(res => {
        console.log(res);
        const blob = new Blob([res.data], {
          type: "application/vnd.ms-excel;"
        });
        const aLink = document.createElement("a");
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute("download", "代理账目列表" + ".xlsx"); // 设置下载文件名称
        aLink.click();
        this.$refs.loadElement.appendChild(aLink);
      });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消！'
          });          
        });

   
    },
    // 查看结账
    onSubmit3(val, moneys) {
 this.$confirm('结账操作，是否继续?', '提示', {
          confirmButtonText: '结账',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '结账成功!'
          });


       this.$router.push({
        name: "Settledetails",
        params: { data: val, money: moneys }
      });

      
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消！'
          });          
        });

   
    },
    tablechuq() {
      accountlist(1, this.currentPage4, this.size).then(res => {
        console.log(111111111111111111111111111111);
        console.log(res);
        this.tableData = res.data.data.list;
        var list = res.data.data.list;

        //台桌类型
        for (var i = 0; i < list.length; i++) {
          var gameType = list[i].gameType;
          switch (gameType) {
            case null:
              this.tableData[i].gameType = "全部";
              break;
            case 1:
              this.tableData[i].gameType = "百家乐";
              break;
            case 3:
              this.tableData[i].gameType = "龙虎";
              break;
            case 7:
              this.tableData[i].gameType = "牛牛";
              break;
            default:
              this.tableData[i].gameType = "全部";
              break;
          }
          //下注方式
          var betTypes = list[i].betType;
          switch (betTypes) {
            case null:
              this.tableData[i].betType = "全部";
              break;
            case 0:
              this.tableData[i].betType = "现金";
              break;
            case 1:
              this.tableData[i].betType = "筹码";
              break;
            default:
              this.tableData[i].betType = "全部";
              break;
          }
          //洗码率
          var cardShufflerRatios = list[i].cardShufflerRatio * 100;
          cardShufflerRatios = cardShufflerRatios.toFixed(2);
          this.tableData[i].cardShufflerRatio = cardShufflerRatios + "%";
          //占股
          var proportions = list[i].proportion * 100;
          proportions = proportions.toFixed(2);
          this.tableData[i].proportion = proportions + "%";

          //币种
          var moneyTypes = list[i].moneyType;
          switch (moneyTypes) {
            case 0:
              this.tableData[i].moneyType = "USD";
              break;
            case 1:
              this.tableData[i].moneyType = "RMB";
              break;
            default:
              break;
          }
        }

        this.total = res.data.data.totalCount;
        this.currentPage4 = res.data.data.currPage;
      });
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage4 = val;
      this.tablechuq(val);
    }
  },
  created() {
    // // 类型
    // types().then(res => {
    //   console.log(res.data);
    //   var gameType = JSON.parse(JSON.stringify(res.data.data));
    //   for (var i = 0; i < gameType.length; i++) {
    //     this.choices.push({
    //       indexNameCn: gameType[i].indexNameCn,
    //       codeIndex: gameType[i].codeIndex
    //     });
    //   }
    // });

    //     // 下注方式
    //     betMethods().then(res => {
    //       console.log(res.data);
    //       var gameType = JSON.parse(JSON.stringify(res.data.data));
    //       for (var i = 0; i < gameType.length; i++) {
    //         this.betMethods.push({
    //           indexNameCn: gameType[i].indexNameCn,
    //           codeIndex: gameType[i].codeIndex
    //         });
    //       }
    //     });
    //
    //     // 注码
    //     injectionCodes().then(res => {
    //       console.log(res.data);
    //       var gameType = JSON.parse(JSON.stringify(res.data.data));
    //       for (var i = 0; i < gameType.length; i++) {
    //         this.injectionCodes.push({
    //           indexNameCn: gameType[i].indexNameCn,
    //           codeIndex: gameType[i].codeIndex
    //         });
    //       }
    //     });
    // 初始化数据
    this.tablechuq();
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