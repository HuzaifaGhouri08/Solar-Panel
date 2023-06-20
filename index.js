let btn1 = document.querySelector('#btn1');
let input = document.querySelector('#input');
let overlay = document.querySelector('#overlay');

btn1.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (input.value.trim() === '') {
        alert('Please fill in the required field.');
    return;
}

overlay.classList.add('fade-in');
setTimeout(function() {
    window.location.replace("index1.html");
    overlay.classList.remove('fade-in');
}, 500);
});

