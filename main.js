let URL = 'http://api.qrserver.com/v1/create-qr-code/?ecc=H&';

let getMyQR = async() => {
    let data = document.getElementById('data').value;
    let widthVal = parseInt(document.getElementById('size1').value);
    let heightVal = parseInt(document.getElementById('size2').value);
    let color = document.getElementById('favcolor').value;
    let bgcolor = document.getElementById('bgcolor').value;
    let format = document.getElementById('format').value;
    let myDiv = document.getElementById('imgDiv');
    let imageLink = URL + 'data=' + data + '&' + widthVal + '*' + heightVal + '&color=' + color.replace('#', '').toUpperCase() + '&bgcolor=' + bgcolor.replace('#', '').toUpperCase() + '&format=' + format;
    let image = document.createElement('img');
    image.src = imageLink;
    image.alt = data;
    image.id = 'myImage';
    image.width = widthVal;
    image.height = heightVal;
    if (myDiv.childNodes.length > 0) {
        myDiv.childNodes[0].remove();
        myDiv.appendChild(image)
    } else {
        myDiv.appendChild(image);
    }
}
window.onload = alert('The data should not contain "&" symbol');