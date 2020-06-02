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
each of the following types: uppercase letters, lowercase letters, numbers, special characters."

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

//---------------------------- VALIDATION FUNCTIONS -----------------------------//
function isValidAlphabetic (text) {
    const regexAplha = /^[a-zA-Z]+$/; // letters only, as many as wanted
    return regexAplha.test(text);
};

function isValidNumeric (numbers) {
    const regexNumeric = /^[0-9]+$/; // numbers only, as many as wanted
    return regexNumeric.test(numbers); 
};

function isValidAlphaNumericMin5 (alphanumeric) {
    const regexNumeric = /^\w{5,}$/; // alphabetic or numbers only, 5 or more characters
    return regexNumeric.test(alphanumeric); 
};

function isValidZip (zip) {
    const regexZip = /^[0-9]{5,}$/; // 5 or more numbers only
    return regexZip.test(zip);
};

function isValidPhone (phone) {
    const regexPhone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/; // google result, phone validation
    return regexPhone.test(phone);
};
//---------------------------- VALIDATION FUNCTIONS -----------------------------//

// window.onload() = function () {

// };

//---------------------------- EVENT LISTENER FUNCTIONS -------------------------//

const validateF1 = document.querySelectorAll('input[name="submitBtn"]')[0].addEventListener('click', (event) => {
    let submitInput = event.target;
    let submitDiv = submitInput.parentNode;
    let formDiv = submitDiv.parentNode; 
 
    let errorDivF1 = formDiv.previousElementSibling;
    let requiredAllF1 = formDiv.querySelectorAll('.required');
    let requiredAlphaF1 = formDiv.querySelectorAll('.required.alphabetic');

    for (i=0; i<requiredAllF1.length; i++) {
        if (requiredAllF1[i].classList.contains('alphabetic')) {
                debugger;
                let inputValue = requiredAllF1[i].value;
                if (isValidAlphabetic (inputValue) != true) {
                    let errorLi = document.createElement('li');
                    errorLi.textContent = 'Required fields must have a value that is not empty or whitespace.';
                    errorLi.style.display = "list-item";
                    errorDivF1.appendChild(errorLi);
                }
        }
    }
    event.preventDefault();
});

document.querySelectorAll('input[name="submitBtn"]')[0].addEventListener('click',() => {
    
    let textInputs = document.querySelectorAll('.alphabetic')[0];
  
    let errorDiv = document.querySelectorAll('div.errors')[0];
  
    let warningLi = document.createElement('li'); // Create an <li> element
    
    warningLi.textContent = "THIS IS A WARNING"; // Insert text
    errorDiv.appendChild(warningLi);    


});

// "Required fields must have a value that is not empty or whitespace."
// "Numeric fields must be a series of numbers."

// "Required_size field lengths must exactly match the minlength attribute of that field."
/*
const regexObject = /^words$/  >>> literal, use when you know what it should be
const regexObject = new RegExp("^word$")   >>> use for dynamic input

    test()
    replace()
    regex.test(testString) >>> returns true or false
    string.replace(regex,replacementString)
 
    const string1 = 'corndog'
    string1.replace(regex, "hot") >>> returns "hotdog"

    flags: i (case insensitive), g (global, multiple instances), m (multiline)
        >>> add to last slash of regex
        i.e.
        'LION'.replace(\lion\i, 'mouse'); >>> mouse



        function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}
*/




//https://html.form.guide/snippets/javascript-form-validation-using-regular-expression.html\
// REGEX: https://teamtreehouse.com/library/using-wildcard-characters-2
// https://teamtreehouse.com/library/using-regular-expressions-in-javascript
//https://teamtreehouse.com/library/validating-a-username
//https://teamtreehouse.com/library/using-replace-with-captured-groups

/* function validate(){
  var phoneNumber = document.getElementById('phone-number').value;
  var postalCode = document.getElementById('postal-code').value;
  var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var postalRGEX = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
  var phoneResult = phoneRGEX.test(phoneNumber);
  var postalResult = postalRGEX.test(postalCode);
  if(phoneResult == false)
  {
    alert('Please enter a valid phone number');
    return false;
  }

  if(postalResult == false)
  {
    alert('Please enter a valid postal number');
    return false;
  }

  return true;
}




   let firstName = formDiv[0];
    let lastName = formDiv[1];
    let userName = formDiv[2];
    let password = formDiv[3];
    let zipCode = formDiv[4];
    let employeeID = formDiv[5];
        
        console.log(firstName.value);
        console.log(lastName.value);
        console.log(userName.value);
        console.log(password.value);
        console.log(zipCode.value);
        console.log(employeeID.value);


    var el = document.querySelector("#container > .menu > li > .submenu > li");
    el.onclick = function what_to_do(){
    var theText = this.innerHTML;
    alert(theText);
    }

*/