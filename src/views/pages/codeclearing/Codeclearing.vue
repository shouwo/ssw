<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>洗码结账</span>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="inputcolor">
      <div class="inputcolors">
        <div id="bigbox">
          <el-form id="box" style="margin-bottom:10px;" ref="form" :model="form">
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

            <el-form-item label="ID" label-width="80px">
              <el-input size="mini" v-model="form.ids" style="width:120px;" placeholder="请输入靴号"></el-input>
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

            <el-form-item label="结账截止日期" label-width="120px">
              <div class="block">
                <el-date-picker v-model="value1" type="date" size="mini" placeholder="选择日期"></el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label>
              <el-button
                type="primary"
                style="background:#05339C;border:#05339C;color:#fff;margin-left: 25px;"
                size="mini"
                @click="see"
              >结账查询</el-button>
              <el-button
                type="primary"
                style="background:#05339C;border:#05339C;color:#fff;margin-left: 25px;"
                size="mini"
                @click="seeAll"
              >查看结账记录</el-button>
              <el-button
                type="primary"
                style="background:#05339C;border:#05339C;color:#fff;margin-left: 25px;"
                size="mini"
                @click="exports"
              >导出</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <div id="list">
      <div class="tabellist" id="tabellists">
        <!-- 台桌类型 / 下注方式 / 帐号 / 姓名 / 总押 / 总赢 / 总洗码  / 洗码率 / 洗码费 /
        占股 / 币种 / 占股收益 / 总收益 / 未结收益 / 总公司 / 上次结账 / 操作-->
        <el-table v-tableDrag :data="tableData" border style="width: 100%">
            <!-- <el-table-column prop="id" label="ID" width="120"></el-table-column> -->
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="totalWashPay" label="总洗码" width="120"></el-table-column>
            <el-table-column prop="washRate" label="洗码率" width="120"></el-table-column>
            <el-table-column prop="moneyType" label="币种" width="120"></el-table-column>
            <el-table-column prop="totalWashMoney" label="总洗码费" width="120"></el-table-column>
            <el-table-column prop="haveSettle" label="已结洗码费" width="120"></el-table-column>
            <el-table-column prop="shouldSettle" label="应结洗码费" width="120"></el-table-column>
            <el-table-column prop="notSettle" label="未结洗码量"></el-table-column>
          <el-table-column :v-if="caozuo" fixed="right" label="操作" width="150">
            <el-button
              type="text"
              @click="dayin"
              size="mini"
              style="background:#05339C;border:#05339C;color:#fff;width: 80px;"
            >结账</el-button>
          </el-table-column>
        </el-table>
      </div>
      <!-- <button  style="margin-left:5px;" type="primary" v-print="'#tabellists'">打印</button> -->
      <!-- 分页 -->
      <!-- <div class="fen">
                <div class="block fenright">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-size="5"
                            :page-sizes="['10']"
                            layout="total, sizes, prev, pager, next, jumper"
                            background
                            :total="400"
                    ></el-pagination>
                </div>
      </div>-->
    </div>
  </div>
</template>
<script>
//类型,注码,a初始化数据,b查询
import {
//   types,
//   injectionCodes,
  clearlist,
  clearquery,
  getRecord,
  exportExcel,
  settleExcel
} from "../../../apis/apis.js";

export default {
  data() {
    return {
      value1: "",
      caozuo:true,
    //   choice: 1, //类型的下拉框
    //   bets: 0, //下注的下拉框
    //     injections:1 ,//注码

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
        types: "",
        ids: "HCT002",
        // closingdate: "", //结束时间
        choice: 1, //类型的下拉框
        injections: 1, //注码
        selTime: "" //结束时间
      },
      tableData: [
        // {
        //   id: "",
        //   name: "",
        //   totalWashPay: '',
        //   washRate: '',
        //   moneyType: '',
        //   totalWashMoney: '',
        //   haveSettle: '',
        //   shouldSettle: '',
        //   notSettle: ''
        // }
      ],
      currentPage4: 1
    };
  },
  methods: {
    //详情
    details() {
      //直接跳转
      this.$router.push("/index/codeclearingdetails");
    },
    //打印
    dayin() {
this.$confirm('结账操作，是否继续?', '提示', {
          confirmButtonText: '结账',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '正在结账!'
          });


         settleExcel(
        this.form.selTime,
        this.form.choice,
        this.form.ids,
        this.form.injections,
        this.currentPage4
      ).then(res => {
        console.log(res);
        alert("结账成功");
      });


      
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消！'
          });          
        });


   
    },
    //查看结账记录
    seeAll() {
      this.caozuo=false;
      getRecord(
        this.form.selTime,
        this.form.choice,
        this.form.ids,
        this.form.injections,
        this.currentPage4
      ).then(res => {
        this.tableData = res.data.data.records;
        this.tableData[0].id = res.data.data.records[0].account;
        this.tableData[0].name = res.data.data.records[0].name;
        this.tableData[0].totalWashPay =
          res.data.data.records[0].totalWashCodeFee;
        this.tableData[0].washRate = (res.data.data.records[0].washCodeRadio*100.0).toFixed(2)+"%";
 
        this.tableData[0].totalWashMoney =
          res.data.data.records[0].totalWashCode;
        this.tableData[0].haveSettle =
          res.data.data.records[0].payedWashCodeFee;
        this.tableData[0].shouldSettle =
          res.data.data.records[0].shouldPayWashCodeFee;
        this.tableData[0].notSettle =
          res.data.data.records[0].notPayWashCodeFee;
      });
    },
    //结账查询
    see() {
      this.caozuo=true
      //时间选择
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

      clearquery(
        this.form.selTime,
        this.form.choice,
        this.form.ids,
        this.form.injections,
        this.currentPage4
      ).then(res => {
        // this.tableData[0]=res;
        console.log(res);
        let arrdata = [];
        arrdata.push(res.data.data);
        this.tableData = arrdata;

          this.tableData.map(obj=>{
            console.log(55555555555555555)
            console.log(obj)
            // obj.name=obj.name
            obj.washRate=(obj.washRate*100.0).toFixed(2)+"%"
          })

      });
    },
    //导出
    exports() {

this.$confirm('此操作将导出该页面, 是否继续?', '提示', {
          confirmButtonText: '导出',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '正在导出!'
          });


   exportExcel(
        this.form.selTime,
        this.form.choice,
        this.form.ids,
        this.form.injections,
        this.currentPage4
      ).then(res => {
        const blob = new Blob([res.data], {
          type: "application/vnd.ms-excel;"
        });
        const aLink = document.createElement("a");
        aLink.href = URL.createObjectURL(blob);
        aLink.setAttribute("download", "导出列表" + ".xlsx"); // 设置下载文件名称
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
    }
  },
  created() {
    //类型
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
    // // 注码
    // injectionCodes().then(res => {
    //   console.log(res.data);
    //   var gameType = JSON.parse(JSON.stringify(res.data.data));
    //   for (var i = 0; i < gameType.length; i++) {
    //     this.injectionCodes.push({
    //       indexNameCn: gameType[i].indexNameCn,
    //       codeIndex: gameType[i].codeIndex
    //     });
    //   }
    // });
    //a初始化数据
    clearlist().then(res => {
      console.log(res);
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