const kits = ['crash','kick','snare','tom'];
const containerelement  = document.querySelector(".container")
kits.forEach((kit)=>{
    const btnelement  = document.createElement("button");
    btnelement.classList.add("btn")
    btnelement.innerText = kit;
    btnelement.style.backgroundImage = "url(Images/" + kit + ".png)"
    containerelement.appendChild(btnelement);
    const audioelement = document.createElement("audio");
    audioelement.src = "Sounds/" + kit + ".mp3"
    containerelement.appendChild(audioelement);
    btnelement.addEventListener("click",()=>{
        audioelement.play()
    })
    window.addEventListener("keydown",(e)=>{
        if(e.key === kit.slice(0,1)){
            audioelement.play()
            btnelement.style.transform = "scale(0.9)"
            setTimeout(()=>{
                btnelement.style.transform = "scale(100%)"
            },1000)
        }
    })
})