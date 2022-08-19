<template>
  <div id="log-box">
    <el-form ref="form" :model="form" :rules="rules" class="login_form">
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" class="input"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          class="input"
        ></el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script scoped>
export default {
  name: "LoginWrapper",
  data() {
    return {
      form: {
        username: "gty",
        password: "123456",
      },
      //制定规则
      rules: {
        username: [
          {
            required: true, //是否必填
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 20,
            message: "长度在6到20个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true, //是否必填
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 20,
            message: "长度在6到20个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      /* this.$refs.form.validate(async (x) => {
        if (!x) {
          return;
        }
        const { data: rel } = await this.$http.post("loginpage", this.form);
        if (rel.meta.status === 200) {
          this.$message.success("登录成功");
          console.log(rel.data.token);
          window.sessionStorage.setItem("token", rel.data.token);
          this.$router.push({
            path: "/homepage",
          });
        }else{
          this.$message.success("登录失败");
        }
      }) */
      this.$router.push({
        path: "/homepage",
      });
    },
  },
};
</script>

<style>
/* 登录框 */
#log-box {
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  top: 200px;
  transform: translate(-50%);
  left: 50%;
  height: 300px;
  width: 300px;
  z-index: 999;
  border-radius: 10px;
  box-shadow: 0px 0px 8px #616161;
}
.input {
  width: 200px;
}
</style>