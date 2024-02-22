const primaryButtons = document.querySelectorAll('button[type="button"].btn-primary')
const secondaryButtons = document.querySelectorAll('button[type="button"].btn-secondary')
const tabElements = document.getElementsByClassName('tab')
const monthlyPrices = document.querySelectorAll('.monthlyPrice')
const  yearlyPrices = document.querySelectorAll('.yearlyPrice')
const toggle = document.getElementById('toggle')

let currentTab = 1
showTab(currentTab)


function showTab(n) { 
    // Show the current tab
    tabElements[n].style.display = 'block';
  
    // Get buttons with the class primaryBtn and secondaryBtn
    const primaryBtn = document.querySelector('.btn-primary');
    const secondaryBtn = document.querySelector('.btn-secondary');
  
    // Hide both buttons by default
    primaryBtn.style.display = 'none';
    secondaryBtn.style.display = 'none';
  
    if (n === 0) {
      // If n is 0, display the primaryBtn with its text as 'Next Step'
      primaryBtn.style.display = 'block';
      primaryBtn.innerText = 'Next Step';
    } else if (n >= 1 && n <= 3) {
      // If n is [1, 2, 3], display both buttons with the primaryBtn's text as 'Next Step'
      primaryBtn.style.display = 'block';
      secondaryBtn.style.display = 'block';
      primaryBtn.innerText = 'Next Step';
    }
  
    if (n === 3) {
      // If n is 3, set the primaryBtn's type to `submit` and text to 'Confirm'
      primaryBtn.type = 'submit';
      primaryBtn.innerText = 'Confirm';
    } else if (n === 4) {
      // If n is 4, don't display either button
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

