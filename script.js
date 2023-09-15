"use strict"
// $(document).ready(function() {
//     $('a[href^="#"]').on('click', function(event) {
//       var target = $(this.getAttribute('href'));
//       if (target.length) {
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000); 
//       }
//     });
//   });
// const elmt= document.querySelector('.checked');

// elmt.addEventListener('click', function () {
//   const to_change =document.querySelector('#status');
//  if (elmt.checked){
//     to_change.textContent= 'Read';
//     to_change.style.color="#00b33c";

//   }
//   else{
//     to_change.textContent= 'Unread';
//     to_change.style.color="#ff0000";
//   }
// });

const elements= document.querySelectorAll('.checked');

for(let i=0; i< elements.length; i++){
  elements[i].addEventListener('click', function () {
    const to_change = document.querySelector('#status');
   if (elements[i].checked){
      to_change.textContent= 'Read';
      to_change.style.color="#00b33c";
      // elements[i].parentNode.parentNode.parentNode.style.backgroundColor="#e5e5e5";
  
    }
    else{
      to_change.textContent= 'Unread';
      to_change.style.color="#ff0000";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "img18.jpg", 
    "shutt.jpg", 
    "img409.jpg", 
    "img778.jpg",
    "img123.jpg",
    "orphelins.jpg"
  ];

  let currentIndex = 0;
  const headerContainer = document.querySelector(".header-container");

  function changeBackground() {
    headerContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackground, 3000); // Change the background every 5 seconds (adjust the timing as needed)

  // Initially set the background
  changeBackground();
});


// // JavaScript code to handle the image gallery
// const galleryImages = document.querySelectorAll('.gallery-image');
// const imageModal = document.getElementById('imageModal');
// const modalImage = document.getElementById('modalImage');
// const closeModal = document.getElementById('closeModal');

// galleryImages.forEach((image) => {
//   image.addEventListener('click', () => {
//     modalImage.src = image.src;
//     imageModal.style.display = 'block';
//   });
// });

// closeModal.addEventListener('click', () => {
//   imageModal.style.display = 'none';
// });



// // Get the modal and modal image elements
// var modal = document.getElementById("myModal");
// var modalImg = document.getElementById("modalImg");

// // Get all images with class "item img"
// var images = document.querySelectorAll(".item img");

// // Add click event listeners to all images
// images.forEach(function (img) {
//   img.addEventListener("click", function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//   });
// });

// // Close the modal when the close button is clicked
// var closeBtn = document.getElementsByClassName("close")[0];
// closeBtn.onclick = function () {
//   modal.style.display = "none";
// };



// // Function to open the modal and display the enlarged image
// function enlargeImage(imageSrc) {
//   var modal = document.getElementById("myModal");
//   var modalImg = document.getElementById("modalImg");
//   modal.style.display = "block";
//   modalImg.src = imageSrc;
// }

// // Function to close the modal
// function closeImage() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }





// Function to open the modal and display the enlarged image or close it
// function enlargeImage(imageSrc) {
//   var modal = document.getElementById("myModal");
//   var modalImg = document.getElementById("modalImg");
//   if (modal.style.display === "block" && modalImg.src === imageSrc) {
//     modal.style.display = "none";
//   } else {
//     modal.style.display = "block";
//     modalImg.src = imageSrc;
//   }
// }

// // Get all images with class "item img"
// var images = document.querySelectorAll(".item img");

// // Add click event listeners to all images
// images.forEach(function (img) {
//   img.addEventListener("click", function () {
//     var imageSrc = this.src;
//     enlargeImage(imageSrc);
//   });
// });

// // Close the modal when the close button is clicked
// var closeBtn = document.getElementsByClassName("close")[0];
// closeBtn.onclick = function () {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// };

// // Close the modal when clicking outside of the modal content
// var modal = document.getElementById("myModal");
// window.onclick = function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// };


// // Close the modal when clicking outside of the modal content
// window.onclick = function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// };





// function enlargeImage(src) {
//   const enlargedImage = document.getElementById('enlarged-image');
//   const enlargedContainer = document.getElementById('enlarged-image-container');

//   enlargedImage.src = src;
//   enlargedImage.style.maxWidth = '90%'; // Adjust the maximum width
//   enlargedImage.style.maxHeight = '90%';
//   enlargedContainer.style.display = 'flex';
// }

// // JavaScript function to close the enlarged image
// function closeImage() {
//   const enlargedContainer = document.getElementById('enlarged-image-container');
//   enlargedContainer.style.display = 'none';
// }


// const imageSources = [
//   "image/img1.jpg",
//   "image/img2.jpg",
//   "image/img3.jpg",
//   "image/img2122.jpg",
//   // Add more image URLs here
// ];


// JavaScript code to handle the image gallery and enlargement
const imageSources = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img2122.jpg",
  // Add more image URLs here
  "img123.jpg",
  "img778.jpg",
  "img16.jpg",
  "img17.jpg",
  "img20.jpg",
  "img42.jpg",
  "img31.jpg",
  "img32.jpg",
  "img409.jpg",
  "img36.jpg",
  "img4.jpg",
  "img44.jpg",
  "img52.jpg",
  "img53.jpg",
  "img57.jpg",
  "img63.jpg",
  "img64.jpg",
  "img69.jpg",
  "img65.jpg",
  "img7.jpg",
];

let currentImageIndex = 0;

function enlargeImage(src) {
  const enlargedImage = document.getElementById('enlarged-image');
  const enlargedContainer = document.getElementById('enlarged-image-container');

  enlargedImage.src = src;
  enlargedImage.style.maxWidth = '70%'; // Adjust the maximum width
  enlargedImage.style.maxHeight = '70%';
  enlargedContainer.style.display = 'flex';
}

function closeImage() {
  const enlargedContainer = document.getElementById('enlarged-image-container');
  enlargedContainer.style.display = 'none';
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
  const prevImageSrc = imageSources[currentImageIndex];
  enlargeImage(prevImageSrc);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageSources.length;
  const nextImageSrc = imageSources[currentImageIndex];
  enlargeImage(nextImageSrc);
}

// Add event listeners to open the image modal
const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImageIndex = index;
    const clickedImageSrc = imageSources[currentImageIndex];
    enlargeImage(clickedImageSrc);
  });
});

// Add event listeners for the navigation buttons
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);


