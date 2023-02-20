speech = () => {
    let word = document.getElementById('word').value;
    document.forms['submit'].reset();
    document.getElementById('repeat').innerHTML = `You entered ${word}.`;
    document.getElementById('result').innerHTML = `${word} is ${word.length} letters long.`;
}