document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.feedback-form'); 

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        Swal.fire({
            title: "Thank You for Your Feedback",
            text: "We appreciate your input and will use it to improve our services.",
            icon: "success"
        }).then((result) => {
            if (result.isConfirmed) {
                form.reset(); 
            }
        });

    });
});

function showOtherField(fieldName) {
    document.getElementById(fieldName + 'OtherText').style.display = 'block';
}

function hideOtherField(fieldName) {
    document.getElementById(fieldName + 'OtherText').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function () {
    const checkinDate = document.getElementById('checkin-date');
    const checkoutDate = document.getElementById('checkout-date');

   
    checkinDate.addEventListener('change', function () {
        checkoutDate.min = checkinDate.value;
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function (e) {
        let input = phoneInput.value.replace(/\D/g, ''); 
        if (input.length > 3) {
            input = input.substring(0, 3) + '-' + input.substring(3); 
        }
        if (input.length > 7) {
            input = input.substring(0, 7) + '-' + input.substring(7);
        }
        phoneInput.value = input.substring(0, 11); 
    });


    phoneInput.addEventListener('keydown', function (e) {
        const allowedKeys = [8, 9, 13, 37, 38, 39, 40, 46];
        if (allowedKeys.indexOf(e.keyCode) !== -1) {
            return; 
        }
        if (e.keyCode < 48 || e.keyCode > 57) {
            e.preventDefault();
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
      const toggletips = document.querySelectorAll('[data-toggletip-content]');

      toggletips.forEach(toggletip => {
        const message = toggletip.getAttribute('data-toggletip-content');
        const liveRegion = toggletip.nextElementSibling;
        toggletip.addEventListener('click', () => {
          const isVisible = liveRegion.querySelector('.toggletip-bubble');

          if (isVisible) {
            liveRegion.innerHTML = ''; 
          } else {
            liveRegion.innerHTML = `<span class="toggletip-bubble visible">${message}</span>`;
          }
        });

        document.addEventListener('click', (event) => {
          if (!toggletip.contains(event.target) && !liveRegion.contains(event.target)) {
            liveRegion.innerHTML = '';
          }
        });
        toggletip.addEventListener('keydown', (event) => {
          if (event.key === 'Escape') {
            liveRegion.innerHTML = '';
          }
        });
      });
    });