/**
 * Created by mshuang on 2017/6/16.
 */
//表头的数据
var theader = {
    heads:[{
        name:'name',
        label:'姓名',
        sortable: false//不排序
    },{
        name:'Chinese',
        label:'语文',
        sortable: true
    },{
        name:'math',
        label:'数学',
        sortable: true
    },{
        name:'english',
        label:'英语',
        sortable:true
    },{
        name:'total',
        label:'总分',
        sortable:true
    }]
};

//表格内容的数据
var tbody = [{
    name: '齐爽',
    chinese: 100,
    math: 100,
    english: 90,
    total: 290
},{
    name: '林娜',
    chinese: 80,
    math: 70,
    english: 60,
    total: 210
},{
    name: '杨灵犀',
    chinese: 70,
    math: 60,
    english: 50,
    total: 180
},{
    name: '裴瑞婷',
    chinese: 60,
    math: 50,
    english: 40,
    total: 150
}];

//初始化 加载表头和表格内容
function init(){
    addThead();
    addTbody();
}
//生成行
function addTr(){
    var trNode = document.createElement('tr');
    return trNode;
}
//生成单元格
function addTd(value){
    var tdNode = document.createElement('td');
    tdNode.innerText = value;
    return tdNode;
}
//添加升序按钮
function upSort(val){
    sort1(val);  //升序排序
    table.innerHTML = ' ';
    init();
}
//添加降序按钮
function downSort(val){
    sort2(val);  //降序排序
    table.innerHTML = ' ';
    init();
}

//获取元素
var table = document.getElementById('table');
var tabHead = theader.heads;
var dataLen = tbody.length;

//创建并添加表头元素
function addThead(){
    var tHead = document.createElement('thead');
    //生成一行
    var trNode = addTr();
    //生成表头单元格
    tabHead.forEach(function (head) {
        var tds = addTd(head.label);

        //对于需要排序的字段：
        if(head.sortable){
            var val = head.name;
            //追加升序按钮
            var upBtn = document.createElement('span');
            upBtn.className = 'upBtn';
            tds.appendChild(upBtn);
            upBtn.style.cursor = 'pointer';
            //绑定事件
            upBtn.onclick = function(){
                upSort(val);
            };

            //追加降序按钮
            var downBtn = document.createElement('span');
            downBtn.className = 'downBtn';
            tds.appendChild(downBtn);
            downBtn.style.cursor = 'pointer';
            //绑定事件
            downBtn.onclick = function () {
                downSort(val);
            };
        }
        trNode.appendChild(tds);
    });

    tHead.appendChild(trNode);
    table.appendChild(tHead);

}

//添加表格内容
function addTbody(){
    var tBody = document.createElement('tbody');
    for(var i=0;i<dataLen;i++){
        var trNode = addTr();
        for(var key in tbody[i]){
            var tds = addTd(tbody[i][key]);
            trNode.appendChild(tds);
        }
        tBody.appendChild(trNode);
    }
    table.appendChild(tBody);
}

function sort1(val){
    var byScore =  function(a,b){
        return a[val] -b[val];
    };
    return tbody.sort(byScore);
}

function sort2(val){
    var byScore = function (a,b) {
        return b[val] - a[val];
    };
    return tbody.sort(byScore);
}

init();