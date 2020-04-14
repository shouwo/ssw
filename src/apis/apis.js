// 引入axios
import axios from 'axios'

// 配置服务器
// const IP = 'http://192.168.0.107:8080'
// const IP = 'http://192.168.0.169:8080'
// const IP = 'http://192.168.0.153:8080'

const IP = 'http://118.193.33.12:8080'

// const IP = 'http://118.193.33.12:8004'

// 登录
// post带参数
export function login(account, password) {
	return axios.post(IP + '/tracking/manager/login', { account, password })
}

// get不带参数
// export function gametype() {
//     return axios.get(IP+'/tracking/dictionary/type/game')
// }

// // get带参数
// export function addgoodslist(id,name,type,inprice,price,pprice,discount,mprice,innum,sold,stocknum,allstockprice,saleprice,refund,time) {
//     return axios.get(IP+'/index/addwares',{params:{id,name,type,inprice,price,pprice,discount,mprice,innum,sold,stocknum,allstockprice,saleprice,refund,time}})
// }


// 一、用户管理------------------------------
//  1.代理列表
// 用户查询
// 用户统计图
export function statistics(num, timePeriod) {
	return axios.post(IP + '/tracking/user/statistics',
		{ num, timePeriod })
}
// 1.a初始化数据
export function Agentlist(userType,page,pageSize) {
	return axios.post(IP + '/tracking/user/list',
		{userType,page,pageSize})
}

//1.c代理查询是否存在

export function selDl(account)
{return axios.post(IP + '/tracking/user/account/exist',{account})
}

//1.代理卡号查询
export function selDlCard(cardId)
{return axios.post(IP + '/tracking/user/cardId/exist',{cardId})
}
//1. b添加代理
export function addAgent(account,
	cardId,
	cardShufflerRatio,
	createPerson,
	name,
	parentId,
	phone,
	postil,
	proportion,
	rebatesEarnings) {
	return axios.post(IP + '/tracking/user/agent/add',
		{
			account,
			cardId,
			cardShufflerRatio,
			createPerson,
			name,
			parentId,
			phone,
			postil,
			proportion,
			rebatesEarnings
		})
}

// 1.c查询列表
export function queryagentlist(account, name, page, phone, pageSize, userType) {
	return axios.post(IP + '/tracking/user/list',
		{ account, name, page, phone, pageSize, userType })
}

//1.d修改
export function changeagentlist(account,
	cardId,
	cardShufflerRatio,
	createPerson,
	name,
	parentId,
	phone,
	postil,
	proportion
) {
	return axios.post(IP + '/tracking/user/agent/update', {
		account,
		cardId,
		cardShufflerRatio,
		createPerson,
		name,
		parentId,
		phone,
		postil,
		proportion
	})
}

//1.f删除
export function delagentlist(account) {
	return axios.post(IP + '/tracking/user/agent/delete', { account })
}

// 1.g导出
export function printExport(account, name, page, pageSize, phone, userType) {
	return axios.post(IP + '/tracking/user/list/export', { account, name, page, pageSize, phone, userType },{ responseType: 'arraybuffer' })
}



// 2.会员列表
// 2.a初始化数据
export function Viplist(userType,page,pageSize) {
	return axios.post(IP + '/tracking/user/list',
		{ userType,page,pageSize })
}

// 2.b查询记录
export function queryviplist(account, name, page, pageSize, phone, userType) {
	return axios.post(IP + '/tracking/user/list', { account, name, page, pageSize, phone, userType })
}



//添加会员
export function addVip(account,
	cardId,
	cardShufflerRatio,
	createPerson,
	name,
	parentId,
	phone,
	postil,
) {
	return axios.post(IP + '/tracking/user/agent/add',
		{
			account,
			cardId,
			cardShufflerRatio,
			createPerson,
			name,
			parentId,
			phone,
			postil
		})
}

//2.c修改会员
export function changeviplist(account,
	cardId,
	cardShufflerRatio,
	createPerson,
	name,
	parentId,
	phone,
	postil) {
	return axios.post(IP + '/tracking/user/member/update', {
		account,
		cardId,
		cardShufflerRatio,
		createPerson,
		name,
		parentId,
		phone,
		postil,
	})
}

//2.d删除
export function delviplist(account) {
	return axios.post(IP + '/tracking/user/member/delete', { account })
}


// 3.子代理列表
// a初始化查询Agentlist
// b添加代理addAgent

// 4.子会员列表

// 5.已删代理
//5.a初始化数据
export function deletedAgent(page,pageSize) {
	return axios.post(IP + '/tracking/user/deleteAgent/find', {page,pageSize})
}
// 5.b查询
export function delMember(account, name, parentId) {
	return axios.post(IP + '/tracking/user/deleteAgent/find', { account, name, parentId })
}
// 5.c还原
export function delAgentReduction(account) {
	return axios.post(IP + '/tracking/user/deleteAgent/restore', { account })
}

// 6.已删会员
//6.a初始化数据
export function deletedviplist(page,pageSize) {
	return axios.post(IP + '/tracking/user/deleteMember/find', {page,pageSize})
}
// 6.b查询
export function delvipquery(account, name, parentId) {
	return axios.post(IP + '/tracking/user/deleteMember/find', { account, name, parentId })
}
// 6.c还原
export function delvipreduction(account) {
	return axios.post(IP + '/tracking/user/deleteMember/restore', { account })
}

// 二、代理账目----------------------------
// 1.代理账目列表
// 1.a初始化数据
export function accountlist(moneyType,page,pageSize) {
	return axios.post(IP + '/tracking/agent/accounts/list',
		{moneyType,page,pageSize})
}
// 1.b查询记录
export function queryaccountlist(startTime,endTime,tableId,shoeId,tableType,moneyType,betType,cardId,account,name) {
    return axios.post(IP+'/tracking/agent/accounts/list',
		{startTime,endTime,tableId,shoeId,tableType,moneyType,betType,cardId,account,name})
}

//导出代理账目列表
export function accountlistExport(startTime,endTime,tableId,shoeId,tableType,moneyType,betType,cardId,account,name) {
    return axios.post(IP+'/tracking/agent/accounts/listExport',
		{startTime,endTime,tableId,shoeId,tableType,moneyType,betType,cardId,account,name}, { responseType: 'arraybuffer' })
}
//1.详情
export function detailsaccountlist(id,name,tel) {
    return axios.get(IP+'xxxxxxxxxx',{params:{id,name,tel}})
}

// 2.代理结账列表
// 1.a初始化数据
export function settleaccountlist(id,moneyType) {
	return axios.post(IP + '/tracking/agent/accounts/settle',
		{id,moneyType})
}
// 1.b查询记录
export function querysettlelist(id,name,tel) {
    return axios.get(IP+'xxxxxxxxxx',{params:{id,name,tel}})
}
//1.详情
export function detailssettlelist(id,name,tel) {
    return axios.get(IP+'xxxxxxxxxx',{params:{id,name,tel}})
}


// 查询公司走势图
export function findProfit() {
    return axios.post(IP + '/tracking/componeyAccounts/find',
        {})
}


// 3.子代理账目列表

// 4子代理结账列表

// 三、会员目录------------------------------
// 1.会员账目列表
// 1.a查询记录
export function viplistquery(betType, endTime, gameType, moneyType, page, pageSize, shoeId, startTime, tableId) {
	return axios.post(IP + '/tracking/member/accounts/list',
		{ betType, endTime, gameType, moneyType, page, pageSize, shoeId, startTime, tableId })
}
//1.b初始化数据
export function vipaccountlist(page, pageSize,) {
	return axios.post(IP + '/tracking/member/accounts/list',
		{page, pageSize,})
}
//会员查询
export function checklist(betType, endTime, gameType, moneyType, shoeId, startTime, tableId) {
	return axios.post(IP + '/tracking/member/accounts/list',
		{ betType, endTime, gameType, moneyType, shoeId, startTime, tableId })
}
//1.c详情
export function detailsvipaccountlist(account) {
	return axios.post(IP + '/tracking/member/accounts/one/detail',
		{ account })
}
//导出会员列表
// export function queryvipExportlist(betType, endTime, gameType, moneyType, shoeId, startTime, tableId) {
// 	return axios.post(IP + '/tracking/member/accounts/list/export', { betType, endTime, gameType, moneyType, shoeId, startTime, tableId },{ responseType: 'arraybuffer' })
// }

export function queryvipExportlist() {
	return axios.post(IP + '/tracking/member/accounts/list/export', { },{ responseType: 'arraybuffer' })
}

//导出
export function print() {
	return axios.post(IP + '/tracking/member/accounts/list/print',
		{})
}


// 2.子会员账目列表--

// 四、铺流水账目-----------------------------------
// 1.a初始化
export function runlist(page, pageSize) {
	return axios.post(IP + '/tracking/play/accounts/findResult',
		{ page, pageSize })
}

// 1.b查询
export function runlistquery(createTime, tableId, shoeId) {
	return axios.post(IP + '/tracking/play/accounts/findResult',
		{ createTime, tableId, shoeId })
}

// 1.c详情
export function detailsrunlist(playNum) {
	return axios.post(IP + '/tracking/play/accounts/findWater',
		{ playNum })
}




// 五、台桌管理-----------------------------------
// 1.台桌列表
// 初始化
export function deskinit() {
	return axios.get(IP + '/tracking/table/accounts/tableManagerInit', { })
}

// 条件查询列表  
export function desklist(
	startTime,
	endTime,
	tableId,
	shoeId,
	gameType,
	moneyType,
	betWay,
	page,
	size,
) {
	return axios.post(IP + '/tracking/table/accounts/findByCondition', {
		startTime,
		endTime,
		tableId,
		shoeId,
		gameType,
		moneyType,
		betWay,
		page,
		size,
	})
}
// 详情查询/tracking/table/accounts/doExcel
export function deskdetails(playNumList, page, size) {
	return axios.post(IP + '/tracking/table/accounts/findDetailsByCondition', { playNumList, page, size })
}


// 导出
export function deskexport(
	// betWay,
	// endTime,
	// gameType,
	// moneyType,
	// page,
	// shoeId,
	// size,
	// startTime,
	// tableId,
) {
	return axios.post(IP + '/tracking/table/accounts/doExcel', {
		// betWay,
		// endTime,
		// gameType,
		// moneyType,
		// page,
		// shoeId,
		// size,
		// startTime,
		// tableId,
	}, { responseType: 'arraybuffer' })
}

// 详情导出
export function deskdetailsexport(playNumList) {
	return axios.post(IP + '/tracking/table/accounts/deDetailsExcel', { playNumList })
}


// 六、龙虎和局------------------------------------
// 1.a初始化数据
export function DragonTigerlist() {
	return axios.post(IP + '/tracking/dragonTigerSum/accounts/find', {})
}
// 1.b查询
export function DragonTigerquery(account, entTime, gameType, moneyType, shoeId, startTime, tableNum) {
	return axios.post(IP + '/tracking/dragonTigerSum/accounts/find', { account, entTime, gameType, moneyType, shoeId, startTime, tableNum })
}
// export function DragonTigerquery(account,gameType,moneyType,shoeId,tableNum) {
// 	return axios.post(IP + '/tracking/dragonTigerSum/accounts/find', {account,gameType,moneyType,shoeId,tableNum})
// }

// 1.c详情
export function detailsDragonTiger(account) {
	return axios.post(IP + '/tracking/dragonTigerSum/accounts/findParticu', { account })
}


// 七、洗码结账-------------------------------------
// 1.a初始化数据
export function clearlist() {
	return axios.post(IP + 'xxxxxxxx', {})
}

// 1.b查询
export function clearquery(endTime, gameType, id, moneyType, page, size) {
	return axios.post(IP + '/tracking/washpay/findByCondition', { endTime, gameType, id, moneyType, page, size })
}

//查询结账记录
export function getRecord(endTime, gameType, id, moneyType, page, size) {
	return axios.post(IP + '/tracking/washpay/getRecord', { endTime, gameType, id, moneyType, page, size })
}

//导出
export function exportExcel(endTime, gameType, id, moneyType, page, size) {
	return axios.post(IP + '/tracking/washpay/doExcel', { endTime, gameType, id, moneyType, page, size }, { responseType: 'arraybuffer' })
}

//结账并打印
export function settleExcel(endTime, gameType, id, moneyType, page, size) {
	return axios.post(IP + '/tracking/washpay/settleAndExcel', { endTime, gameType, id, moneyType, page, size }, { responseType: 'arraybuffer' })
}

// 1.c详情
export function detailsclear() {
	return axios.post(IP + 'xxxxxxxxxx', {})
}



// 下拉列表------------------------
//下拉列表--类型
export function types() {
	return axios.get(IP + '/tracking/dictionary/type/game')
}
//下拉列表--下注方式
export function betMethods() {
	return axios.get(IP + '/tracking/dictionary/type/money')
}
//下拉列表--注码
export function injectionCodes() {
	return axios.get(IP + '/tracking/dictionary/type/bet')
}