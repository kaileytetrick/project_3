// Initialize Firebase
$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyAYw1akUZm6tNd6Nir6koza_tGxhge2kPk",
        authDomain: "salon-36e81.firebaseapp.com",
        databaseURL: "https://salon-36e81.firebaseio.com",
        projectId: "salon-36e81",
        storageBucket: "",
        messagingSenderId: "143543445801"
    };

    firebase.initializeApp(config);

    isLoggingInViaRegistration = false;

    firebase.auth().onAuthStateChanged(function (user) {
        console.log(user.email);
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;


        }
    });

    $("#loginButton").on("click", function (event) {
        var userEmail = $("#userEmail").val();
        var userPassword = $("#userPassword").val();
        console.log(userEmail);
        console.log(userPassword);

        firebase
            .auth()
            .signInWithEmailAndPassword(userEmail, userPassword)
            .then(function (user) {
                console.log('signinwithemailandpassword', user);
                window.location = "index3.html";
            })
            .catch(function (error) {
                if (error.code == "auth/user-not-found") {
                    alert("User Not Found.");
                }
                console.log(error);
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                alert(errorMessage);
            });
    });

    $("#createButton").on("click", function (event) {
        var _this = this;
        event.preventDefault();


        var emailAddress = $("#newEmail")
            .val()
            .trim();
        var firstPassword = $("#newPassword")
            .val()
            .trim();
        var confirmFirstPassword = $("#confirmPassword")
            .val()
            .trim();


        var newUser = {
            email: emailAddress,
            password: firstPassword
        };
        console.log(newUser);

        if (firstPassword !== confirmFirstPassword) {
            alert("Passwords Do Not Match, Please Try Again");
        } else {

            isLoggingInViaRegistration = true;

            var pp = new Promise((resolve, reject) => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(emailAddress, firstPassword)
                    .then(usz => {
                        // [END createwithemail]
                        // callSomeFunction(); Optional
                        var user = firebase.auth().currentUser;
                        console.log("Current User...");
                        console.log(user);
                        dName = $("#newName").val();
                        console.log(dName);
                        // alert('Profile Value: ' + dName);
                        user
                            .updateProfile({ displayName: dName })
                            .then(() => resolve(user))
                            .catch(err => reject(err));
                    })
                    .catch(error => reject(error));
            });

            pp.then(
                user => {
                    console.log('moving user');
                    console.log(user);
                    window.location = "index.html";
                },
                error => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                    alert(errorMessage);
                }
            );
        }
    });

    $("#forgot").on("click", evt => {
        var newEmail = $("#inputEmail").val();
        firebase
            .auth()
            .sendPasswordResetEmail(newEmail)
            .then(() => {
                $("#inputEmail").val("");
                alert("Email sent.  Thank you.");
            })
            .catch(err => alert(err.message));
    });
});
$("#signoutButton").on("click", function (event) {
    alert('verifies that signoutButton click works.');
    firebase.auth().signOut().then(function () {
        alert('signout from firebase function');
        window.location = "index.html";
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.

    });
    // Configure Google Sign In
    GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
        .requestIdToken(getString(R.string.default_web_client_id))
        .requestEmail()
        .build();

 private void signIn() {
        Intent signInIntent = mGoogleSignInClient.getSignInIntent();
        startActivityForResult(signInIntent, RC_SIGN_IN);
    }

@Override
public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);

    // Result returned from launching the Intent from GoogleSignInApi.getSignInIntent(...);
    if (requestCode == RC_SIGN_IN) {
        Task < GoogleSignInAccount > task = GoogleSignIn.getSignedInAccountFromIntent(data);
        try {
            // Google Sign In was successful, authenticate with Firebase
            GoogleSignInAccount account = task.getResult(ApiException.class);
            firebaseAuthWithGoogle(account);
        } catch (ApiException e) {
            // Google Sign In failed, update UI appropriately
            Log.w(TAG, "Google sign in failed", e);
            // ...
        }
    }
}
private FirebaseAuth mAuth;
// ...
mAuth = FirebaseAuth.getInstance();

@Override
public void onStart() {
    super.onStart();
    // Check if user is signed in (non-null) and update UI accordingly.
    FirebaseUser currentUser = mAuth.getCurrentUser();
    updateUI(currentUser);
}
private void firebaseAuthWithGoogle(GoogleSignInAccount acct) {
    Log.d(TAG, "firebaseAuthWithGoogle:" + acct.getId());

    AuthCredential credential = GoogleAuthProvider.getCredential(acct.getIdToken(), null);
    mAuth.signInWithCredential(credential)
        .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                @Override
    public void onComplete(@NonNull Task < AuthResult > task) {
        if (task.isSuccessful()) {
            // Sign in success, update UI with the signed-in user's information
            Log.d(TAG, "signInWithCredential:success");
            FirebaseUser user = mAuth.getCurrentUser();
            updateUI(user);
        } else {
            // If sign in fails, display a message to the user.
            Log.w(TAG, "signInWithCredential:failure", task.getException());
            Snackbar.make(findViewById(R.id.main_layout), "Authentication Failed.", Snackbar.LENGTH_SHORT).show();
            updateUI(null);
        }

        // ...
    }
});
}
FirebaseAuth.getInstance().signOut();
});
