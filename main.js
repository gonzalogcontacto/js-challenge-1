function getRecipe(recipeName) {
    return Promise.all([
        getIngredients(recipeName),
        getInstructions(recipeName)
    ])
    .then(([ingredients, instructions]) => {
        const recipe = {
            name: recipeName,
            ingredients: ingredients,
            instructions: instructions
        };

        console.log(`Recipe for ${recipeName}:`);
        console.log("Ingredients:", ingredients);
        console.log("Instructions:", instructions);

        return recipe;
    })
    .catch(error => {
        console.error(`Error fetching recipe for ${recipeName}:`, error); 
        return null;
    });
}

function getIngredients(recipeName){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            if(recipeName === "Spaghetti Carbonara"){
                resolve(["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"]);
            } else{
                reject("recipe not found")
            }
       },1000)
    })
}

function getInstructions(recipeName){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(recipeName === "Spaghetti Carbonara"){
                resolve(["Cook spaghetti al dente.", "Fry pancetta until crispy.", "Whisk eggs with Parmesan cheese and black pepper.", "Add cooked spaghetti to pancetta and toss with egg mixture.", "Serve immediately."]);
            } else {
                reject("recipe not found")
            }
        },1000)
    })
}

// Prueba tu función con la receta "Spaghetti Carbonara"
getRecipe("Spaghetti Carbonara").then(recipe => {
    if (recipe) {
        console.log("Complete recipe:", recipe);
    } else {
        console.log("Recipe could not be obtained");
    }
});


  