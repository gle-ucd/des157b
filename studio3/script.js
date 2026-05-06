(function(){
    'use strict';
    console.log('reading js');

    // timer
    const timer = new easytimer.Timer();
    const timerNumbers = document.querySelector('#timer-numbers p');
    const startBtn = document.querySelector('#start');
    const stopBtn = document.querySelector('#stop');
    const restartBtn = document.querySelector('#restart');


    startBtn.addEventListener('click', function(){
        timer.start({
            precision: 'secondTenths',
            target: {seconds: 20} 
        } );

        anime({
            targets: '#egg',
            rotate: [
                { value: -5 },
                { value: 5 }
            ],
            translateY: -5,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
            duration: 400
        });

        gradientTimeline.play();
    })

    stopBtn.addEventListener('click', function(){
        timer.pause();

        anime.remove('#egg');
        gradientTimeline.pause(); 
    })

    restartBtn.addEventListener('click', function(){
        timer.stop();

        timerNumbers.textContent = '0';
        timerNumbers.classList.remove('blink');

        anime.remove('#egg');
        gradientTimeline.pause();
        gradientTimeline.seek(0);

        startBtn.disabled = false;
        stopBtn.disabled = false;
        startBtn.style.cursor = 'pointer';
        stopBtn.style.cursor = 'pointer';

        timerNumbers.style.textAlign = 'right';
    })

    timer.addEventListener('secondTenthsUpdated', function(){
        const t = timer.getTimeValues();
        timerNumbers.textContent = `${t.seconds}.${t.secondTenths}`;
    })

    timer.addEventListener('targetAchieved', function(){
        timerNumbers.textContent = 'BURNT';
        timerNumbers.classList.add('blink');
        timerNumbers.style.textAlign = 'center';

        anime.remove('#egg');
        gradientTimeline.pause(); 

        startBtn.disabled = true;
        stopBtn.disabled = true;
        startBtn.style.cursor = 'not-allowed';
        stopBtn.style.cursor = 'not-allowed';
    })


    // egg cooking colors
    const gradientStops = '#egg-gradient stop';

    const gradientTimeline = anime.timeline({
        easing: 'easeInOutSine',
        duration: 5000,
        autoplay: false
    })

    /* 0 → 5s*/
    gradientTimeline.add({
        targets: gradientStops,
        offset: function(el, i) {
            return i === 0 ? '50%' : '100%';
        },
        stopColor: function(el, i) {
            return i === 0 ? '#FFFFBB99' : '#EDC693';
        }
    })

    .add({
        targets: '#egg-yolk',
        fill: '#FB9711'
    }, '-=5000')

    /* 5 → 10s */
    .add({
        targets: gradientStops,
        offset: function(el, i) {
            return i === 0 ? '0%' : '100%';
        },
        stopColor: function(el, i) {
            return i === 0 ? '#FFFFE9' : '#FFBB63';
        }
    })

    .add({
        targets: '#egg-yolk',
        fill: '#FF9000'
    }, '-=5000')

    /* 10 → 15s */
    .add({
        targets: gradientStops,
        offset: function(el, i) {
            return i === 0 ? '0%' : '100%';
        },
        stopColor: function(el, i) {
            return i === 0 ? '#E2B273' : '#A36E29';
        }
    })

    .add({
        targets: '#egg-yolk',
        fill: '#D97B00'
    }, '-=5000')

    /* 15 → 20s */
    .add({
        targets: gradientStops,
        offset: function(el, i) {
            return i === 0 ? '71%' : '100%';
        },
        stopColor: function(el, i) {
            return i === 0 ? '#7C521B' : '#412D14';
        }
    })

    .add({
        targets: '#egg-yolk',
        fill: '#AD6200'
    }, '-=5000');

})();