    let intro = document.querySelector('.splash')

    document.addEventListener("DOMContentLoaded", (e)=>{
        setTimeout(()=>{
            intro.classList.add('display-none')
            intro.classList.remove('splash')
        }, 4000);

    })
