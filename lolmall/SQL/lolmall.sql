-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-07-19 09:45:20
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `lolmall`
--

-- --------------------------------------------------------

--
-- 表的结构 `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=184 DEFAULT CHARSET=utf8 COMMENT='购物车';

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COMMENT='商品表';

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `title`, `price`, `pic`, `category`) VALUES
(1, '塔莉垭', '42.75', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/1_163.jpg', '英雄'),
(2, '铸星龙王', '42.75', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/1_136.jpg', '英雄'),
(3, '戏命师', '42.75', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/1_202.jpg', '英雄'),
(4, '海兽祭司', '42.75', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/1_420.jpg', '英雄'),
(5, '永猎双子', '42.75', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/1_203.jpg', '英雄'),
(6, '河流之王', '42.75', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/1_223.jpg', '英雄'),
(7, '时间刺客', '42.75', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/1_245.jpg', '英雄'),
(8, '星界游神', '42.75', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/1_432.jpg', '英雄'),
(9, '牛头酋长', '9.50', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/1_12.jpg', '英雄'),
(10, '迷失之牙', '42.75', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/1_150.jpg', '英雄'),
(59, '韦鲁斯·迅箭', '46.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/2_110005.jpg', '皮肤'),
(60, '瑞兹·白须', '46.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/2_13009.jpg', '皮肤'),
(61, '古拉加斯·碎桶者', '46.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/2_79009.jpg', '皮肤'),
(62, '布隆·狮心', '46.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/2_201003.jpg', '皮肤'),
(63, '驯龙炮手 崔丝塔娜', '94.05', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/2_18010.jpg', '皮肤'),
(64, '虚空使者 俄洛伊', '65.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/2_420001.jpg', '皮肤'),
(65, '丧尸杀手 潘森', '61.27', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/2_80007.jpg', '皮肤'),
(66, '丧尸杀手 金克丝', '61.27', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/2_222003.jpg', '皮肤'),
(67, '掠星魔刃 卡萨丁', '65.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/2_38005.jpg', '皮肤'),
(68, '炼狱魔女 蔚', '65.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/2_254004.jpg', '皮肤'),
(69, '胜利经验卡(10胜)', '11.40', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/boosts_10.png', '道具'),
(70, '胜利金币卡(10胜)', '27.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/boosts_9.png', '道具'),
(71, '胜利经验卡(4胜)', '4.75', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/boosts_8.png', '道具'),
(72, '胜利金币卡(4胜)', '11.40', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/boosts_7.png', '道具'),
(73, '双倍经验卡(1日)', '4.75', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/boosts_6.png', '道具'),
(74, '双倍金币卡(1日)', '11.40', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/boosts_5.png', '道具'),
(75, '双倍金币卡(14日)', '75.05', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/boosts_4.png', '道具'),
(76, '双倍经验卡(7日)', '17.10', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/boosts_3.png', '道具'),
(77, '双倍经验卡(3日)', '8.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/boosts_2.png', '道具'),
(78, '双倍金币卡(3日)', '20.90', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/boosts_1.png', '道具'),
(79, '霸天零式守卫', '27.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/8_57.jpg', '其他'),
(80, '这货不是眼', '27.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/8_56.jpg', '其他'),
(81, '火龙里格尔守卫', '27.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/8_49.jpg', '其他'),
(82, '光学增强器守卫', '27.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/8_44.jpg', '其他'),
(83, '全球守卫', '18.05', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/8_23.jpg', '其他'),
(84, '屠龙勇士守卫', '27.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/wardskin_21.jpg', '其他'),
(85, '守卫眼皮肤礼包', '97.61', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/201606121612.png', '其他'),
(86, '光辉守卫', '37.05', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/3_12.png', '其他'),
(87, '星坠守卫', '27.55', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/3_10.png', '其他'),
(88, '海牛大大图标', '9.50', 'http://ossweb-img.qq.com/images/gameshop/lol/images/thumb/3_1116.jpg', '其他');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(100) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COMMENT='用户表';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=184;
--
-- AUTO_INCREMENT for table `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=89;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
