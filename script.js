const primaryButtons = document.querySelectorAll('button[type="button"].btn-primary')
const secondaryButtons = document.querySelectorAll('button[type="button"].btn-secondary')
const tabElements = document.getElementsByClassName('tab')

let currentTab = 0
showTab(currentTab)


function showTab(n) {
    tabElements[n].style.display = 'block';
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
