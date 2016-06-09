-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-05-25 13:49:18
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `time` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=234 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `pic`, `time`, `category`) VALUES
(2, '中国游客助日本贸易5年来首顺差：赴日爆买', 'http://t11.baidu.com/it/u=http://r3.sinaimg.cn/10230/2015/1116/b9/6/45554295/auto.jpg&amp;fm=36', '2016-05-13', '推荐'),
(3, '无业男冒充军人骗财骗色 女孩痴心不改', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_bt/0/295873274/1000&fm=94', '2016-05-13', '推荐'),
(4, '马英九回应卸任后是否会访问大陆：暂无计划', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_ls/0/295990314_150120/0&fm=36', '2016-05-13', '推荐'),
(5, '证监会换帅80天 刘士余监管思路浮出水面', 'http://t10.baidu.com/it/u=http://p3.ifengimg.com/ifengimcp/pic/20160513/d115a67e3a7a1a09ba1b_size10_w329_h220.jpg&fm=36', '2016-05-13', '推荐'),
(6, '上证所二度问询西藏旅游：并购拉卡拉是否构成借壳上市', 'http://t12.baidu.com/it/u=http://image.thepaper.cn/image/4/919/818.jpg&fm=36', '2016-05-13', '推荐'),
(7, '联合国调降2016年全球经济增长预估至2.4%', 'http://t11.baidu.com/it/u=http://n.sinaimg.cn/finance/transform/20160513/O9Qd-fxsenvm0351600.jpg&fm=36', '2016-05-13', '推荐'),
(8, '男子向中国驻韩大使馆投掷污物被抓 身份不详', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_ls/0/295895001_150120/0&fm=36', '2016-05-13', '推荐'),
(9, '世界黄金协会报告：中国实物黄金投资将整体保持健康稳定', 'http://t10.baidu.com/it/u=http://z1.dfcfw.com/2016/5/12/20160512162019921851891.jpg&fm=36', '2016-05-13', '推荐'),
(10, '市场质疑两次加息前景 美联储恐重演年末加息 ', 'http://t10.baidu.com/it/u=http://posts.cdn.wallstcn.com/47/25/2d/20160513market-fed-hike.jpg!article.foil&fm=36', '2016-05-13', '推荐'),
(11, '二线城市土地“高烧” 房企：即便亏钱了也要拿高价地 ', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0512/07/e/31602852/auto.jpg&fm=36', '2016-05-13', '推荐'),
(12, '搜狐快评:父行贿自首 掏鸟案量刑问题再起波澜', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146311843095680136_720_1000.JPEG&fm=36', '2016-05-13', '推荐'),
(13, '双少65分雷霆晋级西决 莱昂纳德22+9马刺告别 ', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0513/4a/3/42598710/950x732.jpg&fm=36', '2016-05-13', '推荐'),
(14, '国产男装普现业绩滑坡今年仍是行业调整年', 'http://t10.baidu.com/it/u=http://epaper.ssrb.com.cn/resfile/2016-05-13/05/DSC_7059%20%E5%89%AF%E6%9C%AC_b.jpg&fm=36', '2016-05-13', '推荐'),
(15, '说爱你不容易!浙江20批小龙虾检出疑似致癌物', 'http://t12.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146312000775124134_720_1000.JPEG&fm=36', '2016-05-13', '推荐'),
(16, '温家宝身穿民族服饰 现身内蒙古赤峰', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_bt/0/296160906/1000&fm=94', '2016-05-13', '推荐'),
(17, '因为中国钢铁 欧洲这次和美国站在了一边 ', 'http://t12.baidu.com/it/u=http://img1.caijing.com.cn/2016/0513/1463102785846.png&fm=36', '2016-05-13', '推荐'),
(18, '中国打击国际逃避税：2018年实现金融涉税信息自动交换', 'http://t10.baidu.com/it/u=http://n.sinaimg.cn/translate/20160513/8Ume-fxsexua5797714.jpg&fm=36', '2016-05-13', '推荐'),
(19, '新三板做市商扩容 “先锋系”、“PE系”纷纷入局', 'http://d.hiphotos.baidu.com/news/w%3D638/sign=17ca8552870a19d8cb0387060bfb82c9/b812c8fcc3cec3fd27767b96d188d43f8694278d.jpg', '2016-05-13', '推荐'),
(20, '京东金融一季度仍亏损 自称业内地位有提升', 'http://t12.baidu.com/it/u=http://finance.eastday.com/images/thumbnailimg/month_1605/20160513101317235.jpg&fm=36', '2016-05-13', '推荐'),
(21, '困难当中有机遇 国企职工是财富（声音）', 'http://t10.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/GQ/20160513/30/10185935715837833958.jpg&fm=36', '2016-05-13', '推荐'),
(22, '山东现重型航空炸弹 引爆后炸出直径10米巨坑', 'http://t11.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/05/13/146309856208713057_620_1000.JPEG&fm=36', '2016-05-13', '推荐'),
(23, '92亿主力资金近三日大量撤出中小创 ', 'http://t11.baidu.com/it/u=http://hqpick.eastmoney.com/k/0021352.png&fm=36', '2016-05-13', '推荐'),
(24, '市场传言日银进一步放宽政策 美元兑日元攀升', 'http://t10.baidu.com/it/u=http://n.sinaimg.cn/translate/20160513/DKNY-fxsexua5802692.jpg&fm=36', '2016-05-13', '推荐'),
(25, '北上广深房价真的不会全面暴跌吗？ ', 'http://b.hiphotos.baidu.com/news/crop%3D21%2C0%2C365%2C219%3Bw%3D638/sign=5e9a54f045a7d933abe7be339079e03f/838ba61ea8d3fd1f101dccde374e251f95ca5f39.jpg', '2016-05-13', '百家'),
(26, '重磅：阿里加入反假货联盟 疑似涉及利益输送', 'http://e.hiphotos.baidu.com/news/w%3D638/sign=bd56ce09a644ad342ebf8484e8a30c08/e61190ef76c6a7efe26ec4c2fafaaf51f2de668d.jpg', '2016-05-13', '百家'),
(27, '无人驾驶、车联网与地图软件的自我裂变', 'http://c.hiphotos.baidu.com/news/w%3D638/sign=e31af8388d13632715edc130a98da056/f7246b600c338744193d4b98560fd9f9d62aa05e.jpg', '2016-05-13', '百家'),
(28, '你的大脑，其实只容得下五个挚友', 'http://g.hiphotos.baidu.com/news/crop%3D0%2C15%2C412%2C247%3Bw%3D638/sign=f0ef462397529822117c6383eafa57fa/b21bb051f819861880b695604ded2e738ad4e665.jpg', '2016-05-13', '百家'),
(29, '周琦体测三项排第一，或成为亚洲最好的中锋', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=105bb508d600baa1ba2c44b87f11b9b1/962bd40735fae6cdf4efd38508b30f2443a70ffe.jpg', '2016-05-13', '百家'),
(30, 'AI医生和VR技术，能不能改善医患关系？| 造就', 'http://a.hiphotos.baidu.com/news/w%3D638/sign=05e697e7900a304e5222a3f9e9caa7c3/7c1ed21b0ef41bd555970b1756da81cb38db3d09.jpg', '2016-05-13', '百家'),
(31, '方励下跪之后，《百鸟朝凤》排片到底涨了没有？', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=f93c4be2abaf2eddd4f14aeab5110102/8d5494eef01f3a29a2c0e02a9e25bc315d607ccd.jpg', '2016-05-13', '百家'),
(32, '欢聚时代私有化暂停：中概股回归需闯过哪些BOSS', 'http://a.hiphotos.baidu.com/news/w%3D638/sign=3d8b82584010b912bfc1f5fdfbfcfcb5/7a899e510fb30f24b23d29e0cf95d143ac4b03aa.jpg', '2016-05-13', '百家'),
(33, '世界黄金协会报告：中国实物黄金投资将整体保持健康稳定', 'http://t10.baidu.com/it/u=http://z1.dfcfw.com/2016/5/12/20160512162019921851891.jpg&fm=36', '2016-05-13', '百家'),
(34, '市场质疑两次加息前景 美联储恐重演年末加息 ', 'http://t10.baidu.com/it/u=http://posts.cdn.wallstcn.com/47/25/2d/20160513market-fed-hike.jpg!article.foil&fm=36', '2016-05-13', '百家'),
(35, '二线城市土地“高烧” 房企：即便亏钱了也要拿高价地 ', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0512/07/e/31602852/auto.jpg&fm=36', '2016-05-13', '百家'),
(36, '搜狐快评:父行贿自首 掏鸟案量刑问题再起波澜', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146311843095680136_720_1000.JPEG&fm=36', '2016-05-13', '百家'),
(37, '双少65分雷霆晋级西决 莱昂纳德22+9马刺告别 ', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0513/4a/3/42598710/950x732.jpg&fm=36', '2016-05-13', '百家'),
(38, '国产男装普现业绩滑坡今年仍是行业调整年', 'http://t10.baidu.com/it/u=http://epaper.ssrb.com.cn/resfile/2016-05-13/05/DSC_7059%20%E5%89%AF%E6%9C%AC_b.jpg&fm=36', '2016-05-13', '百家'),
(39, '说爱你不容易!浙江20批小龙虾检出疑似致癌物', 'http://t12.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146312000775124134_720_1000.JPEG&fm=36', '2016-05-13', '百家'),
(40, '温家宝身穿民族服饰 现身内蒙古赤峰', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_bt/0/296160906/1000&fm=94', '2016-05-13', '百家'),
(41, '因为中国钢铁 欧洲这次和美国站在了一边 ', 'http://t12.baidu.com/it/u=http://img1.caijing.com.cn/2016/0513/1463102785846.png&fm=36', '2016-05-13', '百家'),
(42, '中国打击国际逃避税：2018年实现金融涉税信息自动交换', 'http://t10.baidu.com/it/u=http://n.sinaimg.cn/translate/20160513/8Ume-fxsexua5797714.jpg&fm=36', '2016-05-13', '百家'),
(43, '新三板做市商扩容 “先锋系”、“PE系”纷纷入局', 'http://d.hiphotos.baidu.com/news/w%3D638/sign=17ca8552870a19d8cb0387060bfb82c9/b812c8fcc3cec3fd27767b96d188d43f8694278d.jpg', '2016-05-13', '百家'),
(44, '高管也被揩油！史上最夸张的8次做市商低价拿票', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C104%2C901%2C540%3Bw%3D638/sign=3441f977412309f7f320f7524f3e20c2/14ce36d3d539b60041f8e354ee50352ac65cb71b.jpg', '2016-05-13', '百家'),
(45, '如果吴天明健在，你们还会如此赞誉《百鸟朝凤》吗？', 'http://b.hiphotos.baidu.com/news/crop%3D33%2C1%2C422%2C253%3Bw%3D638/sign=49d30dd3bda1cd1111f928608421fbd0/f2deb48f8c5494ee4110e6fa2af5e0fe99257e27.jpg', '2016-05-13', '百家'),
(46, '山东现重型航空炸弹 引爆后炸出直径10米巨坑', 'http://t11.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/05/13/146309856208713057_620_1000.JPEG&fm=36', '2016-05-13', '百家'),
(47, '详解最严互联网金融专项整治：谁负责，谁将受严查？', 'http://c.hiphotos.baidu.com/news/crop%3D0%2C35%2C612%2C367%3Bw%3D638/sign=67b4a1e7900a304e466dfabaecf88bb5/b90e7bec54e736d1b58559eb9c504fc2d46269bb.jpg', '2016-05-13', '百家'),
(48, '苹果10亿美金投资滴滴，你必须知道的六件事', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C1%2C498%2C299%3Bw%3D638/sign=50c29923f036afc31a4365258e29c7f5/6c224f4a20a446235a7a71819f22720e0df3d7a5.jpg', '2016-05-13', '百家'),
(49, '北京检方:雷洋案已委托尸检 视频材料已提取', 'http://t10.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0513/9b/6/22600677/auto.jpg&fm=36', '2016-05-13', '本地'),
(50, '北京各种“诡异桥”建成多年无法通行 想从此过还要等多久？', 'http://t12.baidu.com/it/u=http://www.hinews.cn/pic/003/007/719/00300771923_c0208a6c.jpg&fm=36', '2016-05-13', '本地'),
(51, '官员涉贪3千万其妻意外:未拿钱回家,以为住房是租的', 'http://t12.baidu.com/it/u=http://www.cnnb.com.cn/pic/003/000/163/00300016399_5d84768e.jpg&fm=36', '2016-05-13', '本地'),
(52, '北京明日最高温度15°多座山区或下雪', 'http://t11.baidu.com/it/u=http://p3.ifengimg.com/a/2016_20/c64b6051b3f4b5d_size309_w457_h533.png&fm=36', '2016-05-13', '本地'),
(53, '北京通州限购后公寓市场进入冰点 客源转战大兴房山', 'http://t10.baidu.com/it/u=http://img.cyol.com/img/news/data/attachement/jpg/site2/2016-05-13/569284090383547039612569048.jpg&fm=36', '2016-05-13', '本地'),
(54, '北京不锈钢屏风制作-不锈钢屏风生产厂家', 'http://t11.baidu.com/it/u=http://www.jinlihengmei.com/uploads/allimg/160506/1-16050615242C13.jpg&fm=36', '2016-05-13', '本地'),
(55, '联合国调降2016年全球经济增长预估至2.4%', 'http://t11.baidu.com/it/u=http://n.sinaimg.cn/finance/transform/20160513/O9Qd-fxsenvm0351600.jpg&fm=36', '2016-05-13', '本地'),
(56, '男子向中国驻韩大使馆投掷污物被抓 身份不详', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_ls/0/295895001_150120/0&fm=36', '2016-05-13', '本地'),
(57, '世界黄金协会报告：中国实物黄金投资将整体保持健康稳定', 'http://t10.baidu.com/it/u=http://z1.dfcfw.com/2016/5/12/20160512162019921851891.jpg&fm=36', '2016-05-13', '本地'),
(58, '市场质疑两次加息前景 美联储恐重演年末加息 ', 'http://t10.baidu.com/it/u=http://posts.cdn.wallstcn.com/47/25/2d/20160513market-fed-hike.jpg!article.foil&fm=36', '2016-05-13', '本地'),
(59, '二线城市土地“高烧” 房企：即便亏钱了也要拿高价地 ', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0512/07/e/31602852/auto.jpg&fm=36', '2016-05-13', '本地'),
(60, '搜狐快评:父行贿自首 掏鸟案量刑问题再起波澜', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146311843095680136_720_1000.JPEG&fm=36', '2016-05-13', '本地'),
(61, '双少65分雷霆晋级西决 莱昂纳德22+9马刺告别 ', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0513/4a/3/42598710/950x732.jpg&fm=36', '2016-05-13', '本地'),
(62, '国产男装普现业绩滑坡今年仍是行业调整年', 'http://t10.baidu.com/it/u=http://epaper.ssrb.com.cn/resfile/2016-05-13/05/DSC_7059%20%E5%89%AF%E6%9C%AC_b.jpg&fm=36', '2016-05-13', '本地'),
(63, '说爱你不容易!浙江20批小龙虾检出疑似致癌物', 'http://t12.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146312000775124134_720_1000.JPEG&fm=36', '2016-05-13', '本地'),
(64, '网曝女生被老师摸胸 北京联大:涉事教师被停课', 'http://t12.baidu.com/it/u=http://img1.cache.netease.com/catchpic/9/96/965FA171607779C6496BB93E8ADF757D.jpg&fm=36', '2016-05-13', '本地'),
(65, '因为中国钢铁 欧洲这次和美国站在了一边 ', 'http://t12.baidu.com/it/u=http://img1.caijing.com.cn/2016/0513/1463102785846.png&fm=36', '2016-05-13', '本地'),
(66, '中国打击国际逃避税：2018年实现金融涉税信息自动交换', 'http://t10.baidu.com/it/u=http://n.sinaimg.cn/translate/20160513/8Ume-fxsexua5797714.jpg&fm=36', '2016-05-13', '本地'),
(67, '新三板做市商扩容 “先锋系”、“PE系”纷纷入局', 'http://d.hiphotos.baidu.com/news/w%3D638/sign=17ca8552870a19d8cb0387060bfb82c9/b812c8fcc3cec3fd27767b96d188d43f8694278d.jpg', '2016-05-13', '本地'),
(68, '京东金融一季度仍亏损 自称业内地位有提升', 'http://t12.baidu.com/it/u=http://finance.eastday.com/images/thumbnailimg/month_1605/20160513101317235.jpg&fm=36', '2016-05-13', '本地'),
(69, '困难当中有机遇 国企职工是财富（声音）', 'http://t10.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/GQ/20160513/30/10185935715837833958.jpg&fm=36', '2016-05-13', '本地'),
(70, '官方机构：飞机撒药涉及北京11个区 无住宅区', 'http://t12.baidu.com/it/u=http://p1.ifengimg.com/a/2016_20/472743473c41c98_size92_w400_h263.jpg&fm=36', '2016-05-13', '本地'),
(71, '田联挑战赛北京站赛程：17项盛宴 飞人大战压轴 ', 'http://t10.baidu.com/it/u=http://k.sinaimg.cn/n/sports/transform/20160513/LFdM-fxsenvx0987560.jpg/w570419.jpg&fm=36', '2016-05-13', '本地'),
(72, '中国(北京)电子商务大会将再次亮相', 'http://t11.baidu.com/it/u=http://img7.sjfzxm.com/upload/image_remote/2016/05/13/4f8351f6-f850-4615-9570-a42e93c80f44.jpg&fm=36', '2016-05-13', '本地'),
(73, '李嘉诚告病假缺席股东会 留家吃流质食物', 'http://t10.baidu.com/it/u=http://z1.dfcfw.com/2016/5/13/20160513161231116063686.jpg&fm=36', '2016-05-13', '娱乐'),
(74, '文瑾莹主演《玻璃庭院》 《麦当娜》申秀媛执导', 'http://t11.baidu.com/it/u=http://www.glofilm.com/uploads/allimg/160513/2001251U7-0.jpg&fm=36', '2016-05-13', '娱乐'),
(75, '林志玲极限挑战 限时拍剧当女主角黄渤跑龙套', 'http://t12.baidu.com/it/u=http://img.5669.com/uploads/allimg/160513/62-1605131P5192M.jpg&fm=36', '2016-05-13', '娱乐'),
(76, '你的大脑，其实只容得下五个挚友', 'http://g.hiphotos.baidu.com/news/crop%3D0%2C15%2C412%2C247%3Bw%3D638/sign=f0ef462397529822117c6383eafa57fa/b21bb051f819861880b695604ded2e738ad4e665.jpg', '2016-05-13', '娱乐'),
(77, '周琦体测三项排第一，或成为亚洲最好的中锋', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=105bb508d600baa1ba2c44b87f11b9b1/962bd40735fae6cdf4efd38508b30f2443a70ffe.jpg', '2016-05-13', '娱乐'),
(78, '《小丈夫》姐弟恋遭遇黄昏恋 杨玏甜蜜求婚被打昏', 'http://t11.baidu.com/it/u=http://y1.ifengimg.com/cmpp/2016/05/13/11/2997008c-0af3-4bb1-aef4-26287b3e142e_size70_w580_h385.jpg&fm=36', '2016-05-13', '娱乐'),
(79, '方励下跪之后，《百鸟朝凤》排片到底涨了没有？', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=f93c4be2abaf2eddd4f14aeab5110102/8d5494eef01f3a29a2c0e02a9e25bc315d607ccd.jpg', '2016-05-13', '娱乐'),
(80, '万达又在买买买：并购好莱坞娱乐营销老牌公司', 'http://t11.baidu.com/it/u=http://img001.21cnimg.com/photos/album/20160513/m600/9B3056D160CBBB9B7457E120ACBF4E08.jpeg&fm=36', '2016-05-13', '娱乐'),
(81, '井柏然：希望跟倪妮低调点 不想做小鲜肉', 'http://t11.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0513/11/8/77603381/auto.jpg&fm=36', '2016-05-13', '娱乐'),
(82, '胡杏儿在外拍戏老公不探班：他怕我搞婚外情，盯着我吗？', 'http://t12.baidu.com/it/u=http://inews.gtimg.com/newsapp_match/0/296757623/0&fm=36', '2016-05-13', '娱乐'),
(83, '王巧再登央视《开门大吉》 唱《虫儿飞》忆童年', 'http://t12.baidu.com/it/u=http://img1.gtimg.com/ent/pics/hv1/133/95/2068/134496058.jpg&fm=36', '2016-05-13', '娱乐'),
(84, '搜狐快评:父行贿自首 掏鸟案量刑问题再起波澜', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146311843095680136_720_1000.JPEG&fm=36', '2016-05-13', '娱乐'),
(85, '双少65分雷霆晋级西决 莱昂纳德22+9马刺告别 ', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0513/4a/3/42598710/950x732.jpg&fm=36', '2016-05-13', '娱乐'),
(86, '国产男装普现业绩滑坡今年仍是行业调整年', 'http://t10.baidu.com/it/u=http://epaper.ssrb.com.cn/resfile/2016-05-13/05/DSC_7059%20%E5%89%AF%E6%9C%AC_b.jpg&fm=36', '2016-05-13', '娱乐'),
(87, '说爱你不容易!浙江20批小龙虾检出疑似致癌物', 'http://t12.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146312000775124134_720_1000.JPEG&fm=36', '2016-05-13', '娱乐'),
(88, '日电车车门无法关闭 用塑胶布挡门继续行驶(图) ', 'http://t11.baidu.com/it/u=http://www.chinanews.com/cr/2016/0513/1510990877.jpg&fm=36', '2016-05-13', '娱乐'),
(89, '宝刀未老！95岁秦怡优雅现身 与朱迅拥抱', 'http://t11.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0513/75/6/36600614/auto.jpg&fm=36', '2016-05-13', '娱乐'),
(90, '中国打击国际逃避税：2018年实现金融涉税信息自动交换', 'http://t10.baidu.com/it/u=http://n.sinaimg.cn/translate/20160513/8Ume-fxsexua5797714.jpg&fm=36', '2016-05-13', '娱乐'),
(91, '徐佳莹分享地震避难文章引争议 幽默认错化解尴尬', 'http://t12.baidu.com/it/u=http://upload.morningpost.com.cn/2016/0513/1463134050633.jpg&fm=36', '2016-05-13', '娱乐'),
(92, '高管也被揩油！史上最夸张的8次做市商低价拿票', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C104%2C901%2C540%3Bw%3D638/sign=3441f977412309f7f320f7524f3e20c2/14ce36d3d539b60041f8e354ee50352ac65cb71b.jpg', '2016-05-13', '娱乐'),
(93, '如果吴天明健在，你们还会如此赞誉《百鸟朝凤》吗？', 'http://b.hiphotos.baidu.com/news/crop%3D33%2C1%2C422%2C253%3Bw%3D638/sign=49d30dd3bda1cd1111f928608421fbd0/f2deb48f8c5494ee4110e6fa2af5e0fe99257e27.jpg', '2016-05-13', '娱乐'),
(94, '山东现重型航空炸弹 引爆后炸出直径10米巨坑', 'http://t11.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/05/13/146309856208713057_620_1000.JPEG&fm=36', '2016-05-13', '娱乐'),
(95, '陈伟霆上传搞怪照片 网友：无论你怎么拍都喜欢', 'http://t10.baidu.com/it/u=http://upload.morningpost.com.cn/2016/0513/1463134056665.bmp&fm=36', '2016-05-13', '娱乐'),
(96, '金曲奖苏打绿8项提名领跑 内地歌手突围', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0513/d3/8/80606281/auto.jpg&fm=36', '2016-05-13', '娱乐'),
(97, '呼和浩特一中学发生火灾 700余名学生疏散（图）', 'http://t10.baidu.com/it/u=http://i2.chinanews.com/simg/2016/160513//55551230.jpg&fm=36', '2016-05-13', '社会'),
(98, '鹿晗护粉丝斥黄牛 揭何炅讨厌鹿晗的原因 ', 'http://t11.baidu.com/it/u=http://img.dahe.cn/qf/2016/5/13/217VF23HD.jpg&fm=36', '2016-05-13', '社会'),
(99, '无业男冒充军人骗财骗色 女孩痴心不改', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_bt/0/295873274/1000&fm=94', '2016-05-13', '社会'),
(100, '网传快递员持链锁抽打老人', 'http://t11.baidu.com/it/u=http://upload.qianlong.com/2016/0513/1463123483721.jpg&fm=36', '2016-05-13', '社会'),
(101, '网友目击车长扶老人过马路 凡人善举引众人点赞', 'http://t12.baidu.com/it/u=http://img1.gtimg.com/henan/pics/hv1/250/105/2068/134498725.jpg&fm=36', '2016-05-13', '社会'),
(102, '石家庄一饭店操作间凌晨起火 内置煤气罐险爆炸', 'http://t11.baidu.com/it/u=http://p2.ifengimg.com/cmpp/2016/05/13/20/4df527a2-c899-4e8f-ad68-f3cd99071ff2_size100_w500_h300.jpg&fm=36', '2016-05-13', '社会'),
(103, '60岁以上老人是否应获赔误工费？曲阳法院这样做', 'http://t12.baidu.com/it/u=http://p0.ifengimg.com/cmpp/2016/05/13/20/23d26e5c-4bbd-488d-b95c-5ca1d938d763_size210_w600_h395.jpg&fm=36', '2016-05-13', '社会'),
(104, '男子向中国驻韩大使馆投掷污物被抓 身份不详', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_ls/0/295895001_150120/0&fm=36', '2016-05-13', '社会'),
(105, '防盗网卡住男童 “托举哥”凌晨勇救', 'http://t10.baidu.com/it/u=http://p3.ifengimg.com/cmpp/2016/05/13/03/58cb28dd-dcee-4bf2-87d3-b0ff538536ba_size62_w510_h680.jpg&fm=36', '2016-05-13', '社会'),
(106, '市场质疑两次加息前景 美联储恐重演年末加息 ', 'http://t10.baidu.com/it/u=http://posts.cdn.wallstcn.com/47/25/2d/20160513market-fed-hike.jpg!article.foil&fm=36', '2016-05-13', '社会'),
(107, '二线城市土地“高烧” 房企：即便亏钱了也要拿高价地 ', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0512/07/e/31602852/auto.jpg&fm=36', '2016-05-13', '社会'),
(108, '搜狐快评:父行贿自首 掏鸟案量刑问题再起波澜', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146311843095680136_720_1000.JPEG&fm=36', '2016-05-13', '社会'),
(109, 'POS机有"鬼"市民被盗刷近百万 厦门侦破伪卡骗局', 'http://t10.baidu.com/it/u=http://xm.fjsen.com/images/attachement/jpg/site2/20160513/00235478a645189f5bc120.jpg&fm=36', '2016-05-13', '社会'),
(110, '国产男装普现业绩滑坡今年仍是行业调整年', 'http://t10.baidu.com/it/u=http://epaper.ssrb.com.cn/resfile/2016-05-13/05/DSC_7059%20%E5%89%AF%E6%9C%AC_b.jpg&fm=36', '2016-05-13', '社会'),
(111, '说爱你不容易!浙江20批小龙虾检出疑似致癌物', 'http://t12.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146312000775124134_720_1000.JPEG&fm=36', '2016-05-13', '社会'),
(112, '公交女司机劝阻抽烟遭暴打，你怎么看', 'http://t10.baidu.com/it/u=http://i.ce.cn/newwap/sh/sgg/201605/13/W020160513593943161731.jpg&fm=36', '2016-05-13', '社会'),
(113, '南通警方：目前尚未发现肉眼无法识别“高仿真”假币', 'http://t11.baidu.com/it/u=http://image1.chinanews.com.cn/cnsupload/big/2015/12-31/4-426/c11f3f58e8f74c0e8e88030bac2fe885.jpg&fm=36', '2016-05-13', '社会'),
(114, '中国打击国际逃避税：2018年实现金融涉税信息自动交换', 'http://t10.baidu.com/it/u=http://n.sinaimg.cn/translate/20160513/8Ume-fxsexua5797714.jpg&fm=36', '2016-05-13', '社会'),
(115, '“螳螂”窃贼撬车开走 “黄雀”警察布控抓个现行', 'http://t10.baidu.com/it/u=http://www.gywb.cn/xinwen/attachement/jpg/site2/20160513/2649289945552144370.jpg&fm=36', '2016-05-13', '社会'),
(116, '京东金融一季度仍亏损 自称业内地位有提升', 'http://t12.baidu.com/it/u=http://finance.eastday.com/images/thumbnailimg/month_1605/20160513101317235.jpg&fm=36', '2016-05-13', '社会'),
(117, '困难当中有机遇 国企职工是财富（声音）', 'http://t10.baidu.com/it/u=http://www.people.com.cn/mediafile/pic/GQ/20160513/30/10185935715837833958.jpg&fm=36', '2016-05-13', '社会'),
(118, '山东现重型航空炸弹 引爆后炸出直径10米巨坑', 'http://t11.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/05/13/146309856208713057_620_1000.JPEG&fm=36', '2016-05-13', '社会'),
(119, '官方公布福建高校排行榜 来看看你学校排第几', 'http://t12.baidu.com/it/u=http://img1.gtimg.com/fj/pics/hv1/160/104/2068/134498380.jpg&fm=36', '2016-05-13', '社会'),
(120, '广西北海鲸鲨遭杀害2.5元一斤贩卖 嫌犯被抓获', 'http://t11.baidu.com/it/u=http://news.youth.cn/sh/201605/W020160513749295507499.jpg&fm=36', '2016-05-13', '社会'),
(121, '击落美国全球鹰无人机：不明导弹击落坠毁在长白山', 'http://t10.baidu.com/it/u=http://3.38mhw.com/2016041/7912.jpg&fm=36', '2016-05-13', '军事'),
(122, '马方：包括一中国香港公民在内、出海后失联的4人已确认获救', 'http://t12.baidu.com/it/u=http://image.thepaper.cn/image/4/920/347.jpg&fm=36', '2016-05-13', '军事'),
(123, '东莞边检站新添安检设备为口岸披上安全铠甲', 'http://t11.baidu.com/it/u=http://img1.gtimg.com/gd/pics/hv1/11/107/2068/134498996.jpg&fm=36', '2016-05-13', '军事'),
(124, '深圳官兵考连长：50多道题对答如流', 'http://t11.baidu.com/it/u=http://img1.gtimg.com/gd/pics/hv1/64/103/2068/134498029.jpg&fm=36', '2016-05-13', '军事'),
(125, '习近平向中国-阿拉伯国家合作论坛第七届部长级会议致贺信', 'http://t12.baidu.com/it/u=http://image.thepaper.cn/image/4/919/725.jpg&fm=36', '2016-05-13', '军事'),
(126, '新疆兵团民兵夏季紧急集结 提升处突能力', 'http://t12.baidu.com/it/u=http://i2.chinanews.com/simg/2016/160513//55538410.JPG&fm=36', '2016-05-13', '军事'),
(127, '方励下跪之后，《百鸟朝凤》排片到底涨了没有？', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=f93c4be2abaf2eddd4f14aeab5110102/8d5494eef01f3a29a2c0e02a9e25bc315d607ccd.jpg', '2016-05-13', '军事'),
(128, '欢聚时代私有化暂停：中概股回归需闯过哪些BOSS', 'http://a.hiphotos.baidu.com/news/w%3D638/sign=3d8b82584010b912bfc1f5fdfbfcfcb5/7a899e510fb30f24b23d29e0cf95d143ac4b03aa.jpg', '2016-05-13', '军事'),
(129, '世界黄金协会报告：中国实物黄金投资将整体保持健康稳定', 'http://t10.baidu.com/it/u=http://z1.dfcfw.com/2016/5/12/20160512162019921851891.jpg&fm=36', '2016-05-13', '军事'),
(130, '市场质疑两次加息前景 美联储恐重演年末加息 ', 'http://t10.baidu.com/it/u=http://posts.cdn.wallstcn.com/47/25/2d/20160513market-fed-hike.jpg!article.foil&fm=36', '2016-05-13', '军事'),
(131, '二线城市土地“高烧” 房企：即便亏钱了也要拿高价地 ', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0512/07/e/31602852/auto.jpg&fm=36', '2016-05-13', '军事'),
(132, '搜狐快评:父行贿自首 掏鸟案量刑问题再起波澜', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146311843095680136_720_1000.JPEG&fm=36', '2016-05-13', '军事'),
(133, '中国有多少枚弹道导弹：韩媒称核弹头达数百枚', 'http://t12.baidu.com/it/u=http://3.38mhw.com/2016041/7980.jpg&fm=36', '2016-05-13', '军事'),
(134, '国产男装普现业绩滑坡今年仍是行业调整年', 'http://t10.baidu.com/it/u=http://epaper.ssrb.com.cn/resfile/2016-05-13/05/DSC_7059%20%E5%89%AF%E6%9C%AC_b.jpg&fm=36', '2016-05-13', '军事'),
(135, '说爱你不容易!浙江20批小龙虾检出疑似致癌物', 'http://t12.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/05/13/146312000775124134_720_1000.JPEG&fm=36', '2016-05-13', '军事'),
(136, '印媒称巴基斯坦与中国联手 将印度挤出核供应国集团', 'http://t10.baidu.com/it/u=http://r3.sinaimg.cn/10230/2015/1224/10/f/84564999/550x328.jpg&fm=36', '2016-05-13', '军事'),
(137, '因为中国钢铁 欧洲这次和美国站在了一边 ', 'http://t12.baidu.com/it/u=http://img1.caijing.com.cn/2016/0513/1463102785846.png&fm=36', '2016-05-13', '军事'),
(138, '中国打击国际逃避税：2018年实现金融涉税信息自动交换', 'http://t10.baidu.com/it/u=http://n.sinaimg.cn/translate/20160513/8Ume-fxsexua5797714.jpg&fm=36', '2016-05-13', '军事'),
(139, '乌民众请愿：提议将俄罗斯改名“喀查比亚”', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0512/34/e/55604222/auto.jpg&fm=36', '2016-05-13', '军事'),
(140, '中国试射最强洲际导弹：这东西到底有多厉害', 'http://t12.baidu.com/it/u=http://3.38mhw.com/2016041/7973.jpg&fm=36', '2016-05-13', '军事'),
(141, '美军选定新轻型侦察车 可通过CH-47携带', 'http://t10.baidu.com/it/u=http://photocdn.sohu.com/20160513/Img449197626.jpg&fm=36', '2016-05-13', '军事'),
(142, '山东现重型航空炸弹 引爆后炸出直径10米巨坑', 'http://t11.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/05/13/146309856208713057_620_1000.JPEG&fm=36', '2016-05-13', '军事'),
(143, '宏亮瞻局｜南千岛群岛死结与日俄战争2.0畅想', 'http://t10.baidu.com/it/u=http://image.thepaper.cn/image/4/921/202.jpg&fm=36', '2016-05-13', '推荐'),
(172, '习近平谈从严治党：打铁还需自身硬', 'http://d.hiphotos.baidu.com/news/q%3D100/sign=983038dd4c36acaf5fe092fc4cdb8d03/d009b3de9c82d1589f602255870a19d8bd3e4277.jpg', '2016-05-13', '推荐'),
(230, '33333', '3333', '2016-05-25', '44444');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`), ADD KEY `类型` (`category`), ADD KEY `category_2` (`category`), ADD FULLTEXT KEY `category` (`category`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=234;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
