README.md

TECHNOLOGIES USED:
1. HTML / SCSS for the overall page structure and styling.
2. JavaScript for page interactivity and event functions related to the user authorizaton and gameplay.
3. jQuery to select DOM elements and initiate dynamic updates on the page.
4. cURL to test CRUD processes with the API shared by the server endpoint.
5. AJAX to handle API calls to the server endpoint when initiated by DOM manipulations.
6. Git/GitHub for project version control.
7. Markdown for all documentation files (like this README).


PLANNING AND HISTORY:

Project planning began with a rough outline of which tasks to work on in order, including a simple wireframe of the single-page application (SPA). Broadly, the project proceeded in the following manner:

1. (09/25/2019) - Ensured that the basic web template could be  successfuly deployed and hosted on GitHub Pages.
2. (09/25/2019) - Mock-up of the basic tic-tac-toe game board and header block. It was known at this point that the header would include all of the authorization fields, which would disappear and reappear as needed, so placeholder fields for these were added. Basic styling was added to the page for easy visualization during testing.
3. (09/26/2019) - Creation of authorization files (cURL and JavaScript) for authorizing users over server API. Linked authorization files and specified server endpoints. Sign-in, sign-up, and password change functionality confirmed.
4. (09/27/2019) - Creation of functions to switch the current player, claim an open space or disallow claiming of an occupied space, and to check the game state on each turn against a list of win conditions or return a draw if no winners.
5. (09/29/2019) - First successful AJAX API call to create a new game on the development server. Creation of AJAX cript to update the current game state on the server on each cell click, and cURL scripts to create and return games on the development server.
6. (09/30/2019) - Completed script to end the current game by win, draw, or by initializing a new game without completing a game. Finished all remaining scripts to prevent game interactivity before sign-in, and clearing of authorization form fields after submission. Added a counter that retrieves the number of games played by the current user on the development server. Cleaned up and alphabetized the codebase and added final stylings to the SPA.
7. (10/08/2019) - Revised and completed all remaining game and authorization events. Fixed bug that was refereshing the page on sign-out, and moved as much UI-related functionality out of the game/events.js file into the game/ui.js file. Finally, fixed issue wherein the boxes were able to be clicked and updated after games had ended.

Many problems were encountered during development of this project. In general, these were related to issues in linking the many different .js files, as many times there could be slight misspellings in the function names between all of the required files. In addition, many errors occurred in during the creation of the functions to start, stop, and end each game, and in the checking of the game state against win conditions. For debugging all of these issues, it was immensely helpful to serve the SPA locally and update it in real-time after every script change, so that changes in behavior were immediately obvious. In general, it was found that the most successful way to resolve any bugs was to observe the location of the error in the browser console, and then track through all of that function’s linkages until the issue was discovered and fixed.

UNSOLVED PROBLEMS:
1. The biggest problem to solve is to simplify the game-state checking function from a cumbersome tree of IF...ELSE statements to a more lightweight array-comparison  method.
2. A stretch goal is to make the application truly multiplayer, so that two users can contest each other over separate networks.
3. Would like to add more granularity to the game counter, so that the user can retrieve all wins/losses/draws/discarded games in their history.
4. Would like to add more animations and interactivity to the game board.

Link to wireframe: './gameBoard_wireframe.png'
Link to user stories: './user-stories.md'
