// JS here
(function(){
    'use strict';
    console.log('reading js');

    Parse.initialize(
        "aAFYstmHT71suEFm92Eevfv5f55fIefyvV2VnlPT",
        "3mfF1r0dWaSp3zF4he4PGZxLyahg4tgE9g8Gc9ya"
    );

    Parse.serverURL = 'https://parseapi.back4app.com/';

    const newBtn = document.querySelector('#newbtn');
    const editBtns = document.querySelectorAll('.fa-edit');
    const addFriendForm = document.querySelector('#add-friend');
    const editFriendForm = document.querySelector('#edit-friend');
    const friendList = document.querySelector('main ol');

    newBtn.addEventListener('click', function(event){
        event.preventDefault();
        addFriendForm.className = 'add-friend-onscreen';
    })

    addFriendForm.addEventListener('submit', function(event){
        event.preventDefault();
        addFriendForm.className = 'add-friend-offscreen';
    })

    editBtns.forEach(function(btn){
        btn.addEventListener('click', function(){
            event.preventDefault();
            editFriendForm.className = 'edit-friend-onscreen';
        })
    })

    editFriendForm.addEventListener('submit', function(event){
        event.preventDefault();
        editFriendForm.className = 'edit-friend-offscreen';
    })

    async function displayFriends() {
        const friends = Parse.Object.extend('Friends');
        const query = new Parse.Query(friends);

        try {
            const results = await query.ascending('lname').find();
            for(const object of results) {
                const id = object.id;
                const lname = object.get('lname');
                const fname = object.get('fname');
                const email = object.get('email');
                const facebook = object.get('facebook');
                const twitter = object.get('twitter');
                const instagram = object.get('instagram');
                const linkedin = object.get('linkedin');

                const theListItem = document.createElement('li');
                theListItem.setAttribute('id',`r-${id}`);
                theListItem.innerHTML = `
                    <div class="name">
                        ${fname} ${lname}
                    </div>
                    <div class="email">
                        <i class="fas fa-envelope-square"></i> ${email}
                    </div>
                    <div class="social">
                        <a href="${facebook}"><i class="fab fa-facebook-square"></i></a>
                        <a href="${twitter}"><i class="fab fa-twitter-square"></i></a>
                        <a href="${instagram}"><i class="fab fa-instagram"></i></a>
                        <a href="${linkedin}"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <i class="fas fa-edit" id="e-${id}"></i>
                    <i class="fas fa-times-circle" id="d-${id}"></i>
                `

                friendList.append(theListItem);
            }

        } catch(error) {
            console.error('Error while fetching Friends', error);
        }
        // console.log(results);
        // results.forEach(function(eachFriend){
            
        // })

    }

    displayFriends();


})();