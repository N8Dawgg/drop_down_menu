# drop_down_menu

This is my implementation of a drop down menu in Javascript. It is incredibly bare bones and simple to use. You create a drop down menu by calling the function 'createDropDownMenu'. This function takes 3 arguments: The title of the menu, an array of button names that will be displayed when the title button is clicked, and an optional number that determines the height of each individual button (this is set to 21 by default).

The function returns an object with several values:
container                   : the div that contains the entire drop down menu, and should be appended to your DOM somewhere.
titleButton                 : the title button which, when clicked, will toggle the drop down menu.
expandableContainer         : the div that contains all of the drop down buttons. It is probably best not to modify it too much.
dropDownButtons             : an Array of all of the drop down buttons. You can add functionality to each button individually this way.
toggleDropDown              : function that toggles the drop down up and down. Triggered when you click the title button. 
addClassToDropDownButtons   : a helper function that adds a class to all of the drop down buttons.
adjustButtonHeight          : a helper function that changes the button height.