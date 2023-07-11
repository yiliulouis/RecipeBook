
const API_KEY = "a3c65c3b38c242b28293fb95a980aa12"
const recipeListEl = document.getElementById("recipe-list")

function displayRecipes(recipes) {
    recipeListEl.innerHTML = ""
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerHTML = recipe.title;

        recipeIngredientsEl = document.createElement("p")
        recipeIngredientsEl.innerHTML= `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}`;

        recipeViewRecipeEl = document.createElement("a");
        recipeViewRecipeEl.href = recipe.sourceUrl;
        recipeViewRecipeEl.innerText = "View Recipe";
        

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeViewRecipeEl);

        recipeListEl.append(recipeItemEl);
    });

}

async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

    const data = await response.json()

    return data.recipes
}


async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes)
    console.log(recipes)
}

init()