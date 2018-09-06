function toggleDonatePopup() {
   const donate = document.getElementById("donatePopup");
   const leaderboard = document.getElementById("leaderboardPopup");
   donate.classList.toggle("show");
   leaderboard.classList.remove("show");
}

function toggleLeaderboardPopup() {
   const donate = document.getElementById("donatePopup");
   const leaderboard = document.getElementById("leaderboardPopup");
   donate.classList.remove("show");
   leaderboard.classList.toggle("show");
}