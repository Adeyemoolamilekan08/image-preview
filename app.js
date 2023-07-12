
  function openModal(imageUrl, caption) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modalImage');
    var modalCaption = document.getElementById('modalCaption');

    modalImage.src = imageUrl;
    modalCaption.textContent = caption;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }






  // function previewImage(element) {
  //   var imageUrl = window.getComputedStyle(element.querySelector('.product__item__pic')).getPropertyValue('background-image');
  //   imageUrl = imageUrl.replace(/^url\(['"](.+)['"]\)$/, '$1');

  //   var modal = document.createElement('div');
  //   modal.classList.add('modal');

  //   var previewImage = document.createElement('img');
  //   previewImage.src = imageUrl;
  //   previewImage.alt = 'Product Preview';

  //   modal.appendChild(previewImage);

  //   document.body.appendChild(modal);

  //   modal.addEventListener('click', function() {
  //     document.body.removeChild(modal);
  //   });
  // }


// //  // Get all the image elements within the columns
// //   var images = document.querySelectorAll('.column img');

// //   // Attach click event listener to each image
// //   images.forEach(function(image) {
// //     image.addEventListener('click', function() {
// //       // Get the source of the clicked image
// //       var imageUrl = image.getAttribute('src');

// //       // Create a modal element for the image preview
// //       var modal = document.createElement('div');
// //       modal.classList.add('modal');

// //       // Create an image element for the preview
// //       var previewImage = document.createElement('img');
// //       previewImage.src = imageUrl;
// //       previewImage.alt = 'Image Preview';

// //       // Append the preview image to the modal
// //       modal.appendChild(previewImage);

// //       // Append the modal to the body of the page
// //       document.body.appendChild(modal);

// //       // Add a click event listener to the modal to remove it when clicked
// //       modal.addEventListener('click', function() {
// //         document.body.removeChild(modal);
// //       });
// //     });
// //   });

//     // Get all product items
//     var productItems = document.querySelectorAll('.column img');

//     // Attach click event listener to each product item
//     productItems.forEach(function(item) {
//         item.addEventListener('click', function() {
//             // Get the background image URL of the clicked product item
//             var backgroundImage = window.getComputedStyle(item).getPropertyValue('background-image');
//             var imageUrl = backgroundImage.replace(/^url\(['"](.+)['"]\)/, '$1');

//             // Create a modal element to display the image preview
//             var modal = document.createElement('div');
//             modal.classList.add('modal');

//             // Create an image element for the preview
//             var previewImage = document.createElement('img');
//             previewImage.src = imageUrl;
//             previewImage.alt = 'Product Preview';

//             // Append the preview image to the modal
//             modal.appendChild(previewImage);

//             // Append the modal to the body of the page
//             document.body.appendChild(modal);

//             // Add a click event listener to the modal to remove it when clicked
//             modal.addEventListener('click', function() {
//                 document.body.removeChild(modal);
//             });
//         });
//     });