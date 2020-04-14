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
          <!--<router-link to="/index/userlist" style="text-decoration:none;color:#fff;">代理管理</router-link>-->
          子代理列表
        </span>
      </div>
      <!--<Crumbs></Crumbs>-->
    </div>
    <!-- 输入框 -->
    <div class="inputcolor">
      <div id="bigbox">
        <el-form id="main" ref="form" :model="form" label-width="80px">
          <el-form-item label="账号：">
            <el-input
              placeholder="请输入账号"
              v-model="form.accnum"
              size="mini"
              style="width:120px;"
              id="accnum"
            ></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input placeholder="请输入姓名" v-model="form.name" size="mini" style="width:120px;"></el-input>
          </el-form-item>
          <el-form-item label="电话：">
            <el-input
              placeholder="请输入电话"
              v-model="form.tel"
              size="mini"
              maxlength="11"
              style="width:120px;"
              @blur="tel"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              style="background:#05339C;border:#05339C;"
              type="primary"
              size="mini"
              @click="onSubmita1"
            >查看用户记录</el-button>
            <el-button
              @click="onSubmita2"
              style="background:#05339C;border:#05339C;color:#fff;"
              size="mini"
            >导出用户列表</el-button>

            <el-button
              style="background:#05339C;border:#05339C;"
              type="primary"
              size="mini"
              @click="onSubmit4= true"
            >添加代理</el-button>

            <el-dialog title="添加代理" :visible.sync="onSubmit4">
              <el-form :model="form" class="thisForm" style="margin-top: -20px;">
                <el-form-item label-width="100px" label="上级代理">
                  <el-input
                    v-model="form.higher_agent"
                    size="mini"
                    style="width: 150px;"
                    placeholder="请输入上级代理"
                  ></el-input>
                </el-form-item>
                <el-form-item label-width="100px" label="账号">
                  <el-input v-model="form.id" size="mini" style="width: 150px;" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label-width="100px" label="姓名">
                  <el-input
                    v-model="form.namess"
                    size="mini"
                    style="width: 150px;"
                    placeholder="请输入姓名"
                  ></el-input>
                </el-form-item>
                <el-form-item label-width="100px" label="代理卡号">
                  <el-input
                    v-model="form.card"
                    size="mini"
                    style="width: 150px;"
                    placeholder="请输入代理卡号"
                  ></el-input>
                </el-form-item>
                <el-form-item label-width="100px" label="电话">
                  <el-input
                    v-model="form.tels"
                    size="mini"
                    style="width: 150px;"
                    placeholder="请输入电话"
                  ></el-input>
                </el-form-item>
                <el-form-item label-width="100px" label="备注">
                  <el-input v-model="form.ps" size="mini" style="width: 150px;" placeholder="请输入备注"></el-input>
                </el-form-item>
                <el-form-item label-width="100px" label="占成">
                  <el-input
                    v-model="form.share"
                    size="mini"
                    style="width: 150px;"
                    placeholder="请输入占成"
                  ></el-input>
                </el-form-item>
                <el-form-item label-width="100px" label="洗码率">
                  <el-input
                    v-model="form.wish_rate"
                    size="mini"
                    style="width: 150px;"
                    placeholder="请输入洗码率"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div>
                <el-button
                  type="primary"
                  size="mini"
                  style="margin-top: 10px;width: 120px;"
                  @click="save"
                  :plain="true"
                >保存</el-button>
              </div>
              <!--<div slot="footer" class="dialog-footer">
						    <el-button @click="onSubmit4 = false">取 消</el-button>
						    <el-button type="primary" @click="onSubmit4 = false">确 定</el-button>
              </div>-->
            </el-dialog>
          </el-form-item>
        </el-form>
        <el-form
          id="main1"
          size="mini"
          style="width:180px;"
          ref="form"
          :model="form"
          label-width="80px"
        >
          <!-- 下拉框 -->
          <el-form-item label="类型：">
            <el-select v-model="form.choice" placeholder="全部">
              <el-option
                v-for="item in choices"
                :key="item"
                :label="item.indexNameCn"
                :value="item.codeIndex"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 列表栏 -->

    <div id="list">
      <div class="tabellist">
        <!-- 1 用户类型 / 上级代理 / 账号 / 姓名 / 卡号 / 电话 / 备注 
        / 占成 / 洗码率 / 上次平单时间 / 返空点收益 / 分摊费用 / 创建时间 / 创建人-->
        <el-table class="tabeld" style="width:100%;" :data="tableData" border>
          <el-table-column prop="type" label="用户类型" width="80"></el-table-column>
          <el-table-column prop="upagent" label="上级代理" width="80"></el-table-column>
          <el-table-column prop="accountnum" label="账号" width="120"></el-table-column>
          <el-table-column prop="name" label="姓名" width="80"></el-table-column>
          <el-table-column prop="cardnum" label="卡号" width="120"></el-table-column>
          <el-table-column prop="tel" label="电话" width="120"></el-table-column>
          <el-table-column prop="remarks" label="备注" width="120"></el-table-column>
          <el-table-column prop="share" label="占成" width="80"></el-table-column>
          <el-table-column prop="wash" label="洗码率" width="80"></el-table-column>
          <el-table-column prop="uptime" label="上次平单时间" width="120"></el-table-column>
          <el-table-column prop="profit" label="返点收益" width="100"></el-table-column>
          <el-table-column prop="cost" label="分摊费用" width="80"></el-table-column>
          <el-table-column prop="time" label="创建时间" width="120"></el-table-column>
          <el-table-column prop="founder" label="创建人"></el-table-column>

          <el-table-column fixed="right" label="操作" width="150" prop="uptime">
            <el-button
              style="background:#05339C;border:#05339C;"
              type="primary"
              size="mini"
              @click="upRecordss=true"
            >修改</el-button>
            <el-button
              @click="delRecord"
              style="background:#05339C;border:#05339C;color:#fff;margin-left: 10px;"
              size="mini"
            >删除</el-button>
          </el-table-column>
        </el-table>
      </div>
      <!-- 修改弹出框 -->
      <el-dialog
        title="修改记录"
        :visible.sync="upRecordss"
        style="text-align: center;margin-top: -100px;"
      >
        <el-form :model="upRecord" class="thisForm1" style="margin-top: -20px;">
          <el-form-item label-width="100px" label="用户类型">
            <el-input
              v-model="upRecord.type"
              size="mini"
              style="width: 150px;"
              placeholder="请输入用户类型"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="上级代理">
            <el-input
              v-model="upRecord.upagent"
              size="mini"
              style="width: 150px;"
              placeholder="请输入上级代理"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="账号">
            <el-input
              v-model="upRecord.accountnum"
              size="mini"
              style="width: 150px;"
              placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="姓名">
            <el-input v-model="upRecord.name" size="mini" style="width: 150px;" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="卡号">
            <el-input
              v-model="upRecord.cardnum"
              size="mini"
              style="width: 150px;"
              placeholder="请输入卡号"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="电话">
            <el-input v-model="upRecord.tel" size="mini" style="width: 150px;" placeholder="请输入电话"></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="备注">
            <el-input
              v-model="upRecord.remarks"
              size="mini"
              style="width: 150px;"
              placeholder="请输入备注"
            ></el-input>
          </el-form-item>

          <el-form-item label-width="100px" label="占成">
            <el-input
              v-model="upRecord.share"
              size="mini"
              style="width: 150px;"
              placeholder="请输入占成"
            ></el-input>
          </el-form-item>

          <el-form-item label-width="100px" label="洗码率">
            <el-input
              v-model="upRecord.wash"
              size="mini"
              style="width: 150px;"
              placeholder="请输入洗码率"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="上次平单时间">
            <el-input
              v-model="upRecord.uptime"
              size="mini"
              style="width: 150px;"
              placeholder="请输入上次平单时间"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="返点收益">
            <el-input
              v-model="upRecord.profit"
              size="mini"
              style="width: 150px;"
              placeholder="请输入返点收益"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="分摊费用">
            <el-input
              v-model="upRecord.cost"
              size="mini"
              style="width: 150px;"
              placeholder="请输入分摊费用"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="创建时间">
            <el-input
              v-model="upRecord.time"
              size="mini"
              style="width: 150px;"
              placeholder="请输入创建时间"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="创建人">
            <el-input
              v-model="upRecord.founder"
              size="mini"
              style="width: 150px;"
              placeholder="请输入创建人"
            ></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button
            type="primary"
            size="mini"
            style="margin-top: 10px;width: 120px;"
            @click="upSure"
            :plain="true"
          >确定</el-button>
          <el-button
            type="primary"
            size="mini"
            style="margin-top: 10px;width: 120px;"
            @click="upCancel"
            :plain="true"
          >取消</el-button>
        </div>
      </el-dialog>
      <!-- 分页 -->
      <div class="fen">
        <div class="block fenright">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="5"
            :page-sizes="['5','10']"
            layout="total, sizes, prev, pager, next, jumper"
            background
            :total="100"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { types, addAgent, Agentlist } from "../../../apis/apis.js";
export default {
  data() {
    return {
      choices: [],
      onSubmit4: false,
      upRecordss: false,
      // 输入框
      form: {
        accnum: "",
        name: "",
        tel: "",
        choice: "", //输入框的下拉框

        higher_agent: "",
        id: "",
        namess: "",
        card: "",
        tels: "",
        ps: "",
        share: "",
        wish_rate: ""
      },
      //修改框
      upRecord: {
        type: "",
        upagent: "",
        accountnum: "",
        name: "",
        cardnum: "",
        tel: "",
        remarks: "",
        share: "",
        wash: "",
        uptime: "",
        profit: "",
        cost: "",
        time: "",
        founder: ""
      },
      // list表格
      tableData: [
        {
          type: "代理",
          upagent: "GM",
          accountnum: "H789",
          name: "王小虎",
          cardnum: "1558841",
          tel: "13699004000",
          remarks: "密码123",
          share: "10%",
          wash: "1.2",
          uptime: "/",
          profit: "/",
          cost: "/",
          time: "20.02",
          founder: "00"
        },
      ],
      value: "",
      // 分页
      currentPage4: 4,
    };
  },
  methods: {
    //删除当前行记录
    delRecord() {
      alert("删除当前行");
    },
    //修改保存
    upSure() {
      (this.upRecord.type = ""),
        (this.upRecord.upagent = ""),
        (this.upRecord.accountnum = ""),
        (this.upRecord.name = ""),
        (this.upRecord.cardnum = ""),
        (this.upRecord.tel = ""),
        (this.upRecord.remarks = ""),
        (this.upRecord.share = ""),
        (this.upRecord.wash = ""),
        (this.upRecord.uptime = ""),
        (this.upRecord.profit = ""),
        (this.upRecord.cost = ""),
        (this.upRecord.time = ""),
        (this.upRecord.founder = ""),
        this.$message("修改成功");
      this.upRecordss = false;
    },
    //修改取消
    upCancel() {
      (this.upRecord.type = ""),
        (this.upRecord.upagent = ""),
        (this.upRecord.accountnum = ""),
        (this.upRecord.name = ""),
        (this.upRecord.cardnum = ""),
        (this.upRecord.tel = ""),
        (this.upRecord.remarks = ""),
        (this.upRecord.share = ""),
        (this.upRecord.wash = ""),
        (this.upRecord.uptime = ""),
        (this.upRecord.profit = ""),
        (this.upRecord.cost = ""),
        (this.upRecord.time = ""),
        (this.upRecord.founder = ""),
        this.$message("取消");
      this.upRecordss = false;
    },

    //弹框保存
    save() {
      // //  	this.form.id=''
      //     	this.form.higher_agent=""
      // 			this.form.id=""
      // 		  this.form.namess=""
      // 		  this.form.card=""
      // 		  this.form.tels=""
      // 		  this.form.ps=""
      // 		  this.form.share=""
      // 		  this.form.wish_rate=""
      // 		  this.$message('添加代理成功')
      // 			this.onSubmit4=false
      addAgent(
        this.form.id,
        this.form.card,
        this.form.namess,
        this.form.tels,
        this.form.share,
        this.form.ps,
        this.form.higher_agent,
        this.form.wish_rate
      ).then(res => {
        console.log(res);
        if (res.data.msg == "操作成功") {
          alert("添加成功！");
          (this.form.id = ""),
            (this.form.card = ""),
            (this.form.namess = ""),
            (this.form.tels = ""),
            (this.form.share = ""),
            (this.form.ps = ""),
            (this.form.higher_agent = ""),
            (this.form.wish_rate = ""),
            (this.onSubmit4 = false);
        } else {
          alert("该用户已存在！");
        }
      });
    },
    //电话号码约束判断
    tel() {
      var tel = this.form.tel;
      var reps = /^[0-9]+$/;
      if (tel != null && tel != "" && reps.test(tel)) {
        alert("输入成功" + tel);
      } else {
        alert("电话为最多11位的数字");
      }
    },
    // 输入框的按钮
    onSubmita1() {
      // 非空
      // var accnum = this.form.accnum;
      // var names = this.form.name;
      // var tel = this.form.tel;
      // if (
      //   accnum == null ||
      //   accnum == "" ||
      //   names == "" ||
      //   names == null ||
      //   tel == null ||
      //   tel == ""
      // ) {
      //   alert("查询输入框不能为空！！！");
      //   document.getElementById("accnum").focus();
      // } else {
      //   alert("输入成功" + accnum + ", " + names + ", " + tel);
      // }
      alert('查看用户记录')
    },

    onSubmita2() {
      alert("导出用户列表!");
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },

  created() {
    // 初始化用户
    Agentlist().then(res => {
      console.log(res);
    });
    types().then(res => {
      console.log(res.data);
      var gameType = JSON.parse(JSON.stringify(res.data.data));
      for (var i = 0; i < gameType.length; i++) {
        this.choices.push({
          indexNameCn: gameType[i].indexNameCn,
          codeIndex: gameType[i].codeIndex
        });
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
<style>
.el-message-box {
  background-color: #00205e;
}
.el-message-box__title {
  color: #fff;
}
/*messagebox样式*/
.el-dialog {
  background: #00205e;
  width: 320px;
}
/*内容字体颜色*/
.el-form-item__label {
  color: #fff;
}
/*标题颜色*/
.el-dialog__title {
  color: #fff;
}
.el-form-item {
  margin-bottom: 0px;
}
.el-form-item {
  margin-bottom: 0px;
}
/*.el-form-item__content{
		float: right;
		margin-right: 20px;
	}*/
</style>