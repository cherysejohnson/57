basic = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let numx = parseInt(num1, 10);
    let numy = parseInt(num2, 10);
    document.forms['start'].reset();
    document.getElementById('result').innerHTML = `<br> What is the first number? ${numx} <br>

    What is the second number? ${numy} <br> <br>

    ${numx} + ${numy} = ${numx + numy} <br>

    ${numx} - ${numy} = ${numx - numy} <br>

    ${numx} * ${numy} = ${numx * numy} <br>

    ${numx} / ${numy} = ${numx / numy}`
}