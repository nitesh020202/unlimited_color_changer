const container = document.querySelector('.container');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
let msg=document.querySelector('.msg');
const randomColor = function(){
        const hex='0123456789ABCDEF';
    let color='#';

    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    // console.log(color);
    container.style.backgroundColor = color; 
}
let intervalId ;
//  = setInterval(randomColor(),1000);


start.addEventListener('click', () => {
    intervalId = setInterval(randomColor, 1000);
    msg.innerHTML='Background color is changing';

});

stop.addEventListener('click', () => {
    msg.innerHTML='Background color change is Stoped Now !!';
    clearInterval(intervalId);
});


// randomColor();
