function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-output", {
    strings: "Generating Your Poem...<br/> This won't take long!",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formSubmitElement = document.querySelector("#poem-form");
formSubmitElement.addEventListener("submit", generatePoem);
