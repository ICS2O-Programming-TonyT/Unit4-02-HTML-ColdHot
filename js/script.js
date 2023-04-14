// Get the form and result elements
const form = document.getElementById('cold-hot-form');
const resultDiv = document.getElementById('result');

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Get the base and height and units values from the form
  const Celsius = parseFloat(document.getElementById('Celsius').value);
  // Calculate the Are of a TrapeZoid 
  var respond;

  if (Celsius >= 34) {
    respond = "Hot";
  } else if (Celsius <= 15){
    respond = "Cold";
  } else {
    respond = "Room Temperature"
  }
  // Display the result
  resultDiv.innerHTML = respond;
});
