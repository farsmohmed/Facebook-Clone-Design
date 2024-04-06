document.addEventListener("DOMContentLoaded", function () {
    const arrowIconLeftstory = document.getElementById("arrowIconLeftstory");
    const arrowIconRightstory = document.getElementById("arrowIconRightstory");
    const storyVideos = document.getElementById("storyrow");

    // Scroll to the left when left arrow is clicked
    arrowIconLeftstory.addEventListener("click", function () {
        storyVideos.scrollTo({
            left: storyVideos.scrollLeft - 100, // Adjust scroll distance as needed
            behavior: "smooth" // Smooth scrolling effect
        });
    });

    // Scroll to the right when right arrow is clicked
    arrowIconRightstory.addEventListener("click", function () {
        storyVideos.scrollTo({
            left: storyVideos.scrollLeft + 100, // Adjust scroll distance as needed
            behavior: "smooth" // Smooth scrolling effect
        });
    });
});




const leftArrow = document.getElementById('arrowIconLeftstory');
const rightArrow = document.getElementById('arrowIconRightstory');
const additionalItemsContainer = document.querySelector('.story-row');

leftArrow.addEventListener('click', () => {
    additionalItemsContainer.scrollLeft -= 100; // Adjust scroll amount as needed
    toggleArrowVisibility();
});

rightArrow.addEventListener('click', () => {
    additionalItemsContainer.scrollLeft += 100; // Adjust scroll amount as needed
    toggleArrowVisibility();
});

const toggleArrowVisibility = () => {
    // If there are no more items to scroll to on the left, hide the left arrow
    leftArrow.style.display = additionalItemsContainer.scrollLeft > 0 ? 'block' : 'none';

    // If there are no more items to scroll to on the right, hide the right arrow
    rightArrow.style.display = additionalItemsContainer.scrollLeft < additionalItemsContainer.scrollWidth - additionalItemsContainer.clientWidth ? 'block' : 'none';
};


document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const darkModeBtn = document.getElementById("darkModeBtn");
    const lightModeBtn = document.getElementById("lightModeBtn");

    darkModeBtn.addEventListener("click", function () {
        body.classList.add("dark-mode"); // Add dark mode class to body
    });

    lightModeBtn.addEventListener("click", function () {
        body.classList.remove("dark-mode"); // Remove dark mode class from body
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var facebookIcon = document.getElementById('facebook-icon');
    var sidebar = document.getElementById('sidebar');
    var userProfileRight = document.querySelector('.user-profile-right');

    // Function to toggle sidebar visibility
    function toggleSidebar() {
        sidebar.style.display = (sidebar.style.display === 'none') ? 'block' : 'none';
    }

    // Add click event listener to the Facebook icon link
    facebookIcon.addEventListener('click', function (event) {
        // Check if the screen width is small (less than or equal to 768px)
        if (window.innerWidth <= 768) {
            event.preventDefault(); // Prevent the default link behavior
            toggleSidebar(); // Toggle the sidebar visibility
        }
    });

    // Add click event listener to the user profile right element
    userProfileRight.addEventListener('click', function (event) {
        // Check if the screen width is small (less than or equal to 768px)
        if (window.innerWidth <= 768) {
            toggleSidebar(); // Toggle the sidebar visibility
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var accountPicture = document.getElementById('accountPicture');
    var sidebar = document.getElementById('sidebarx');
    var userPage = document.querySelector('.user-page');

    // Function to toggle sidebar visibility
    function toggleSidebar() {
        sidebar.style.display = (sidebar.style.display === 'none') ? 'block' : 'none';
    }

    // Add click event listener to the Facebook icon link
    accountPicture.addEventListener('click', function (event) {
        // Check if the screen width is small (less than or equal to 768px)
        if (window.innerWidth <= 768) {
            event.preventDefault(); // Prevent the default link behavior
            toggleSidebar(); // Toggle the sidebar visibility
        }
    });

    // Add click event listener to the user profile right element
    userPage.addEventListener('click', function (event) {
        // Check if the screen width is small (less than or equal to 768px)
        if (window.innerWidth <= 768) {
            toggleSidebar(); // Toggle the sidebar visibility
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', function () {
        searchInput.style.display = 'inline-block';
        searchInput.focus();
    });
});





