myArr = [
    {
        id : 100,
        name : 'Sumanth',
        age : 21,
        marks : 99
    },
    {
        id : 101,
        name : 'Mahi',
        age : 22,
        marks : 98
    }
]

function tab_gen(){
    let len = myArr.length;
    let html = `<table> 
                    <tr> 
                        <th> ID</th> 
                        <th> Name </th> 
                        <th>Age </th> 
                        <th> Marks </th> 
                    </tr>`;
    for(let val = 0; val<=len; val++){
        html += `<tr>`;
        let key = myArr[val];
        for(val1 in key) {
            let data = key[val1] + ' ';
            html += `<td>${data}</td>`;
        } 
        html += `</tr>`
    }
    html += `</table>`;
    document.getElementById("tab").innerHTML = html;
}

function Create(){
    var id1 = document.forms["addForm"]["id"].value;
    var name1 = document.forms["addForm"]["name"].value;
    var age1 = document.forms["addForm"]["age"].value;
    var marks1 = document.forms['addForm']["marks"].value;
    if( (id1 == "") && (name1 == "") && (age1 == "") && (marks1 == "") ){
        alert("Enter every field!");
    }
    else{
        var omyArr = {id:id1,name:name1,age:age1,marks:marks1};
        myArr.push(omyArr);
        this.tab_gen();
    }
    }

function Delete(){
    let id2 = document.forms["delForm"]["id"].value;
    if(id2==""){
        alert("Enter a value");
    }
    else
    for(i = 1; i<myArr.length;i++){
        let value = 0;
        if(myArr[i].id == id2){
            value = i;
        }
        myArr.splice(value,1);
        
    this.tab_gen();
    }
}

function Update(){
    let id = document.forms["updateForm"]["id"].value;
    let name = document.forms["updateForm"]["name"].value;
    let age = document.forms["updateForm"]["age"].value;
    let marks = document.forms["updateForm"]["marks"].value;
    for(let i=0;i<myArr.length;i++){

        if(myArr[i].id == id){
            myArr[i].id = id;
            myArr[i].name = name;
            myArr[i].age = age;
            myArr[i].marks = marks;
        }
    }
    this.tab_gen();
}
    
function visible1(){ //for create form
    // document.getElementsByName("addForm").style.display = 'visible';
    let doc = document.getElementById('add-form');
    doc.style.visibility = "visible";
    doc.style.display = "flex";
    doc.style.flexDirection = "column"
}
function visible2(){
    let doc = document.getElementById("del-form");
    doc.style.visibility = "visible";
    doc.style.display = "flex";
    doc.style.flexDirection = "column"
}
function visible(){ // for update form
    let doc = document.getElementById("update-form")
    doc.style.visibility = "visible";
    doc.style.display = "flex";
    doc.style.flexDirection = "column"
}
