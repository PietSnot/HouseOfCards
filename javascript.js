/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const width = data.width;
const height = width * 2.5 / 4;
const voorkant = data.voorkant;
const achterkant = data.achterkant;
const aantalLagen = data.aantalLagen;
const angle = degToRad(data.angleDegrees);
const pi = data.pi;
const border = data.border;
const cards = [];

window.addEventListener('load', init);

function init() {
    console.log('in init');
    const centrum = document.getElementById('centrum');
    createTriangleCards(centrum);
    document.body.addEventListener('click', collapseOrForm);
}

function createTriangleCards(centerDiv) {
    console.log('in createTriangleCards');
    
    const H1 = 3 * width / 2 * Math.cos(angle / 2);
    const B1 = width * Math.sin(angle/2);
    const C1 = H1 / 3;
    
    const trArray = [];
    // layer 1
    trArray.push(transform(0, -height/2, H1, pi/2 - angle/2));
    trArray.push(transform(0, -height/2, H1, pi/2 + angle/2));
    trArray.push(transform(-width/2, -height/2, C1, 0));
    
    // layer 2
    trArray.push(transform(-width/2, -height/2, C1, pi/2 - angle/2));
    trArray.push(transform(-width/2, -height/2, C1, pi/2 + angle/2));
    trArray.push(transform(-width, -height/2, -C1, 0));
    trArray.push(transform(width/2, -height/2, C1, pi/2 - angle/2));
    trArray.push(transform(width/2, -height/2, C1, pi/2 + angle/2));
    trArray.push(transform(0, -height/2, -C1, 0));
    
    // layer 3
    trArray.push(transform(-width, -height/2, -C1, pi/2 - angle/2));
    trArray.push(transform(-width, -height/2, -C1, pi/2 + angle/2));
    trArray.push(transform(-width*3/2, -height/2, -H1, 0));
    trArray.push(transform(0, -height/2, -C1, pi/2 - angle/2));
    trArray.push(transform(0, -height/2, -C1, pi/2 + angle/2));
    trArray.push(transform(-width/2, -height/2, -H1, 0));
    trArray.push(transform(width, -height/2, -C1, pi/2 - angle/2));
    trArray.push(transform(width, -height/2, -C1, pi/2 + angle/2));
    trArray.push(transform(width/2, -height/2, -H1, 0));
    
    trArray.forEach(s => cards.push(new Card(width, height, voorkant, achterkant, border, s)));
    cards.forEach(card => card.getImages().forEach(im => centerDiv.appendChild(im)));
}

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

function collapseOrForm() {
    shuffle();
    cards.forEach(c => c.changeTransform());
}

function transform(x, y, z, rotate) {
    let tr = 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px) ';
    tr += 'rotateY(' + rotate + 'rad)';
    return tr;
}

function shuffle() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}



