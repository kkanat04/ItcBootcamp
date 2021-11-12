const burger_link = document.querySelectorAll('.menu__item')

let check = document.querySelector('#menu__toggle')

const footer_button = document.querySelector('.footer_button')
const buttons = document.querySelectorAll('.button')

burger_link.forEach(el=> {
    el.addEventListener('click', (e)=>{
        if(check.checked){
            check.checked = false
        }
    })
})

footer_button.addEventListener('click',()=>{
    window.location.href = 'https://www.itcbootcamp.com/#/'
})

buttons.forEach(el =>{
    el.addEventListener('click',()=>{
        window.location.href = "#section5"
    })
})

let name = document.getElementById('name')
let whatsapp = document.getElementById('whatsapp')
let email = document.getElementById('email')
let city = document.getElementById('city')
let ThanksModal = document.querySelector('.ThanksModal')
let form = document.getElementById('form')

const mess = document.getElementById('section5_button')


const sendMess = (e) => {
    e.preventDefault()
    let nameValue = name.value
    let whatsappValue = whatsapp.value
    let emailValue = email.value
    let cityValue = city.value

    const res = `Имя: ${nameValue} | Номер: ${whatsappValue} | Email: ${emailValue} | Город: ${cityValue}
    `

    axios.post('https://api.telegram.org/bot2047484564:AAFqe_h1ildTIkKDn0SGXirNmU4E3uBPB9M/sendMessage?chat_id=-1001670080087&text=' + res)

    name.value = ''
    whatsapp.value = ''
    email.value = ''
    city.value = ''

    setTimeout(() => {
        ThanksModal.classList.remove('th')
    }, 2000)

    ThanksModal.classList.add('th')

}

form.addEventListener('submit', sendMess)