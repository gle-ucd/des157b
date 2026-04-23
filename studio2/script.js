(function(){
    'use strict';
    console.log('reading js - studio 2');

    // get the data
    let data = [];
    let progress = 0;

    async function getData(){
        const theData = await fetch('data.json');
        data = await theData.json();
    }

    const date = document.querySelector('#date');
    const volumeNeedle = document.querySelector('#volume-needle');
    const totalPriceNeedle = document.querySelector('#total-price-needle');
    const pricePerGallon = document.querySelector('#price-gallon-needle');

    const volumeOverlayp = document.querySelector('#volume-overlay');
    const totalPriceOverlayp = document.querySelector('#total-price-overlay');
    const pricePerGallonOverlayp = document.querySelector('#price-gallon-overlay');

    function outputContent() {
        date.textContent = `${data[progress].date}`

        const volumeDegree = (data[progress].volume_g * 12.25) - 98;
        volumeNeedle.style.transform = `translateX(-50%) rotate(${volumeDegree}deg)`;

        const totalPriceDegree = (data[progress].total_price * 3.6) - 90;
        totalPriceNeedle.style.transform = `translateX(-50%) rotate(${totalPriceDegree}deg)`;

        const pricePerGallonDegree = (data[progress].price_per_g * 30) - 90;
        pricePerGallon.style.transform = `translateX(-50%) rotate(${pricePerGallonDegree}deg)`;

        volumeOverlayp.innerHTML = `${data[progress].volume_g} <br>Gallons`;
        totalPriceOverlayp.innerHTML = `$${data[progress].total_price}`;
        pricePerGallonOverlayp.innerHTML = `$${data[progress].price_per_g} <br>per Gallon`
    }

    // navigation between data points
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');
    const progressBar = document.querySelector('#progress img');

    async function start() {
        await getData();
        outputContent();
    }

    start();

    // const totalData = 10;
    prevBtn.addEventListener('click', function(){
        if (!data.length) return;

        if (progress > 0) {
            progress--;
        } else {
            progress = data.length - 1;
        }
        progressBar.src = `images/progress-${progress + 1}.svg`;
        console.log(`Looking at data point: ${progress + 1}`);
        outputContent();
    });

    nextBtn.addEventListener('click', function(){
        if (!data.length) return;

        if (progress < data.length - 1) {
            progress++;
        } else {
            progress = 0;
        }
        progressBar.src = `images/progress-${progress + 1}.svg`;
        console.log(`Looking at data point: ${progress + 1}`);
        outputContent();
    });

    // opening and closing gauge overlays
    const gaugeImages = document.querySelectorAll('.gauge img:first-of-type');
    // const overlays = document.querySelectorAll('span');

    gaugeImages.forEach(function(img) {
        img.addEventListener('mouseenter', function() {
            const overlay = img.parentElement.querySelector('span');
            overlay.classList.add('active');
        });

        img.addEventListener('mouseleave', function() {
            const overlay = img.parentElement.querySelector('span');
            overlay.classList.remove('active');
        });
    })

    // summary data overlay
    const summaryBtn = document.querySelector('#summary-btn');
    const summaryOverlay = document.querySelector('#summary-overlay');
    const closeBtn = document.querySelector('#close');

    summaryBtn.addEventListener('click', function() {
        summaryOverlay.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        summaryOverlay.classList.remove('active');
    });

})();