# 启动node服务进程
pm2 start ./server
echo '程序正在启动，请稍候...'
#脚本休眠1s，等待进程启动
sleep 1
while [ 1 ]
do
	# 获取当前程序进程pid
	pid=$(ps -e |grep '[0-9].node./'|awk '{print $1}')
	# 获取当前程序所占用CPU负载
	CPU=$(pm2 prettylist |grep memory |cut -d : -f 4 |cut -d } -f 1)
	let i++
	# 显示当前程序所占用CPU负载
	echo $i:占用CPU:%$CPU

	# 若进程pid不存在或进程所占CPU负载超过98%，重启当前进程
	if [ ! pid -o $CPU -gt 98 ]
	then
		pm2 restart server
		echo '程序正在重启，请稍候...'
		# 正在重启进程，脚本休眠2s
		sleep 2
	fi

	#脚本休眠1s
	sleep 1
done