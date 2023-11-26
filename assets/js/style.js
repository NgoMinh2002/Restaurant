document.addEventListener("DOMContentLoaded", function () {
  closeNav(); // Gọi hàm closeNav() để ẩn menu khi trang web được tải
});
function openNav() {
  document.getElementById("sidenav").classList.add("open");
}

function closeNav() {
  document.getElementById("sidenav").classList.remove("open");
}
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
function validateEmail() {
  var emailInput = document.getElementById("email");

  // Kiểm tra xem email có được nhập không
  if (!emailInput.value) {
    alert("Vui lòng nhập địa chỉ email.");
    return;
  }

  // Kiểm tra định dạng email sử dụng biểu thức chính quy (regular expression)
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Định dạng email không đúng.");
    return;
  }

  // Nếu mọi thứ đều hợp lệ, có thể thực hiện hành động tiếp theo, ví dụ: gửi đăng ký.
  alert("Đăng ký thành công!");
}
const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});
$(".sponsor_slider").slick({
  slidesToShow: 6,
  arrows: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
      },
    },
  ],
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
window.onscroll = function () {
  myFunction();
  scrollFunction();
};

var navbar = document.getElementById("navbars");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Khi người dùng nhấp vào nút, cuộn đến đầu trang của tài liệu
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
