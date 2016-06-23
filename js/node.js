function Node(x,y,parent) {
    this.node={
        x:x,
        y:y,
        parent:parent,//之前走的路点
        g:0,//当前点到起点的值
        h:0,//当前点到终点的距离
        f:0//f=g+h
    };
}

Node.prototype.getX=function() {
    return this.node.x;
}
Node.prototype.setX=function(x) {
    this.node.x=x;
}
Node.prototype.getY=function() {
    return this.node.y;
}
Node.prototype.setY=function(y) {
    this.node.y=y;
}
Node.prototype.getParent=function() {
    return this.node.parent;
}
Node.prototype.setParent=function(parent) {
    this.node.parent=parent;
}
Node.prototype.getG=function() {
    return this.node.g;
}
Node.prototype.setG=function(g) {
    this.node.g=g;
}
Node.prototype.getH=function() {
    return this.node.h;
}
Node.prototype.setH=function(h) {
    this.node.h=h;
}
Node.prototype.getF=function() {
    return this.node.f;
}
Node.prototype.setF=function(f) {
    this.node.f=f;
}

function sortNumber(a, b) {//数组排序方法，f值从小到大
    return a.getF() - b.getF();
}

function getSort(nodes) {//获得排序后的数组
    return nodes.sort(sortNumber);
}