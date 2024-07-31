// variables for all inputs in order

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const generalEnquiry = document.querySelector('#general-enquiry');
const supportRequest = document.querySelector('#support-request');
const generalEnquiryContainer = document.querySelector('.general-enquiry');
const supportRequestContainer = document.querySelector('.support-request');
const messageInput = document.querySelector('#message');
const consentCheckBox = document.querySelector('#consent');
const submitButton = document.querySelector('#submit');
const toastBox = document.querySelector('.toastBox');


// Errors for all inputs in order

const firstNameError = document.querySelector('.first-name-error');
const lastNameError = document.querySelector('.last-name-error');
const emailInputError = document.querySelector('.email-error');
const queryError = document.querySelector('.query-error');
const messageInputError = document.querySelector('.message-error');
const consentInputError = document.querySelector('.consent-error');


// Function to check for valid email address
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

// Check if email is empty or invalid and display appropriate error
    if (!email) {
        emailInputError.textContent = "This field is required";
        emailInputError.classList.remove('hidden');
    } else if (!isValid) {
        emailInputError.textContent = "Please enter a valid email";
        emailInputError.classList.remove('hidden');
    } else {
        emailInputError.classList.add('hidden');
    }
    
    return isValid;
}

function handleRadioButtonChange() {
    if (generalEnquiry.checked) {
        generalEnquiryContainer.classList.add('selected');
        supportRequestContainer.classList.remove('selected');
        } else if (supportRequest.checked) {
        supportRequestContainer.classList.add('selected');
        generalEnquiryContainer.classList.remove('selected');
        } else {
        // Handle case where no radio button is selected (optional)
        generalEnquiryContainer.classList.remove('selected');
        supportRequestContainer.classList.remove('selected');
        }
    }

    // generalEnquiry.addEventListener('change', handleRadioButtonChange); : This line attaches an event listener to the generalEnquiry element. Whenever the change event occurs on this element (i.e., when the radio button is selected or deselected), the handleRadioButtonChange function will be called.

    // supportRequest.addEventListener('change', handleRadioButtonChange);: This line does the same for the supportRequest element.
    
generalEnquiry.addEventListener('change', handleRadioButtonChange);
supportRequest.addEventListener('change', handleRadioButtonChange);




// ADDING EVENT LISTENER FOR EACH OF THE INPUT FIELD

// Event Listener for the First Name Input Field
firstName.addEventListener("input", () => {
    const firstname = firstName.value;
    if(firstname) {
        firstName.style.border = "2px solid green"; // Green border for none empty email input field
    } else {
        firstName.style.border = ""; // Reset border to default for empty input
    }
})
// Event Listener for the Last name Input Field
lastName.addEventListener("input", () => {
    const lastname = lastName.value;
    if(lastname) {
        lastName.style.border = "2px solid green"; // Green border for none empty email input field
    } else {
        lastName.style.border = ""; // Reset border to default for empty input
    }
})

// Event Listener for the Email Input Field
emailInput.addEventListener("input", () => {
    const email = emailInput.value;
    if (email) {
        emailInput.style.border = "2px solid green"; // Green border for none empty email input field
    } else {
        emailInput.style.border = ""; // Reset border to default for empty input
    }
})

// Event Listener for the Message Input Field
messageInput.addEventListener("input", () => {
    const message = messageInput.value;
    if (message) {
        messageInput.style.border = "2px solid green"; 
    } else {
        messageInput.style.border = "";
    }
});


// Submit button Event Listener
submitButton.addEventListener("click", (event) =>{
    event.preventDefault();
    const firstname = firstName.value;
    const lastname = lastName.value;
    const email = emailInput.value;
    const message = messageInput.value;
    const checkbox = consentCheckBox.checked;
    const isValid = validateEmail(email, emailInputError);
    // Calls the validateEmail function: It invokes the validateEmail function, passing two arguments:

    // email: This is the email address that needs to be validated.
    // emailInputError: This is likely an element (e.g., a <p> tag) that will display an error message if the email is invalid.

    // Stores the return value: The function validateEmail returns a boolean value indicating whether the email is valid or not. This returned value is stored in the constant isValid.

    // First name Button Event Listener
    if (firstname) {
        firstNameError.classList.add("hidden");
        setTimeout(() => {
            firstName.value = "";
            document.querySelector('#first-name').style.border = "";
        }, 1000);
    } else {
        firstNameError.classList.remove("hidden");
        setTimeout(() => {
            firstNameError.classList.add("hidden");
        }, 2000); // 2000 milliseconds = 2 seconds
    }

    // Last Name Submit Button Event Listener
    if (lastname) {
        lastNameError.classList.add("hidden");
        setTimeout(() => {
            lastName.value = "";
            document.querySelector('#last-name').style.border = "";
        }, 1000);
    } else {
        lastNameError.classList.remove("hidden");
        setTimeout(() => {
            lastNameError.classList.add("hidden");
        }, 2000); // 2000 milliseconds = 2 seconds
    }

    // Email Submit Button Event Listener
    if (isValid) {
        emailInputError.classList.add("hidden");
        setTimeout(() => {
            emailInput.value = "";
            document.querySelector("#email").style.border = "";
            }, 1000);
    } else {
        emailInputError.classList.remove("hidden");
        setTimeout(() => {
            emailInput.value = "";
            emailInputError.classList.add("hidden");
        }, 2000); // 2000 milliseconds = 2 seconds
    }

    // Message Submit button Event Listener 
    if (message) {
        messageInputError.classList.add("hidden");
        setTimeout(() => {
            messageInput.value = "";
            document.querySelector('#message').style.border = "";
        }, 1000);
    } else {
        messageInputError.classList.remove("hidden");
        setTimeout(() => {
            messageInputError.classList.add("hidden");
        }, 2000); // 2000 milliseconds = 2 seconds
    }

    // Checkbox Submit Button EVent Listener
    if (checkbox) {
        consentInputError.classList.add("hidden");
        setTimeout(() => {
            consentCheckBox.checked = false;
        }, 1000);
    } else {
        consentInputError.classList.remove("hidden");
        setTimeout(() => {
            consentInputError.classList.add("hidden");
        }, 2000);
    }

    // Query Type Submit Button Event Listener
    if (generalEnquiry.checked || supportRequest.checked) {
        queryError.classList.add('hidden');
        // Set a timeout to uncheck the radio button after 2 seconds
        setTimeout(() => {
        generalEnquiry.checked = false;
        supportRequest.checked = false;
    }, 1000);
    } else {
    queryError.classList.remove('hidden');
    setTimeout(() => {
        queryError.classList.add('hidden');
    }, 2000);
    }
    setTimeout (() => {
        generalEnquiryContainer.classList.remove('selected');
        supportRequestContainer.classList.remove('selected');
    }, 1000); 


    const isValidFirstName = firstName.value !== ""; // Check if first name is not empty
    const isValidLastName = lastName.value !== ""; // Check if last name is not empty
    const isValidEmail = validateEmail(emailInput.value, emailInputError);
    // ... other validation checks ...
    const isQuerySelected = generalEnquiry.checked || supportRequest.checked; // Check if a radio button is selected
    const isMessageEmpty = messageInput.value !== "";
    const isChecked = consentCheckBox.checked; // Check if consent checkbox is checked

  // Check if all validations pass
    const isFormValid = isValidFirstName && isValidLastName && isValidEmail && isQuerySelected && isMessageEmpty && isChecked; 

    // If All Validations passes on submission or hitting the submit button all inputs, radios, checkboxes values are cleared
    if (isFormValid) {
    firstName.value = "";
    firstName.style.border = "";
    lastName.value = "";
    lastName.style.border = "";
    emailInput.value = "";
    emailInput.style.border = "";
    generalEnquiry.checked = false;
    supportRequest.checked = false;
    generalEnquiryContainer.classList.remove('selected');
    supportRequestContainer.classList.remove('selected');
    messageInput.value = "";
    messageInput.style.border = "";
    consentCheckBox.checked = false;
    // ... clear other input values and borders if needed ...

    // Set a shorter timeout (1 second) to clear input values before displaying success message
    setTimeout(() => {
    toastBox.classList.remove('toastHidden');

        setTimeout(() => {
        toastBox.classList.add('toastHidden');
      }, 3000); // 3 seconds
    }, 1000); // 1 second
        // Form is valid, submit data or perform other actions
        toastBox.classList.remove('toastHidden');

        setTimeout(() => {
        toastBox.classList.add('toastHidden');
        }, 3000); // 3 seconds
    }
});



