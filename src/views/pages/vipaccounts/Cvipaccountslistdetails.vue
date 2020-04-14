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
          <router-link to="/index/Cvipaccountslist" style="text-decoration:none;color:#fff;">子会员账目列表</router-link>
        </span>/
        <span>详情</span>
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
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          types: "10",
          codenumber: "150096",
          name: "王小虎",
          frequency: "5",
          total: "80000",
          insurance: "5000",
          generalcode: "583",
          lotterywins: "895656",
          rates: "80%",
          fees: "8000",
          neutralization: "普陀区",
          squadron: "15323"
        }
      ]
    };
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
.el-form-item{
    margin-bottom: 8px;
  }
</style>