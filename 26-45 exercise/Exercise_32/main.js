var current_users = ["zarmeen", "admin", "zaira", "admin", "hussna"];
var new_users = ["zarmeen", "huria", "komal", "admin", "hussna"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser === newUser; })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
