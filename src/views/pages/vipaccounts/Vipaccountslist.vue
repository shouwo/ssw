<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>会员账目列表</span>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="inputcolor">
      <div class="inputcolors" style="padding:8px 0 0 20px;text-align: left;font-size: 14px;">
        <div id="bigbox">
          <el-form id="box" style="margin-bottom:10px;" ref="form" :model="form" label-width="80px">
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
            <!-- 下拉框 -->
            <el-form-item label="类型" size="mini" style="width:200px;" label-width="80px">
              <el-select v-model="form.choice" value placeholder="游戏类型">
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
              <el-select v-model="form.injections" placeholder="注码">
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
              <el-select v-model="form.betss" placeholder="下注方式">
                <el-option
                  v-for="item in betMethods"
                  :key="item"
                  :label="item.indexNameCn"
                  :value="item.codeIndex"
                ></el-option>
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
        <el-table v-tableDrag :data="tableData" border style="width: 100%">
          <el-table-column prop="tableType" label="台桌类型" width="150"></el-table-column>
          <el-table-column prop="account" label="洗码号" width="120"></el-table-column>
          <el-table-column prop="name" label="名称" width="120"></el-table-column>
          <el-table-column prop="betTimes" label="下注次数" width="120"></el-table-column>

          <el-table-column prop="toatalBet" label="下注总额" width="120"></el-table-column>
          <el-table-column prop="insurance" label="总保险" width="120"></el-table-column>
          <el-table-column prop="washCode" label="总洗码" width="120"></el-table-column>

          <el-table-column prop="lotteryWin" label="派彩所赢" width="120"></el-table-column>
          <el-table-column prop="washCodeRadio" label="洗码率" width="120"></el-table-column>
          <el-table-column prop="washCodeMoney" label="洗码费" width="150"></el-table-column>
          <el-table-column prop="equalWin" label="中和" width="120"></el-table-column>
          <el-table-column prop="pairWin" label="中对"></el-table-column>

          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click="details4(scope.row.account)"
                style="background:#05339C;border:#05339C;color:#fff;"
                size="mini"
              >查看详情</el-button>
            </template>
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
            :page-size="10"
            :page-sizes="['10']"
            layout="total, sizes, prev, pager, next, jumper"
            background
            :pager-count="5"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//下拉列表--类型,下注方式,注码,初始化数据,查询记录，详情detailsvipaccountlist
import {
  queryvipExportlist,
  vipaccountlist,
  //viplistquery,
  //print,
  checklist
} from "../../../apis/apis.js";
export default {
  data() {
    return {
      page_btn: 5,
      total: "", //总条数
      value1: "",
      //状态
      daysTypes: "",
      startTime: "", //开始时间
      endTime: "", //结束时间
      days: "", //时间类型
      //类型
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
          indexNameCn: "筹码",
          codeIndex: 1
        },
        {
          indexNameCn: "现金",
          codeIndex: 0
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

        choice: 1, //类型的下拉框
        injections: 1, //注码
        betss: 1 //下注方式
      },

      // list列表
      tableData: [],
      // 分页
      currentPage4: 1,
      // 总条数
      size: "10",
      pageSize: 10
    };
  },
  methods: {
    //详情
    details4(val) {
      //直接跳转
      this.$router.push({
        name: "Vipaccountslistdetails",
        query: { data: val }
      });
    },
    tablechuq() {
      vipaccountlist(this.currentPage4, this.size).then(res => {
        this.tableData = res.data.data.list;
        this.tableData.map(obj => {
     
          obj.washCodeRadio = (obj.washCodeRadio * 100.0).toFixed(2) + "%";
        });
        this.total = res.data.data.totalCount;
        this.currentPage4 = res.data.data.currPage;
      });
    },
    //查看
    see() {
      //betType,endTime,gameType,moneyType,shoeId,startTime,tableId

      //时间选择
      if (this.value1.length == 0) {
        (this.startTime = null), (this.endTime = null);
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
      }

      var days = this.form.resource;
      switch (days) {
        case "今天":
          this.daysTypes = 1;
          break;
        case "昨天":
          this.daysTypes = 2;
          break;
        case "本月":
          this.daysTypes = 3;
          break;
        case "上月":
          this.daysTypes = 4;
          break;
        case "全部":
          this.daysTypes = "";
          break;
        default:
          this.daysTypes = "";
          break;
      }

      // alert(this.startTime+", "+ this.endTime);
      //betType,endTime,gameType,moneyType,shoeId,startTime,tableId
      checklist(
        this.form.betss,
        this.endTime,
        this.form.choice,
        this.form.injections,
        this.form.bootnumber,
        this.startTime,
        this.form.tablenumber
      ).then(res => {
        this.tableData = res.data.data.list;
        this.tableData.map(obj => {
          obj.washCodeRadio = (obj.washCodeRadio * 100.0).toFixed(2) + "%";
          //washCodeRadio    tableType
          if (obj.tableType == "1") {
            obj.tableType = "百家乐";
          } else if (obj.tableType == "3") {
            obj.tableType = "龙虎";
          } else if (obj.tableType == "7") {
            obj.tableType = "牛牛";
          }
        });

        this.total = res.data.data.totalCount;
        var page = res.data.data.currPage;
        this.currentPage4 = parseInt(page) + 1;
      });
    },
    p(s) {
      return s < 10 ? "0" + s : s;
    },

    //导出
    exportss() {
      //时间选择
      if (this.value1.length == 0) {
        (this.startTime = null), (this.endTime = null);
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
      }

      var days = this.form.resource;
      switch (days) {
        case "今天":
          this.daysTypes = 1;
          break;
        case "昨天":
          this.daysTypes = 2;
          break;
        case "本月":
          this.daysTypes = 3;
          break;
        case "上月":
          this.daysTypes = 4;
          break;
        case "全部":
          this.daysTypes = "";
          break;
        default:
          this.daysTypes = "";
          break;
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


      queryvipExportlist().then(res => {
        // this.form.betType,
        // this.form.endTime,
        // this.form.gameType,
        // this.form.moneyType,
        // this.form.shoeId,
        // this.form.startTime,
        // this.form.tableId
        const blob = new Blob([res.data], {
          type: "application/vnd.ms-excel;"
        });
        const aLink = document.createElement("a");
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute("download", "会员账目列表" + ".xlsx"); // 设置下载文件名称
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
      this.currentPage4 = val;
      this.tablechuq(val);
    }
  },

  created() {
    // 初始化数据
    this.tablechuq();
  }
};
</script>

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