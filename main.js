function getRecipe(recipeName){
    // insert your code here
    // return the recipe object with the instructions and ingredients
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

// EXECUTE / TEST your getRecipe funcion


