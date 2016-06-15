### 手机百度新闻PHP+MYSQL后台
#####注：mysql脚本文件在SQL文件夹里，数据库名为：news，（user数据表为用户登录信息表，news数据表为新闻信息表）。

1.给所有HTML和PHP设置了字符编码(charset=UTF-8)和设置Conent-type（content=text/html）。
字符编码：避免如utf-7 XSS等问题，Conent-type：避免如Json的XSS等问题。

2.在addnews.php和upadte.php里用PHP htmlspecialchars() 函数把输入的预定义的字符转换为 HTML 实体。
$category =addslashes(htmlspecialchars($_POST['category']));//新闻类别
$title = addslashes(htmlspecialchars($_POST['title']));//标题
$pic = addslashes(htmlspecialchars($_POST['pic']));//图片地址
$time = htmlspecialchars($_POST['time']);//时间
这样做的作用是防止用户在添加新闻内容或者编辑更新新闻内容时输入预定义的字符如 ‘< 和 >’浏览器将其用作 HTML 元素，对于防止代码运行非常有用（防止xss注入）。

3.在register.php和login.php里使用md5()函数给用户密码加密。
$password = md5(addslashes(htmlspecialchars($_POST['password'])));

4.使用session记录登陆状态
<?php
session_start () ;
if (!isset ($_SESSION['user'])){
echo "<p align=center>" ;
echo "<font color=#ff0000 size=5><strong><big>" ;
echo "你还没有登录,请<a href='../login.html'>登录</a>!" ;
echo "</big></strong></font></p>" ;
exit () ; 
 }
?>

5.使用Token进行CSRF防御
session_start();
$token = md5(uniqid(rand(), TRUE));
$_SESSION['token'] = $token;

<input type="hidden" name="token" value="<?php echo $token; ?>" class="form-control" >

if ($_POST['token'] == $_SESSION['token']) {
//添加到数据库
}
