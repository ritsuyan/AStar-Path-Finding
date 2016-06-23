var COST_STRAIGHT=10;//上下左右移动花费
var COST_DIAGONAL=14;//斜向移动花费（没有用到）

function Astar(map) {
    this.astar={
        map:map,//地图，二维数组
        row:map.length,//行数
        col:map[0].length,//列数
        openList:new Array(),//开启列表
        closeList:new Array()//关闭列表
    };
}

Astar.prototype.searchList=function(snode,enode) {//根据起点和终点查找路径，获得路点数组
    var openList=this.astar.openList;
    openList.push(snode);
    var result=this.search(snode,enode);
    return result;
}

Astar.prototype.search=function(snode,enode) {//astar查找算法
    var openList=this.astar.openList;
    var closeList=this.astar.closeList;
    var row=this.astar.row;
    var col=this.astar.col;
    var resultList=new Array();
    var isFind=false;
    var node=null;
    while(openList.length>0) {
        node=openList[0];//取出开启列表的第一个路点，f值最小
        if(node.getX()==enode.getX()&&node.getY()==enode.getY()) {//当前路点是终点,找到了
            isFind=true;
            break;
        }

        if((node.getX()-1)>=0) {
            this.checkPath(node.getX()-1,node.getY(),node, enode, COST_STRAIGHT);//向左移动
        }

        if((node.getX()+1)<row) {
            this.checkPath(node.getX()+1,node.getY(),node, enode, COST_STRAIGHT);//向右移动
        }

        if((node.getY()-1)>=0) {
            this.checkPath(node.getX(),node.getY()-1,node, enode, COST_STRAIGHT);//向上移动
        }

        if((node.getY()+1)<col) {
            this.checkPath(node.getX(),node.getY()+1,node, enode, COST_STRAIGHT);//向下移动
        }

        closeList.push(openList[0]);//将当前路点放入关闭列表，说明已经到过
        openList.splice(0,1);//将当前路点从开启列表中删除
        openList=getSort(openList);//开启列表重新排序，f值最低的即为头元素
    }

    if(isFind) {
        this.getPath(resultList,node);//找到路径后从终点回朔到起点
    }
    return resultList;//返回路点数组
}

Astar.prototype.checkPath=function(x,y,parent,enode,cost) {//查询能否走通
    var map=this.astar.map;
    var closeList=this.astar.closeList;
    var openList=this.astar.openList;
    var node=new Node(x,y,parent);
    if(map[x][y]==0) {//地图元素是0则不能通过
        closeList.push(node);
        return false;
    }
    if(this.isListContains(closeList, x, y)!=-1){//关闭列表中存在也不能通过
        return false;
    }
    var index=-1;
    if((index=this.isListContains(openList,x,y))!=-1) {//开启列表中存在
        if((parent.getG()+cost)<openList[index].getG()) {//当前路点g更小，把列表中的路点更新为当前点
            node.setParent(parent);
            this.countG(node, enode, cost);
            this.countF(node);
            openList[index]=node;
        }
    } else {
        node.setParent(parent);
        this.count(node,enode,cost);
        openList.push(node);//添加到开启列表
    }
    return true;
}

Astar.prototype.isListContains=function(list,x,y) {//查询元素是否在数组中
    for(i=0;i<list.length;i++){
        var node=list[i];
        if(node.getX()==x&&node.getY()==y){
            return i;
        }
    }
    return -1;
}

Astar.prototype.getPath=function(resultList,node) {//从终点回朔到起点
    if(node.getParent()!=null) {
        this.getPath(resultList,node.getParent());
    }
    resultList.push(node);
}

Astar.prototype.count=function(node,enode,cost) {//计算g，h，f
    this.countG(node,enode,cost);
    this.countH(node,enode);
    this.countF(enode);
}

Astar.prototype.countG=function(node,enode,cost) {//计算g
    if(node.getParent()==null) {
        node.setG(cost);
    } else {
        node.setG(node.getParent().getG()+cost);
    }
}

Astar.prototype.countH=function(node,enode) {//计算h
    node.setF(Math.abs(node.getX()-enode.getX())
        +Math.abs(node.getY()-enode.getY()));
}

Astar.prototype.countF=function(node) {//计算f
    node.setF(node.getG()+node.getF());
}