function getPin(pin){

const ott = pin+'';
const dispay_pin = document.getElementById('dispay_pin');
dispay_pin.value = pin;
    if(ott.length === 4){
        return pin;
    }else{
        return getPin();
    }

}

document.getElementById('pin_generator').addEventListener("click", function(){
    const random = Math.round(Math.random()*10000);

    return getPin(random);
});

document.getElementById('fun').addEventListener("click", function(event){
    const text = event.target.innerText;
    const ott_Text = document.getElementById('ott_Text');
    const prevNum = ott_Text.value;
    
    if(isNaN(text)){
       
        if(text === 'C'){
            ott_Text.value = '';
        }else if(text === '<'){
            const arr = prevNum.split('');
            arr.pop();
            const removeLastNum= arr.join();
            ott_Text.value = removeLastNum;
        }
        console.log('please input valid number');
    }else{
        const newTextNum = prevNum + text;
        ott_Text.value= newTextNum ;
    }
 
});

document.getElementById('submit').addEventListener("click", function(){
    const dispay_pin = document.getElementById('dispay_pin').value;
    const ott_Text = document.getElementById('ott_Text').value;


    const success = document.getElementById("success");
    const failed = document.getElementById('failed');
    if(dispay_pin == ott_Text){
        success.style.display = 'block';
        failed.style.display = 'none';

    }else{
        failed.style.display = 'block';
        success.style.display = 'none';
    }
});

 function getRemove(removeId){
    const closePopup = document.getElementById(removeId);
    closePopup.style.display = 'none';

 }
document.getElementById('close').addEventListener('click', function(){
    getRemove('failed');

});
document.getElementById('close2').addEventListener('click', function(){
    getRemove('success');
})
