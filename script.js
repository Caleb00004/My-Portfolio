console.log('here')

let currentURL = window.location.hash;

document.getElementById('nav-item').onclick = function() {
    console.log('clicked')
}
if (currentURL == '#about') {
//    console.log(document.getElementById('nav-item').className += 'active')
    document.getElementById('nav-item').className += 'active'
} else {
    console.log(window.location)
}
