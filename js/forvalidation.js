const form = document.querySelector('#register-form');
const fname = document.querySelector('#fname');
const email=document.querySelector('#email');
const number = document.querySelector('#number');
const place = document.querySelector('#place');
const secondform = document.querySelector('#sending-email');
const email2 = document.querySelector('#email2');


form.addEventListener('submit',(event)=>{
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
       
    }else {
         event.preventDefault();
     }
});



function isFormValid(){
    const inputContainers = form.querySelectorAll('.text-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}






function validateForm(){
    if(fname.value .trim() == ''){
        setError(fname,'Name can not be Empty');
    } else if(fname.value.trim().length < 4){
        setError(fname,'Name should have minimum 3 characters')}
        else{
            removeClass(fname);
        }
    
    if(email.value.trim() == ''){
        setError(email,'Email can not be empty');
    } else if(!isValid(email.value)){
        setError(email,'Provid valid email'); }
 
    if(number.value.trim() == ''){
        setError(number,'Mobile Number can not be empty');
    } else if(/\D/.test(number.value)){
        setError(number,'should be number');
    } else if(number.value.trim().length < 10 || phone.value.trim().length > 10) {
        setError(number,'phone number should have 10 numbers ');}
   
    if(place.value.trim() == ''){
        setError(place,'Place can not be empty');
    }
}

function setError(element,errorMessage){
    const parent = element.parentElement;
    parent.classList.add('error');
    const paragraph=parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function isValid(emailvalue){
    const reg= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return reg.test(emailvalue);
}

email.addEventListener('focus',(event)=>{
    removeonFocus(fname);
});

number.addEventListener('focus',(event)=>{
    removeonFocus(email);
});

place.addEventListener('focus',(event)=>{
    removeonFocus(number);
});

function removeonFocus(element){
    const parent1=element.parentElement;
    if(element.value.trim() != ''){
        parent1.classList.remove('error'); 
    }
}
function removeClass(element){
        const parent2 = element.parentElement;
        parent2.classList.remove('error');
}




secondform.addEventListener('subimt',(event)=>{
    validateFormEmail();
    preventDefault();
     });

function validateFormEmail(){
    if(email2.value.trim() == ''){
        errorMail(email2,'Email can not be empty');
    } else if(!isValid(email2.value)){
        errorMail(email2,'Provid valid email'); }
}

function errorMail(elem,errorMessage){
    const parent3 = elem.parentElement;
    parent3.classList.add('error-mailid');
    const label1 = parent3.querySelector('label');
    label1.textContent = errorMessage;

}