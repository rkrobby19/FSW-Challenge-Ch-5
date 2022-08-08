// TODO: review fgd binar #3
// ? how it works
const DATA_USER = "http://localhost:8000/users";
const USER_REGISTER = "http://localhost:8000/register";

const register = async () => {
    let regName = document.getElementById("registerName").value;
    let regUsername = document.getElementById("registerUsername").value;
    let regEmail = document.getElementById("registerEmail").value;
    let regPass = document.getElementById("registerPassword").value;
    console.log(regName);
    console.log(regUsername);
    console.log(regEmail);
    console.log(regPass);
    let resp = await fetch(USER_REGISTER, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: regName,
            username: regUsername,
            email: userEmail,
            password: userPassword,
        }),
    });
    if (resp.status === 401 || resp.status === 404) {
        alert("used user");
    } else {
        alert("You are authorized");
    }
};
