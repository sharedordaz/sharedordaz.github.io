document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".psyform");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        const nameInput = document.getElementById("firstName");
        const fName = nameInput.value.trim();
  
        if (fName) {
          localStorage.setItem("firstName", fName);
        }
      });
    }
  });
  