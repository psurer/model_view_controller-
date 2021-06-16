function performLogin(){
  var userid = document.getElementById('username');
  var password = document.getElementById('password');
}

function performCreateAccount(){
  var user = document.getElementById('name');
  var userid = document.getElementById('username');
  var password = document.getElementById('password');
  $.post("/account",
  {
    user: user,
    userid: userid,
    password: password
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}

function showCreateAccount(){
  var contentHtml = `  
  <div>
  <input id='name' type='text' placeholder='Enter name'/>
  <input id='username' type='text' placeholder='Enter username'/>
  <input id='password' type='password' placeholder='Enter password'/>
  <button onclick='performCreateAccount()'>Create Account</button>
</div>`
  var source = document.getElementById("main-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = { body: contentHtml };
  var html = template(context);
  document.getElementById("main").innerHTML = html;
}

function showDashboard(ev) {
  var source = document.getElementById("main-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = { body: "This is my first post!" };
  var html = template(context);
  document.getElementById("main").innerHTML = html;
}

function showHome() {
  var contentHtml = "<button id='newPost' onclick='showCreatePost()'>New Post</button>";
  var source = document.getElementById("main-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = { body: contentHtml };
  var html = template(context);
  document.getElementById("main").innerHTML = html;
}

function showLogin() {
  var contentHtml = `
  <div>
    <input id='username' type='text' placeholder='Enter username'/>
    <input id='password' type='password' placeholder='Enter password'/>
    <button onclick='performLogin()'>Login</button>
    <hr>
    <button onclick='showCreateAccount()'>Create Account</button>
  </div>
  `
  var source = document.getElementById("main-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = {  body: contentHtml };
  var html = template(context);
  document.getElementById("main").innerHTML = html;
}

function showLogout() {
    var source = document.getElementById("main-template").innerHTML;
    var template = Handlebars.compile(source);
    var context = { title: "Login", body: "This is logout" };
    var html = template(context);
    document.getElementById("main").innerHTML = html;
  }
window.onload = showDashboard();
