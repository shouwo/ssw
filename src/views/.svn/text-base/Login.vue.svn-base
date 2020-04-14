<template>
  <div id="login">
    <div class="logintitle">浩成娱乐财务跟踪系统</div>
    <div class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">浩成娱乐财务跟踪系统</span>
      </div>
      <div class="use">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="0"
          class="myForm demo-ruleForm"
        >
          <el-form-item prop="name">
            <!-- 数字字母下划线 8-16 -->
            <el-input
              prefix-icon="el-icon-user-solid"
              v-model="ruleForm.name"
              placeholder="用户名"
              style="width: 220px;"
            ></el-input>
          </el-form-item>
          <div style="width:20px;"></div>
          <el-form-item prop="pass">
            <!-- 数字字母下划线 8-16 -->
            <el-input
              prefix-icon="el-icon-lock"
              v-model="ruleForm.pass"
              placeholder="密码"
              show-password
              style="width: 220px;"
            ></el-input>
          </el-form-item>
          <el-button
            type="primary"
            style="background:#05339C;border:#05339C;color:#fff;text-align: center;width: 14%;margin-left: 2%;margin-top: -4%;"
            @click="submitForm('ruleForm')"
          >登录</el-button>
          <p v-show="error" class="err">用户名或密码错误</p>
        </el-form>
        <el-checkbox label="记住密码" name="type" style="color:#fff;margin-left:82%;margin-top: 10px;"></el-checkbox>
      </div>
    </div>
    <div class="bottomtitle">Copyright@2020-浩成娱乐 泸ICP备10011451号-6ICP证书:泸B2-20180057</div>
  </div>
</template>

<script>
import { login } from "../apis/apis";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      error: false,
      ruleForm: {
        name: "",
        pass: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        pass: [
          { validator: validatePass, trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          localStorage.setItem("username", this.ruleForm.name);
          login(this.ruleForm.name, this.ruleForm.pass).then(res => {
            if (res.data.msg == "登陆成功!") {
              this.$router.push("/index/welcome");
            } else if(res.data.msg=='登陆失败!用户名或密码错误'){

              this.error = true;
              // alert(res.data.status)
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
html,
body,
#login {
  margin: 0;
  padding: 0;
}

#login {
  width: 100%;
  height: 100%;
  /*  background: url("../assets/imgs/login.jpg") no-repeat;*/
  background-image: url("../assets/imgs/login.png");
  background-color: #031041;
  background-size: 100% 100%;
  // display: flex;
  // justify-content: flex-end;
  // align-items: center;
  position: relative;

  // 顶部标题
  .logintitle {
    width: 100%;
    height: 20px;
    font-size: 30px;
    font-weight: 700;
    color: #085eb9;
    padding-top: 5px;
    text-align: center;
  }
  // 登录框
  .box-card {
    // margin-right: 110px;
    // margin-top: -80px;
    width: 570px;
    height: 180px;
    border: none;
    position: absolute;
    right: 2%;
    top: 37%;
    // 管理名字
    .clearfix {
      .title {
        font-size: 30px;
        font-weight: 500;
        color: #fff;
      }
    }
  }
}
.use {
  margin-top: 30px;
}
.demo-ruleForm {
  position: relative;
  .err {
    position: absolute;
    font-size: 12px;
    top: 30px;
    left: 0;
    color: red;
  }
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.myForm {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

// 底部
.bottomtitle {
  position: absolute;
  bottom: 15px;
  left: 0;
  font-size: 12px;
  color: #fff;
  width: 100%;
  text-align: center;
}
</style>