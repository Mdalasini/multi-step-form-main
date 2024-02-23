const primaryBtn = document.querySelector('.btn-primary');
const secondaryBtn = document.querySelector('.btn-secondary');
const tabElements = document.getElementsByClassName('tab')
const monthlyPrices = document.querySelectorAll('.monthlyPrice')
const  yearlyPrices = document.querySelectorAll('.yearlyPrice')
const toggle = document.getElementById('toggle')

let currentTab = 4
showTab(currentTab)

function highlightCircle(n) {
    // Get all circles from the div with id 'sideBar'
    const circles = document.getElementById('sideBar').getElementsByClassName('circle');

    // Ensure n is a valid index (between 0 and circles.length - 1)
    if (n < 0 || n >= circles.length) {
        console.error('Invalid circle index.');
        return;
    }

    // Treat n as 3 if it is 4
    const adjustedIndex = n === 4 ? 3 : n;

    // Loop through all circles and remove classes
    for (let i = 0; i < circles.length; i++) {
        const currentCircle = circles[i];

        // Check if the current circle is the one to highlight
        if (i === adjustedIndex) {
            currentCircle.classList.add('bg-pastelBlue', 'border-pastelBlue', 'text-marineBlue');
        } else {
            currentCircle.classList.remove('bg-pastelBlue', 'border-pastelBlue', 'text-marineBlue');
        }
    }
}

function showTab(n) {
    if (n === 3){
        performSetup();
    }
  
    // Show the current tab
    tabElements[n].style.display = 'block';

    // Highlight associated step in sidebar
    highlightCircle(n)
  
    // Call the function to handle buttons based on the tab index
    handleButtons(n);
}
  
function handleButtons(tabIndex) {  
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
    //   primaryBtn.type = 'submit';
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
    // display desired tab
    showTab(currentTab)
}

/**
 * Validates the inputs in step 1
 * 
 * @returns {boolean} valid - Whether the inputs are valid or not
 */
function validateTab1() {
    // Get the first element with the class 'tab'
    const tabElement = document.querySelector('.tab');

    // Get the input elements
    const inputElements = tabElement.querySelectorAll('input');

    // Check their validity
    let valid = true;
    inputElements.forEach(input => {
        if (!input.checkValidity()) {
            // For those that are not valid add the class 'invalid' to them
            input.classList.add('invalid');
            valid = false;
        }
    });

    // Return valid as a boolean - True if all inputs are valid, False otherwise
    return valid;
}


// Add a click event listener to the primaryBtn to run the function nextTab(1)
primaryBtn.addEventListener('click', function () {
        nextTab(1);
});

// Add a click event listener to the secondaryBtn to run the function nextTab(1)
secondaryBtn.addEventListener('click', function () {
        nextTab(-1);
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
        showYearlyPrices(); 
    } else {
    showMonthlyPrices(); 
    }
});
  
// Function to show yearly prices and hide monthly prices
function showYearlyPrices() {
    yearlyPrices.forEach(price => {
        price.style.display = 'block'; 
    });
    monthlyPrices.forEach(price => {
        price.style.display = 'none'; 
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
    // Select every input tag under the div with the id of 'addons'
    const addonInputs = document.querySelectorAll('#addons input[type="checkbox"]');
  
    // Check to see if the input is checked on page load
    addonInputs.forEach(input => {
      if (input.checked) {
        addBorderClass(input);
      }
    });
  
    // Add an event listener to every one of those inputs
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
  
const planPrices = {
    'Arcade': 9,
    'Advanced': 12,
    'Pro': 15,
};

const addonPrices = {
    'Online services': 1,
    'Larger storage': 2,
    'Customizable Profile': 2,
};

// Function to initialize the setup form
function initializeSetupForm() {
    return document.getElementById('setupForm');
}

// Function to get selected elements from the setup form
function getSelectedElements(form) {
    return {
        selectedPlan: form.elements['selectedPlan'],
        selectedDuration: form.elements['selectedDuration'],
        selectedAddon: form.elements['selectedAddon'],
    };
}

// Function to calculate duration
function calculateDuration(selectedDuration) {
    return selectedDuration.checked ? selectedDuration.value : 'Monthly';
}

// Function to update the selected plan information
function updateSelectedPlanInfo(selectedPlan, duration) {
    const plan = document.getElementById('selectedPlan');
    plan.innerText = selectedPlan.value ? `${selectedPlan.value} (${duration})` : '';
}

// Function to update the selected plan price
function updateSelectedPlanPrice(selectedPlan, duration) {
    const planPrice = document.getElementById('selectedPlanPrice');
    const selectedPlanPrice = planPrices[selectedPlan.value];
    const adjustedPlanPrice = duration === 'Yearly' ? selectedPlanPrice * 10 : selectedPlanPrice;
    planPrice.innerText = duration === 'Monthly' ? `$${adjustedPlanPrice}/mo` : `$${adjustedPlanPrice}/yr`;
}

// Function to get selected addon values
function getSelectedAddonValues(selectedAddon) {
    return Array.from(selectedAddon)
        .filter(addon => addon.checked)
        .map(addon => addon.value);
}

// Function to update selected addons
function updateSelectedAddons(selectedAddonValues, duration) {
    const addonElements = selectedAddonValues.map(addon => {
        const addonPrice = addonPrices[addon];
        const adjustedAddonPrice = duration === 'Yearly' ? addonPrice * 10 : addonPrice;
        return `<div class="flex items-center justify-between">
                    <p class="text-light">${addon}</p>
                    <p class="text-marineBlue text-sm">${duration === 'Monthly' ? `+ $${adjustedAddonPrice}/mo` : `+ $${adjustedAddonPrice}/yr`}</p>
                </div>`;
    }).join('');

    const addons = document.getElementById('selectedAddons');
    addons.innerHTML = addonElements;
}

// Function to update total duration
function updateTotalDuration(duration) {
    const totalDuration = document.getElementById('totalDuration');
    totalDuration.innerText = duration === 'Yearly' ? '(per year)' : '(per month)';
}

// Function to update total price
function updateTotalPrice(adjustedPlanPrice, selectedAddonValues, duration) {
    const totalPrice = document.getElementById('totalPrice');
    const total = adjustedPlanPrice + selectedAddonValues.reduce((acc, addon) => acc + addonPrices[addon], 0);
    totalPrice.innerText = `${duration === 'Monthly' ? `$${total}/mo` : `$${total}/yr`}`;
}

// Main function to perform the setup
function performSetup() {
    const form = initializeSetupForm();
    const selectedElements = getSelectedElements(form);
    const { selectedPlan, selectedDuration, selectedAddon } = selectedElements;

    const duration = calculateDuration(selectedDuration);

    updateSelectedPlanInfo(selectedPlan, duration);
    updateSelectedPlanPrice(selectedPlan, duration);

    const selectedAddonValues = getSelectedAddonValues(selectedAddon);
    updateSelectedAddons(selectedAddonValues, duration);

    updateTotalDuration(duration);

    const adjustedPlanPrice = duration === 'Yearly' ? planPrices[selectedPlan.value] * 10 : planPrices[selectedPlan.value];
    updateTotalPrice(adjustedPlanPrice, selectedAddonValues, duration);
}



