<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>台桌列表</span>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="inputcolor">
      <div class="inputcolors" style="padding:8px 0 0 20px;text-align: left;">
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
                style="width:230px;"
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
              @click="onSubmit"
            >查看</el-button>
            <el-button
              size="mini"
              style="background:#05339C;border:#05339C;color:#fff;"
              @click="onExport"
            >导出</el-button>
          </el-form>
        </div>
        <div id="bigmain">
          <el-form id="main" ref="form" :model="form" label-width="80px">
            <el-form-item label="桌号">
              <el-input
                size="mini"
                id="deskid"
                v-model="form.deskid"
                style="width:120px;"
                placeholder="请输入桌号"
              ></el-input>
            </el-form-item>
            <el-form-item label="靴号">
              <el-input size="mini" v-model="form.bootid" style="width:120px;" placeholder="请输入靴号"></el-input>
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
        </div>
      </div>
    </div>
    <div id="list">
      <div class="tabellist">
        <!-- 台桌类型 / 下注方式 / 帐号 / 姓名 / 总押 / 总赢 / 总洗码  / 洗码率 / 洗码费 / 
        占股 / 币种 / 占股收益 / 总收益 / 未结收益 / 总公司 / 上次结账 / 操作-->
        <el-table v-tableDrag :data="tableData" border style="width: 100%">
          <el-table-column prop="gameType" label="台桌类型" width="150"></el-table-column>
          <el-table-column prop="tableId" label="台桌号" width="120"></el-table-column>
          <el-table-column prop="totalBet" label="总押" width="120"></el-table-column>
          <el-table-column prop="totalWinOrLose" label="玩家总输赢" width="120"></el-table-column>
          <el-table-column prop="totalEqual" label="中和" width="120"></el-table-column>
          <el-table-column prop="totalPair" label="中对" width="120"></el-table-column>
          <el-table-column prop="totalWash" label="洗码量" width="120"></el-table-column>
          <el-table-column prop="totalGain" label="公司盈亏" width="120"></el-table-column>
          <el-table-column prop="totalProfit" label="纯利润"></el-table-column>
          <el-table-column width="110" label="操作" fixed="right">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="details(scope.row.orders)"
                size="mini"
                style="background:#05339C;border:#05339C;color:#fff;width: 60px;"
              >查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
      </div>
    </div>
  </div>
</template>

<script>
//类型,下注方式,注码,初始化,条件查询列表
import { desklist, deskinit, deskexport } from "../../../apis/apis.js";
export default {
  data() {
    return {
      // dialogTableVisible: false,
      value1: "",
      daysTypes: "",
      startTime: "", //开始时间
      endTime: "", //结束时间
      days: "", //时间类型
      //类型
      //下注方式
      //注码
      form: {
        deskid: "",
        bootid: "",
        type: "",
        betsize: "",
        betway: "",
        resource: "全部",

        choice: 1, //类型的下拉框
        bets: 0, //下注的下拉框
        injections: 1 //注码
      },
      tableData: [
        // {
        //   gameType: "百家乐",
        //   tableId: "BJL05",
        //   totalBet: 50530,
        //   totalWinOrLose: 4300,
        //   totalEqual: 2400,
        //   totalPair: 4800,
        //   totalWash: 0,
        //   totalGain: null,
        //   totalProfit: null
        // }
      ],
      currentPage4: "1",
      //  	dialogTableVisible: false,
      //  	dialogFormVisible: false,
      total: "",
      size: "10", //条数
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
      ]
    };
  },

  methods: {
    //详情
    details(val) {
      //直接跳转
      this.$router.push({
        name: "Desklistdetails",
        params: { data: val }
      });
    },
    onSubmit() {
      // console.log(this.value1[0]);
      //   // console.log(this.form.choice);
      //         var d = new Date(this.value1[0]);
      // //const d = new Date(Thu Mar 07 2019 12:00:00 GMT+0800 (中国标准时间))
      //         const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate())
      //         const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds())
      //         console.log("xq4.11111111111")
      //         console.log(resDate+':'+resTime)

      //         p(s){ return s < 10 ? '0' + s : s}
      // 查询列表
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
      // alert(this.startTime)
      desklist(
        this.startTime,
        this.endTime,
        this.form.deskid,
        this.form.bootid,
        this.form.choice,
        this.form.injections,
        this.form.bets,
        0,
        1
      ).then(res => {
        console.log(222222222222222222);
        console.log(res.data);
        if (res.data.msg == "没有数据") {
          this.tableData = res.data.data;
        } else {
          this.tableData = res.data.data.data;
          this.tableData.map(val => {
            if (val.gameType == "1") {
              val.gameType = "百家乐";
            } else if (val.gameType == "3") {
              val.gameType = "龙虎";
            } else {
              return;
            }
          });
        }
      });
    },
    p(s) {
      return s < 10 ? "0" + s : s;
    },
    // 导出
    onExport() {


 this.$confirm('此操作将导出该页面, 是否继续?', '提示', {
          confirmButtonText: '导出',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '正在导出!'
          });


       
      deskexport().then(res => {
      // this.betWay,
      // this.endTime,
      // this.gameType,
      // this.moneyType,
      // this.page,
      // this.shoeId,
      // this.size,
      // this.startTime,
      // this.tableId
        const blob = new Blob([res.data], {
          type: "application/vnd.ms-excel;"
        });
        const aLink = document.createElement("a");
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute("download", "台桌列表" + ".xlsx"); // 设置下载文件名称
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

    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage4 = val;
      this.tablechuq(val);
    },
    // 封装初始化数据
    tablechuq() {
      //初始化数据
      deskinit().then(res => {
        //数据渲染未完成
        this.tableData = res.data.data.data;
        this.tableData.map(val => {
          if (val.gameType == "1") {
            val.gameType = "百家乐";
          } else if (val.gameType == "3") {
            val.gameType = "龙虎";
          } else {
            return;
          }
        });
        this.total = res.data.data.total;
        this.currentPage4 = res.data.data.current;
        console.log(res.data.data);
        console.log(this.tableData);
        // var list=this.tableData
        // for(var i=0;i<list.length;i++){

        // }
      });
    }
  },
  created() {
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
/*#printTest td{
	border: 1px solid #000000;
	color: #FFFFFF;
	}*/

.tableInfo {
  border: 1px solid red;
  color: #ffffff;
  margin: auto;
}
td {
  /* border:1px solid rgb(6, 66, 89); */
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
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.tds {
  background-color: rgb(0, 36, 117);
}
#wrapper .el-dialog,
.el-pager li {
  background: #00205e;
  width: 40%;
}
</style>
<style>
</style>