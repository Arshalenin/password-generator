const buttonEle=document.querySelector('.btn')
const inputEle=document.querySelector('input')
const copyele=document.querySelector('.fa-copy')
const alertEle=document.querySelector('.alert-container')
buttonEle.addEventListener('click',(event)=>
{
    createPasssword();
})

copyele.addEventListener('click',()=>
{
    if(inputEle.value)
    {
    copyPassword();
    alertEle.classList.remove('active')
    setTimeout(() => {
        alertEle.classList.add('active')
    }, 3000);
}
})
function createPasssword()
{   const chars="01234$5678@9abc*defg&hijklmnop$qrstu*vwx&yz+-*#";
    const passwordlength=14
    let password='';
    for (let index = 0; index < passwordlength; index++) {
        const randomNum=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNum,randomNum+1) 
    }
    inputEle.value=password;
}

function copyPassword()
{
    inputEle.select();
    inputEle.setSelectionRange(0,9999)
    navigator.clipboard.writeText(inputEle.value)
    alertEle.innerText=inputEle.value+' copied!';
}

