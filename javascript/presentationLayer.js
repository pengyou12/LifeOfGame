function drawGrid(columns,rows,grid){
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
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
	canvas.width = 2 * r * columns
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
			ctx.roundRect(2*j * r + 1.5,2 * i * r + 1, 2 * r - 3,2 * r - 3,2).stroke();
			ctx.closePath()
			ctx.fill()
		}
	}
}