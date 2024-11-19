This is a simple React-based web application that allows users to view, add, edit, and delete user details. The app interacts with the mock JSONPlaceholder API to simulate backend operations.

Features:-
1) View a list of users with details like ID, Name, Email, and Department.
2) Add new users.
3) Edit existing user details.
4) Delete users from the list.
5) Responsive design for mobile and tablet views.
6) Error handling for failed API requests.


Technologies Used:-
1) React
2) CSS for styling
3) JSONPlaceholder API (mock backend)


File Structure:-

/src
  /components
    - UserForm.js       // Handles the user input form for adding/editing users.
    - UserList.js       // Displays the list of users with actions (Edit, Delete).
    - UserForm.css        // Styles for the UserForm component.
    - UserList.css        // Styles for the UserList component.
  /api
    - userService.js    // Functions for interacting with the JSONPlaceholder API.
  App.js                // Main component, manages state and user interaction.
  App.css               // Global styles.
  index.js              // Entry point for React application.
