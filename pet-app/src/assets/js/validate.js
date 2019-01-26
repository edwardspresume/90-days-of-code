export const isValidZip = zip => zip.match(/^\d{5}$/);

export const showAlert = (message, className) => {
  /* DOM elements */
  const container = document.querySelector(".container");
  const form = document.querySelector("#pet-form");

  // Create div
  const div = document.createElement("div");

  //   Add Classes
  div.className = `alert alert-${className}`;

  //   add Text
  div.appendChild(document.createTextNode(message));

  container.insertBefore(div, form);

  // Remove the alert div after 3s
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
};
