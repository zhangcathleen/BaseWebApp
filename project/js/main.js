
function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}

// gets called when the user clicks this
function toggleSignIn() {
    if (!firebase.auth().currentUser) { // if the user's not logged in, handle login
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithPopup(provider).then(function(result) {
                                                       console.log("success");
                                                       }).catch(function(error) {
                                                                console.error("error", error);
                                                                });
    } else { // handle logout
        firebase.auth().signOut();
    }
        //This disables the button until login or logout is successful. You'll want to replace 'login-button' with the id of your login button.
    $('loginButton').attr("disabled", true);
}
