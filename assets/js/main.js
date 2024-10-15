
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyhl20dCiCWOOIWl7ug6tN-yAYJweLo0CsLwrEJJ_2kVzDV_1Dq5A1xzR7fWVqYfP-ssQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent Succesfully"
                    setTimeout(function () {
                        msg.innerHTML = ""
                    }, 5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })
  