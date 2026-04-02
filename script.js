(function(){
    'use strict';
    console.log('reading js');


    document.querySelector('.mobile-menu').addEventListener('click', toggleMenu);
    function toggleMenu() {
        this.classList.toggle("change");
    }

})();