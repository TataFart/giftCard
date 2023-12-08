const swiperThumb = new Swiper(".gift__swiper--thumb", {
    spaceBetween:12,
    slidesPerView:"auto",
    freeMode: true,
    breakpoints:{
        320:{
            
            spaceBetween:12,
        },
        1141: {
            
            spaceBetween:16,
        }
    }
});

const swiperMain = new Swiper('.gift__swiper--card', {
    spaceBetween:16,
    thumbs:{
        swiper: swiperThumb,
    }
});
const form =  document.querySelector('.form');
const phoneInputs = form.querySelectorAll('.form__field--phone');
const submitButton = form.querySelector('.form__button');

for(let i = 0; i<phoneInputs.length; i++){
    const element = phoneInputs[i];
   
    // IMask(element,{
    //     mask: '+{7}(000)000-00-00'
    // });

    }

const updateSubmitData = () => {
    let isFormFilled = true;

    for( let i = 0; i<form.elements.length; i++) {
      const field = form.elements[i];
        
        if(field.classList.contains('form__field')){
            if(!field.value.trim()){
                isFormFilled = false;
                break;
            }
        }
    }

    submitButton.disabled = !isFormFilled;
};

const phoneValidateOptions = {
    presence: {
        message:'Поле телефон обязательно для заполнения'
    },
    format: {
        // pattern: "\\+7\\(d{3}\\)\\d{3}-\\d{2}\\d{2}",
        message:'Номер телефона должен соответствовать формату'
    }
}
form.addEventListener('input', updateSubmitData);

form.addEventListener('submit', (event)=>{
event.preventDefault();

const errors = validate(form, {
    sender_phone: phoneValidateOptions,
    receiver_phone:phoneValidateOptions,
});
if(errors){
    for(const key in errors){
        const errorString = errors[key];
        alert(errorString);
    }
    return;
}

const formData = new FormData(form);
const data = Object.fromEntries(formData);
console.log(data);
    });

