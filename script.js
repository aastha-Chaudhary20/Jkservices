

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}



const scriptURL = 'https://script.google.com/macros/s/AKfycby_IHV4vyOUh9TEkk8OCLtQGCm2Jz_U98HBHrNm3m0FH60A_BKMvhPDxfd4axCgaPzY/exec'
			const form = document.forms['contact']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
        window.location.href = 'thank-you.html';
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				//.then(response => alert("Thank you! your form is submitted successfully." ))
        
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})





     
