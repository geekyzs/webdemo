/*加减乘除运算*/
function count() {
	var number1 = parseFloat(document.getElementById("number1").value); //获取输入的第一个数字
	var number2 = parseFloat(document.getElementById("number2").value); //获取输入的第二个数字
	var operation = document.getElementById("operation").value; //获取输入的运算符
	var showResult = document.getElementById("showresult") //结果显示
	switch (true) { //判断条件
		case operation == "+" || operation == "加":
			showResult.value = number1 + number2; //加法
			break;
		case operation == "-" || operation == "减":
			showResult.value = number1 - number2; //减法
			break;
		case operation == "*" || operation == "乘":
			showResult.value = (number1 * number2).toFixed(6); //乘法
			break;
		case operation == "/" || operation == "除":
			if (number2 == 0) {
				alert("除数不能为0");//判断除数不能为0
			};
			showResult.value = (number1 / number2).toFixed(6); //除法
			break;
	}
	if (showResult.value == "NaN") { //判断是否所有的项都有输入
		alert("请输入完整");
	};
}