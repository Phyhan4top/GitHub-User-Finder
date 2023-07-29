const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const inputTxt = e.target.value;

  const github = new Github();
  const ui = new UI();

  if (inputTxt !== "") {
    github
      .get(inputTxt)

      .then((user) => {
        if (
          user.profile.message === "Not Found" &&
          user.repos.message === "Not Found"
        ) {
          // Show alert
          ui.ShowAlert("alert alert-danger", "User not found");
             ui.clrUsers();
        } else {
          ui.ShowProfile(user.profile);
          ui.ShowRepos(user.repos);
        }
      });
  } else {
    //  clear users
    ui.clrUsers();
  }
});
