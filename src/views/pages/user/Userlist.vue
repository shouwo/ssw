<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>代理列表</span>
      </div>
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
            >查询代理列表</el-button>
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

            <el-dialog title="添加代理" wi :visible.sync="onSubmit4">
              <el-form :model="form" class="thisForm" style="margin-top: -20px;">
                <el-form-item label-width="100px" label="上级代理">
                  <el-input
                    v-model="form.higher_agent"
                    size="mini"
                    style="width: 150px;"
                    placeholder="请输入上级代理"
                    @blur="Dlb"
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
                    @blur="DlCards"
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
                <el-form-item label-width="100px" label="返点收益">
                  <el-input
                    v-model="form.profit"
                    size="mini"
                    style="width: 150px;"
                    placeholder="请输入返点收益"
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
                <el-form-item label-width="100px" label="操作人">
                  <el-input
                    v-model="form.createPerson"
                    size="mini"
                    style="width: 150px;"
                    placeholder="请输入操作者"
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
            <el-select v-model="form.choice2" placeholder="全部">
              <!-- <el-option label="超级用户" value="-1"></el-option> -->
              <el-option label="代理" value="0"></el-option>
              <!-- <el-option label="子代理" value="1"></el-option> -->
              <!-- <el-option label="会员" value="2"></el-option> -->
              <!-- <el-option label="管理平台账户" value="3"></el-option> -->
              <!-- <el-option label="子会员" value="4"></el-option> -->
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- list列表栏 -->
    <div id="list">
      <div class="tabellist">
        <el-table v-tableDrag class="tabeld" style="width:100%;" :data="tableData" border>
          <el-table-column prop="userType" label="用户类型" width="80"></el-table-column>
          <el-table-column prop="parentId" label="上级代理" width="80"></el-table-column>
          <el-table-column prop="account" label="账号" width="120"></el-table-column>
          <el-table-column prop="name" label="姓名" width="80"></el-table-column>
          <el-table-column prop="id" label="卡号" width="120"></el-table-column>
          <el-table-column prop="phone" label="电话" width="120"></el-table-column>
          <el-table-column prop="postil" label="备注" width="120"></el-table-column>
          <el-table-column prop="proportion" label="占成" width="80"></el-table-column>
          <el-table-column prop="cardShufflerRatio" label="洗码率" width="80"></el-table-column>
          <el-table-column prop="last" label="上次平单时间" width="120"></el-table-column>
          <el-table-column prop="rebatesEarnings" label="返点收益" width="100"></el-table-column>
          <el-table-column prop="shareMemberCost" label="分摊费用" width="80"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="120"></el-table-column>
          <el-table-column prop="createPerson" label="创建人"></el-table-column>
          <el-table-column fixed="right" label="操作" width="150" prop="uptime">
            <template slot-scope="scope">
              <el-button
                style="background:#05339C;border:#05339C;"
                type="primary"
                size="mini"
                @click="upRecordss1(scope.row)"
              >修改</el-button>

              <el-button
                @click="delRecord(scope.row.account)"
                style="background:#05339C;border:#05339C;color:#fff;margin-left: 10px;"
                size="mini"
              >删除</el-button>
            </template>
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
          <!--          <el-form-item label-width="100px" label="用户类型">-->
          <!--            <el-input-->
          <!--              v-model="upRecord.type"-->
          <!--              size="mini"-->
          <!--              style="width: 150px;"-->
          <!--              placeholder="请输入用户类型"-->
          <!--            ></el-input>-->
          <!--          </el-form-item>-->
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
            <el-input
              v-model="upRecord.rename"
              size="mini"
              style="width: 150px;"
              placeholder="请输入姓名"
            ></el-input>
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
          <!--          <el-form-item label-width="100px" label="上次平单时间">-->
          <!--            <el-input-->
          <!--              v-model="upRecord.uptime"-->
          <!--              size="mini"-->
          <!--              style="width: 150px;"-->
          <!--              placeholder="请输入上次平单时间"-->
          <!--            ></el-input>-->
          <!--          </el-form-item>-->
          <!--          <el-form-item label-width="100px" label="返点收益">-->
          <!--            <el-input-->
          <!--              v-model="upRecord.profit"-->
          <!--              size="mini"-->
          <!--              style="width: 150px;"-->
          <!--              placeholder="请输入返点收益"-->
          <!--            ></el-input>-->
          <!--          </el-form-item>-->
          <!--          <el-form-item label-width="100px" label="分摊费用">-->
          <!--            <el-input-->
          <!--              v-model="upRecord.cost"-->
          <!--              size="mini"-->
          <!--              style="width: 150px;"-->
          <!--              placeholder="请输入分摊费用"-->
          <!--            ></el-input>-->
          <!--          </el-form-item>-->
          <!--          <el-form-item label-width="100px" label="创建时间">-->
          <!--            <el-input-->
          <!--              v-model="upRecord.time"-->
          <!--              size="mini"-->
          <!--              style="width: 150px;"-->
          <!--              placeholder="请输入创建时间"-->
          <!--            ></el-input>-->
          <!--          </el-form-item>-->
          <el-form-item label-width="100px" label="修改人">
            <el-input
              v-model="upRecord.founder"
              size="mini"
              style="width: 150px;"
              placeholder="请输入修改人"
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
// 下拉列表类型，添加代理，初始化数据，查询列表,修改，删除
import {
  addAgent,
  Agentlist,
  queryagentlist,
  changeagentlist,
  delagentlist,
  printExport,
  selDl,
  selDlCard
} from "../../../apis/apis.js";

export default {
  data() {
    return {
      //上级代理和代理卡号
      Dld: false,
      DlCard: false,
      // 添加代理
      onSubmit4: false,
      // 修改
      upRecordss: false,

      zc: "",
      xima: "",
      // 下拉--类型

      // 输入框
      form: {
        accnum: "",
        name: "",
        tel: "",
        choice2: "0", //下拉类型--内容

        // 添加代理
        higher_agent: "",
        id: "",
        namess: "",
        createPerson: "",
        card: "",
        tels: "",
        ps: "",
        share: "",
        profit: "",
        wish_rate: ""
      },
      // list表格
      tableData: [
        // {
        //   account: "",
        //   cardShufflerRatio: '',
        //   createPerson: "",
        //   createTime: "",
        //   id: "",
        //   last: "",
        //   name: "",
        //   parentId: "",
        //   phone: "",
        //   postil: "",
        //   proportion: '',
        //   rebatesEarnings: '',
        //   shareMemberCost: '',
        //   userType: ""
        // }
      ],
      //修改框
      upRecord: {
        type: "",
        upagent: "",
        accountnum: "",
        rename: "",
        cardnum: "",
        tel: "",
        remarks: "",
        share: "",
        wash: "",
        founder: ""
      },
      // 下拉框 类型val
      value: "",
      // 分页
      currentPage4: 1,
      // 总条数
      total: "",
      size: "10", //条数
      kaiguan: 'kai'//启用调用接口方法
    };
  },
  methods: {
    //删除当前行记录
    delRecord(val) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });

          delagentlist(val).then(res => {
            console.log(res);
            if (res.data.msg == "查询成功") {
              Agentlist(this.form.choice2).then(res => {
                console.log(res.data.data.list);
                // this.tableData = res.data;
                this.tableData = res.data.data.list;
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });

      //?删除当前行未能实现
      // console.log(val.account);
    },
    upRecordss1(val) {
      console.log(val);
      (this.upRecord.upagent = val.parentId),
        (this.upRecord.accountnum = val.account),
        (this.upRecord.rename = val.name),
        (this.upRecord.cardnum = val.id),
        (this.upRecord.tel = val.phone),
        (this.upRecord.remarks = val.postil),
        (this.zc = val.proportion.split("%")),
        (this.upRecord.share = parseInt(this.zc[0]) / 100);
      // this.upRecord.share=val.proportion,

      (this.xima = val.cardShufflerRatio.split("%")),
        (this.upRecord.wash = parseInt(this.xima[0]) / 100);

      (this.upRecord.founder = val.createPerson), (this.upRecordss = true);
      // (this.upRecord.type = res.type),
      //   (this.upRecord.upagent = res.upagent),
      //   (this.upRecord.accountnum = res.accountnum),
      //   (this.upRecord.name = res.name),
      //   (this.upRecord.cardnum = res.cardnum),
      //   (this.upRecord.tel = res.tel),
      //   (this.upRecord.remarks = res.remarks),
      //   (this.upRecord.share = res.share),
      //   (this.upRecord.wash = res.wash),
      //   (this.upRecord.uptime = res.uptime),
      //   (this.upRecord.profit = res.profit),
      //   (this.upRecord.cost = res.cost),
      //   (this.upRecord.time = res.time),
      //   (this.upRecord.founder = res.founder);
    },
    //修改保存
    upSure() {
      changeagentlist(
        this.upRecord.accountnum,
        this.upRecord.cardnum,
        this.upRecord.wash,
        this.upRecord.founder,
        this.upRecord.rename,
        this.upRecord.upagent,
        this.upRecord.tel,
        this.upRecord.remarks,
        this.upRecord.share
      ).then(res => {
        console.log(res);
        if (res.data.msg == "1") {
          this.$message("修改成功");
          this.upRecordss = false;
        } else {
          this.$message("修改失败");
        }
      });
    },
    //修改取消
    upCancel() {
      // 清空
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
      var higher_agent = this.form.higher_agent;
      var id = this.form.id;
      var namess = this.form.namess;
      var createPerson = this.form.createPerson;
      var card = this.form.card;
      var tels = this.form.tels;
      var ps = this.form.ps;
      var share = this.form.share;
      var profit = this.form.profit;
      var wish_rate = this.form.wish_rate;
      //洗码率约束
      var xmreps = /^[0]+([.]{1}[0-9]+){0,1}$/;
      //占成约束
      var zcreps = /^[0]+([.]{1}[0-9]+){0,1}$/;
      //账号约束
      var accountreps = /^[a-zA-Z0-9]+$/;
      //电话号码约束判断
      var telreps = /^[0-9]+$/;
      if (
        higher_agent == null ||
        higher_agent == "" ||
        id == null ||
        id == "" ||
        namess == null ||
        namess == "" ||
        createPerson == null ||
        createPerson == "" ||
        card == null ||
        card == "" ||
        tels == null ||
        tels == "" ||
        ps == null ||
        ps == "" ||
        share == null ||
        share == "" ||
        profit == null ||
        profit == "" ||
        wish_rate == null ||
        wish_rate == ""
      ) {
        alert("添加代理框不能为空！！");
      } else if (this.Dld) {
        alert("上级代理不存在");
      } else if (!this.DlCard) {
        alert("代理卡号重复");
      } else if (!accountreps.test(id)) {
        alert("账号格式错误");
      } else if (!telreps.test(tels) || tels.length > 11) {
        alert("电话格式错误");
      } else if (!zcreps.test(share)) {
        alert("占成为不大于1的小数");
      } else if (!xmreps.test(wish_rate)) {
        alert("洗码率为不大于1的小数");
      } else {
        addAgent(
          this.form.id,
          this.form.card,
          this.form.wish_rate,
          this.form.createPerson,
          this.form.namess,
          this.form.higher_agent,
          this.form.tels,
          this.form.ps,
          this.form.share,
          this.form.profit
        ).then(res => {
          console.log(res);
          if (res.data.msg == "操作成功") {
            alert("添加成功！");
            this.onSubmit4 = false;
          } else {
            alert("该用户已存在！");
          }
        });
      }
    },
    //上级代理判断 存在：false 不存在 true
    Dlb() {
      var account = this.form.higher_agent;
      selDl(account).then(res => {
        console.log(res);
        if (res.data.data == false) {
          this.Dld = false;
        }
        if (res.data.data == true) {
          this.Dld = true;
        }
      });
    },

    //代理卡号判断
    DlCards() {
      var card = this.form.card;
      selDlCard(card).then(res => {
        console.log(res);
        if (res.data.data == false) {
          this.DlCard = false;
        }
        if (res.data.data == true) {
          this.DlCard = true;
        }
      });
    },

    //电话号码约束判断
    tel() {
      var tel = this.form.tel;
      var reps = /^[0-9]+$/;
      if (tel != null && tel != "" && reps.test(tel)) {
        //alert("输入成功" + tel);
      } else {
        //alert("电话为最多11位的数字");
      }
    },
    // 查询代理列表的按钮
    onSubmita1() {
      this.currentPage4 = 1;
      this.fenye();
    },
    //条件查询分页
    fenye() {
      queryagentlist(
        this.form.accnum,
        this.form.name,
        this.currentPage4,
        this.form.tel,
        this.size,
        this.form.choice2
      ).then(res => {
        console.log(res.data.data.list);
        // this.tableData = res.data;
        this.tableData = res.data.data.list;
        this.tableData.map(obj => {
          obj.cardShufflerRatio =
            (obj.cardShufflerRatio * 100.0).toFixed(2) + "%";
          // obj.rebatesEarnings=(obj.rebatesEarnings*100.0).toFixed(2)+"%";
          // obj.proportion=(obj.proportion*100.0).toFixed(2)+"%";

          // obj.cardShufflerRatio.toFixed(2)+'%'
          
        });

        this.total = res.data.data.totalCount;
        this.currentPage4 = res.data.data.currPage;
      });
    },
    //导出用户列表
    onSubmita2() {
      this.$confirm("此操作将导出该页面, 是否继续?", "提示", {
        confirmButtonText: "导出",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "正在导出!"
          });
          printExport(
            this.form.accnum,
            this.form.name,
            this.currentPage4,
            this.total,
            this.form.tel,
            this.form.choice2
          ).then(res => {
            const blob = new Blob([res.data], {
              type: "application/vnd.ms-excel;"
            });
            const aLink = document.createElement("a");
            aLink.href = URL.createObjectURL(blob);
            aLink.setAttribute("download", "代理用户列表" + ".xlsx"); // 设置下载文件名称
            aLink.click();
            this.$refs.loadElement.appendChild(aLink);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消！"
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

      if (this.form.accnum == "") {
        this.tablechuq(); //初始化分页
        console.log(`初始化分页: ${val}`);
      } else {
        this.fenye(); //条件查询分页
        console.log(`条件查询分页: ${val}`);
      }
    },
    tablechuq() {
      // 初始化用户
      Agentlist(this.form.choice2, this.currentPage4, this.size).then(res => {
        console.log(res);
        // this.tableData = res.data;
        this.tableData = res.data.data.list;
        this.tableData.map(obj => {
          // rebatesEarnings
          if( obj.cardShufflerRatio=='0'){
             obj.cardShufflerRatio=0
            }else{
            obj.cardShufflerRatio =(obj.cardShufflerRatio * 100.0).toFixed(2) + "%";
          }
          // 返点收益
          if (obj.rebatesEarnings == "0") {
            obj.rebatesEarnings = 0;
          } else {
            obj.rebatesEarnings =
              (obj.rebatesEarnings * 100.0).toFixed(2) + "%";
          }

          // 占成
          if (obj.proportion == "/") {
            obj.proportion = "/";
          } else if (obj.proportion == "0") {
            obj.proportion = "0";
          } else {
            obj.proportion = (obj.proportion * 100.0).toFixed(2) + "%";
          }

          // obj.cardShufflerRatio.toFixed(2)+'%'
        });
        this.total = res.data.data.totalCount;
        this.currentPage4 = res.data.data.currPage;
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

#bigbox >>> .el-form-item__label {
  color: #ffffff;
}
.el-form-item {
  margin-bottom: 8px;
  /* width: 270px; */
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
  width: 350px;
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