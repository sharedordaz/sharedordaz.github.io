import { therapyTypes } from "./therapies.js";
//console.log(therapyTypes);
const container = document.getElementById("terapiesContainer");

  container.classList.add("therapy-cards");

  therapyTypes.forEach(therapy => {
    const card = document.createElement("div");
    card.classList.add("card");

    //HERE ARE THE METHODS OF THE ARRAY
    card.innerHTML = `

      <h3>${therapy.name}</h3>  
      <p>${therapy.description}</p>
    `;

    container.appendChild(card);
  });