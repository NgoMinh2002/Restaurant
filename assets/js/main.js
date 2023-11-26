function setActiveLink(link) {
  localStorage.setItem("activeLink", link);
}

function getActiveLink() {
  return localStorage.getItem("activeLink");
}

function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("pageContainer").innerHTML = data;

      // Kiểm tra xem liên kết có tồn tại không
      const activeLink = document.querySelector(`nav a[href="${page}"]`);
      if (activeLink) {
        // Xóa lớp "active" từ tất cả các liên kết trước khi thêm vào liên kết hiện tại
        document
          .querySelectorAll("nav a")
          .forEach((link) => link.classList.remove("active"));
        activeLink.classList.add("active");
        setActiveLink(page);
      } else {
        console.error("Error: Active link not found");
      }
    })
    .catch((error) => console.error("Error loading page:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  const activeLink = getActiveLink();
  if (activeLink) {
    loadPage(activeLink);
  } else {
    // Nếu không có trang active được lưu, chọn trang "Home" làm trang mặc định
    loadPage("page/home.html");
  }
});
