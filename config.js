module.exports = {
	// mongodb 配置
	MONGO_URI: "mongodb://127.0.0.1:27017/coolfish",
	// 程序运行的端口
	LISTEN_PORT: process.env.PORT || 9228,
	// 网站名字
	NAME: 'IT酷鱼网',
	// 负责人
	ADMIN: {
		name: 'Yves',
		qq: '461836324',
		email: '461836324@qq.com'
	},
	// 发布时间
	RELEASEtIME : '2014-12-04',
}