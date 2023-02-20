hello = () => {
    let name = document.getElementById('name').value;
    document.forms['start'].reset();
    document.getElementById('repeat').innerHTML = `Your name is ${name}.`;
    document.getElementById('result').innerHTML = `Greetings, ${name}, welcome to Earth!`;
};