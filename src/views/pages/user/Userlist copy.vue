<template>
  <div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="用户名称" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.acc }}</span>
          </template>
        </el-table-column>

        <el-table-column label="用户组" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.userGroup == 1 ? '超级管理员' : '管理员' }}</span>
          </template>
        </el-table-column>

        <!-- <el-table-column label="头像" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.avatarUrl }}</span>
          </template>
        </el-table-column>-->

        <el-table-column label="管理">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="pageChange"
        :total="total"
        :page-size="pageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getusers, removeaccount } from "@/apis/apis";

export default {
  data() {
    return {
      //  tableData: [{"acc":"bbb","id":16,"userGroup":2,"avatarUrl":null}]
      tableData: [],
      curpage: 1, //当前选中的页数
      total: 0, // 最大条数
      pageSize: 8 //每页显示的条数
    };
  },
  created() {
    //发送ajax请求
    this.ajaxgetusers(this.curpage);
  },
  methods: {
    pageChange(curpage) {
      //保存当前页数
      this.curpage = curpage;
      //请求当前页数的数据
      this.ajaxgetusers(this.curpage);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      //index数据索引  row当前点击行的数据对象
      //   console.log(row.id);

      //先调用自己的确认框
      this.$confirm("此操作将永久删除该账号数据, 是否继续?", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(
          //点击确定以后,才发送ajax进行数据删除
          () => {
            removeaccount(row.id).then(res => {
              if (res.data == "ok") {
                this.$message({
                  message: "数据删除成功!",
                  type: "success"
                });

                //重新刷新数据
                this.ajaxgetusers(this.curpage);
              } else {
                this.$message({
                  message: "数据删除失败,请重新删除",
                  type: "warning"
                });
              }
            });
          }
        )
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //发送请求获取用户信息
    ajaxgetusers(curpage) {
      getusers(curpage, this.pageSize).then(res => {
        console.log(res);
        //拿到数据以后保存数据到自己的表格中!!!
        this.tableData = res.data.data; //设置数据源
        this.total = res.data.total; //设置最大条数
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>