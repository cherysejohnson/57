party = () => {
    let people = parseInt(document.getElementById('people').value, 10);
    let pizzas = parseInt(document.getElementById('pizzas').value, 10);
    let slices = parseInt(document.getElementById('slices').value, 10);
    let math = Math.floor((slices * pizzas) / people);
    let leftovers = ((slices * pizzas) % ((slices * pizzas) / people)).toFixed(2);
    document.getElementById('result').innerHTML = `There are ${people} people attending a party with ${pizzas} pies. Each person gets ${math} slices. There are ${leftovers} slices left over.`;
    document.forms['start'].reset();
};