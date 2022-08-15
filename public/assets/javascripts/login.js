const DATA_USER = "http://localhost:8000/users";
const USER_LOGIN = "http://localhost:8000/login";

const login = async () => {
    let userEmail = document.getElementById("user-email").value;
    let userPassword = document.getElementById("user-password").value;
    console.log(userEmail);
    console.log(userPassword);
    let resp = await fetch(USER_LOGIN, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
        }),
    });
    if (resp.status === 401 || resp.status === 404) {
        alert("Wrong email or password");
    } else {
        alert("You are authorized");
        window.location.replace("the-game");
    }
};
