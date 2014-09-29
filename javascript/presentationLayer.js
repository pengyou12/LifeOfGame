function drawGrid(columns,rows,grid){//画出逻辑层的格子情况
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {//引用自网上的圆角矩形画法
        this.beginPath();
        this.moveTo(x+r, y);
        this.arcTo(x+w, y, x+w, y+h, r);
        this.arcTo(x+w, y+h, x, y+h, r);
        this.arcTo(x, y+h, x, y, r);
        this.arcTo(x, y, x+w, y, r);
        this.closePath();
        return this;
    }
	var canvas = document.getElementById("myCanvas")
	canvas.width = 2 * r * columns//2*r为边长
	canvas.height = 2 * r * rows
	var ctx = canvas.getContext("2d")
	for(var i = 0; i < rows; i++)
	{
		for(var j=0; j < columns; j++)
		{
			ctx.fillStyle = "#F32323"
			if(grid[i][j] == 0)
				ctx.fillStyle = "#BEAA7B"
			ctx.beginPath()
			ctx.roundRect(2*j * r + 1.5,2 * i * r + 1, 2 * r - 3,2 * r - 3,2).stroke();//画一个有间隔的圆角矩形
			ctx.closePath()
			ctx.fill()
		}
	}
}