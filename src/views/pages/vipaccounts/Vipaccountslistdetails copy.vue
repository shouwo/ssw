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
        	<router-link to="/index/vipaccountslist" style="text-decoration:none;color:#fff;">会员账目列表</router-link>
        </span>/
        <span>
          详情
        </span>
      </div>
    </div>

    <div id="list">
      <div class="tabellist">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="times" label="时间" width="150"></el-table-column>
          <el-table-column prop="tablenumber" label="台桌号" width="120"></el-table-column>
          <el-table-column prop="bootnumber" label="靴号" width="120"></el-table-column>
          <el-table-column prop="shopnumber" label="铺号" width="120"></el-table-column>
          <el-table-column prop="zhuang" label="庄" width="120"></el-table-column>
          <el-table-column prop="ands1" label="和" width="120"></el-table-column>
          <el-table-column prop="leisure" label="闲" width="120"></el-table-column>
          <el-table-column prop="idledui" label="闲对" width="120"></el-table-column>
          <el-table-column prop="insurance" label="保险" width="120"></el-table-column>

          <el-table-column prop="dragon" label="龙" width="150"></el-table-column>
          <el-table-column prop="tiger" label="虎" width="120"></el-table-column>
          <el-table-column prop="ands2" label="和" width="120"></el-table-column>
          <el-table-column prop="profit" label="盈亏" width="120"></el-table-column>
          <el-table-column prop="brand" label="开牌结果" width="120"></el-table-column>
          <el-table-column prop="fees" label="洗码费" width="120"></el-table-column>
          <el-table-column prop="injectioncodes" label="注码" width="120"></el-table-column>
          <el-table-column prop="modes" label="下注方式" width="120"></el-table-column>
          <el-table-column prop="notetaker" label="记录人"></el-table-column>
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
					times:"2016-05-02",
					tablenumber:"52879",
					bootnumber:"859",
					shopnumber:"500",
					zhuang:"赢",
					ands1:"平",
					leisure:"平",
					idledui:"输",
					insurance:"8956",
					dragon:"56",
					tiger:"52",
					ands2:"平",
					profit:"869",
					brand:"赢",
					fees:"856",
          injectioncodes: "王小虎",
          modes: "上海",
          notetaker: "普陀区",
        },
				   
      ],
    };
  },

  methods: {

   },
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