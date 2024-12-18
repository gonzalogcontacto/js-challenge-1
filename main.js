function getRecipe(recipeName) {
    try {
        console.log(`Fetching recipe for: ${recipeName}`);

        // Ejecutar ambas llamadas a las APIs concurrentemente
        return Promise.all([
            getIngredients(recipeName),
            getInstructions(recipeName)
        ])
        .then(([ingredients, instructions]) => {
            const recipe = {
                name: recipeName,
                ingredients,
                instructions
            };

            console.log("Recipe fetched successfully:", recipe);
            return recipe;
        })
        .catch(error => {
            console.error(`Error fetching recipe for ${recipeName}:`, error);
            return null;
        });

    } catch (error) {
        // Manejo de errores inesperados
        console.error(`Unexpected error fetching recipe for ${recipeName}:`, error);
        return null;
    }
}

function getIngredients(recipeName) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            if(recipeName === "Spaghetti Carbonara"){
                resolve(["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"]);
            } else{
                reject("recipe not found")
            }
       },1000)
    });
}

function getInstructions(recipeName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(recipeName === "Spaghetti Carbonara"){
                resolve(["Cook spaghetti al dente.", "Fry pancetta until crispy.", "Whisk eggs with Parmesan cheese and black pepper.", "Add cooked spaghetti to pancetta and toss with egg mixture.", "Serve immediately."]);
            } else {
                reject("recipe not found")
            }
        },1000)
    });
}

// EXECUTE / TEST your getRecipe function
getRecipe("Spaghetti Carbonara").then(result => {
    if (result) {
        console.log("Complete Recipe:", result);
    } else {
        console.log("Failed to fetch recipe.");
    }
});


