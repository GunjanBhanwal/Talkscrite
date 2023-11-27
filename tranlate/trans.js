let langOption = document.querySelectorAll('select');
let fromText =document.querySelector('.fromText');
let transText = document.querySelector('.toTranslate');
let cpyBtn =document.querySelector('.bx-copy');
let countValue=document.querySelector('.code_length');
let exchangeLang=document.querySelector('.bx-transfer');
langOption.forEach((get,con)=>{
for(let countryCode in language){
    let selected;
    if(con==0 && countryCode=="en-GB"){
        selected="selected";
    }else if (con==1 && countryCode == "bn-IN") {
        selected="selected";
    }
    let option=`<option value="${countryCode}"${selected}>${language[countryCode]}</option>`;
    get.insertAdjacentHTML('beforeend',option)
}
})
fromText.addEventListener('input',function(){
    let content=fromText.value;
    fromContent=langOption[0].value;
    transContent=langOption[1].value;
    
    let transLINK=`https://api.mymemory.translated.net/get?q=${content}&langpair=${fromContent}|${transContent}`;

    fetch(transLINK).then(translate => translate.json()).then(data=> {
        transText.value=data.responseData.translatedText
    })
})
cpyBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(transText.value);
})
fromText.addEventListener('keyup',function(){
 countValue.innerHTML=`${fromText.value.length}/5,000`;
})
exchangeLang.addEventListener('click',function()
{
    let tempText=fromText.value;
    fromText.value=transText.value;
    transText.value=tempText;
})