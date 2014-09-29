function generateCellRandom(columns,rows){//随机初始化细胞的存活情况
	for(i = 0; i < rows; i++)
	{
		for(j = 0; j < columns; j++)
		{
			grid[i][j] = Math.floor(Math.random()+0.5)
		}
	}
};

function generateCell(columns,rows){//把所有的细胞初始化为死
	for(i = 0; i < rows; i++)
	{
		for(j = 0; j < columns; j++)
		{
			grid[i][j] = 0
		}
	}
};

function countNeighbors(columns,rows,grid,x,y){//计算x行y列细胞周围活着的邻居数
	var count = 0
	for(var i = x-1;i <= x + 1;i++)
	{
		for(var j = y -1 ; j <= y + 1;j++ )
		{
			count += grid[(i+rows)%rows][(j+columns)%columns]
		}
	}
	count -= grid[x][y]
	return count
}

function nextRound(columns,rows,grid){//计算下一个回合的细胞的存活情况
	var newGrid = new Array()
	for(i = 0; i < rows; i++)
	{
		newGrid[i] = new Array()
		for(j = 0; j < columns; j++)
		{
			 switch(countNeighbors(columns,rows,grid,i,j))
			 {
				case 2:
				newGrid[i][j] = grid[i][j]
				break
				case 3:
				newGrid[i][j] = 1
				break
				default:
				newGrid[i][j] = 0
			 }
		}
	}
	for(i = 0; i < rows;i++)
	{
		for(j = 0; j < columns;j++)
		{
			grid[i][j] = newGrid[i][j]
		}
	}
}