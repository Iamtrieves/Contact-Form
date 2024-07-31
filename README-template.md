# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**


Absolutely, let's break down the code line by line:

**1. Comments:**

- The code starts with comments wrapped in `/* */`. Comments are ignored by the browser and are used to explain the code for humans.

**2. Initializations:**

- Lines 3-12 declare variables using `const` (constant) to store references to different parts of the form.
    - `form`: This variable holds a reference to the entire form element using `document.querySelector('.container')`. The `.container` part selects the form element with the class `container`.
    - Similar lines follow for `firstName`, `lastName`, `email`, and other form elements using `document.getElementById('id')`. This selects elements by their unique IDs.

**3. Errors:**

- Lines 14-20 declare variables to store references to the error messages displayed for each field.
    - Similar to the previous section, these use `document.querySelector` to select elements with classes like `.first-name-error`.

**4. Radio Button Active State:**

- Lines 22-35 handle the visual effects for the radio button options (general enquiry and support request).
    - `document.querySelectorAll('input[type="radio"]')` selects all radio button elements in the form.
    - A `forEach` loop iterates through each radio button.
        - Inside the loop, an event listener is added using `addEventListener('change')`. This listens for the `change` event on each radio button.
            - When a radio button is clicked (causing the change event), another `forEach` loop iterates through all elements with the class `.radio-option` (likely the visual representation of the radio buttons).
                - Inside this inner loop, the background color and border color of each `.radio-option` element are reset to default values (empty string).
            - Finally, the background and border color of the parent element of the clicked radio button (which likely has the class `.radio-option`) are set to specific green colors using CSS variables.

**5. Function: checkEmpty**

- Lines 37-47 define a function named `checkEmpty` that takes two arguments:
    - `field`: This is a reference to a form element (like `firstName`).
    - `error`: This is a reference to the error message element for that field (like `firstNameError`).
- The function checks if the value of the `field` is empty using `if (field.value == "")`.
    - If it's empty, the error message element's class is removed from `hidden` (making it visible).
    - The border color of the `field` is set to red using a CSS variable.
    - A timeout function is used with `setTimeout` to hide the error message again after 3 seconds. The function inside the timeout removes the `hidden` class from the error message element and resets the border color.
- The function returns `true` if the field is not empty, otherwise `false`.

**6. Function: checkEmail**

- Lines 49-79 define a function named `checkEmail` that also takes two arguments:
    - `email`: This is a reference to the email input field.
    - `error`: This is a reference to the error message element for the email field.
- Similar to `checkEmpty`, it first checks if the `email` field is empty. If it is, it displays an error message and sets the border color to red.
- Otherwise, it checks for several invalid characters in the email address using a series of `if` statements: `@`, `.`, special characters, etc. 
  - It also checks for some edge cases like having multiple dots (`.`) or the dot being at the end of the email address.
    - If an invalid character is found, it displays a more specific error message "Please enter a valid email address" and sets the border color to red.
- The function again uses a timeout to hide the error message after 3 seconds.
- It returns `true` if the email is valid, otherwise `false`.

**7. Function: checkQuery**

- Lines 81-88 define a function named `checkQuery` that takes two arguments:
    - `queries`: This is an array containing references to the two radio button elements (general enquiry and support request).
    - `error`: This is a reference to the error message element for query selection.
- The function uses a loop to iterate through each element in the `queries` array.
    - Inside the loop, it checks if the `checked` property of the current element is `true` (meaning it's selected).
        - If a radio button is selected, the loop breaks using `return;


## Line-by-line explanation of the remaining code:

**1. Function: checkQuery (continued)**

- **Line 81:** `// Function to check if a query type is selected` - This is a comment explaining the purpose of the function.
- **Line 82:** `function checkQuery(queries, error) {` - This line defines the `checkQuery` function with two arguments: `queries` (an array of radio button elements) and `error` (a reference to the error message element).
- **Line 83:** `let checked = false;` - This line declares a variable `checked` and initializes it to `false`. This variable will be used to track if any radio button is selected.
- **Line 84:** `queries.forEach(query => { ... });` - This line iterates through each element in the `queries` array using a `forEach` loop.
    - Inside the loop, each element (`query`) represents a radio button element.
- **Line 85:** `if (query.checked) { ... }` - This line checks if the `checked` property of the current radio button (`query`) is `true` (meaning it's selected).
    - **Line 86:** `checked = true;` - If a radio button is selected, this line sets `checked` to `true`.
    - **Line 87:** `return;` - This line exits the `forEach` loop immediately if a radio button is found selected.
- **Line 88:** `if (!checked) { ... }` - This line checks if `checked` is still `false` after the loop (meaning no radio button was selected).
    - **Line 89:** `error.classList.remove('hidden');` - If no radio button is selected, this line removes the `hidden` class from the error message element, making it visible.
    - **Line 90-92:** This block uses `setTimeout` to hide the error message again after 3 seconds. It works similarly to previous functions.
    - **Line 93:** `return false;` - This line returns `false` to indicate the validation failed (no query type selected).
- **Line 94:** `return true;` - If the loop finishes iterating and `checked` is still `false` (no selection), the function returns `false`. Otherwise, it returns `true` (a query type is selected).

**2. Function: checkCheckbox**

- **Line 96:** `// Function to check for consent checkbox` - This is a comment explaining the purpose of the function.
- **Line 97:** `function checkCheckbox(checkbox, error) { ... }` - This line defines the `checkCheckbox` function with two arguments: `checkbox` (a reference to the consent checkbox element) and `error` (a reference to the error message element).
- **Line 98:** `if (!checkbox.checked) { ... }` - This line checks if the `checked` property of the `checkbox` element is `false` (meaning it's not checked).
    - **Line 99:** `error.classList.remove('hidden');` - If the checkbox is not checked, this line removes the `hidden` class from the error message element, making it visible.
    - **Line 100-102:** This block uses `setTimeout` to hide the error message again after 3 seconds (similar to previous functions).
    - **Line 103:** `return false;` - This line returns `false` to indicate the validation failed (consent checkbox not checked).
- **Line 104:** `return true;` - If the checkbox is checked, the function returns `true` (validation passed).

**3. Toast message upon submission**

- **Line 106:** `// Toast message upon submission` - This is a comment explaining the purpose of this code block.
- **Line 107:** `form.addEventListener('submit', function(e){ ... });` - This line adds an event listener to the `form` element. It listens for the `submit` event (when the form is submitted).
    - The event listener function takes an argument `e` which represents the event object.
- **Line 108:** The long `if` statement checks all validation functions:
    - It calls `checkEmpty` for `firstName`, `lastName`, and `message` to ensure they are not empty.
    - It calls `checkEmail` for `email` to validate the email format.
    - It calls `checkQuery` with the array of radio buttons and the error message to ensure a query type is
    ## Explanation of the code (starting from line 109):

**1. Function: checkCheckbox (already explained)**

- Lines 109-114 remain the same functionality as explained earlier. This function checks if the consent checkbox is selected and displays an error message if not.

**2. Toast message upon submission (continued)**

- **Line 116:** `// Toast message upon submission` - This comment remains the same, explaining the purpose of this code block.
- **Line 117:** `form.addEventListener('submit', function(e){ ... });` - This line remains the same. It adds an event listener to the form element that listens for the `submit` event (when the form is submitted).
- **Line 118:** The long `if` statement continues with the validation checks:
    - **Line 118-123:** It calls previously defined functions like `checkEmpty`, `checkEmail`, and `checkQuery` to ensure all required fields are filled and formatted correctly, and a query type is selected.
    - **Line 124:** It calls the `checkCheckbox` function (explained above) with the `consent` checkbox element and its associated error message to validate if the consent checkbox is checked.

**Overall functionality:**

When the form is submitted, the code checks all the validation functions. If any of the checks fail (empty fields, invalid email, missing query selection, or unchecked consent checkbox), the `if` statement evaluates to `true`. This prevents the default form submission behavior using `e.preventDefault()`.

However, if all the validation checks pass (including the `checkCheckbox` function returning `true`), the `else` block executes. Here's what happens in the `else` block:

- **Line 125:** `e.preventDefault();` - This prevents the default form submission behavior even though all validations passed. This is likely because the code wants to handle the submission differently (showing a toast message).
- **Line 126:** `e.target.reset();` - This resets the form, clearing all the entered data.
- **Line 127-128:** These lines likely reset the visual state of the radio button options (removing custom background and border colors).
- **Line 129:** `var toastBox = document.querySelector('.toastBox');` - This line selects the element with the class `.toastBox` (likely a container for the toast message).
- **Line 130:** `toastBox.classList.remove('toastHidden');` - This line removes the `toastHidden` class from the toast message element, making it visible.
- **Line 131-133:** This block uses `setTimeout` to hide the toast message again after 3 seconds. It works similarly to previous functions.

In summary, this code snippet handles form submission. It validates all fields and the consent checkbox, prevents default submission, resets the form, and displays a toast message for a short duration.