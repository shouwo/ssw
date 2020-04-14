<template>
	<div id="app">
		<el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
			<el-tab-pane label="常规设置" name="first">
				<div>
					<div style="margin-top: 15px;" class="styles">
						<div class="styles2">
							<span style="color: red;">*</span>
							系统名称
						</div>
						<div class="buttons"><input type="text" class="inputs" placeholder="请输入内容" /></div>
					</div>
				</div>

				<div></div>
				<div style="margin-top: 25px;" class="styles">
					<div class="logo1"><span>系统Logo</span></div>
					<div class="buttonss">
						
						<div class="upload_height">
						<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">
								将文件拖到此处，或
								<em>点击上传</em>
						<!-- 		<div>只能上传jpg/png文件，且不超过500kb</div> -->
							</div>
						</el-upload>
						</div>
					</div>
				</div>

				<div style="margin-top: 10px;" class="styles">
					<div class="styles2"><span>标题</span></div>
					<div class="buttons"><input type="text" class="inputs" placeholder="请输入内容" /></div>
				</div>
				<div style="margin-top: 10px;" class="styles">
					<div class="styles2"><span>关键词</span></div>
					<div class="buttons"><input type="text" class="inputs" placeholder="请输入内容" /></div>
				</div>

				<div style="margin-top: 10px;" class="styles">
					<div class="describe1"><span>描述</span></div>
					<div class="describe2"><textarea style="width: 100%;height: 82px;" class="inputs" placeholder="请输入内容"></textarea></div>
				</div>

				<div style="margin-top: 10px;" class="styles">
					<div class="styles2"><span>系统</span></div>
					<div class="buttons"><input type="text" class="inputs" placeholder="请输入内容" /></div>
				</div>

				<div style="margin-top: 10px;" class="styles">
					<div class="styles2"><span>版权号</span></div>
					<div class="buttons"><input type="text" class="inputs" placeholder="请输入内容" /></div>
				</div>
				<div style="margin-top: 10px;" class="styles">
					<div class="styles2"><span>备案号</span></div>
					<div class="buttons"><input type="text" class="inputs" placeholder="请输入内容" /></div>
				</div>
				<div style="margin-top: 10px;" class="styles">
					<div class="styles2"><span>其他信息</span></div>
					<div class="buttons"><input type="text" class="inputs" placeholder="请输入内容" /></div>
				</div>
				<div style="margin-top: 10px;" class="styles">
					<div class="styles2"><span>系统状态</span></div>
					<div class="radios">
						<input type="radio" name="open" class="radioss" value="开启" checked />
						开启&nbsp;&nbsp;
						<input type="radio" name="open" class="radioss" value="关闭" />
						关闭&nbsp;&nbsp;
					</div>
				</div>

				<div style="margin-top: 10px;" class="styles">
					<div class="describe1"><span>统计代码</span></div>
					<div class="describe2"><textarea style="width: 100%;height: 82px;" class="inputs" placeholder="请输入内容"></textarea></div>
					<div style="margin-top: 10px;" class="styles">
						<button class="buttonSumbit">保存</button>
						<br />
						<br />
						<br />
						<br />
					</div>
				</div>
			</el-tab-pane>

			<!-- <el-tab-pane label="会员管理" name="second">会员管理模块</el-tab-pane>

			<el-tab-pane label="图片水印" name="third">
				<div style="margin-top: 10px;" class="styles">
					<div class="styles2"><span>图片名子</span></div>
					<div class="buttons"><input type="text" class="inputs" placeholder="请输入内容" /></div>
				</div>
				<div style="margin-top: 10px;" class="styles">
					<div class="styles2"><span>水印内容</span></div>
					<div class="buttons"><input type="text" class="inputs" placeholder="请输入内容" /></div>
				</div>
				<div style="margin-top: 10px;" class="styles">
					<div class="styles2"><span>其他信息</span></div>
					<div class="buttons"><input type="text" class="inputs" placeholder="请输入内容" /></div>
				</div>
				<div style="margin-top: 10px;" class="styles">
					<div class="styles2"><span>水印状态</span></div>
					<div class="radios">
						<input type="radio" name="opens" class="radioss" value="开启" checked="true" />
						开启&nbsp;&nbsp;
						<input type="radio" name="opens" class="radioss" value="关闭" />
						关闭&nbsp;&nbsp;
					</div>
				</div>

				<div style="margin-top: 10px;" class="styles">
					<button class="buttonSumbit">保存</button>
					<br />
					<br />
					<br />
					<br />
				</div>
			</el-tab-pane> -->

			<el-tab-pane label="系统简介" name="fourth">
				系统简介模块
				<div style="margin-top: 20px;" class="styles">
					<div class="logo1"><span>系统Logo</span></div>
					<div class="buttonss" >
						<div class="upload_height">
						<el-upload class="upload-demo" id="tests" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">
								将文件拖到此处，或
								<em>点击上传</em>
							</div>
						</el-upload>
					</div>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
export default {
	data() {
		return {
			activeName: 'first',
			name: 321
		};
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
		new() {
			return 123;
		}
	}
};
</script>

//修改上传文件高度
<style scoped>
	.upload_height>>>.el-upload-dragger{
		height: 100px;
	}
	.upload_height>>>.el-icon-upload{
		line-height: 0px;
	}
</style>

<style>
	
	
	
.styles {
	width: 100%;
	float: left;
}
.logo1 {
	height: 100px;
	width: 10%;
	border: 1px solid rgb(6, 66, 89);
	color: #ffffff;
	background-color: rgb(0, 36, 117);
	text-align: center;
	line-height: 100px;
	font-size: 14px;
	float: left;
	border-radius: 4px;
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
}
.buttonss {
	height: 100px;
	width: 40%;
	float: left;
	border: 1px solid rgb(6, 66, 89);
	color: #909399;
	background-color: #ffffff;
	border-radius: 4px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
}

.buttons {
	width: 40%;
	float: left;
	/* 	border: 1px solid #DCDFE6; */
	color: #909399;
	border-radius: 4px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
}

.styles2 {
	height: 40px;
	width: 10%;
	border: 1px solid rgb(6, 66, 89);
	color: #ffffff;
	background-color: rgb(0, 36, 117);
	text-align: center;
	line-height: 35px;
	font-size: 14px;
	float: left;
	border-radius: 4px;
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
}
.inputs {
	-webkit-appearance: none;
	background-color: #fff;
	background-image: none;
	border: 1px solid #dcdfe6;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	color: #606266;
	display: inline-block;
	font-size: inherit;
	height: 42px;
	line-height: 40px;
	outline: 0;
	padding: 0 15px;
	-webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	width: 100%;
	border-radius: 4px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
}
/*设置placeholder属性*/
.inputs::-webkit-input-placeholder {
	color: #dcdfe6;
	font-size: 15px;
	text-align: left;
}

.describe1 {
	height: 80px;
	width: 10%;
	border: 1px solid rgb(6, 66, 89);
	color: #ffffff;
	background-color: rgb(0, 36, 117);
	text-align: center;
	line-height: 80px;
	font-size: 14px;
	float: left;
	border-radius: 4px;
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
}
.describe2 {
	float: left;
	color: #909399;
	width: 40%;
	border-radius: 4px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
}
.radios {
	float: left;
	text-align: left;
	width: 40%;
	height: 40px;
	background-color: #fff;
	background-image: none;
	border: 1px solid #dcdfe6;
	border-radius: 4px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
}

.buttonSumbit {
	width: 80px;
	height: 40px;
	float: left;
	background-color: rgb(0, 36, 117);
	border: 1px solid rgb(6, 66, 89);
	color: #ffffff;
	border: 0px;
}
.radioss {
	margin-top: 15px;
	margin-left: 10px;
}
.el-tabs__content {
	border: 1px solid rgb(6, 66, 89);
	background-color: rgb(1, 13, 52);
}
</style>
