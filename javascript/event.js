function keyDown(e){//���ܰ�������
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
	case 13://ENTER���������ϸ�����
		if(runState == 0)//����Ƿ�0(��ʾ��Ϸ�Ѿ���ʼ��)���޷�ʹ��ENTER����
		{
			generateCellRandom(columns,rows)
		}
		break;
	case 32://�ո����ʼ������ͣ
		if(runState != 1)
		{
			runState = 1
			timer1 = setInterval("drawGrid(columns,rows,grid);nextRound(columns,rows,grid)", timeInterval)
		}
		else 
		{
			runState = 2//2��ʾ������ͣ״̬
			clearInterval(timer1)
		}
		break;
	case 37://��������������
		if(runState === 0 && columns > minColumns)
		{
			columns --;
			for(var i = 0;i < rows;i++)
				grid[i][columns] = 0
		}
		break;
	case 38://�����ڼ����������߼ӿ���Ϸ�ٶ�
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
	case 39://��������������
		if(runState === 0 && columns < maxColumns)
		{
			columns ++;
		}
		break;
	case 40://�����������������߼�����Ϸ�ٶ�
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
	if(runState == 0)//��Ϸ��û��ʼ
		drawGrid(columns,rows,grid)
}
function beClicked(event)//������ı�ϸ���Ĵ�����
{
	grid[Math.floor((event.offsetY)/(2*r) )][Math.floor((event.offsetX)/(2*r))] = 1 - grid[Math.floor((event.offsetY)/(2*r) )][Math.floor((event.offsetX)/(2*r))]
	drawGrid(columns,rows,grid)
}