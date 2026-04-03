(function(){
    'use strict';
    console.log('reading js');

    // opening hamburger menu
    const content = document.querySelector('#content');
    const mobileLine = document.querySelector('#mobile-line');
    // hamburger menu turn -> close icon
    document.querySelector('.mobile-menu').addEventListener('click', toggleMenu);
    function toggleMenu() {
        this.classList.toggle("change");
        content.classList.toggle('open');
        mobileLine.classList.toggle('open');
    }

    // opening section lists
    for (let i=1; i<=4; i++) {
        const arrow = document.querySelector(`#arrow-${i}`);
        const list = document.querySelector(`#s-items-${i}`);
        const selectedArea = document.querySelector(`#s-${i}`);

        selectedArea.addEventListener('click', function(){
            list.classList.toggle('open');
            arrow.classList.toggle('rotated');
        })
    }

    // switch function
    const body = document.querySelector('body');
    const switchLever = document.querySelector('#switch input');
    const banner = document.querySelector('#banner');
    const mobileMenuIcon = document.querySelector('.mobile-menu');
    const mobileMenuIconLines = document.querySelectorAll('.mobile-menu div');
    const headingContent = document.querySelectorAll('h2');
    const aContent = document.querySelectorAll('a');

    banner.style.setProperty('--banner-bg', 'url("images/dark-bg.png")');

    switchLever.addEventListener('change', function() {
        if (switchLever.checked) {
            body.style.backgroundImage = 'url("images/dark-bg.png")';
            banner.style.setProperty('--banner-bg', 'url("images/light-bg.png")');
            mobileMenuIcon.style.backgroundColor = '#ECECEC';
            mobileMenuIconLines.forEach(function(line){
                line.style.backgroundColor = '#666444';
            })

            for (let i=1; i<=4 ; i++){
                const sectionContent = document.querySelector(`#section${i}`);
                sectionContent.style.backgroundColor = '#ececece0';
            }
            headingContent.forEach(function(h){
                h.style.color = '#666444';
            })
            aContent.forEach(function(a){
                a.style.color = '#666444';
            })

            console.log('switch ON, dark mode on')
        } else {
            body.style.backgroundImage = 'url("images/light-bg.png")';
            banner.style.setProperty('--banner-bg', 'url("images/dark-bg.png")');
            mobileMenuIcon.style.backgroundColor = '#666444';
            mobileMenuIconLines.forEach(function(line){
                line.style.backgroundColor = '#ECECEC';
            })

            for (let i=1; i<=4 ; i++){
                const sectionContent = document.querySelector(`#section${i}`);
                sectionContent.style.backgroundColor = '#666444d0';
            }
            headingContent.forEach(function(h){
                h.style.color = '#ECECEC';
            })
            aContent.forEach(function(a){
                a.style.color = '#ECECEC';
            })

            console.log('switch OFF, dark mode off')
        }

    });
    // dragging the banner around
    banner.style.top = (window.innerHeight * 0.15) + 'px';
    banner.style.left = ((window.innerWidth - banner.offsetWidth) / 2) - 20 + 'px';

    dragElement(banner);

    function dragElement(elmnt) {
        let startX = 0;
        let startY = 0;
        let origX = 0;
        let origY = 0;
        let dragging = false;

        function onMouseDown(e) {
            e.preventDefault();
            dragging = true;
            startX = e.clientX;
            startY = e.clientY;
            origX = elmnt.offsetLeft;
            origY = elmnt.offsetTop;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            elmnt.style.cursor = 'grabbing';
        }

        function onMouseMove(e) {
            if (!dragging) return;
            let dx = e.clientX - startX;
            let dy = e.clientY - startY;

            let stopperLeft = Math.max(-20, Math.min(window.innerWidth - elmnt.offsetWidth, origX + dx));
            let stopperTop = Math.max(0, Math.min(window.innerHeight - elmnt.offsetHeight, origY + dy));

            elmnt.style.left = stopperLeft + 'px';
            elmnt.style.top = stopperTop + 'px';
            // elmnt.style.left = (origX + dx) + 'px';
            // elmnt.style.top = (origY + dy) + 'px';
        }

        function onMouseUp() {
            dragging = false;
            elmnt.style.cursor = 'grab';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        elmnt.addEventListener('mousedown', onMouseDown);
    }

})();


        // if (elmnt) {
        //     elmnt.onmousedown = dragMouseDown;
        // }

        // function dragMouseDown(e) {
        //     // e = e || window.event;
        //     e.preventDefault();
        //     // get the mouse cursor position at startup:
        //     pos3 = e.clientX;
        //     pos4 = e.clientY;
        //     document.onmouseup = closeDragElement;
        //     // call a function whenever the cursor moves:
        //     document.onmousemove = elementDrag;
        // }

        // function elementDrag(e) {
        //     // e = e || window.event;
        //     e.preventDefault();
        //     dragging = true;
        //     // calculate the new cursor position:
        //     pos1 = pos3 - e.clientX;
        //     pos2 = pos4 - e.clientY;
        //     pos3 = e.clientX;
        //     pos4 = e.clientY;
        //     // set the element's new position:
        //     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        //     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        // }

        // function closeDragElement() {
        //     /* stop moving when mouse button is released:*/
        //     document.onmouseup = null;
        //     document.onmousemove = null;
        // }