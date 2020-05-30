function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
      alert("Welcome back " + user+"!");
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
    if(user!="" && user!=null){
      document.getElementById("name").innerHTML = "Hey "+user+"!";
    }
    else if(user==""){
      document.getElementById("name").innerHTML = "Hi!";
    }
    else{
      document.getElementById("name").innerHTML = "Hey John Doe!";
    }
}
function getIP(json) {
    window.ip = json.ip;
}
function delCookie() {
    window.document.cookie = "username=; expires=Wed, 24 Apr 2002 00:00:00 UTC; path=/;";
    alert("Cookie Deleted!");
}