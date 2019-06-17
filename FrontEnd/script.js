//Open Full Page Tab
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function selectuser()
{
  document.getElementById("user").style.display="block";
  document.getElementById("book").style.display="none";
  document.getElementById("issue").style.display="none";
}
function selectbook()
{
  document.getElementById("user").style.display="none";
  document.getElementById("book").style.display="block";
  document.getElementById("issue").style.display="none";
}
function selectissue()
{
  document.getElementById("user").style.display="none";
  document.getElementById("book").style.display="none";
  document.getElementById("issue").style.display="block";
}

function selectuserpost()
{
  document.getElementById("userpost").style.display="block";
  document.getElementById("bookpost").style.display="none";
  document.getElementById("issuepost").style.display="none";
}
function selectbookpost()
{
  document.getElementById("userpost").style.display="none";
  document.getElementById("bookpost").style.display="block";
  document.getElementById("issuepost").style.display="none";
}
function selectissuepost()
{
  document.getElementById("userpost").style.display="none";
  document.getElementById("bookpost").style.display="none";
  document.getElementById("issuepost").style.display="block";
}

function selectuserupdate()
{
  document.getElementById("userupdate").style.display="block";
  document.getElementById("bookupdate").style.display="none";
  document.getElementById("issueupdate").style.display="none";
}
function selectbookupdate()
{
  document.getElementById("userupdate").style.display="none";
  document.getElementById("bookupdate").style.display="block";
  document.getElementById("issueupdate").style.display="none";
}
function selectissueupdate()
{
  document.getElementById("userupdate").style.display="none";
  document.getElementById("bookupdate").style.display="none";
  document.getElementById("issueupdate").style.display="block";
}

function selectuserdelete()
{
  document.getElementById("userdelete").style.display="block";
  document.getElementById("bookdelete").style.display="none";
  document.getElementById("issuedelete").style.display="none";
}
function selectbookdelete()
{
  document.getElementById("userdelete").style.display="none";
  document.getElementById("bookdelete").style.display="block";
  document.getElementById("issuedelete").style.display="none";
}
function selectissuedelete()
{
  document.getElementById("userdelete").style.display="none";
  document.getElementById("bookdelete").style.display="none";
  document.getElementById("issuedelete").style.display="block";
}

function showallusers()
{
  var url  = "http://localhost:8080/users";
  var xhr  = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    if (xhr.status <400) 
    {
      document.getElementById("Usersdisplay").textContent="";
      var para = document.createElement("P");
      var str = "<table><tr><th>User-Id</th><th>Firstname</th><th>Lastname</th><th>E-mail</th></tr>";
    //  document.getElementById("Usersdisplay").appendChild(para);
      data.forEach(user => {
      var fname = user.firstname;
      var lname =user.lastname;
      var email =user.email;
      var id =user.id;
      //var para = document.createElement("P");
      str = str + "<tr><td>"+id+"</td><td>"+fname+"</td><td>"+lname+"</td><td>"+email+"</td></tr>";
      //document.getElementById('Usersdisplay').appendChild(para);
      })
      //var para = document.createElement("P");
      str = str + "</table>";
      para.innerHTML = str;
      document.getElementById('Usersdisplay').appendChild(para);
      console.table(data);
    } else {
      alert("No User-Records available.");
      console.error(data);
    }
  }
  xhr.send(null);
}

function getUserById()
{
  var url  = "http://localhost:8080/users/";
  var xhr  = new XMLHttpRequest()
  var user_url = document.getElementById("user_id").value;
  xhr.open('GET', url+user_url, true)
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    if (xhr.status <400) 
    {
      document.getElementById("Userdisplay").textContent="";
      var para = document.createElement("P");
      var str = "<table><tr><th>User-Id</th><th>Firstname</th><th>Lastname</th><th>E-mail</th></tr>";
      var fname = data.firstname;
      var lname =data.lastname;
      var email =data.email;
      var id =data.id;
      str = str + "<tr><td>"+id+"</td><td>"+fname+"</td><td>"+lname+"</td><td>"+email+"</td></tr>";
      str = str + "</table>";
      para.innerHTML = str;
      document.getElementById('Userdisplay').appendChild(para);
      
      console.table(data);
    } else {
      alert("User Not Found!! Try with different entry.");
      console.error(data);
    }
  }
  xhr.send(null);
}

function showallbooks()
{
  var url  = "http://localhost:8080/books";
  var xhr  = new XMLHttpRequest()
  xhr.open('GET', url, true)
  console.log(this.response)
  xhr.onload = function () {
    var data = JSON.parse(this.response);
      console.log(data);
      if (xhr.status <400) 
      {
        document.getElementById("Booksdisplay").textContent="";
        var para = document.createElement("P");
        var str = "<table><tr><th>Bookname</th><th>Edition</th><th>Publication</th><th>Author</th></tr>";
       // document.getElementById("Booksdisplay").appendChild(para);
        data.forEach(book => {
        var bname = book.bookname;
        var edi =book.edition;
        var pub =book.publication;
        var aut =book.author;
       // var para = document.createElement("P");
        str = str+"<tr><td>"+bname+"</td><td>"+edi+"</td><td>"+pub+"</td><td>"+aut+"</td></tr>";
     //   document.getElementById('Booksdisplay').appendChild(para);
         })
         str = str + "</table>";
        para.innerHTML = str;
        document.getElementById('Booksdisplay').appendChild(para);
        console.table(data);
      } else {
        alert("No Book-Records available.");
        console.error(data);
      }
  }  
  xhr.send(null);
}

function getBookById()
{
  var url  = "http://localhost:8080/books/";
  var xhr  = new XMLHttpRequest()
  var book_url = document.getElementById("book_name").value;
  xhr.open('GET', url+book_url, true)
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    if (xhr.status <400) 
    {
      document.getElementById("Bookdisplay").textContent="";
      var para = document.createElement("P");
      var str = "<table><tr><th>Bookname</th><th>Edition</th><th>Publication</th><th>Author</th></tr>";
    //  document.getElementById("Bookdisplay").appendChild(para);
      var bname = data.bookname;
      var edi =data.edition;
      var pub =data.publication;
      var aut =data.author;
      str = str+"<tr><td>"+bname+"</td><td>"+edi+"</td><td>"+pub+"</td><td>"+aut+"</td></tr>";
      str = str + "</table>";
      para.innerHTML = str;
      document.getElementById('Bookdisplay').appendChild(para);
      console.table(data);
    } else {
      alert("Book Not Found!! Try with different entry.");
      console.error(data);
    }
  }
  xhr.send(null);
}

function showallissues()
{
  var url  = "http://localhost:8080/issuerecords";
  var xhr  = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    if (xhr.status <400) 
    {
      document.getElementById("Issuesdisplay").textContent="";
      var para = document.createElement("P");
      var str = "<table><tr><th>Issue-Id</th><th>Book-Name</th><th>Aurhor</th><th>Edition</th><th>Publication</th><th>Book-Number</th><th>Issue-Status</th><th>Issue-Date</th></tr>";
      document.getElementById("Issuesdisplay").appendChild(para);
      data.forEach(issuerecord => {
        var issueid = issuerecord.issueId;
        var issuebook = issuerecord.bookname;
        var issuepub = issuerecord.publication;
        var issueedi = issuerecord.edition;
        var issueDate = issuerecord.issueDate;
        var Status = issuerecord.status;
        var BookN = issuerecord.bookN;
        var issueauthor = issuerecord.author;
    //  var para = document.createElement("P");
        str = str+"<tr><td>"+issueid+"</td><td>"+issuebook+"</td><td>"+issueauthor+"</td><td>"+issueedi+"</td><td>"+issuepub+"</td><td>"+BookN+"</td><td>"+Status+"</td><td>"+issueDate+"</td></tr>";
     // document.getElementById('Issuesdisplay').appendChild(para);
       })
      str = str + "</table>";
        para.innerHTML = str;
        document.getElementById('Issuesdisplay').appendChild(para);
      console.table(data);
    } else {
      alert("No Issue-Records available.");
      console.error(data);
    }
  }
  xhr.send(null);
}

function getIssueById()
{
  var url  = "http://localhost:8080/issuerecords/";
  var xhr  = new XMLHttpRequest()
  var issue_url = document.getElementById("issue_id").value;
  xhr.open('GET', url+issue_url, true)
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    if (xhr.status<400) 
    {
      document.getElementById("Issuedisplay").textContent="";
      var para = document.createElement("P");
      var str = "<table><tr><th>Issue-Id</th><th>Book-Name</th><th>Aurhor</th><th>Edition</th><th>Publication</th><th>Book-Number</th><th>Issue-Status</th><th>Issue-Date</th></tr>";
      document.getElementById("Issuedisplay").appendChild(para);

      var issueid = data.issueId;
      var issuebook = data.bookname;
      var issuepub = data.publication;
      var issueedi = data.edition;
      var issueDate = data.issueDate;
      var Status = data.status;
      var BookN = data.bookN;
      var issueauthor = data.author;
      str = str+"<tr><td>"+issueid+"</td><td>"+issuebook+"</td><td>"+issueauthor+"</td><td>"+issueedi+"</td><td>"+issuepub+"</td><td>"+BookN+"</td><td>"+Status+"</td><td>"+issueDate+"</td></tr>";
      str = str + "</table>";
      para.innerHTML = str;
      document.getElementById('Issuedisplay').appendChild(para);
      console.table(data);
    } else {
      alert("Issue Not Found!! Try with different entry.");
      console.error(data);
    }
  }
  xhr.send(null);
}

function postuser()
{
  var url = "http://localhost:8080/users";
  var data = {};
  data.id = 0;
  data.firstname = document.getElementById("fname-post").value;
  data.lastname  = document.getElementById("lname-post").value;
  data.email  = document.getElementById("email-post").value;
  data.password  = document.getElementById("password-post").value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
    //var users = JSON.parse(this.response);
    if (xhr.status<400) {
      console.log("Success!!")
      alert("Success!!");
  //    console.table(users);
    } else {
      console.log("Error!!")
     // console.error(users);
    }
  }
  xhr.send(json);
}

function postissue()
{
  var url = "http://localhost:8080/issuerecords";
  var data = {};
  data.id = 0;
  data.bookname = document.getElementById("bname-post-issue").value;
  data.publication = document.getElementById("publication-post-issue").value;
  data.edition  = document.getElementById("edition-post-issue").value;
  data.author  = document.getElementById("author-post-issue").value;
  data.bookN = document.getElementById("bookN-post").value;
  data.status = document.getElementById("status-post").value;
  data.issueDate = new Date();
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
   // var issues = JSON.parse(this.response);
    if (xhr.status<400) {
      console.log("Success!!")
      alert("Success!!");
   //   console.table(issues);
    } else {
      console.log("Error!!")
      alert("Error!!")
    //  console.error(issues);
    }
  }
  xhr.send(json);
}

function postbook()
{
  var url = "http://localhost:8080/books";
  var data = {};
  data.bookname = document.getElementById("bname-post-book").value;
  data.publication = document.getElementById("publication-post-book").value;
  data.edition  = document.getElementById("edition-post-book").value;
  data.author  = document.getElementById("author-post-book").value;
  data.qty  = document.getElementById("qty-post").value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
    //var books = JSON.parse(this.response);
    if (xhr.status<400) {
      console.log("Success!!")
      alert("Success!!");
   //   console.table(issues);
    } else {
      console.log("Error!!")
      alert("Error!!")
    }
  }
  xhr.send(json);
}

function updateuser()
{
  var url = "http://localhost:8080/users/";
  var data = {};
  data.id = document.getElementById("updateuser-id").value;
  data.firstname = document.getElementById("fname-update").value;
  data.lastname  = document.getElementById("lname-update").value;
  data.email  = document.getElementById("email-update").value;
  data.password  = document.getElementById("password-update").value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url+data.id, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
   // var users = JSON.parse(this.response);
    if (xhr.status<400) {
      console.log("Success!!")
      alert("Success!!");
   //   console.table(issues);
    } else {
      console.log("Error!!")
      alert("Error!!")
    }
  }
  xhr.send(json);
}

function updateissue()
{
  var url = "http://localhost:8080/issuerecords/";
  var data = {};
  data.issueId = document.getElementById("updateissue-id").value;;
  data.bookname = document.getElementById("bname-update-issue").value;
  data.publication = document.getElementById("publication-update-issue").value;
  data.edition  = document.getElementById("edition-update-issue").value;
  data.author  = document.getElementById("author-update-issue").value;
  data.bookN = document.getElementById("bookN-update").value;
  data.status = document.getElementById("status-update").value;
  data.issueDate = new Date();
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url+data.id, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
   // var issues = JSON.parse(this.response);
    if (xhr.status<400) {
      console.log("Success!!")
      alert("Success!!");
   //   console.table(issues);
    } else {
      console.log("Error!!")
      alert("Error!!")
    }
  }
  xhr.send(json);
}

function updatebook()
{
  var url = "http://localhost:8080/books/";
  var data = {};
  data.bookname = document.getElementById("bname-update-book").value;
  data.publication = document.getElementById("publicaion-update-book").value;
  data.edition  = document.getElementById("edition-update-book").value;
  data.author  = document.getElementById("author-update-book").value;
  data.qty  = document.getElementById("qty-update").value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url+data.bookname, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
   // var books = JSON.parse(this.response);
    if (xhr.status<400) {
      console.log("Success!!")
      alert("Success!!");
   //   console.table(issues);
    } else {
      console.log("Error!!")
      alert("Error!!")
    }
  }
  xhr.send(json);
}

function deleteuser()
{
  var url = "http://localhost:8080/users/";
  var user_del= document.getElementById("user_id_del").value;
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", url+user_del, true);
  xhr.onload = function () {
    //var users = JSON.parse(this.response);
    if (xhr.status<400) {
      //console.table(users);
      alert("Success!!");
      document.getElementById("UserByIdDel").textContent= "Deletion Successful!!";
    } else {
      document.getElementById("UserByIdDel").textContent= "Deletion Not Possible!!";
      alert("Error!!")
     // console.error(users);
    }
  }
  xhr.send(null);
}
function deletebook()
{
  var url = "http://localhost:8080/books/";
  var book_del= document.getElementById("bookname_del").value;
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", url+book_del, true);
  xhr.onload = function () {
   // var books = JSON.parse(this.response);
    if (xhr.status<400) {
    //  console.table(books);
    alert("Success!!");
      document.getElementById("BookByIdDel").value= "Deletion Successful!!";
    } else {
      document.getElementById("BookByIdDel").value= "Deletion Not Possible";
      alert("Error!!")
    //  console.error(books);
    }
  }
  xhr.send(null);
}

function deleteissue()
{
  var url = "http://localhost:8080/issuerecords/";
  var issue_del= document.getElementById("issue_id_del").value;
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", url+issue_del, true);
  xhr.onload = function () {
   // var issues = JSON.parse(this.response);
    if (xhr.status<400) {
    //  console.table(issues);
      alert("Success!!");
      document.getElementById("IssueByIdDel").value= "Deletion Successful!!";
    } else {
      document.getElementById("IssueByIdDel").value= "Deletion Not Possible";
      alert("Error!!")
    //  console.error(issues);
    }
  }
  xhr.send(null);
}
