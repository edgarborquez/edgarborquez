const ipad = window.matchMedia('screen and (max-width: 767px)')
const menu = document.querySelector('.menu');
            //console.log(menu);

const burgerButton = document.querySelector('#burger-menu');
            //console.log(burgerButton);

ipad.addEventListener(validation)

function validation(event)
{
    if (event.matches)
    {
        burgerButton.addEventListener('click', hideShow)
    }
    else
    {
        burgerButton.removeEventListener('click', hideShow)
    }
}

function hideShow()
{
    if (menu.classList.contains('is-active'))
    {
        menu.classList.add('is-active');
    }
    else
    {
        menu.classList.add('is-active');
    }
}