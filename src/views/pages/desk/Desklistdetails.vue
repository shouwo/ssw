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
          <router-link to="/index/desklist" style="text-decoration:none;color:#fff;">台桌列表</router-link>
        </span>/
        <span>详情</span>
      </div>
    </div>

    <div id="list">
      <div class="tabellist">
        <!-- 台桌类型 / 下注方式 / 帐号 / 姓名 / 总押 / 总赢 / 总洗码  / 洗码率 / 洗码费 / 
        占股 / 币种 / 占股收益 / 总收益 / 未结收益 / 总公司 / 上次结账 / 操作-->
        <el-table v-tableDrag :data="tableData" border style="width: 100%">
          <el-table-column prop="tableId" label="台桌号" width="120"></el-table-column>
          <el-table-column prop="playId" label="铺号" width="120"></el-table-column>
          <el-table-column prop="shoeId" label="靴号" width="120"></el-table-column>
          <el-table-column prop="createTime" label="时间" width="220"></el-table-column>
          <el-table-column prop="totalBet" label="总押" width="120"></el-table-column>
          <el-table-column prop="totalGain" label="公司盈亏" width="120"></el-table-column>
          <el-table-column prop="parter" label="参与会员" width="120"></el-table-column>
          <el-table-column prop="gameResult" label="开牌结果" ></el-table-column>
          <!-- <el-table-column width="110" label="操作" fixed="right">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="detailsexport(scope.row)"
                size="mini"
                style="background:#05339C;border:#05339C;color:#fff;width: 60px;"
              >导出</el-button>
            </template>
          </el-table-column>-->
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
// 详情
import { deskdetailsexport, deskdetails } from "../../../apis/apis";
export default {
  data() {
    return {
      tableData: [
        // {
        //   tableId: "BJL02",
        //   gameType: 1,
        //   // gameResult: "{"result":1,"ext":0}"  ,
        //   gameResult: "庄赢",
        //   playId: 5,
        //   shoeId: 2,
        //   createTime: "2020-04-04 02:27:19",
        //   totalBet: 2000,
        //   totalGain: 0,
        //   parter: "HCT002"
        // }
      ]
    };
  },
  methods: {
    // 详情导出
    detailsexport() {
      console.log("111111111111111111");
      console.log(this.$route.params.data);
      // alert('导出')
      deskdetailsexport(this.$route.params.data).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    // console.log(this.$route.params.data);
    // this.tableData[0]=this.$route.params.data
    deskdetails(this.$route.params.data).then(res => {
      // console.log(res.data.data);
      this.tableData = res.data.data;
      console.log(11111111111111111);
      console.log(JSON.parse(this.tableData[0].gameResult));

      this.tableData.map(val => {
        if (
          val.gameType == "1" &&
          JSON.parse(val.gameResult).result == "1" &&
          JSON.parse(val.gameResult).ext == "0"
        ) {
          val.gameResult = "庄赢";
        } else if (
          val.gameType == "1" &&
          JSON.parse(val.gameResult).result == "1" &&
          JSON.parse(val.gameResult).ext == "1"
        ) {
          val.gameResult = "庄对";
        } else if (
          val.gameType == "1" &&
          JSON.parse(val.gameResult).result == "1" &&
          JSON.parse(val.gameResult).ext == "2"
        ) {
          val.gameResult = "庄赢";
        } else if (
          val.gameType == "1" &&
          JSON.parse(val.gameResult).result == "1" &&
          JSON.parse(val.gameResult).ext == "3"
        ) {
          val.gameResult = "庄对";
        } else if (
          val.gameType == "1" &&
          JSON.parse(val.gameResult).result == "2" &&
          JSON.parse(val.gameResult).ext == "0"
        ) {
          val.gameResult = "闲赢";
        } else if (
          val.gameType == "1" &&
          JSON.parse(val.gameResult).result == "2" &&
          JSON.parse(val.gameResult).ext == "1"
        ) {
          val.gameResult = "闲对";
        } else if (
          val.gameType == "1" &&
          JSON.parse(val.gameResult).result == "2" &&
          JSON.parse(val.gameResult).ext == "2"
        ) {
          val.gameResult = "闲对";
        } else if (
          val.gameType == "1" &&
          JSON.parse(val.gameResult).result == "2" &&
          JSON.parse(val.gameResult).ext == "3"
        ) {
          val.gameResult = "闲对";
        } else if (
          val.gameType == "1" &&
          JSON.parse(val.gameResult).result == "3"
        
        ) {
          val.gameResult = "和";
        } else if (
          val.gameType == "3" &&
          JSON.parse(val.gameResult).result == "1"
        ) {
          val.gameResult = "龙";
        } else if (
          val.gameType == "3" &&
          JSON.parse(val.gameResult).result == "2"
        ) {
          val.gameResult = "虎";
        } else if (
          val.gameType == "3" &&
          JSON.parse(val.gameResult).result == "3"
        ) {
          val.gameResult = "和";
        }
      });
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