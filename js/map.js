var map=new Array();
    map[0]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    map[1]=[1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1];
    map[2]=[1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1];
    map[3]=[1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1];
    map[4]=[1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1];
    map[5]=[1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1];
    map[6]=[1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1];
    map[7]=[1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1];
    map[8]=[1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1];
    map[9]=[1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1];
    map[10]=[1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1];
    map[11]=[1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1];
    map[12]=[1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1];
    map[13]=[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1];
    map[14]=[1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1];
    map[15]=[1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1];
    map[16]=[1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1];
    map[17]=[1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1];
    map[18]=[1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1];
    map[19]=[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1];
    map[20]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
    map[21]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
    map[22]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1];
    map[23]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

function initMap() {
    for(i=0;i<map.length;i++) {
        for(j=0;j<map[0].length;j++) {
            if(map[i][j]==0)
                map[i][j]=1;
            else
                map[i][j]=0;
        }
    }
}