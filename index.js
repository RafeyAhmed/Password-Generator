const slider = document.getElementById('passLength');
const output = document.getElementById('passLengthValue');

slider.addEventListener('input', function() {
  output.textContent = slider.value;
});