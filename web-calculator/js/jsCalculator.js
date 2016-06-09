//定义全局变量
var num = 0; //第一个运算数
var numshows = 0; //第二个运算数
var result = 0; //存放结果
var condition = 0; //用于判断计算状态
var operate = 0; //判断输入状态的标志 

//获得用户按的数字键的内容并显示在屏幕上面
function orders(num) {
	var str = document.getElementById("screen").value; //获得显示屏上面的内容
	str = (str != "") ? ((operate == 0) ? str : "") : ""; //如果当前值不是空的，且状态为0，则返回当前值，否则返回空值;
	str = str + num; //给屏幕上面的内容追加按键输入的内容
	document.getElementById("screen").value = str; //刷新屏幕上面的内容
	operate = 0; //重置输入状态 
};

//.小数点
function decimalPoint() {
	var str = document.getElementById("screen").value; //获得显示屏上面的内容
	str = (str != "") ? ((operate == 0) ? str : "") : ""; //如果当前值不是空的，且状态为0，则返回当前值，否则返回空值;
	for (i = 0; i < str.length; i++) { //判断是否已经有了小数点
		if (str.substr(i, 1) == ".") { //如果有已经有了小数点就不能再输入小数点了
			return false;
		};
	};
	str = str + ".";
	document.getElementById("screen").value = str; //刷新屏幕上面的内容
	operate = 0; //重置输入状态 
};

//退格键
function backspace() {
	var str = document.getElementById("screen").value; //获得显示屏上面的内容
	str = str.substr(0, str.length - 1); //屏幕上面的字符串内容减少一个
	document.getElementById("screen").value = str; //刷新屏幕上面的内容
};

//清除键
function clearScreen() {
	document.getElementById("screen").value = ""; //清空屏幕上面的内容
}

//定义计算函数
function calculate() {
	numshows = Number(document.getElementById("screen").value); //获取屏幕上的内容并转换成数字类型
	if (num != 0) { //判断前一个运算是否为0
		switch (condition) { //判断计算的状态
			case 1: //计算加法
				result = num + numshows;
				break;
			case 2: //计算减法
				result = num - numshows;
				break;
			case 3: //计算乘法
				result = num * numshows; //保留6位小数
				break;
			case 4: //计算除法
				if (numshows != 0) { //判断被除数是否为0
					result = num / numshows;
				} else {
					result = "亲，除数不能为0！"
				}
				break;
			case 5: //求余
				result = num % numshows;
				break;
		}
	} else {
		result = numshows;
	}
	numshows = String(result);
	document.getElementById("screen").value = numshows; //刷新屏幕内容显示结果
	num = result; //存储当前值 
}

//加法
function addition() {
	calculate(); //调用计算函数
	operate = 1; //更改输入状态 
	condition = 1; //把计算状态改为加法
}

//减法
function subtraction() {
	calculate(); //调用计算函数
	operate = 1; //更改输入状态 
	condition = 2; //把计算状态改为减法
}

//乘法
function multiplication() {
	calculate(); //调用计算函数
	operate = 1; //更改输入状态 
	condition = 3; //把计算状态改为乘法
}

//除法
function division() {
	calculate(); //调用计算函数
	operate = 1; //更改输入状态 
	condition = 4; //把计算状态改为除法
}

//平分根
function sqrt() {
	numshows = Number(document.getElementById("screen").value);
	result = Math.sqrt(numshows); //调用求平方根的方法
	numshows = String(result);
	document.getElementById("screen").value = numshows; //刷新屏幕内容显示结果
}

//求余数
function rem() {
	calculate(); //调用计算函数
	operate = 1; //更改输入状态 
	condition = 5; //把计算状态改为求余
}

//求cos
function cos() {
	numshows = Number(document.getElementById("screen").value);
	result = Math.cos(numshows); //调用三角函数方法cos
	numshows = String(result);
	document.getElementById("screen").value = numshows; //刷新屏幕内容显示结果
}

//求sin
function sin() {
	numshows = Number(document.getElementById("screen").value);
	result = Math.sin(numshows); //调用三角函数方法sin
	numshows = String(result);
	document.getElementById("screen").value = numshows; //刷新屏幕内容显示结果
}

//求tan
function tan() {
	numshows = Number(document.getElementById("screen").value);
	result = Math.tan(numshows); //调用三角函数方法tan
	numshows = String(result);
	document.getElementById("screen").value = numshows; //刷新屏幕内容显示结果
}

//等于 
function equal() {
	calculate();//调用计算函数
	operate = 1;
	num = 0;
	result = 0;
	numshow = "";
}