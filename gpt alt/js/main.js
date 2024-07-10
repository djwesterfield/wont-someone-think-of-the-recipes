document.addEventListener('DOMContentLoaded', function () {
    const recipeList = document.getElementById('recipe-list');
    const recipes = [
        'example_recipe.md', // Add your recipe filenames here
        // 'another_recipe.md',
    ];

    recipes.forEach(recipe => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `recipes/${recipe}`;
        a.textContent = recipe.replace('.md', '').replace('_', ' ');
        a.target = '_blank';
        li.appendChild(a);
        recipeList.appendChild(li);
    });
});

function toggleMeasurement(content) {
    const isUsa = content.includes('cup') || content.includes('oz');
    return isUsa ?
        content.replace(/(\d+)\s?cup/g, (match, p1) => `${(p1 * 240).toFixed(0)} ml`)
               .replace(/(\d+)\s?oz/g, (match, p1) => `${(p1 * 28.35).toFixed(0)} g`) :
        content.replace(/(\d+)\s?ml/g, (match, p1) => `${(p1 / 240).toFixed(2)} cup`)
               .replace(/(\d+)\s?g/g, (match, p1) => `${(p1 / 28.35).toFixed(2)} oz`);
}
