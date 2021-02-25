// IIFE
(function () {
    // Array of pictures (pictures in "img" folder)
    const pictures = [
        "contBcg-0",
        "contBcg-1",
        "contBcg-2",
        "contBcg-3",
        "contBcg-4"
    ];
    // Selecting buttons
    const buttons = document.querySelectorAll(".btn");
    // Selecting image location on HTML
    const imageLocation = document.querySelector(".img-container");
    // Declaring index to use for selecting a picture
    let index = 0;
    // Buttons forEach
    buttons.forEach(function(element){
    // Event listener for each element
    element.addEventListener('click', function(e){
      if (element.classList.contains('btn-left')){ // Selecting left button
        index--
        if(index < 0){
          index = pictures.length -1 // if it goes beyond "0" its value will be "4"
        }
        // Setting the background
        imageLocation.style.backgroundImage = `url('./img/${pictures[index]}.jpeg')` 
      }
      if (element.classList.contains('btn-right')){ // Selecting right button
        index++
        if(index > pictures.length -1){
          index = 0  // if it goes above "4" its value will be "0"
        }
        // Setting the background
        imageLocation.style.backgroundImage = `url('./img/${pictures[index]}.jpeg')`
      }
    })
  })
})();