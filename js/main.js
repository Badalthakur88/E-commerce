// toast
const toastTrigger = document.getElementById('toastTrigger');
const toastAlert = document.getElementById('toastAlert');

if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {

        const toast = new bootstrap.Toast(toastAlert);
        toast.show();

    });
}

// Tooltips//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)) 


function GoToProdictDetail(){
    window.location.href = "/Product.html";
}


(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()