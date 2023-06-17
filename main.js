let userRating = 0;

const ratingButtons = document.querySelectorAll('.rate-button'); // assign all rating buttons
let currentRatingButton; //What was clicked last

//Called when user clicks a rating button
function chosenRating (rating) {
    if(currentRatingButton != null) removeRating(); // remove existing rating
    userRating = rating; // Assign new rating value
    currentRatingButton = ratingButtons[userRating-1];
    buttonRateSelected(currentRatingButton);
}

//Remove an existing button form "active" state when another is pressed
function removeRating () {
    currentRatingButton.style.backgroundColor = "hsl(213, 19%, 18%)";
    currentRatingButton.style.color = "hsl(216, 12%, 54%)";
}

//Flip the card from rating to thank you
const submitButton = document.getElementById('button-submit');
const thankYouCard = document.getElementById('thank-you-card');
const ratingMessage = document.getElementById('rating-message');

submitButton.addEventListener('click', () => {
    if(userRating == 0) return;
    //Add the users rating to the rating message's text in the thank you card
    ratingMessage.innerHTML = "You selected " + userRating.toString() + " out of 5";

    // Replace the rating card with the thank you card
    thankYouCard.style.display = "flex"; 
    submitButton.parentElement.parentElement.replaceChild(thankYouCard, submitButton.parentElement);
  });

  //Visual feedback after user chose a rating
function buttonRateSelected (btn) {
    //Change button colors
    currentRatingButton.style.backgroundColor = "hsl(217, 12%, 63%)";
    currentRatingButton.style.color = "white";
}

function buttonRateHover (btn) {
    if(btn != currentRatingButton) {
        btn.style.backgroundColor = "hsl(25, 97%, 53%)";
        btn.style.color = "white";
    }
}

function buttonRateIdle (btn) {
    if(btn!= currentRatingButton) {
    btn.style.backgroundColor = "hsl(213, 19%, 18%)";
    btn.style.color = "hsl(216, 12%, 54%)";
    }
}

