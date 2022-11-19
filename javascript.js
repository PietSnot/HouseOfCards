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
    createImages(centrum);
    document.body.addEventListener('click', collapseOrForm);
}

function createImages(centrum) {
    createTriangleCards(centrum);
}

function createTriangleCards(centerDiv) {
    console.log('in createTriangleCards');
    
    // layer 1
    const H1 = 3 * width / 2 * Math.cos(angle / 2);
    const B1 = width * Math.sin(angle/2);
    const C1 = H1 / 3;
    let tr1 = 'translateX(0px) translateY(' + -height/2 + 'px) translateZ(' + H1 + 'px)';
    tr1 += ' rotateY(' + (pi/2 - angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr1));
    let tr2 = 'translateY(' + -height/2 + 'px) translateZ(' + H1 + 'px)';
    tr2 += ' rotateY(' + (pi/2 + angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr2));
    let tr3 = 'translateY(' + -height/2 + 'px) translateX(' + -width/2 + 'px) translateZ(' + C1 + 'px)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr3));

    // layer 2
    let tr4 = 'translateY(' + -height/2 + 'px) translateX(' + -width/2 + 'px) translateZ(' + C1 + 'px)';
    tr4 += ' rotateY(' + (pi/2 - angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr4));
    let tr5 = 'translateY(' + -height/2 + 'px) translateX(' + -width/2 + 'px) translateZ(' + C1 + 'px)';
    tr5 += ' rotateY(' + (pi/2 + angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr5));
    let tr6 = 'translateY(' + -height / 2 + 'px) translateX(' + -width + 'px) translateZ(' + -C1 + 'px)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr6));
    let tr7 = 'translateY(' + -height/2 + 'px) translateX(' + width/2 + 'px) translateZ(' + C1 + 'px)';
    tr7 += ' rotateY(' + (pi/2 - angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr7));
    let tr8 = 'translateY(' + -height/2 + 'px) translateX(' + width/2 + 'px) translateZ(' + C1 + 'px)';
    tr8 += ' rotateY(' + (pi/2 + angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr8));
    let tr9 = 'translateY(' + -height / 2 + 'px) translateZ(' + -C1 + 'px)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr9));

    // layer 3
    let tr10 = 'translateY(' + -height/2 + 'px) translateX(' + -width + 'px) translateZ(' + -C1 + 'px)';
    tr10 += ' rotateY(' + (pi/2 - angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr10));
    let tr11 = 'translateY(' + -height/2 + 'px) translateX(' + -width + 'px) translateZ(' + -C1 + 'px)';
    tr11 += ' rotateY(' + (pi/2 + angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr11));
    let tr12 = 'translateY(' + -height / 2 + 'px) translateX(' + -width*3/2 + 'px) translateZ(' + -H1 + 'px)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr12));

    let tr13 = 'translateY(' + -height/2 + 'px) translateZ(' + -C1 + 'px)';
    tr13 += ' rotateY(' + (pi/2 - angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr13));
    let tr14 = 'translateY(' + -height/2 + 'px) translateZ(' + -C1 + 'px)';
    tr14 += ' rotateY(' + (pi/2 + angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr14));
    let tr15 = 'translateY(' + -height / 2 + 'px) translateX(' + -width/2 + 'px) translateZ(' + -H1 + 'px)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr15));

    let tr16 = 'translateY(' + -height/2 + 'px) translateX(' + width + 'px) translateZ(' + -C1 + 'px)';
    tr16 += ' rotateY(' + (pi/2 - angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr16));
    let tr17 = 'translateY(' + -height/2 + 'px)  translateX(' + width + 'px) translateZ(' + -C1 + 'px)';
    tr17 += ' rotateY(' + (pi/2 + angle/2) + 'rad)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr17));
    let tr18 = 'translateY(' + -height / 2 + 'px) translateX(' + width/2 + 'px) translateZ(' + -H1 + 'px)';
    cards.push(new Card(width, height, voorkant, achterkant, border, tr18));
    
    cards.forEach(card => card.getImages().forEach(im => centerDiv.appendChild(im)));
}


function createCard(centerDiv, transform) {
    const im = document.createElement('img');
    const back = document.createElement('img');
    im.src = voorkant;
    back.src = achterkant;
    const ims = im.style;
    const bs = back.style;
    ims.width = width + 'px';
    bs.width = width + 'px';
    ims.height = height + 'px';
    bs.height = height + 'px';
    ims.border = border;
    bs.border = border;
    ims.position = 'absolute';
    bs.position = 'absolute';
    ims.transformOrigin = '0 0';
    bs.transformOrigin = '0 0';
    console.log('transform: ' + transform);
    ims.transform = transform;
    bs.transform = transform;
    
    if (Math.random() < .5) {
        centerDiv.appendChild(back);
        ims.backfaceVisibility = 'hidden';
        centerDiv.appendChild(im);
    }
    else {
        centerDiv.appendChild(im);
        bs.backfaceVisibility = 'hidden';
        centerDiv.appendChild(back);
    }
}

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

function calculateConstants() {
    if (aantalLagen === 1) {
        H1 = width / 2 * Math.cos(angle / 2);
        B1 = width * Math.sin(angle / 2);
    }
    else if (aantalLagen === 2) {
        H1 = width * Math.cos(angle / 2);
        B1 = width * Math.sin(angle / 2);
        H2 = width * Math.cos( angle / 2);
        B2 = width * Math.sin(angle / 2);
    }
    else if (aantalLagen === 3) {
        H1 = width * 3 / 2;
    }
}

function collapseOrForm() {
    cards.forEach(c => c.changeTransform());
}



