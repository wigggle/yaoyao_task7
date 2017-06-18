/**
 * Created by mshuang on 2017/6/16.
 */
//��ͷ������
var theader = {
    heads:[{
        name:'name',
        label:'����',
        sortable: false//������
    },{
        name:'Chinese',
        label:'����',
        sortable: true
    },{
        name:'math',
        label:'��ѧ',
        sortable: true
    },{
        name:'english',
        label:'Ӣ��',
        sortable:true
    },{
        name:'total',
        label:'�ܷ�',
        sortable:true
    }]
};

//������ݵ�����
var tbody = [{
    name: '��ˬ',
    chinese: 100,
    math: 100,
    english: 90,
    total: 290
},{
    name: '����',
    chinese: 80,
    math: 70,
    english: 60,
    total: 210
},{
    name: '����Ϭ',
    chinese: 70,
    math: 60,
    english: 50,
    total: 180
},{
    name: '������',
    chinese: 60,
    math: 50,
    english: 40,
    total: 150
}];

//��ʼ�� ���ر�ͷ�ͱ������
function init(){
    addThead();
    addTbody();
}
//������
function addTr(){
    var trNode = document.createElement('tr');
    return trNode;
}
//���ɵ�Ԫ��
function addTd(value){
    var tdNode = document.createElement('td');
    tdNode.innerText = value;
    return tdNode;
}
//�������ť
function upSort(val){
    sort1(val);  //��������
    table.innerHTML = ' ';
    init();
}
//��ӽ���ť
function downSort(val){
    sort2(val);  //��������
    table.innerHTML = ' ';
    init();
}

//��ȡԪ��
var table = document.getElementById('table');
var tabHead = theader.heads;
var dataLen = tbody.length;

//��������ӱ�ͷԪ��
function addThead(){
    var tHead = document.createElement('thead');
    //����һ��
    var trNode = addTr();
    //���ɱ�ͷ��Ԫ��
    tabHead.forEach(function (head) {
        var tds = addTd(head.label);

        //������Ҫ������ֶΣ�
        if(head.sortable){
            var val = head.name;
            //׷������ť
            var upBtn = document.createElement('span');
            upBtn.className = 'upBtn';
            tds.appendChild(upBtn);
            upBtn.style.cursor = 'pointer';
            //���¼�
            upBtn.onclick = function(){
                upSort(val);
            };

            //׷�ӽ���ť
            var downBtn = document.createElement('span');
            downBtn.className = 'downBtn';
            tds.appendChild(downBtn);
            downBtn.style.cursor = 'pointer';
            //���¼�
            downBtn.onclick = function () {
                downSort(val);
            };
        }
        trNode.appendChild(tds);
    });

    tHead.appendChild(trNode);
    table.appendChild(tHead);

}

//��ӱ������
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