// Function to validate the form
function validateForm() {
    var valid = true;
  
    // Reset the validation error messages
    resetValidationErrors();
  
    // Validate each form field
    var emailField = document.getElementById('Email');
    var phoneField = document.getElementById('phone');
    var fullNameField = document.getElementById('firstname');
    var addressField = document.getElementById('Address');
    var cityField = document.getElementById('inputCity');
    var stateField = document.getElementById('inputState');
    var courseField = document.getElementById('inputCourse');
    var classModeFields = document.getElementsByName('classMode');
  
    if (!validateEmail(emailField.value)) {
      showValidationError(emailField, 'Invalid email address');
      valid = false;
    }
  
    // Validate other fields and show validation errors if necessary
  
    // Return the validation result
    return valid;
  }
  
  // Function to validate email address
  function validateEmail(email) {
    // Use a regular expression to validate the email address
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  // Function to show a validation error message
  function showValidationError(inputElement, message) {
    inputElement.classList.add('has-error');
  
    var errorElement = document.createElement('span');
    errorElement.className = 'validation-error';
    errorElement.textContent = message;
  
    var parentElement = inputElement.parentNode;
    parentElement.appendChild(errorElement);
  }
  
  // Function to reset the validation error messages
  function resetValidationErrors() {
    var errorElements = document.querySelectorAll('.validation-error');
    var errorFields = document.querySelectorAll('.has-error');
  
    errorElements.forEach(function(errorElement) {
      errorElement.parentNode.removeChild(errorElement);
    });
  
    errorFields.forEach(function(field) {
      field.classList.remove('has-error');
    });
  }
  
  // Function to submit the form using AJAX
  function submitForm() {
    // Get the form data
    var formData = new FormData(form);
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../scripts/formHandler.php', true); // Modify the URL accordingly
  
    // Handle the AJAX response
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Handle the successful response
        var response = JSON.parse(xhr.responseText);
        alert(response.message); 
        console.log(response.message);// Display the feedback message
      } else {
        // Handle the error response
        // Display an error message or take other appropriate action
      }
    };
  
    // Send the form data
    xhr.send(formData);
  }
  
  // Rest of your code...
  