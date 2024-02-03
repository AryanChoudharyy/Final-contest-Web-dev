// Select all delete buttons
const deleteButtons = document.querySelectorAll('.delete-button');

// Add click event listener to each delete button
deleteButtons.forEach((button) => {
  button.addEventListener('click', function(event) {
    // Show confirmation dialog
    const confirmDelete = confirm('Are you sure you want to permanently delete the tweet?');

    // If the user confirms the deletion, change the icon of the delete button to the red one
    if (confirmDelete) {
      event.target.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/030/original/delete-color-filled.png?1706888714';
    }
  });
});