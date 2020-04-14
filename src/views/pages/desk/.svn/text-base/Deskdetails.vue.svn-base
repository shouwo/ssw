<template>
	<div id="app">
		<!-- 面包屑 -->
		<div class="bigbread">
			<div class="bread">
				当前位置：
				<span>
          <router-link to="/index/welcome" style="text-decoration:none;color:#fff;">首页</router-link>
        </span>/
				<span>台桌详单</span>
			</div>
		</div>
		<!-- 输入框 -->
		<div id="bigbox">
			<div class="inputcolor">
				<div class="inputcolors" style='padding:8px 0 0 26px;text-align: left;font-size:14px;'>
					<div id="bigbox">
						<el-form id="box" style='margin-bottom:10px;' ref="form" :model="form" label-width="80px">
							<div class="block">
								<span class="demonstration" style="color: #FFFFFF;font-size: 14px;padding: 0 12px 0 0;margin-left: 12px;">日期选择</span>
								<el-date-picker v-model="value1" type="daterange" style="width:230px;" size="mini" range-separator="——" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
							</div>
							<el-radio-group class="time" v-model="form.resource">
								<el-radio label="今天"></el-radio>
								<el-radio label="昨天"></el-radio>
								<el-radio label="本月"></el-radio>
								<el-radio label="上月"></el-radio>
								<el-radio label="全部"></el-radio>
							</el-radio-group>
							<el-button size="mini" type="primary" style="background:#05339C;border:#05339C;color:#fff;" @click="onSubmit">查看</el-button>
							<el-button size="mini" style="background:#05339C;border:#05339C;color:#fff;" @click="onExport">导出</el-button>
						</el-form>
					</div>
					<div id="bigmain">
						<el-form id="main" ref="form" :model="form" label-width="80px">
							<el-form-item label="桌号">
								<el-input size="mini" v-model="form.deskid" style="width:120px;" placeholder="请输入桌号"></el-input>
							</el-form-item>
							<el-form-item label="靴号">
								<el-input size="mini" v-model="form.bootid" style="width:120px;" placeholder="请输入靴号"></el-input>
							</el-form-item>
							<el-form-item label="类型">
								<el-input size="mini" v-model="form.type" style="width:120px;" placeholder="请输入类型"></el-input>
							</el-form-item>
							<el-form-item label="注码">
								<el-input size="mini" v-model="form.betsize" style="width:120px;" placeholder="请输入注码"></el-input>
							</el-form-item>
							<el-form-item label="下注方式">
								<el-input size="mini" v-model="form.betway" style="width:120px;" placeholder="请输入下注方式"></el-input>
							</el-form-item>
						</el-form>
						<el-form id="main1" ref="form" :model="form" label-width="80px">
							<el-form-item label="代理卡号">
								<el-input size="mini" v-model="form.agenacycard" style="width:120px;" placeholder="请输入代理卡号"></el-input>
							</el-form-item>
							<el-form-item label="代理账号">
								<el-input size="mini" v-model="form.agenacyid" style="width:120px;" placeholder="请输入代理账号"></el-input>
							</el-form-item>
							<el-form-item label="代理姓名">
								<el-input size="mini" v-model="form.agenacyname" style="width:120px;" placeholder="请输入代理姓名"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" size="mini" @click="onSelect" style="background:#05339C;border:#05339C;color:#fff;">查看结账记录</el-button>
							</el-form-item>
							<el-form-item>
								<el-button size="mini" style="background:#05339C;border:#05339C;color:#fff;" @click="onExportAgenacy">导出代理洗码量</el-button>
							</el-form-item>
						</el-form>
					</div>
				</div>
			</div>
		</div>
		<div class="tabellist">
			<div id="list">
				<!-- 台桌类型 / 下注方式 / 帐号 / 姓名 / 总押 / 总赢 / 总洗码  / 洗码率 / 洗码费 / 
        占股 / 币种 / 占股收益 / 总收益 / 未结收益 / 总公司 / 上次结账 / 操作-->
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column prop="desktype" label="台桌类型" width="150"></el-table-column>
					<el-table-column prop="deskid" label="台桌号" width="120"></el-table-column>
					<el-table-column prop="bettotal" label="总押" width="120"></el-table-column>
					<el-table-column prop="winlos" label="玩家总输赢" width="120"></el-table-column>
					<el-table-column prop="flat" label="和" width="120"></el-table-column>
					<el-table-column prop="doubel" label="对子" width="120"></el-table-column>
					<el-table-column prop="rebateamount" label="洗码量" width="120"></el-table-column>
					<el-table-column prop="profitlos" label="公司盈亏" width="120"></el-table-column>
					<el-table-column prop="profit" label="存利润" width="120"></el-table-column>
					<el-table-column prop="zip" label="操作">

					</el-table-column>
				</el-table>
				
			</div>
		</div>
	</div>
</template>

<script>
	import Custombtn from "../../../components/Custombtn";
	export default {
		data() {
			return {
				value1: "",
				form: {
					deskid: "",
					bootid: "",
					betsize: "",
					betway: "",
					agenacycard: "",
					agenacyid: "",
					agenacyname: "",
					resource: '全部',

				},
				tableData: [{
					desktype:"1",
					deskid:"1",
					bettotal:"1",
					winlos:"1",
					flat:"1",
					doubel:"1",
					rebateamount:"1",
					profitlos:"1",
					profit:"1"
				}],
			};
		},
		methods: {
			onSubmit() {
				alert("查看");
			},
			onExport() {
				alert("导出");
			},
			onSelect() {
				alert("查看结账记录");
			},
			onExportAgenacy() {
				alert("导出代理洗码量");
			},
			// 分页
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		},
		components: {
			Custombtn: Custombtn
		}
	};
</script>

<style scoped>
	.tabellist>>>.el-table__body tr:hover>td {
		background: rgb(1, 23, 82);
	}
	
	.tabellist>>>.el-table td,
	.el-table th.is-leaf {
		background: rgb(1, 19, 71);
		color: #ffffff;
		border-collapse: collapse;
		border-color: rgb(6, 66, 89);
	}
	
	.tabellist>>>.el-table--border {
		color: #ffffff;
		border-collapse: collapse;
		border-color: rgb(6, 66, 89);
	}
	
	.tabellist>>>.el-table--border th,
	.el-table__fixed-right-patch {
		background: rgb(0, 36, 117);
		border-collapse: collapse;
		color: #ffffff;
	}
	
	.tabellist>>>.el-table th {
		background: rgb(0, 36, 117);
		border-collapse: collapse;
		border-color: rgb(6, 66, 89);
		color: #ffffff;
	}
	
	#thisbox>>>.el-form-item__label,
	.el-radio {
		color: #ffffff;
	}
	
	.inputcolors>>>.el-form-item__label,
	.el-radio {
		color: #ffffff;
	}
	
	.el-form-item {
		margin-bottom: 8px;
	}
</style>