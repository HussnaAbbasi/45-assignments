let current_users: string[] = ["zarmeen", "admin", "zaira", "admin", "hussna"];
let new_users: string[] = ["zarmeen", "huria", "komal", "admin", "hussna"];

new_users.forEach((newUser) => {
  if (current_users.some((currentUser) => currentUser=== newUser)) {
    console.log(`${newUser} will need to enter a new username.`)
  } else {
    console.log(`${newUser} is available.`);
  }
});
