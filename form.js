let list = [];

function myfunction() {
    /*   var gender_select;
       if (document.getElementById('g1').checked) {
           gender_select = document.getElementById('g1').value;
       } else if (document.getElementById('g2').checked) {
           gender_select = document.getElementById('g2').value;
       } else if (document.getElementById('g3').checked) {
           gender_select = document.getElementById('g3').value;
       } */

    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;

    insertdata(fname, mname, lname, age);
    display();

}

function insertdata(fname, mname, lname, age) {
    list.push({
        "fname": fname,
        "mname": mname,
        "lname": lname,
        "age": age,
    })
}

function display() {
    let result = "";
    for (let i = 0; i < list.length; i++) {

        result += `<table><tr><td >${list[i].fname}</td><td >${list[i].mname}</td><td >${list[i].lname}</td><td>${list[i].age}</td></tr></table>`;
    }
    document.getElementById('result').innerHTML = `<table >
    <tr>
    <th>First Name</th>
    <th>Middle Name</th>
    <th>Last Name</th>
    <th>Age</th>
    </tr>
    <tr>
    ${result}
    </tr>
    </table>`;
}

/*function display() {
    let html = "";
    for (let i=0; i<arr.length;i++) {
        html +=`<table><tr><td>${arr[i].fname}</td><td>${arr[i].mname}</td><td>${arr[i].lname}</td><td>${arr[i].age}</td></tr></table>`
    }
    document.getElementById("result").innerHTML = `<table>
        <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
        <tr>
            ${html}
        </tr>
        </table>`

}




 alert(`
 ${"First Name : "+(document.getElementById('fname').value)} 
 ${("Middle Name : " +document.getElementById('mname').value)} 
 ${("Last Name : " +(document.getElementById('lname').value))}
 ${"Age: " +(document.getElementById('age').value)} 
 ${"Gender : " + gender_select} 
 ${"Country : " +(document.getElementById('country').value)} 
 ${"Phone Number : " +(document.getElementById('phone').value)}
 `) */