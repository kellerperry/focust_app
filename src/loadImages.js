import Logo from './images/focust-logo-copy.png';

function loadImages() {
    const logo = document.querySelector('#focust-logo');
    logo.src = Logo;
}


export {loadImages}