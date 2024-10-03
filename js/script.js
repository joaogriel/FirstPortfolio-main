const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const titleHeader = document.querySelector("#title-header");

titleHeader.onmouseover = event =>{
    let iterations = 0;
    const interval = setInterval(() =>{
        event.target.innerText = event.target.innerText.split("")
        .map((letter,index)=>{
            if(index < iterations){
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random()*26)]
        })
        .join("");
        if(iterations >= 10) clearInterval(interval);

        iterations += 1/2;
    },50);
}

titleHeader.dispatchEvent(new Event('mouseover'));