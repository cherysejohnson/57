retire = () => {
    let current = parseInt(document.getElementById('current').value, 10);
    let future = parseInt(document.getElementById('future').value, 10);
    let year = new Date().getFullYear();
    document.forms['start'].reset();
    document.getElementById('result').innerHTML = `What is your current age? ${current} <br> At what age woud you like to retire? ${future} <br> You have ${future - current} years left until you can retire. <br> It's ${year}, so you can retire in ${year + (future - current)}`;
}