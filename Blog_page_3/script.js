document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.querySelector(".welcome a");

    loginLink.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Login functionality is not implemented yet.");
    });
});