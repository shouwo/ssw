<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>
          <router-link to="/index/Runninglist" style="text-decoration:none;color:#fff;">铺流水账目列表</router-link>
        </span>/
        <span>详情</span>
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
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { detailsrunlist } from "../../../apis/apis";
export default {
  data() {
    return {
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

      currentPage4: 4
    };
  },
  methods: {},
  mounted() {},
  created() {
    var playNum = this.$route.params.data;
    // alert(playNum);
    detailsrunlist(playNum).then(res => {
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