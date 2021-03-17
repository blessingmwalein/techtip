
$(function () {
        $('#WAButton').floatingWhatsApp({
            phone: '+263719686180', //WhatsApp Business phone number
            headerTitle: 'Chat with us on WhatsApp!', //Popup Title
            popupMessage: 'Hello, how can we help you?', //Popup Message
            showPopup: true, //Enables popup display
            buttonImage: '<img src="./floating/whatsapp.svg" />', //Button Image
            //headerColor: 'crimson', //Custom header color
            //backgroundColor: 'crimson', //Custom background button color
            position: "left" //Position: left | right

        });
    });

document.getElementById('business_button').addEventListener('click', function(){
    console.log('clicked business button')

    document.getElementById('business_button').classList.add('active')
    document.getElementById('enterprise_button').classList.remove('active')

    document.getElementById('business_cont').style.display = ''
    document.getElementById('enterprise_cont').style.display = 'none'
})

document.getElementById('enterprise_button').addEventListener('click', function(){
    console.log('clicked enetrprise buton')

    document.getElementById('business_button').classList.remove('active')
    document.getElementById('enterprise_button').classList.add('active')
    document.getElementById('business_cont').style.display = 'none'
    document.getElementById('enterprise_cont').style.display = 'flex'
})