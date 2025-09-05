document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("firstName");
    const usernameDisplay = document.getElementById("username");
  
    if (name && usernameDisplay) {
      usernameDisplay.textContent = `Gracias por reegistrarte, ${name}!. Checaremos en corto tu solicitud`;
    }
    else{
        alert("Name not detected");
    }
  });
  