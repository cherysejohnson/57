mad = () => {
    let noun = document.getElementById('noun').value;
    let verb = document.getElementById('verb').value;
    let adverb = document.getElementById('adverb').value;
    let adj = document.getElementById('adj').value;
    document.forms['start'].reset();
    document.getElementById('output').innerHTML = `Do you ${verb} your ${adj} ${noun} ${adverb} every day? That's hilarious!`;
}