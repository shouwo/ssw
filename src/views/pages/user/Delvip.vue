<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>已删会员</span>
      </div>
    </div>

    <!-- 输入框 -->
    <div class="inputcolor">
      <div id="topbox" style="padding:8px 0 8px 26px;text-align: left;font-size:14px;">
        <span style="color:#fff;">上级代理</span>
        <el-input
          id="referrer"
          placeholder="请输入上级代理"
          style="width:120px;margin:0 50px 0 10px;"
          size="mini"
          v-model="vip.upagent"
          clearable
        ></el-input>
        <span style="color:#fff;">账号</span>
        <el-input
          placeholder="请输入账号"
          style="width:120px;margin:0 50px 0 10px;"
          v-model="vip.agentnum"
          size="mini"
          clearable
        ></el-input>
        <span style="color:#fff;">姓名</span>
        <el-input
          placeholder="请输入姓名"
          size="mini"
          v-model="vip.name"
          style="width:120px;margin:0 50px 0 10px;"
          clearable
        ></el-input>
        <el-button
          size="mini"
          style="background:#05339C;border:#05339C;"
          type="primary"
          @click="querys"
        >查看</el-button>
      </div>
    </div>

    <!-- list列表 -->
    <div id="list">
      <div class="tabellist">
        <el-table v-tableDrag :data="tableData" border style="width: 100%">
          <el-table-column prop="parentId" label="上级代理" width="100"></el-table-column>
          <el-table-column prop="account" label="账号" width="100"></el-table-column>
          <el-table-column prop="id" label="会员卡号" width="300"></el-table-column>
          <el-table-column prop="name" label="姓名" width="100"></el-table-column>
          <el-table-column prop="phone" label="电话" width="100"></el-table-column>
          <el-table-column prop="cardShufflerRatio" label="洗码率"></el-table-column>
          <el-table-column fixed="right" width="180" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row.account)"
                size="mini"
                style="background:#05339C;border:#05339C;color:#fff;margin-bottom:18px;"
              >还原</el-button>
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
            :total="total"
            :pager-count="5"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//b查询,a初始化数据,c还原
import {
  delvipquery,
  deletedviplist,
  delvipreduction
} from "../../../apis/apis";
export default {
  data() {
    return {
      // input输入框
      vip: {
        upagent: "",		//上级代理
        agentnum: "",		//账号
        name: ""				//姓名
      },
      // list列表
      tableData: [

      ],
      // 分页
      currentPage4: 1,
      // 总条数
      total: '',
      size:'10'
    };
  },
  created() {
    // 初始化数据
    this.tablechuq()
  },
  methods: {
    // 查询列表
    querys() {
      delvipquery(this.vip.agentnum,this.vip.name,this.vip.upagent).then(res => {
					console.log(res.data.data.list);
          this.tableData = res.data.data.list;
             this.tableData.map(obj=>{
        obj.cardShufflerRatio=(obj.cardShufflerRatio*100.0).toFixed(2)+"%";
        })
        }
      );
    },
    tablechuq(){
        deletedviplist(this.currentPage4, this.size).then(res => {
      console.log(res);
      this.tableData = res.data.data.list;
       this.tableData.map(obj=>{
        obj.cardShufflerRatio=(obj.cardShufflerRatio*100.0).toFixed(2)+"%";
        })
       this.total = res.data.data.totalCount;
          this.currentPage4 = res.data.data.currPage;
    });
    },
    // 还原
    handleClick(val) {
  this.$confirm('此操作将还原该用户, 是否继续?', '提示', {
          confirmButtonText: '还原',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '还原成功!'
          });
    delvipreduction(val).then(res => {
      	console.log(res.data.data.list);
        deletedviplist().then(res => {
		      console.log(res.data.data.list);
		      this.tableData = res.data.data.list;
		    });
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
      this.currentPage4=val;
      this.tablechuq(val);
    }
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
</style>