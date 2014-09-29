function keyDown(e){//接受按键操作
	var keychar
	if(window.event) // IE
	{
		keychar = e.keyCode
	}
	else if(e.which) // Netscape/Firefox/Opera
	{
		keychar = e.which
	}
	switch(keychar)
	{
	case 13://ENTER键随机生成细胞情况
		if(runState == 0)//如果是非0(表示游戏已经开始了)就无法使用ENTER键了
		{
			generateCellRandom(columns,rows)
		}
		break;
	case 32://空格键开始或者暂停
		if(runState != 1)
		{
			runState = 1
			timer1 = setInterval("drawGrid(columns,rows,grid);nextRound(columns,rows,grid)", timeInterval)
		}
		else 
		{
			runState = 2//2表示处于暂停状态
			clearInterval(timer1)
		}
		break;
	case 37://←用来减少列数
		if(runState === 0 && columns > minColumns)
		{
			columns --;
			for(var i = 0;i < rows;i++)
				grid[i][columns] = 0
		}
		break;
	case 38://↑用于减少行数或者加快游戏速度
		if(runState === 0 && rows > minRows)
		{
			rows --;
			for(var i = 0;i < columns;i++)
				grid[rows][i] = 0
		}
		else if(runState == 1 && timeInterval > minInterval)
		{
			timeInterval -= timeStepLength
			clearInterval(timer1)
			timer1 = setInterval("drawGrid(columns,rows,grid);nextRound(columns,rows,grid)", timeInterval)
		}
		break;
	case 39://→用于增加列数
		if(runState === 0 && columns < maxColumns)
		{
			columns ++;
		}
		break;
	case 40://↓用于增加行数或者减慢游戏速度
		if(runState === 0 && rows < maxRows)
		{
			rows ++;
		}
		else if(runState == 1 && timeInterval < maxInterval)
		{
			timeInterval += timeStepLength
			clearInterval(timer1)
			timer1 = setInterval("drawGrid(columns,rows,grid);nextRound(columns,rows,grid)", timeInterval)
		}
		break;
	}
	if(runState == 0)//游戏还没开始
		drawGrid(columns,rows,grid)
}
function beClicked(event)//鼠标点击改变细胞的存活情况
{
	grid[Math.floor((event.offsetY)/(2*r) )][Math.floor((event.offsetX)/(2*r))] = 1 - grid[Math.floor((event.offsetY)/(2*r) )][Math.floor((event.offsetX)/(2*r))]
	drawGrid(columns,rows,grid)
}