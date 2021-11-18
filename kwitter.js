function login() {
    var password  = document.getElementById("passwordinput").value;
    var password2 = document.getElementById("passwordinput2").value;
    var username  = document.getElementById("usernameinput").value;
    var errMsg    = document.getElementById("errormsg");

    if (password == "" || password2 == "" || username =="") {
        errMsg.innerHTML = "<h4> Error: Blank input boxes don't work </h4>";
    }   
    else if (password != password2)  {
        errMsg.innerHTML = "<h4> Error: Passwords do not match up </h4>";
    }
    else if ( password == username & password2 == username) {
        errMsg.innerHTML = "<h4> Error: You can't have your password the same as your username </h4>";
    }         
    else {
      localStorage.setItem("username", username);
      window.location="kwitter_room.html";
    }
}