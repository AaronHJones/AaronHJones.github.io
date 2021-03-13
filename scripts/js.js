var ls = localStorage.getItem('namespace.visited');
let intro = document.querySelector('.intro');
let introHead = document.querySelector('.name-header');
let fullname = document.querySelectorAll('.fullname');

if (ls == null){
    window.addEventListener('DOMContentLoaded', ()=>{
        
        setTimeout(()=>{

            fullname.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.add('active');
                }, (idx + 1) *400)
            });

            setTimeout(()=>{
                fullname.forEach((span, idx)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 50)
                })
            },2000)

            setTimeout(()=>{
                intro.style.top = '-100vh';
            },2300)
        })
    })
}