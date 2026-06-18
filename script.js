// Get modal elements
const modal = document.getElementById("mudraModal");
const closeBtn = document.querySelector(".close-btn");

// Function to open modal (You can call this when a card is clicked)
function openMudra(name, img, desc) {
    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalImg").src = img;
    document.getElementById("modalDesc").innerText = desc;
    modal.style.display = "block";
}

// Close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close if user clicks outside the box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//open the tab on index 
// declaring variables 
function navigateToPage(url) {
    // Add a class to the body to fade it out
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    // Wait for the animation to finish, then change page
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}