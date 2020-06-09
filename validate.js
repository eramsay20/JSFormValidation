/* Project Background:
Validation Experts Inc. currently provides form validation services to a local audience
of small businesses. In order to expand nationally and globally, Validation Experts Inc. 
has requested a javascript form validation library. They have provided a ​basicvalidation.html​
and ​index.html file that you should use, as-is, to test your form validation library. 

Your JavaScript code should be able to work with any html file that contains the proper 
form structure. Validation Experts Inc will be vetting your form validation library on multiple html forms to ensure consistency.
Functional Requirements (70%):

1. Given there are errors somewhere on a form, when the "Validate" input button for that 
form is clicked, then all error messages from this form will appear in the div with class 
"errors" immediately preceding the form.

2. Given the "Validate" input button for a form has been clicked, when errors exist, then 
they are displayed in an unordered list, with red text.

3. Given there are errors somewhere on a form, when the "Validate" input button for that 
form is clicked, then the form is not submitted.

4. Given there are no errors on the form, when the "Validate" input button for that form 
is clicked, then the form is submitted.

5. Given there are multiple forms on a page, when the "Validate" input button for any form 
is clicked, then only that form will run through validation.

6. Given an input of type "text" has a class of "required", and given nothing or only 
whitespace characters (spaces, tabs) has been entered into this input, when this form's 
validation runs, then an error appears in the correct location, and the error text says 
"Required fields must have a value that is not empty or whitespace."

7. Given an input of type "text" does not have a class of "required", and given nothing 
has been entered into this input, when this form's validation runs, then no error will 
appear from this input.

8. Given an input of type "text" has a class of "numeric", and given a non-numeric 
character has been entered into this input, when this form's validation runs, then an 
error appears in the correct location, and the error text says "Numeric fields must be 
a series of numbers."

9. Given an input of type "text" has a class of "required_size", and given the input has 
a minlength attribute, and given text has been entered with a length that does not exactly 
match the minlength attribute's value, when this form's validation runs, then an error 
appears in the correct location, and the error text says "Required_size field lengths 
must exactly match the minlength attribute of that field."

10. Given an input of type "text" has a class of "username", and given a non-alphanumeric 
character has been entered into this input, when this form's validation runs, then an error 
appears in the correct location, and the error text says "Username fields must contain only
alphanumeric characters."

11. Given an input of type "text" has a class of "username", and given fewer than eight 
characters have been entered into this input, when this form's validation runs, then an 
error appears in the correct location, and the error text says "Username fields must contain 
at least 8 characters."
12. Given an input of type "text" has a class of "date", and given an entry that does not 
match the "XX/XX/XXXX" format has been entered into this input, when this form's validation 
runs, then an error appears in the correct location, and the error text says "Date fields 
must match the format of XX/XX/XXXX."

13. Given an input of type "text" has a class of "phone", and given an entry that does not 
match the "XXX-XXX-XXXX" format has been entered into this input, when this form's validation 
runs, then an error appears in the correct location, and the error text says "Phone fields 
must match the format of XXX-XXX-XXXX."

14. Given an input of type "text" has a class of "password", and an entry that does not 
contain one of: (uppercase letter, lowercase letter, number, special character) has been 
entered into this input, when this form's validation runs, then an error appears in the 
correct location, and the error text says "Password fields must contain one or more of 
each of the following types: uppercase letters, lowercase letters, numbers, special characters." // MUST DO OR FIND

15. Given an input of type "text" has a class of "alphabetic", and given a non-alphabetic 
character has been entered into this input, when this form's validation runs, then an error 
appears in the correct location, and the error text says "Alphabetic fields must be a 
series of alphabetic characters."

16. Given an input of type "text" has multiple classes, when this form's validation runs, 
then all pertinent validation for this input is run:
    a. For example, if an input has alphabetic and required_size, then both the alphabetic 
    validation and required_size validation would need to run.

Non Functional Requirements (30%):
1. No global variables are used
2. No validation libraries are used
3. Console or alert statements must not be present
4. Descriptive code comments must be present on all functions
5. Camel case must be used for all JavaScript variable identifiers.
6. All functions are named, including callbacks in the event handlers.
7. All function names accurately describe the function */

//------------------------------------------------------------------------//
//--------------- REGEX VALIDATION FUNCTIONS (START) ---------------------//
//------------------------------------------------------------------------//

function isEmptySpace (text) {
    const regexEmpty = /^\s*$/; // used to evaluate whether space or tabs exist in the input
    const inputValue = parseFloat(text); // pull input value
        if (regexEmpty.test(text) == true || inputValue == ""){
            return true;
        }
    return false;
};

function isValidAlphabetic (text) {
    const regexAplha = /^[a-zA-Z]+$/; // letters only, as many as wanted
    return regexAplha.test(text);
};

function isValidNumeric (numbers) {
    const regexNumeric = /^[0-9]+$/; // numbers only, as many as wanted
    return regexNumeric.test(numbers); 
};

function isValidSize (input, length) {
    const regexSize3 = new RegExp(`^\\w{${length}}$`, "gm");// numbers must match the minlength attribute of the inputs parent node
    return regexSize3.test(input); 
};

function isValidAlphaNumeric (alphaNum) {
    const regexAlphaNumeric = /^\w+$/; // alphabetic or numbers only, 5 or more characters
    return regexAlphaNumeric.test(alphaNum); 
};

function isValidPassword (password) {
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,}$/; 
    return regexPassword.test(password); 
};
//https://stackoverflow.com/questions/14850553/javascript-regex-for-password-containing-at-least-8-characters-1-number-1-uppe/14850765
//https://www.w3resource.com/javascript/form/password-validation.php   

function isValidZip (zip) {
    const regexZip = /^[0-9]{5,}$/; // 5 or more numbers only
    return regexZip.test(zip);
};
function isValidDate (date) {
    const regexDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/; // google result, phone validation
    return regexDate.test(date); 
};

function isValidPhone (phone) {
    const regexPhone = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/; // google result, phone validation
    return regexPhone.test(phone); 
};
    //------------------------------------------------------------------------//
    //--------------- REGEX VALIDATION FUNCTIONS (END) -----------------------//
    //------------------------------------------------------------------------//

//------------------------------------------------------------------------//
//------------------------ FORM VALIDATION (START) -----------------------//
//------------------------------------------------------------------------//

const validateF1 = document.addEventListener('click', (event) => {
    let clickTarget = event.target; // locate the target of click function
    if(clickTarget.name == "submitBtn"){ // if click on submitBtn input... proceed to validation

        // DOM traversal start // 
    let submitDiv = clickTarget.parentNode; // use these variables to transverse the DOM
    let formDiv = submitDiv.parentNode; // use these variables to transverse the DOM
    let errorDivF1 = formDiv.previousElementSibling; // location to display error messages, just before form div
        // DOM traversal end // 

    let allRequired = formDiv.getElementsByClassName('required'); // get all required fields
    let allNonRequired = formDiv.querySelectorAll('input:not(.required)'); // get all non-required fields

    /*---------------------------------MESSAGE BANK---------------------------------------*/
    const msgEmpty = "Required fields must have a value that is not empty or whitespace.";
    const msgAlphabetic = 'Alphabetic fields must only use alphabetic characters.';
    const msgNumeric = 'Numeric fields must be a series of numbers.';
    const msgSize = "Required_size field lengths must exactly match the minlength attribute of that field.";
    const msgUser = "Username fields must contain only alphanumeric characters.";
    const msgUserLength = "Username fields must contain at least 8 characters.";
    const msgPassword = "Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.";
    const msgDate = "Date fields must match the format of XX/XX/XXXX."; 
    const msgPhone = "Phone fields must match the format of XXX-XXX-XXXX.";
    /*---------------------------------MESSAGE BANK---------------------------------------*/

    const createErrorLi = function (msgType) { // function to create and insert error message upon failed validation event
        let errorLi = document.createElement('li');
        errorLi.style.display = "list-item";
        errorLi.textContent = msgType;
        errorDivF1.appendChild(errorLi);
    };
    
    while (errorDivF1.lastElementChild) { // if error message div has content, remove it prior to re-validation
        errorDivF1.removeChild(errorDivF1.lastElementChild);
    }

    const validateRequired = function () { // function to validate all required inputs first
        for (i=0; i<(allRequired.length); i++) { // loop through all required inputs for the given form
            let inputValue = allRequired[i].value; // store input value
            let inputValueParent = allRequired[i]; // store input parent to collect attribute data
            let requiredLength = parseFloat(inputValueParent.getAttribute('minlength')); // store minlength data if applicable

            // case 1, empty
            if(isEmptySpace(inputValue) == true) {          
                    createErrorLi(msgEmpty);         
                    break;
            }

            // case 2, alphabetic
            else if (allRequired[i].classList.contains('alphabetic')
                && isValidAlphabetic(inputValue) == false) { 
                    createErrorLi(msgAlphabetic); 
                    break;
            }

            // case 3, numeric
            else if (allRequired[i].classList.contains('numeric')
                && isValidNumeric(inputValue) == false) { 
                    createErrorLi(msgNumeric);
                    break;
            }
             // case 4, username === alphanumeric; minlength 8
             else if (allRequired[i].classList.contains('username')) {
                if(isValidAlphaNumeric(inputValue) == false) { 
                    createErrorLi(msgUser);
                    break;
                }
                if(inputValue.length < 8) { 
                    createErrorLi(msgUserLength);
                    break;
                }
            }
             // case 5, password contains upper, lower, number & special (min 4)
             else if (allRequired[i].classList.contains('password')
                && isValidPassword(inputValue) == false) { 
                    createErrorLi(msgPassword);
                    break;
             }
            // case 6, date in correct format XX/XX/XXXX
            else if (allRequired[i].classList.contains('date')
                && isValidDate(inputValue) == false) { 
                    createErrorLi(msgDate);
                    break;
            }
            // case 7, phone in correct format XXX-XXX-XXXX
            else if (allRequired[i].classList.contains('phone')
            && isValidPhone(inputValue) == false) { 
                createErrorLi(msgPhone);
                break;
            }
            // case 8, minlength exists && required field
            else if (isNaN(requiredLength) == false 
                && isValidSize(inputValue, requiredLength) == false) {
                    createErrorLi(msgSize);
                    break;
            }
        }
    }; 
    const validateNonRequired = function () { 
        for (i=0; i<(allNonRequired.length); i++) { // loop through all non-required inputs for the given form
            let inputValue = allNonRequired[i].value;
            let inputValueParent = allNonRequired[i];
            let requiredLength = parseFloat(inputValueParent.getAttribute('minlength'));

            if (errorDivF1.lastElementChild !== null){  // check if other errors resolved first before validating non-required
                break;
            }   

            // case 1, alphabetic
            else if (inputValueParent.classList.contains('alphabetic')
                && isValidAlphabetic(inputValue) == false) { 
                    createErrorLi(msgAlphabetic); 
                    break;
            }

            // case 2, numeric
            else if (inputValueParent.classList.contains('numeric')
                && isValidNumeric(inputValue) == false) { 
                    createErrorLi(msgNumeric);
                    break;
            }
            // case 3, username === alphanumeric; minlength 8
            else if (inputValueParent.classList.contains('username')) {
                if(isValidAlphaNumeric(inputValue) == false) { 
                    createErrorLi(msgUser);
                    break;
                }
                if(inputValue.length < 8) { 
                    createErrorLi(msgUserLength);
                    break;
                }
            }
             // case 4, password contains upper, lower, number & special (min 4)
             else if (inputValueParent.classList.contains('password')
                && isValidPassword(inputValue) == false) { 
                    createErrorLi(msgPassword);
                    break;
             }
            // case 5, date in correct format XX/XX/XXXX
            else if (inputValueParent.classList.contains('date')
                && isValidDate(inputValue) == false) {
                    createErrorLi(msgDate);
                    break;
            }
            // case 6, phone in correct format XXX-XXX-XXXX
            else if (inputValueParent.classList.contains('phone')
                && isValidPhone(inputValue) == false) { 
                    createErrorLi(msgPhone);
                    break;
            }
            // case 7, minlength
            else if (isNaN(requiredLength) == false 
                && isValidSize(inputValue, requiredLength) == false) {
                    createErrorLi(msgSize);
                    break;
            }
        }
    }; 
    validateRequired(); // validate required inputs
    validateNonRequired(); // validate non-required inputs
  } // closes if() condition for submitBtn
    event.preventDefault(); // keeps the submit input from refreshing the page and clearing the error messages
});
    //------------------------------------------------------------------------//
    //------------------------ FORM VALIDATION (END) -------------------------//
    //------------------------------------------------------------------------//
