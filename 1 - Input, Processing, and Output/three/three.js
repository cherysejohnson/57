quoteomatic = () => {
    let quote = document.getElementById('quote').value;
    let author = document.getElementById('author').value;
    document.forms['start'].reset();
    document.getElementById('what').innerHTML = `What is the quote? "${quote}".`;
    document.getElementById('who').innerHTML = `Who said it? ${author}.`;
    document.getElementById('result').innerHTML = `${author} says, "${quote}".`;
};