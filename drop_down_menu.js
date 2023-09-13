
const test = ["Home","Contact"];


/**
 * 
 * @param {string} menuTitle
 * @param {Array} buttonTextList
 * @param {number} buttonHeight 
 */

const dropDownMenu = (menuTitle, buttonTextList, buttonHeight=21) => {
    let closed = true;
    const toggleDropDown = () => {
        if (closed) {
            expandableContainer.style.height = finalHeight.toString() + 'px';
            closed = false;
        } else {
            expandableContainer.style.height = '0px';
            closed = true;
        }
        
    }
    
    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    
    let titleButton = document.createElement('button');
    titleButton.textContent = menuTitle;
    titleButton.addEventListener('click', toggleDropDown);
    container.append(titleButton);

    let expandableContainer = document.createElement('div');
    expandableContainer.style.transitionDuration = '1s';
    expandableContainer.style.display = 'flex';
    expandableContainer.style.flexDirection = 'column-reverse';
    expandableContainer.style.overflow = 'hidden';
    expandableContainer.style.height = '0px';
    container.append(expandableContainer);
    
    let dropDownButtons = [];
    let finalHeight = 0;
    buttonTextList.forEach((buttonText) => {
        finalHeight += buttonHeight;
        let dropDownButton = document.createElement('button');
        dropDownButton.textContent = buttonText;
        expandableContainer.prepend(dropDownButton);
        dropDownButtons.push(dropDownButton);
    })

    

    /**
     * 
     * @param {string} newClass 
     */
    const addClassToDropDownButtons = (newClass) => {
        dropDownButtons.forEach((dDButton) => {
            dDButton.classList.add(newClass);
        })
    }

    /**
     * 
     * @param {number} newButtonHeight 
     */
    const adjustButtonHeight = (newButtonHeight) => {
        buttonHeight = newButtonHeight;
        finalHeight = dropDownButtons.length() * buttonHeight;
    }

    return {
        container,
        titleButton,
        expandableContainer,
        dropDownButtons,
        toggleDropDown,
        addClassToDropDownButtons,
        adjustButtonHeight
    };
}



document.body.append(dropDownMenu("Test", test, 21).container);