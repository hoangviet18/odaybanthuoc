//const input = document.getElementById('searchInput');
//const results = document.getElementById('searchResults');
//
//// Hiển thị popup khi click hoặc focus vào input
//input.addEventListener('focus', () => {
//  results.classList.remove('d-none');
//});
//
//// Ẩn popup khi click ra ngoài vùng tìm kiếm
//document.addEventListener('click', (e) => {
//  if (!e.target.closest('.search-box')) {
//    results.classList.add('d-none');
//  }
//});



//ver2

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  const modal = document.getElementById("exampleModal");

  console.log("timkiem.js loaded", !!input, !!results, !!modal);

  if (!input || !results || !modal) return;

  // Hiện popup
  function showPopup() {
    results.classList.remove("d-none");
    results.classList.add("fade", "show"); // hiệu ứng fade nhẹ
  }

  // Ẩn popup
  function hidePopup() {
    results.classList.add("d-none");
    results.classList.remove("show");
  }

  // Khi modal hiển thị hoàn tất
  modal.addEventListener("shown.bs.modal", function () {
    console.log("Modal hiển thị xong");
    setTimeout(() => {
      input.focus(); // trỏ chuột vào ô tìm kiếm
      showPopup();   // bật popup
    }, 100); // chờ 100ms để đảm bảo animation hoàn tất
  });

  // Khi modal đóng → ẩn popup
  modal.addEventListener("hidden.bs.modal", function () {
    hidePopup();
  });

  // Khi người dùng click vào input → mở popup
  input.addEventListener("focus", showPopup);

  // Khi click ra ngoài vùng tìm kiếm → ẩn popup
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-box") && !e.target.closest(".modal")) {
      hidePopup();
    }
  });
});
