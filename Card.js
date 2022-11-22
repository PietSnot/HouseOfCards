/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

class Card {
    constructor(width, height, sourceFront, sourceBack, border, transform) {
        this.im = document.createElement('img');
        this.back = document.createElement('img');
        this.transform = transform;
        this.noTransform = 'translateX(0px) translateY(0px) translateZ(0px) rotateY(0rad)';
        this.isOriginalTransform = true;
        this.images = this.createImages(width, height, sourceFront, sourceBack, border);
    }
    
    createImages(width, height, sourceFront, sourceBack, border) {
        this.im.src = sourceFront;
        this.back.src = sourceBack;
        const ims = this.im.style;
        const bs = this.back.style;
        ims.width = width + 'px';
        bs.width = width + 'px';
        ims.height = height + 'px';
        bs.height = height + 'px';
        ims.border = border;
//        bs.border = border;
        ims.position = 'absolute';
        bs.position = 'absolute';
        ims.transformOrigin = '0 0';
        bs.transformOrigin = '0 0';
        ims.transform = this.transform;
        bs.transform = this.transform;
        const duur = Math.floor(Math.random() * 5 + 1);
        ims.transition = 'transform ' + duur + 's';
        bs.transition = 'transform ' + duur + 's';
        ims.transitionTimingFunction = 'ease-in-out';
        if (Math.random() < .5) {
            ims.backfaceVisibility = 'hidden';
            return [this.back, this.im];
        }
        else {
            bs.backfaceVisibility = 'hidden';
            return [this.im, this.back];
        }        
    }
    
    getImages() {
        return this.images;
    }
    
    changeTransform() {
        this.images.forEach(im => im.style.transform = this.isOriginalTransform ? this.noTransform : this.transform);
        this.isOriginalTransform = !this.isOriginalTransform;
    }
    
}


