var maxColumns = 65
var minColumns = 1
var maxRows = 45
var minRows = 1
var columns = 60
var rows = 25
var runState = 0//0表示没有运行，1表示运行
var keyState = 0//0表示没有键按下，1表示有键按下
var timeInterval = 100
var maxInterval = 1000
var minInterval = 5
var timeStepLength = 23
var timer1
var grid = new Array()
var i = 0
var j = 0
var r = 8
for(i = 0;i < maxRows; i++)
{
	grid[i] = new Array()
}
generateCell(maxColumns,maxRows)
generateCellRandom(columns,rows)
drawGrid(columns,rows,grid)