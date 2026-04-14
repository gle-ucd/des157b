(function(){
    'use strict';
    console.log('reading js - studio 1');

    const media1 = document.querySelector('#media1');
    const media2 = document.querySelector('#media2');
    const media3 = document.querySelector('#media3');
    const media4 = document.querySelector('#media4');
    const media1Mask = document.querySelector('#media1-container .content-wrapper');
    const media1Container = document.querySelector('#media1-container');
    const media2Mask = document.querySelector('#media2-container .content-wrapper');
    const media2Container = document.querySelector('#media2-container');
    const media3Mask = document.querySelector('#media3-container .content-wrapper');
    const media3Container = document.querySelector('#media3-container');
    const media4Mask = document.querySelector('#media4-container .content-wrapper');
    const media4Container = document.querySelector('#media4-container');

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');
    const line6 = document.querySelector('#line6');
    const line7 = document.querySelector('#line7');
    const line8 = document.querySelector('#line8');
    const line9 = document.querySelector('#line9');
    const line10 = document.querySelector('#line10');
    const line11 = document.querySelector('#line11');
    const line12 = document.querySelector('#line12');

    const poem = {
        start: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 25],
        lines: [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12]
    }

    const mediaElements = {
        speed: [0.3, 0.4, 0.32, 0.25],
        startTime:   [0, 5, 6, 4],
        startSize: [300, 300, 170, 140],
        endSize: [95, 80, 80, 100],
        media: [media1, media2, media3, media4],
        mask: [media1Mask, media2Mask, media3Mask, media4Mask],
        container: [media1Container, media2Container, media3Container, media4Container],

        containerRotate: [
            "rotate(10deg)",
            "rotate(-2deg)",
            "rotate(-5deg)",
            "rotate(7deg)"
        ]
    }

    const startTime = Date.now();
    const intervalID = setInterval(checkTime, 100);

    function checkTime() {
        const elapsedTime = (Date.now() - startTime) / 1000;
        // console.log(elapsedTime);
        
        for (let i = 0; i < poem.start.length; i++) {
            if (elapsedTime >= poem.start[i]) {
                poem.lines[i].style.display = 'block';
            }
        }

        for (let j=0; j<mediaElements.media.length; j++) {
            if (elapsedTime >= mediaElements.startTime[j]) {
                if (mediaElements.media[j].paused) {
                    mediaElements.media[j].play();
                }
                const localTime = elapsedTime - mediaElements.startTime[j];
                const speed = mediaElements.speed[j];
                const progress = Math.min((localTime * speed) / 5, 1);

                const startSize = mediaElements.startSize[j]; 
                const endSize = mediaElements.endSize[j];
                const size = startSize - (progress * (startSize - endSize));
                mediaElements.mask[j].style.maskSize = size + "%";
                // mediaElements.container[j].style.background = 'transparent';

                const grayscale = localTime * 100;
                mediaElements.media[j].style.filter = `grayscale(${grayscale}%)`;

                const jitterX = (Math.random() - 0.5) * 6;
                const jitterY = (Math.random() - 0.5) * 6;

                mediaElements.container[j].style.transform =
                    `${mediaElements.containerRotate[j]} translate(${jitterX}px, ${jitterY}px)`;


                if (progress >= 1) {
                    mediaElements.media[j].pause();
                    mediaElements.container[j].style.transform = `${mediaElements.containerRotate[j]}`;
                }
            }
        }

        // if (elapsedTime >= 0) {
        //     const speed = 0.3;
        //     const progress = Math.min((elapsedTime * speed) / 5, 1);
        //     const startSize = 300; 
        //     const endSize = 95;
        //     const size = startSize - (progress * (startSize - endSize));
        //     media1Mask.style.maskSize = size + "%";
        //     media1Container.style.background = 'transparent';
        //     const adjust = elapsedTime / 5;
        //     const grayscale = adjust * 100;
        //     media1.style.filter = `grayscale(${grayscale}%)`;

        //     if (progress >= 1) {
        //         media1.pause();
        //     }
        // } 
        // if (elapsedTime >=5 ) {
        //     media2.play();
        //     const speed = 0.4;
        //     const progress = Math.min((elapsedTime * speed) / 5, 1);
        //     const startSize = 300; 
        //     const endSize = 80;
        //     const size = startSize - (progress * (startSize - endSize));
        //     media2Mask.style.maskSize = size + "%";
        //     media2Container.style.background = 'transparent';
        //     const adjust = elapsedTime / 6;
        //     const grayscale = adjust * 100;
        //     media2.style.filter = `grayscale(${grayscale}%)`;

        //     if (progress >= 1) {
        //         media2.pause();
        //     }
        // }

        // if (elapsedTime >= 6) {
        //     media3.play();
        //     const speed = 0.32;
        //     const progress = Math.min((elapsedTime * speed) / 5, 1);
        //     const startSize = 170; 
        //     const endSize = 80;
        //     const size = startSize - (progress * (startSize - endSize));
        //     media3Mask.style.maskSize = size + "%";
        //     media3Container.style.background = 'transparent';
        //     const adjust = elapsedTime / 5;
        //     const grayscale = adjust * 100;
        //     media3.style.filter = `grayscale(${grayscale}%)`;

        //     if (progress >= 1) {
        //         media3.pause();
        //     }
        // }

        // if (elapsedTime >= 4) {
        //     media4.play();
        //     const speed = 0.2;
        //     const progress = Math.min((elapsedTime * speed) / 5, 1);
        //     const startSize = 140; 
        //     const endSize = 100;
        //     const size = startSize - (progress * (startSize - endSize));
        //     media4Mask.style.maskSize = size + "%";
        //     media4Container.style.background = 'transparent';
        //     const adjust = elapsedTime / 6;
        //     const grayscale = adjust * 100;
        //     media4.style.filter = `grayscale(${grayscale}%)`;

        //     if (progress >= 1) {
        //         media4.pause();
        //     }
        // }
            // } else {
            //     poem.lines[i].style.opacity = 0.2;
            // }
    }





})();