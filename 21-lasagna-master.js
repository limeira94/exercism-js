
export function cookingStatus(remainingTime) {
    if (remainingTime === 0) {
        return 'Lasagna is done.'
    } else if (remainingTime > 0) {
        return 'Not done, please wait.'
    } else {
        return 'You forgot to set the timer.'
    }
};

export function preparationTime(layers, averageTime) {
    if (averageTime) {
        return layers.length * averageTime;
    } else {
        return layers.length * 2;
    }
}

export function quantities(layers) {
    let noodlesQuant = 0;
    let sauceQuant = 0;

    for (var i = 0; layers.length > i; i++) {
        if (layers[i] === 'noodles') {
            noodlesQuant += 1
        } else if (layers[i] === 'sauce') {
            sauceQuant += 1
        }
    }
    return { noodles: noodlesQuant * 50, sauce: sauceQuant * 0.2 };

}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
    return;
  }

export function scaleRecipe(recipe, quantity) {
    const newRecipe = {}
  
    for (const ingredient in recipe) {
        newRecipe[ingredient] = recipe[ingredient] * (quantity / 2)
    }
    return newRecipe
  }