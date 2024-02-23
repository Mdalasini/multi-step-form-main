const primaryButtons = document.querySelectorAll('button[type="button"].btn-primary')
const secondaryButtons = document.querySelectorAll('button[type="button"].btn-secondary')
const tabElements = document.getElementsByClassName('tab')
const monthlyPrices = document.querySelectorAll('.monthlyPrice')
const  yearlyPrices = document.querySelectorAll('.yearlyPrice')
const toggle = document.getElementById('toggle')

let currentTab = 2
showTab(currentTab)


function showTab(n) {
    // Assuming tabElements is an array of DOM elements representing your tabs
  
    // Show the current tab
    tabElements[n].style.display = 'block';
  
    // Call the function to handle buttons based on the tab index
    handleButtons(n);
}
  
function handleButtons(tabIndex) {
    // Get buttons with the class primaryBtn and secondaryBtn
    const primaryBtn = document.querySelector('.btn-primary');
    const secondaryBtn = document.querySelector('.btn-secondary');
  
    // Hide both buttons by default
    primaryBtn.style.display = 'none';
    secondaryBtn.style.display = 'none';
  
    if (tabIndex === 0) {
      // If tabIndex is 0, display the primaryBtn with its text as 'Next Step'
      primaryBtn.style.display = 'block';
      primaryBtn.innerText = 'Next Step';
    } else if (tabIndex >= 1 && tabIndex <= 3) {
      // If tabIndex is [1, 2, 3], display both buttons with the primaryBtn's text as 'Next Step'
      primaryBtn.style.display = 'block';
      secondaryBtn.style.display = 'block';
      primaryBtn.innerText = 'Next Step';
    }
  
    if (tabIndex === 3) {
      // If tabIndex is 3, set the primaryBtn's type to `submit` and text to 'Confirm'
      primaryBtn.type = 'submit';
      primaryBtn.innerText = 'Confirm';
    } else if (tabIndex === 4) {
      // If tabIndex is 4, don't display either button
      primaryBtn.style.display = 'none';
      secondaryBtn.style.display = 'none';
    }
}
  
  

function nextTab(n){
    if (currentTab === 0 && !validateTab1()){ // don't switch tabs is tab1 is invalid
        return false
    }
    // Hide current tab
    tabElements[currentTab].style.display = 'none'
    currentTab += n // change currentTab
    if (currentTab >= tabElements.length -1){ // at the end of the form
        document.getElementById('setupForm').onsubmit()
    }
    // display desired tab
    showTab(currentTab)
}

/**
 * Validates the inputs in step 1
 * 
 * @returns {boolean} valid - Whether the inputs are valid or not
 */
function validateTab1() {
    // TODO1: Get the first element with the class 'tab'
    const tabElement = document.querySelector('.tab');

    // TODO2: Get the input elements
    const inputElements = tabElement.querySelectorAll('input');

    // TODO3: Check their validity
    let valid = true;
    inputElements.forEach(input => {
        if (!input.checkValidity()) {
            // TODO4: For those that are not valid add the class 'invalid' to them
            input.classList.add('invalid');
            valid = false;
        }
    });

    // TODO5: Return valid as a boolean - True if all inputs are valid, False otherwise
    return valid;
}


// TODO 6: Add a click event listener to the 'primaryBtn's to run the function nextTab(1)
primaryButtons.forEach(primaryBtn => {
    primaryBtn.addEventListener('click', function () {
        nextTab(1);
    });
});

// TODO 7: Add a click event listener to the 'secondaryBtn's to run the function nextTab(-1)
secondaryButtons.forEach(secondaryBtn => {
    secondaryBtn.addEventListener('click', function () {
        nextTab(-1);
    });
});


// Initial check for the toggle state on page load
if (toggle.checked) {
    showYearlyPrices();
} else {
    showMonthlyPrices();
}
  
// Add event listener to the toggle for TODO 7, 8, 9
toggle.addEventListener('change', function() {
    if (toggle.checked) {
        showYearlyPrices(); // TODO 8
    } else {
    showMonthlyPrices(); // TODO 9
    }
});
  
// Function to show yearly prices and hide monthly prices
function showYearlyPrices() {
    yearlyPrices.forEach(price => {
        price.style.display = 'block'; // TODO 8
    });
    monthlyPrices.forEach(price => {
        price.style.display = 'none'; // TODO 9
    });
}

// Function to show monthly prices and hide yearly prices
function showMonthlyPrices() {
    yearlyPrices.forEach(price => {
        price.style.display = 'none'; // TODO 9
    });
    monthlyPrices.forEach(price => {
        price.style.display = 'block'; // TODO 8
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // TODO 10: Select every input tag under the div with the id of 'addons'
    const addonInputs = document.querySelectorAll('#addons input[type="checkbox"]');
  
    // TODO 11: Check to see if the input is checked on page load
    addonInputs.forEach(input => {
      if (input.checked) {
        addBorderClass(input);
      }
    });
  
    // TODO 12: Add an event listener to every one of those inputs
    addonInputs.forEach(input => {
      input.addEventListener('change', function() {
        if (input.checked) {
          addBorderClass(input);
        } else {
          removeBorderClass(input);
        }
      });
    });
  
    function addBorderClass(input) {
      // Add 'border-purplishBlue' to the input's associated label
      const label = input.closest('label');
      if (label) {
        label.classList.add('border-purplishBlue');
      }
    }
  
    function removeBorderClass(input) {
      // Remove 'border-purplishBlue' from the input's associated label
      const label = input.closest('label');
      if (label) {
        label.classList.remove('border-purplishBlue');
      }
    }
});
  

