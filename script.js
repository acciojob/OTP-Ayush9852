//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll('.code');

  // Add event listener to each input
  inputs.forEach((input, index) => {
    input.addEventListener('input', function(event) {
      const value = event.target.value;
      if (value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    // Add event listener for backspace key press
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Backspace' && index > 0) {
        if (input.value === '') {
          inputs[index - 1].focus();
        }
      }
    });
  });
});
