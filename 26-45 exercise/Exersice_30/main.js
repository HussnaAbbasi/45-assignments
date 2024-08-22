var usernames = ["Admin", "hussna", "zaira", "zarmeen", "huria"];
usernames.forEach(function (usernames) {
    if (usernames == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hey ".concat(usernames, ", Thankyou for logging in!"));
    }
});
