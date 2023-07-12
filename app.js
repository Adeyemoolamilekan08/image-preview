
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






 