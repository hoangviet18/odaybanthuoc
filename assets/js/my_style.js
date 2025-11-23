document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('#carouselExampleFade');
  const container = document.querySelector('#carouselBackground');

  // Hàm đổi nền
  function updateBackground(bgUrl) {
    container.style.backgroundImage = bgUrl;
  }

  // Đặt nền ban đầu
  const firstBg = carousel.querySelector('.carousel-item.active').getAttribute('data-bg');
  updateBackground(firstBg);

  // Khi slide chuyển
  carousel.addEventListener('slide.bs.carousel', function (event) {
    const nextItem = event.relatedTarget;
    const nextBg = nextItem.getAttribute('data-bg');
    updateBackground(nextBg);
  });
});

//Toasts
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}