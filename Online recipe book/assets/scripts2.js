// Function to extract and decode query parameters from URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return decodeURIComponent(urlParams.get(name));
}

  // Function to display recipe details on recipe-detail.html page
  function displayRecipeDetails() {
    const titleElement = document.getElementById("recipeTitle");
    const imageElement = document.getElementById("recipeImage");
    const descriptionElement = document.getElementById("recipeDescription");
    const instructions = document.getElementById("instructions");

    const index = getQueryParameter("index");
    const recipe = recipes[index];

    titleElement.innerText = recipe.title;
    imageElement.src = recipe.image;
    descriptionElement.innerText = recipe.long_description;
    instructions.innerHTML = recipe.instructions;
  }

  window.onload = displayRecipeDetails;