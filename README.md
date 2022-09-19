# expressValidation exercise 
### steps
## step 01
Create a backend server folder and make a server.js file
## step 2
Install express-validator from https://express-validator.github.io/docs/

## step 3
Following the docs from express validators create a array which can check field validity as shown in the class
- check username field with these validity : empty or not
- check email field with these validity : empty or not, it must be an email
- check password: must have 6-15 characters, alphabets a-z, numbers 0-9, special characters etc. 
- check with a confirm password and match it with password and check validity 
- check password is not empty
- check a field called age which must be Between 18-65 years old
- check a field called adress where you can check postalCode of address and find out its a valid postal code or not
hints: https://express-validator.github.io/docs/wildcards.html

## step 04
Install reactjs in client folder and make a form based on backend form fields
- send data to server from the form and check if you get errors from validation 
- if errors from validation show them on the form in red color
- if success with no errors show success messages in green color
