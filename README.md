## Memory Game: Tax Deductions for Freelancers
### GA-Project-1-Game-App

##### User Stories:

(1) As a user, I want the contents of tiles to be revealed when clicked so that I can confirm whether or not I've identified a pair of matching tiles.

(2) As a user, I want the contents of the last pair of tiles clicked to be concealed after an incorrect match so that I can memorize the placement of those tiles on the game board.

(3) As a user, I want to see a counter on the page that displays the number of times I've correctly identified a pair of matching tiles so that I am always aware of the number of wins (correctly matched tiles).

(4) As a user, I want to see a counter on the page that displays the number of times I've incorrectly identified a pair of matching tiles so that I am always aware of the number of losses (incorrectly matched tiles).

(5) As a user, I want the tiles to be large enough to click easily and the text on each tile to be legible so that I can navigate through the game without difficulty.

(6) As a user, I want the ability to play the game on a desktop computer or mobile device.

##### Approach:

My approach is to listen for a click event on a button (each individual tile is a button element) and push the HTML of the clicked button into an array. The elements in the array are then evaluated with a boolean. If the HTML of the element in position [0] in the array is the same as the element's HTML in position [1], the buttons are removed from the board by emptying the contents of the array and the counter increases by one for correctly guessed matches.

A function to remove the existing class from the button and assign a new class is also executed when a click event is triggered. The default CSS color and background-color properties for each button are the same color. The color property in the newly assigned class is different than the background-color. By reassigning the class of a button element, the effect of flipping physical playing cards face-up or face-down is digitally recreated.

If the two buttons clicked are a mismatch, the counter increases by one for incorrectly guessed matches. A function is also executed to change the class on the clicked buttons back to the original class (and correspondingly the text on the tile is no longer visible to the user).

##### Challenges:

My initial approach in CSS was to create two identical divs of buttons and layer them on top of one another using .show() and .hide() to reveal a different button on a click event. I first used CSS flexboxes for the design but I did not like the approach. The tiles scaled properly based on the viewport but the button text could've been too small to read easily on a mobile device. After removing the flexboxes the buttons would not align to a grid pattern but "vertical-align: middle" resolved the issue. It then found it difficult to perfectly stack a button on top of another button using CSS so I came up with an easier approach - match the text color and background color of each button to "hide" each button's text, and change the text color property of the same button on a click event to "show" each button's text.

There is also an attribute added to each button to disable it after it's been clicked. Before this line of code was introduced, a user was able to click on the same button twice, which evaluated incorrectly as a win.

##### Features to Add:
- Button that would scramble the order of the tiles

##### Disclaimer:

The information contained within this project is provided for informational purposes only and is not intended to substitute for obtaining accounting, tax, or financial advice from a professional tax planner or financial planner. Readers are advised not to act upon the information contained within this project without seeking the service of a professional tax advisor and/or financial planner.
