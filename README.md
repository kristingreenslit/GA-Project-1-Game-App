# GA-Project-1-Game-App

User Stories:

(1) As a user, I want to see a message when I've matched the tiles correctly so that I know I've won a set.

(2) As a user, I want to see a message when I've matched tiles incorrectly so that I can try to remember how to win a set.

(3) As a user, I want the contents of each tile to be revealed when clicked.

(4) As a user, I want the tiles to be rearranged for each round so that each game of play is a challenge.

(5) As a user, I want the tiles to be large enough to find and the text on each tile to be legible so that I can navigate through the game without difficulty.


Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.:

My approach is to listen to a click event and count the number of mouse clicks, then store the HTML of the clicked buttons in an empty array. Regardless of the click sequence the class will immediately change on the array element, which then changes the text color on the tile to white and reveals the contents of the tile (prior to switching the class, the color of the font and background of the tile was the same color which "hid" the tile contents).

The elements in the array are then evaluated. If the element in position [0] in the array is the same as the element in position [1] of the array, a message appears that the match was successful and the tile faces remain revealed. If the two tiles chosen are a mismatch, the class on the chosen tiles is switched back to the original class (and correspondingly the text on the tile is hidden). There is also an attribute added to every click to disable tbe chosen button. Before this line of code was introduced, a user was able to click on the same button twice and a message would pop up that there was a successful match.

The persistent issue is that the tiles aren't flipping back to their "hidden" state after a user clicks on two tiles that aren't identical (lines 14 and 15 in the js file). I was able to change the code so that the class is removed on both flipped tiles (resulting in no button styling) or the last tile clicked was flipped (but not the tile clicked immediately before it). I tried to resolve the issue by looping through the array with a for loop and .forEach, experimenting with .toggleClass(), refactoring, .addClass and .removeClass on one global variable, "this" , separate global variables, storing .html() vs. .text() vs. div id in the empty array, and making the buttons transparent and adding a white background on the document body to hide each tile's contents. After receiving feedback and talking through it with a few classmates, it would be helpful to break up the code into a few separate functions and/or not clear the array after two clicks and evaluate a match based on the final two index positions in the array.

I first tried to use CSS flexboxes for the design but I did not like the approach. Visually the tiles scaled awkwardly and stacked vertically vs. horizontally (I always prefer horizontal alignment because it is easier to test). After removing the flexboxes the tiles would not snap to a grid but "vertical-align: middle" resolved the issue. My initial approach in CSS was to create two identical divs of tiles and layer them on top of one another using .show() and .hide(). It was hard to create exact alignment of the layered tiles so I thought of an easier approach - match the text color and background color of each tile to hide each tile's contents.


Additional ideas to implement for this project include:
- add counter for matches won
- create timed effect to fade in/fade out clicked tiles
- add logic to clear the board when all tiles have been clicked
- rewrite logic to scramble tiles (currently the solution to scramble the tiles causes the grid of the tiles to be visually skewed)
- add a "play again" button that would clear the tiles and scramble their order

<!-- ***The information contained within this project is provided for informational purposes only and is not intended to substitute for obtaining accounting, tax, or financial advice from a professional tax planner or financial planner. Readers are advised not to act upon the information contained within this project without seeking the service of a professional tax advisor and/or financial planner.***  -->
