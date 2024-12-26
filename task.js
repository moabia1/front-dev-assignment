function toggleJourneyBoard() {

  const journeyBoard = document.querySelector('.journey-board');

  const arrow = document.querySelector('.toggle-arrow');

  if (journeyBoard.Style.display === "none") {
      journeyBoard.Style.display = "block";
  } else {
    journeyBoard.Style.display = "none"
  }
}
