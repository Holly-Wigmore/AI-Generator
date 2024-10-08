function displayPoem(response) {
  let poemOutput = document.querySelector("#poem-output");
  poemOutput.classList.remove("blink");
  new Typewriter("#poem-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let textInput = document.querySelector("#text-input");
  let apiKey = "754b84e4ec96a5481tfao024db3b3aff";
  let context =
    "You are an intelligent AI assistant who creates short quatrain poems, seperate each line with a <br /> and sign the end of the poem with Generated by your AI Poet💻 in an <em> element";
  let prompt = `Generate a poem about ${textInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
  let poemOutput = document.querySelector("#poem-output");
  poemOutput.classList.add("blink");
  poemOutput.classList.remove("hidden");
  poemOutput.innerHTML = `⏳ Generating Your Poem about ${textInput.value}!`;
}

let formSubmitElement = document.querySelector("#poem-form");
formSubmitElement.addEventListener("submit", generatePoem);
