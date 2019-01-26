/* Import */
import fetchJsonp from "fetch-jsonp";
import { isValidZip, showAlert } from "./assets/js/validate";

/* Dom Elements */
const petForm = document.querySelector("#pet-form");

/* Event loop */
petForm.addEventListener("submit", fetchAnimals);

/* ==========================================================================
                             Fetch Animals from API
   ========================================================================== */
function fetchAnimals(event) {
  event.preventDefault();

  //   Get User Input
  const animal = document.querySelector("#animal").value;
  const zip = document.querySelector("#zip").value;

  // Validate zip
  if (!isValidZip(zip)) showAlert("Please Enter a valid zipCode", "danger");

  //   //   Fetch Pets
  fetchJsonp(
    `http://api.petfinder.com/pet.find?format=json&key=d1931c70bc8507cac846f7abc1e74081&animal=${animal}&location=${zip}&callback=callback`,
    { jsonpCallbackFunction: "callback" }
  )
    .then(res => res.json())
    .then(data => showAnimals(data.petfinder.pets.pet))
    .catch(err => console.log(err));

  const showAnimals = pets => {
    const result = document.querySelector("#results");

    // Clear First
    result.textContent = "";

    pets.forEach(pet => {
      console.log(pet.media.photos.photo[3].$t);
      const div = document.createElement("div");

      div.classList.add("card", "card-body", "mb-3");

      div.innerHTML = `
      <div class='row'>
        <div class='col-sm-6'>
            <h4>${pet.name.$t} ${pet.age.$t}</h4>
            <p class='text-secondary'>${pet.breeds.breed.$t}</p>
            <p>${pet.contact.address1.$t ? pet.contact.address1.$t : ""} ${
        pet.contact.city.$t
      } ${pet.contact.state.$t} ${pet.contact.zip.$t}</p>
            <ul class='list-group'>
            ${
              pet.contact.phone.$t
                ? `<li class='list-group-item'>Phone: ${
                    pet.contact.phone.$t
                  }</li>`
                : ""
            }
                ${
                  pet.contact.email.$t
                    ? `<li class='list-group-item'>Email: ${
                        pet.contact.email.$t
                      }`
                    : ""
                }

                   <li class='list-group-item'>Shelter Id: ${
                     pet.shelterId.$t
                   }</li>
            </ul>
        </div>

        <div class='col-sm-6 text-center'>
          <img class="img-fluid rounded-circle mt-2" src="${
            pet.media.photos.photo[3].$t
          }">
        </div>
      </div>
      `;

      result.appendChild(div);
    });
  };
}
