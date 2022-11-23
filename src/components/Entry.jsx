import React from 'react'
import "./entry.css"


const Entry = () => {
    const sleep=(ms)=>{
        return new Promise((resolve)=> setTimeout(resolve,ms))
    }
 const phrases=["Front End Developer...", "LeetCode Hater...","Retired Gamer"]
 const el= document.getElementsByClassName("typewrite")
 let sleepTime= 100;
 let curPhraseIndex= 0;
const typeWriter= async ()=>{
    for(let i=0; i<phrases[curPhraseIndex].length; i++){
        el[0].innerText+=phrases[curPhraseIndex].charAt(i);
        await sleep(sleepTime);
    }
    await sleep(sleepTime);
    for(let i=0; i<phrases[curPhraseIndex].length; i++){
        el[0].innerText=el[0].innerText.slice(0,-1);
        await sleep(sleepTime);
    }
    curPhraseIndex++;
    if(curPhraseIndex===phrases.length){
        curPhraseIndex=0;
    }
    typeWriter();
}




    
  return (

        <div className='entry'>
            <div className='entry__text'>
                <h1 className='entry__name'>Hi, I'm <span >Eren</span></h1>
                <h2  className='entry__name'><span className='typewrite'></span><span  className='cursor'>/</span></h2>
    </div>
    <div className='entry__img'>
        <img onLoad={typeWriter} className='entry__imgs' src='images/entryimg.png'/>
</div>
    </div>
  )
}

export default Entry