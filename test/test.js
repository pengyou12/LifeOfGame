function generateCellRandom(columns,rows, grid){//随机初始化
	for(var i = 0; i < rows; i++)
	{
		for(var j = 0; j < columns; j++)
		{
			grid[i][j] = Math.floor(Math.random()+0.5)
		}
	}
}
//待测函数1
function countNeighbors(columns,rows,grid,x,y){
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
//待测函数2
function nextRound(columns,rows,grid){
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

function test1()//只有1个细胞且为活细胞
{
	var columns = 1
	var rows = 1
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1;
	Canswer[0][0] = 8;
	Nanswer[0][0] = 0;
	if(countNeighbors(columns,rows,grid,0,0) == Canswer[0][0])
	{
		nextRound(columns,rows,grid)
		if(grid[0][0] == Nanswer[0][0])
		{
			alert("test1测试通过！")
			return
		}
	}
	alert("test2测试失败！")
}

function test2()//只有1个细胞且为死细胞
{
	var columns = 1
	var rows = 1
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 0;
	Canswer[0][0] = 0;
	Nanswer[0][0] = 0;
	if(countNeighbors(columns,rows,grid,0,0) == Canswer[0][0])
	{
		nextRound(columns,rows,grid)
		if(grid[0][0] == Nanswer[0][0])
		{
			alert("test2测试通过！")
			return
		}
	}
	alert("test2测试失败！")
}

function test3()//测试有1行2列的情况
{
	var columns = 2
	var rows = 1
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1
	grid[0][1] = 0
	Canswer[0][0] = 2
	Canswer[0][1] = 6
	Nanswer[0][0] = 1
	Nanswer[0][1] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test3测试失败！")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j]!= Nanswer[i][j])
			{
				alert("test3测试失败！")
				return
			}
		}
	alert("test3测试通过！")
}

function test4()//测试有2行1列的情况
{
	var columns = 1
	var rows = 2
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1
	grid[1][0] = 1
	Canswer[0][0] = 8
	Canswer[1][0] = 8
	Nanswer[0][0] = 0
	Nanswer[1][0] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test4测试失败！")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test4测试失败！")
				return
			}
		}
	alert("test4测试通过！")
}

function test5()//测试有2行2列的情况
{
	var columns = 2
	var rows = 2
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1
	grid[1][0] = 0
	grid[0][1] = 1
	grid[1][1] = 0
	Canswer[0][0] = 2
	Canswer[1][0] = 6
	Canswer[0][1] = 2
	Canswer[1][1] = 6
	Nanswer[0][0] = 1
	Nanswer[1][0] = 0
	Nanswer[0][1] = 1
	Nanswer[1][1] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test5测试失败！")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test5测试失败！")
				return
			}
		}
	alert("test5测试通过！")
}

function test6()//测试有1行3列的情况
{
	var columns = 3
	var rows = 1
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 0
	grid[0][1] = 1
	grid[0][2] = 0
	Canswer[0][0] = 3
	Canswer[0][1] = 2
	Canswer[0][2] = 3
	Nanswer[0][0] = 1
	Nanswer[0][1] = 1
	Nanswer[0][2] = 1
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test6测试失败！")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test6测试失败！")
				return
			}
		}
	alert("test6测试通过！")
}

function test7()//测试有3行1列的情况
{
	var columns = 1
	var rows = 3
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1
	grid[1][0] = 1
	grid[2][0] = 0
	Canswer[0][0] = 5
	Canswer[1][0] = 5
	Canswer[2][0] = 6
	Nanswer[0][0] = 0
	Nanswer[1][0] = 0
	Nanswer[2][0] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test7测试失败！")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test7测试失败！")
				return
			}
		}
	alert("test7测试通过！")
}

function test8()//测试有3行2列的情况
{
	var columns = 2
	var rows = 3
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 1
	grid[1][0] = 1
	grid[2][0] = 0
	grid[0][1] = 0
	grid[1][1] = 1
	grid[2][1] = 0
	Canswer[0][0] = 3
	Canswer[1][0] = 3
	Canswer[2][0] = 4
	Canswer[0][1] = 5
	Canswer[1][1] = 4
	Canswer[2][1] = 5
	Nanswer[0][0] = 1
	Nanswer[1][0] = 1
	Nanswer[2][0] = 0
	Nanswer[0][1] = 0
	Nanswer[1][1] = 0
	Nanswer[2][1] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test8测试失败！")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test8测试失败！")
				return
			}
		}
	alert("test8测试通过！")
}

function test9()//测试有2行3列的情况
{
	var columns = 3
	var rows = 2
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 0
	grid[0][1] = 1
	grid[0][2] = 0
	grid[1][0] = 1
	grid[1][1] = 1
	grid[1][2] = 1
	Canswer[0][0] = 7
	Canswer[0][1] = 6
	Canswer[0][2] = 7
	Canswer[1][0] = 4
	Canswer[1][1] = 4
	Canswer[1][2] = 4
	Nanswer[0][0] = 0
	Nanswer[0][1] = 0
	Nanswer[0][2] = 0
	Nanswer[1][0] = 0
	Nanswer[1][1] = 0
	Nanswer[1][2] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test9测试失败！")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test9测试失败！")
				return
			}
		}
	alert("test9测试通过！")
}

function test10()//测试一般情况
{
	var columns = 3
	var rows = 3
	var i=0, j=0
	var grid = new Array()
	var Canswer = new Array()
	var Nanswer = new Array()
	for(;i < rows; i++)
	{
		grid[i] = new Array()
		Canswer[i] = new Array()
		Nanswer[i] = new Array()
	}
	grid[0][0] = 0
	grid[0][1] = 1
	grid[0][2] = 0
	grid[1][0] = 0
	grid[1][1] = 1
	grid[1][2] = 0
	grid[2][0] = 1
	grid[2][1] = 1
	grid[2][2] = 0
	Canswer[0][0] = 4
	Canswer[0][1] = 3
	Canswer[0][2] = 4
	Canswer[1][0] = 4
	Canswer[1][1] = 3
	Canswer[1][2] = 4
	Canswer[2][0] = 3
	Canswer[2][1] = 3
	Canswer[2][2] = 4
	Nanswer[0][0] = 0
	Nanswer[0][1] = 1
	Nanswer[0][2] = 0
	Nanswer[1][0] = 0
	Nanswer[1][1] = 1
	Nanswer[1][2] = 0
	Nanswer[2][0] = 1
	Nanswer[2][1] = 1
	Nanswer[2][2] = 0
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(countNeighbors(columns,rows,grid,i,j) != Canswer[i][j])
			{
				alert("test10测试失败！")
				return
			}
		}
	nextRound(columns,rows,grid)
	for(i = 0; i < rows; i++)
		for(j = 0; j < columns; j++)
		{
			if(grid[i][j] != Nanswer[i][j])
			{
				alert("test10测试失败！")
				return
			}
		}
	alert("test10测试通过！")
}

//辅助函数
function newCountNeighbors(columns,rows,grid,x,y){
	var count = 0
	if(x == 0)
	{
		if(y == 0)
		{
			count += grid[rows-1][columns-1]
			count += grid[rows-1][0]
			count += grid[rows-1][1]
			count += grid[0][columns-1]
			count += grid[1][columns-1]
			count += grid[0][1];
			count += grid[1][0];
			count += grid[1][1];
		}
		else if(y == columns-1)
		{
			count += grid[rows-1][columns-2]
			count += grid[rows-1][columns-1]
			count += grid[rows-1][0]
			count += grid[0][columns-2]
			count += grid[0][0]
			count += grid[1][columns-2];
			count += grid[1][columns-1];
			count += grid[1][0];
		}
		else
		{
			count += grid[rows-1][y-1]
			count += grid[rows-1][y]
			count += grid[rows-1][y+1]
			count += grid[0][y-1]
			count += grid[0][y+1]
			count += grid[1][y-1];
			count += grid[1][y];
			count += grid[1][y+1];
		}
	}
	else if(x == rows-1)
	{
		if(y == 0)
		{
			count += grid[rows-2][columns-1]
			count += grid[rows-2][0]
			count += grid[rows-2][1]
			count += grid[rows-1][columns-1]
			count += grid[rows-1][1]
			count += grid[0][columns-1];
			count += grid[0][0];
			count += grid[0][1];
		}
		else if(y == columns-1)
		{
			count += grid[rows-2][columns-2]
			count += grid[rows-2][columns-1]
			count += grid[rows-2][0]
			count += grid[rows-1][columns-2]
			count += grid[rows-1][0]
			count += grid[0][columns-2];
			count += grid[0][columns-1];
			count += grid[0][0];
		}
		else
		{
			count += grid[rows-2][y-1]
			count += grid[rows-2][y]
			count += grid[rows-2][y+1]
			count += grid[rows-1][y-1]
			count += grid[rows-1][y+1]
			count += grid[0][y-1];
			count += grid[0][y];
			count += grid[0][y+1];
		}
	}
	else
	{
		if(y == 0)
		{
			count += grid[x-1][columns-1]
			count += grid[x-1][0]
			count += grid[x-1][1]
			count += grid[x][columns-1]
			count += grid[x][1]
			count += grid[x+1][columns-1];
			count += grid[x+1][0];
			count += grid[x+1][1];
		}
		else if(y == columns-1)
		{
			count += grid[x-1][columns-2]
			count += grid[x-1][columns-1]
			count += grid[x-1][0]
			count += grid[x][columns-2]
			count += grid[x][0]
			count += grid[x+1][columns-2];
			count += grid[x+1][columns-1];
			count += grid[x+1][0];
		}
		else
		{
			count += grid[x-1][y-1]
			count += grid[x-1][y]
			count += grid[x-1][y+1]
			count += grid[x][y-1]
			count += grid[x][y+1]
			count += grid[x+1][y-1];
			count += grid[x+1][y];
			count += grid[x+1][y+1];
		}
	}
	return count
}

function test11()//测试一般情况
{
	var columns
	var rows
	var i=0, j=0
	var grid = new Array()
	for(var c = 0; c < 1000; c++)
	{
		rows = Math.floor(Math.random()*100) + 3
		columns = Math.floor(Math.random()*100) + 3
		for(;i < rows; i++)
		{
			grid[i] = new Array()
		}
		generateCellRandom(columns,rows, grid)
		for(i = 0; i < rows; i++)
			for(j = 0; j < columns; j++)
			{
				if(countNeighbors(columns,rows,grid,i,j) != newCountNeighbors(columns,rows,grid,i,j))
				{
					alert("test11测试失败！")
					return
				}
			}
		var formerGrid = new Array()
		for(var i = 0; i < rows; i++)
			formerGrid[i] = new Array()
		for(var i=0; i < rows; i++)
			for(var j=0; j < columns; j++)
				formerGrid[i][j] = grid[i][j]
		nextRound(columns,rows,grid)
		for(i=0; i<rows; i++)
		{
			for(j=0; j<columns; j++)
			{
				if(grid[i][j]==1)
				{
					if(!((countNeighbors(columns,rows,formerGrid,i,j) == 3) || (countNeighbors(columns,rows,formerGrid,i,j) == 2 && formerGrid[i][j] == 1)))
					{
						alert("test11测试失败！")
						alert(c)
						return 
					}
				}
				else
				{
					if((countNeighbors(columns,rows,formerGrid,i,j) == 3) || (countNeighbors(columns,rows,formerGrid,i,j) == 2 && formerGrid[i][j] == 1))
					{
						alert("test11测试失败！")
						alert(c)
						return
					}	
				}
			}
		}
	}
	alert("test11测试通过！")
}
test1()
test2()
test3()
test4()
test5()
test6()
test7()
test8()
test9()
test10()
test11()
