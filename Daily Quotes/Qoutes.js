"use script";

const QuoteTxt = document.querySelector('.quote')
const AuthorTxt = document.querySelector('.author');
const btnDolla = document.querySelector('.btn');
const VoiceSpk = document.querySelector('.Voice-Int');
const QuoteCopy = document.querySelector('.CopyQoute');
const twitterElt = document.querySelector('.twitter');
const copiedElt = document.querySelector('.copied');


// Next Quotes button
async function AdeDolla(){
    btnDolla.textContent = `loading`
    const data = await fetch('https://api.quotable.io/random'); 
    const result = await data.json();
    const {content, author} = result;
    QuoteTxt.textContent = content;
    AuthorTxt.textContent =  `Written By : ${author}`;
    btnDolla.textContent = `New Quote`;
   
}
AdeDolla();
btnDolla.addEventListener('click', AdeDolla);




//Voice Translation//
function VoiceText(){
    let VoiceTxt = new SpeechSynthesisUtterance();
    VoiceTxt.text = `${QuoteTxt.textContent}`;
    VoiceTxt.voice = window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(VoiceTxt)   
}
VoiceSpk.addEventListener('click', VoiceText);



//Copying Quotes
QuoteCopy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(QuoteTxt.innerHTML)
    copiedElt.classList.add('active');


    setInterval(() => {
        copiedElt.classList.remove('active');
    }, 1500);
});


// Twitter Icon Link
twitterElt.addEventListener('click', ()=>{
    let tweet = `https://twitter.com/intent/tweet?url=${QuoteTxt.innerHTML}`;
    window.open(tweet, "_blank")
})
btnDolla.addEventListener('click', AdeDolla);

btnDolla.addEventListener('click', AdeDolla);











