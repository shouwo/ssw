<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>铺流水账目列表</span>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="inputcolor">
      <div class="inputcolors" style="text-align: left;font-size:14px;">
        <div id="bigbox">
          <el-form id="main" ref="form" :model="form" label-width="80px">
            <el-form-item label="日期：">
              <div class="block">
                <el-date-picker
                  v-model="value1"
                  size="mini"
                  type="date"
                  style="width:150px;"
                  placeholder="选择日期"
                ></el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="桌号：">
              <el-input
                v-model="form.table_number"
                size="mini"
                style="width:120px;"
                placeholder="请输入桌号"
              ></el-input>
            </el-form-item>
            <el-form-item label="靴号：">
              <el-input
                v-model="form.boots_number"
                size="mini"
                style="width:120px;"
                placeholder="请输入靴号"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                style="background:#05339C;border:#05339C;"
                type="primary"
                size="mini"
                @click="onSubmit1"
              >查询</el-button>
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
          <el-table-column prop="playNum" label="铺流水号" width="200"></el-table-column>
          <el-table-column prop="tableId" label="台桌号" width="120"></el-table-column>
          <el-table-column prop="shoeId" label="靴号" width="120"></el-table-column>
          <el-table-column prop="playId" label="铺号" width="120"></el-table-column>
          <el-table-column prop="createTime" label="时间" width="200"></el-table-column>
          <el-table-column prop="dealer" label="荷官" width="120"></el-table-column>
          <el-table-column prop="gameResult" label="结果"></el-table-column>
          <!--  <el-table-column prop="zip" label="修改结果"></el-table-column> -->
          <el-table-column fixed="right" label="操作" width="110">
            <template slot-scope="scope">
              <el-button
                @click="details(scope.row.playNum)"
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
            :page-size="5"
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
//初始化数据，查询
import { runlist, runlistquery } from "../../../apis/apis";

export default {
  data() {
    return {
      total: "", //总条数
      value1: "",
      form: {
        turnover_date: "",
        table_number: "",
        boots_number: "",
        selTime: ""
      },
      tableData: [
        // {
        //   tableId: "",
        //   playNum: "",
        //   gameResult: "",
        //   playId: "",
        //   shoeId: "",
        //   createTime: "",
        //   dealer: ""
        // }
      ],

      currentPage4: "1",
      size: "10"
    };
  },
  methods: {
    //详情
    details(val) {
      //直接跳转
      //  this.$router.push({path: '/index/runninglistdetails', query: {data: val}})
      this.$router.push({ name: "Runninglistdetails", params: { data: val } });
      // this.$router.push("/index/runninglistdetails");
    },
    //查询
    onSubmit1() {
      // 非空
      // var turnover_dates = this.form.turnover_date;
      // var table_numbers = this.form.table_number;
      // var boots_numbers = this.form.boots_number;
      // if (
      //   turnover_dates == null ||
      //   turnover_dates == "" ||
      //   table_numbers == null ||
      //   table_numbers == "" ||
      //   boots_numbers == null ||
      //   boots_numbers == ""
      // ) {
      //   alert("输入框内容不能为空！！");
      //   document.getElementById("turnover_date").focus();
      // } else {
      //   alert(
      //     "输入成功" +
      //       turnover_dates +
      //       ", " +
      //       table_numbers +
      //       ", " +
      //       boots_numbers
      //   );
      if (this.value1 == "" || this.value1 == null) {
        this.form.selTime = null;
      } else {
        var d = new Date(this.value1);
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

        this.form.selTime = resDate + " " + resTime;
      }
      runlistquery(
        this.form.selTime,
        // this.currentPage4,
        this.form.table_number,
        this.form.boots_number
      ).then(res => {
        console.log(res);
        this.tableData = res.data.data.records;
        var list = res.data.data.records;
        console.log(res);
        for (var i = 0; i < list.length; i++) {
          //荷官
          var hg = list[i].dealer;
          //结果result
          var gameresuls1 = JSON.parse(list[i].gameResult).result;
          var gameresuls2 = JSON.parse(list[i].gameResult).ext;

          if (hg == null) {
            this.tableData[i].dealer = "无";
          } else {
            this.tableData[i].dealer = hg;
          }

          switch (gameresuls1) {
            case 1:
              this.tableData[i].gameResult = "庄赢";
              break;
            case 2:
              this.tableData[i].gameResult = "闲赢";
              break;
            case 3:
              this.tableData[i].gameResult = "和";
              break;
            default:
              break;
          }

          var res2 = parseInt(gameresuls2);
          if (res2 != 0) {
            if (res2 == 1) {
              this.tableData[i].gameResult =
                this.tableData[i].gameResult + ",庄对";
            }
            if (res2 == 2) {
              this.tableData[i].gameResult =
                this.tableData[i].gameResult + ",闲对";
            }
            if (res2 == 3) {
              this.tableData[i].gameResult =
                this.tableData[i].gameResult + ",庄闲对";
            }
          }
          this.total = res.data.data.total;
          this.currentPage4 = res.data.data.current;
        }
      });
    },
    p(s) {
      return s < 10 ? "0" + s : s;
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage4 = val;
      this.chushihua();
    },
    chushihua() {
      runlist(this.currentPage4, this.size).then(res => {
        this.tableData = res.data.data.records;
        var list = res.data.data.records;
        console.log(111111111111);
        console.log(res);
        for (var i = 0; i < list.length; i++) {
          //荷官
          var hg = list[i].dealer;
          //结果result
          var gameresuls1 = JSON.parse(list[i].gameResult).result;
          var gameresuls2 = JSON.parse(list[i].gameResult).ext;

          if (hg == null) {
            this.tableData[i].dealer = "无";
          } else {
            this.tableData[i].dealer = hg;
          }

          switch (gameresuls1) {
            case 1:
              this.tableData[i].gameResult = "庄赢";
              break;
            case 2:
              this.tableData[i].gameResult = "闲赢";
              break;
            case 3:
              this.tableData[i].gameResult = "和";
              break;
            default:
              break;
          }

          var res2 = parseInt(gameresuls2);
          if (res2 != 0) {
            if (res2 == 1) {
              this.tableData[i].gameResult =
                this.tableData[i].gameResult + ",庄对";
            }
            if (res2 == 2) {
              this.tableData[i].gameResult =
                this.tableData[i].gameResult + ",闲对";
            }
            if (res2 == 3) {
              this.tableData[i].gameResult =
                this.tableData[i].gameResult + ",庄闲对";
            }
          }
          this.total = res.data.data.total;
          this.currentPage4 = res.data.data.current;
        }
      });
    }
  },
  created() {
    this.chushihua();
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
#bigbox >>> .el-form-item__label {
  color: #ffffff;
}
.el-form-item {
  margin-bottom: 8px;
}
</style>