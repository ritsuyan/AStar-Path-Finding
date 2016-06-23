var TILE_WIDTH=16;
var TILE_HEIGHT=16;
var TILE_IMG="img/brick.gif";
var tiles=new Array();

function Tile(x,y) {
    this.tile={
        x:x,
        y:y
    }
}

Tile.prototype.draw=function(div,img) {
    var x=this.tile.x-TILE_WIDTH/2;
    var y=this.tile.y-TILE_HEIGHT/2
    var html="<img src='"+img+"' style='position: absolute;" +
        "left:"+x+";" +
        "top:"+y+";' />"
    div.innerHTML+=html;
}

function initTiles(screenWidth,screenHeight,map) {
    var left=screenWidth/2-(map[0].length/2)*TILE_WIDTH;
    var top=screenHeight/2-(map.length/2)*TILE_HEIGHT;
    var sx=left+TILE_WIDTH/2;
    var sy=top+TILE_HEIGHT/2;
    for(i=0;i<map[0].length;i++) {
        for(j=0;j<map.length;j++) {
            if(map[j][i]==1) {
                var tile=new Tile(sx+i*TILE_WIDTH,sy+j*TILE_HEIGHT);
                tiles.push(tile);
            }
        }
    }
}

function drawTiles(div,img) {
    for(i=0;i<tiles.length;i++) {
        var tile=tiles[i];
        tile.draw(div,img);
    }
}