function toggleMeasurement() {
    const ingredientsElement = document.getElementById('ingredients');
    const ingredients = ingredientsElement.textContent;
    const isUsa = ingredients.includes('cup') || ingredients.includes('oz');
    
    if (isUsa) {
        ingredientsElement.textContent = ingredients
            .replace(/(\d+)\s?cup/g, (match, p1) => `${(p1 * 240).toFixed(0)} ml`)
            .replace(/(\d+)\s?oz/g, (match, p1) => `${(p1 * 28.35).toFixed(0)} g`);
    } else {
        ingredientsElement.textContent = ingredients
            .replace(/(\d+)\s?ml/g, (match, p1) => `${(p1 / 240).toFixed(2)} cup`)
            .replace(/(\d+)\s?g/g, (match, p1) => `${(p1 / 28.35).toFixed(2)} oz`);
    }
}
