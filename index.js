

// C R U D - Create Read Update Delete

// Global
var row = null;
var msg = document.getElementById("msg");

// CREATE
// Submit function
function Submit() {
  var dataEntered = retrieveData();
  var readData = readingDataFromLocalStorage(dataEntered);
  if (dataEntered == false) {
    msg.innerHTML = `<h3 style = "color: red;">Please enter data !</h3>`;
  } else {
    if (row == null) {
      insert(readData);
      msg.innerHTML = `<h3 style = "color: yellow;">Data Inserted !</h3>`;
    } else {
      update();
      msg.innerHTML = `<h3 style = "color: orange;">Data Updated !</h3>`;
    }
  }

  document.getElementById("form").reset();
}

// READ
// Retrieve data
function retrieveData() {
  var name1 = document.getElementById("name").value;
  if(name1 == ""){
    alert("jjjjjjjjjj");
    return false;
  }
  var email = document.getElementById("email").value;
  var phoneno = document.getElementById("phoneno").value;
  var BOD = document.getElementById("BOD").value;
  var appointment = document.getElementById("appointment").value;
  var color = document.getElementById("color").value;
  var Online = document.getElementById("Online").value;
  var age = document.getElementById("age").value;
  var checkbox= document.getElementById("checkbox").value;
  var photo = document.getElementById("photo").value;

  var arr = [name1, email, phoneno, BOD, appointment, color, Online , age, checkbox , photo];
  if (arr.includes("")) {
    return false;
  } else {
    return arr;
  }
}

//Data in Local Storage
function readingDataFromLocalStorage(dataEntered) {
  // Storing data in local storage
  var n = localStorage.setItem("Name", dataEntered[0]);
  var j = localStorage.setItem("email", dataEntered[1]);
  var e = localStorage.setItem("phonno", dataEntered[2]);
  var a = localStorage.setItem("BOD", dataEntered[3]);
  var b = localStorage.setItem("appointment", dataEntered[4]);
  var c = localStorage.setItem("color", dataEntered[5]);
  var d = localStorage.setItem("Online", dataEntered[6]);
  var i = localStorage.setItem("age", dataEntered[7]);
  var f = localStorage.setItem("checkbox", dataEntered[8]);
  var g = localStorage.setItem("photo", dataEntered[9]);
  

  // Show data in table (Getting item from localStorage)
  var n1 = localStorage.getItem("Name", n);
  var j1 = localStorage.getItem("email", j);
  var e1 = localStorage.getItem("phonno", e);
  var a1 = localStorage.getItem("BOD", a);
  var b1 = localStorage.getItem("appointment", b);
  var c1 = localStorage.getItem("color", c);
  var d1 = localStorage.getItem("Online", d);
  var i1 = localStorage.getItem("age", i);
  var f1 = localStorage.getItem("checkbox", f);
  var g1 = localStorage.getItem("photo", g);
  

  var arr = [n1, j1, e1, a1, b1, c1, d1, i1, f1, g1];
  return arr;
}

// INSERT
function insert(readData) {
  var table = document.getElementById("table");
  var i = table.rows.length;
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  
  // row.insertCell(4).innerHTML = "JJJ"
  cell1.innerHTML = readData[0];
  cell2.innerHTML = readData[1];
  cell3.innerHTML = readData[2];
  cell4.innerHTML = readData[3];
  cell5.innerHTML = readData[4];
  cell6.innerHTML = readData[5];
  cell7.innerHTML = readData[6];
  cell8.innerHTML = readData[7];
  cell9.innerHTML = readData[8];
  cell10.innerHTML = readData[9];
  cell11.innerHTML = `<button onclick="edit(this)"><a href="script.js:void(0)" style="text-decoration: none;">Edit</a></button> &nbsp
<button onclick="remove(this)"><a href="script.js:void(0)" style="text-decoration: none;">Delete</a></button>`;
}

//EDIT
function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("name").value = row.cells[0].innerHTML;
  document.getElementById("email").value = row.cells[1].innerHTML;
  document.getElementById("phoneno").value = row.cells[2].innerHTML;
  document.getElementById("BOD").value = row.cells[3].innerHTML;
  document.getElementById("appointment").value = row.cells[4].innerHTML;
  document.getElementById("color").value = row.cells[5].innerHTML;
  document.getElementById("Online").value = row.cells[6].innerHTML;
  document.getElementById("age").value = row.cells[7].innerHTML;
  document.getElementById("checkbox").value = row.cells[8].innerHTML;
  document.getElementById("photo").value = row.cells[9].innerHTML;
}

// UPDATE
function update(td) {
  row = td.parentElement.parentElement;
  row.cells[0].innerHTML = document.getElementById("name").value;
  row.cells[1].innerHTML = document.getElementById("email").value;
  row.cells[2].innerHTML = document.getElementById("phoneno").value;
  row.cells[3].innerHTML = document.getElementById("BOD").value;
  row.cells[4].innerHTML = document.getElementById("appointment").value;
  row.cells[5].innerHTML = document.getElementById("color").value;
  row.cells[6].innerHTML = document.getElementById("Online").value;
  row.cells[7].innerHTML = document.getElementById("age").value;
  row.cells[8].innerHTML = document.getElementById("checkbox").value;
  row.cells[9].innerHTML = document.getElementById("photo").value;
  row = null;
}

// DELETE
function remove(td) {
  var ans = confirm("Are you sure you want to delete the record?");
  if (ans == true) {
    var row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    msg.innerHTML = `<h3 style = "color: red;">Data Deleted !</h3>`;
  }
}

function formvalidation(){
  
}


