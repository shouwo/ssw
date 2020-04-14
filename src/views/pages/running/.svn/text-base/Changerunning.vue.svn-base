<template>
  <div id="app">
    <!-- 面包屑 -->
    <div class="bigbread">
      <div class="bread">
        当前位置：
        <span>
        	<router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
        <span>修改结果详情</span>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="inputcolor">
      <div id="bigbox">
        <el-form id="main" ref="form" :model="form" label-width="80px">
          <el-form-item label="日期：">
             <div class="block">
    <el-date-picker
      v-model="value1"
      type="date"
      size='mini'
      style="width:120px"
      placeholder="选择日期">
    </el-date-picker>
  </div>
          </el-form-item>
          <el-form-item label="桌号：">
            <el-input
              v-model="form.table_number"
              size="mini"
              style="width:120px;"
              placeholder="请输入桌号"
            ></el-input>
          </el-form-item>
          <el-form-item label="靴号：">
            <el-input
              v-model="form.boots_number"
              size="mini"
              style="width:120px;"
              placeholder="请输入靴号"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              style="background:#05339C;border:#05339C;"
              type="primary"
              size="mini"
              @click="onSubmit1"
            >查看</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div id="list">
			<div class="tabellist">
      <el-form ref="form" style="width:100%;" :model="form" label-width="80px">
        <el-form-item style="width:300px;margin-top: 10px;" size="mini" label="铺流水号" >
          <el-input v-model="form.turnover_id" placeholder="请输入铺流水号"></el-input>
        </el-form-item>
        <el-form-item style="width:300px;" size="mini" label="游戏类型">
          <el-input v-model="form.mold" placeholder="请输入游戏类型"></el-input>
        </el-form-item>
        <el-form-item style="width:300px;" size="mini" label="台桌号">
          <el-input v-model="form.choose_table_number" placeholder="请输入台桌号"></el-input>
        </el-form-item>
        <el-form-item style="width:300px;" size="mini" label="靴号">
          <el-input v-model="form.choose_boots_number" placeholder="请输入靴号"></el-input>
        </el-form-item>
        <el-form-item style="width:300px;" size="mini" label="铺号">
          <el-input v-model="form.shop_number" placeholder="请输入铺号"></el-input>
        </el-form-item>

        <el-form-item style="width:430px;" label="开牌结果">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="庄" name="type"></el-checkbox>
            <el-checkbox label="闲" name="type"></el-checkbox>
            <el-checkbox label="和" name="type"></el-checkbox>
            <el-checkbox label="6点赢" name="type"></el-checkbox>
            <el-checkbox label="废弃" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item style="width:220px;" label>
          <el-radio-group v-model="form.resource">
            <el-radio label="庄对"></el-radio>
            <el-radio label="闲对"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
			</div>
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
            :total="400"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        turnover_date: "",
        table_number: "",
        boots_number: "",
        turnover_id: "",
        mold: "",
        choose_table_number: "",
        choose_boots_number: "",
        shop_number: "",
        type: [],
        resource:'全部',
      },

      currentPage4: 4
    };
  },
  methods: {
    onSubmit1() {
      alert("查询铺流水账目修改结果详情！");
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },

};
</script>

<style scoped>
	.tabellist>>>.el-form-item__label,.el-checkbox,.el-radio{
		color: #FFFFFF;
	}
		#bigbox>>>.el-form-item__label{
			color: #FFFFFF;
		}
    	.tabellist>>>.el-table__body tr:hover>td{
		background:rgb(1,23,82);;
	} 
	.tabellist>>>.el-table td, .el-table th.is-leaf{
		background: rgb(1, 19, 71);
		color: #FFFFFF;
		border-collapse:collapse;
		border-color:rgb(6, 66, 89);
	}
	.tabellist>>>.el-table--border{
		color: #FFFFFF;
		border-collapse:collapse;
		border-color:rgb(6, 66, 89);
	}
	.tabellist>>>.el-table--border th, .el-table__fixed-right-patch{
		background: rgb(0, 36, 117);
		border-collapse:collapse;
		color: #FFFFFF;
	}
	.tabellist>>>.el-table th{
		background: rgb(0, 36, 117);
		border-collapse:collapse;
		border-color:rgb(6, 66, 89);
		color: #FFFFFF;
	}
	#thisbox>>>.el-form-item__label,.el-radio{
		color: #FFFFFF;
	}
	.inputcolors>>>.el-form-item__label,.el-radio{
		color: #FFFFFF;
	}
      .el-form-item{
    margin-bottom: 8px;
    
  }
</style>