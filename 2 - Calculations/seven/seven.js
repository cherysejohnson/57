room = () => {
    let length = parseInt(document.getElementById('length').value, 10);
    let width = parseInt(document.getElementById('width').value, 10);
    document.forms['start'].reset();
    const area = length * width;
    const meters = (area * 0.09290304).toFixed(2);
    document.getElementById('result').innerHTML = `Length of the room: ${length} <br> Width of the room: ${width} <br> You entered the dimensions of ${length} feet by ${width} feet. <br> The area is <br> ${area} square feet <br> ${meters} square meters`;
}