var maxColumns = 65//最大列数
var minColumns = 1//最小列数
var maxRows = 45//最大行数
var minRows = 1//最小行数
var columns = 60//默认列数
var rows = 25//默认行数
var runState = 0//0表示没有运行，1表示运行
var keyState = 0//0表示没有键按下，1表示有键按下
var timeInterval = 100//每个回合的间隔
var maxInterval = 1000//最大间隔
var minInterval = 5//最小间隔
var timeStepLength = 23//每次改变的步长
var timer1//记录生成的interval
var grid = new Array()//记录所有细胞的存活情况，1为生，0为死
var i = 0//临时变量
var j = 0//临时变量
var r = 8//格子的半径,2*r即为正方形的边长
for(i = 0;i < maxRows; i++)
{
	grid[i] = new Array()
}
generateCell(maxColumns,maxRows)//把所有的细胞初始化为死
generateCellRandom(columns,rows)//随机把一些细胞初始化为活
drawGrid(columns,rows,grid)//画出来