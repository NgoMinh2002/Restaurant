var newsArray = [
  {
    id: 1,
    urlImg: "/assets/vendors/image/News/voucher-tng-mon-300x191.jpg",
    title: "“ĂN NGON – QUÀ GIÒN” với voucher tặng món tại Sun Homes BBQ",
    text: "Nhằm tri ân những khách hàng thân mến đã đồng hành cùng chúng tôi trong [...]",
  },
  {
    id: 2,
    urlImg:
      "/assets/vendors/image/News/kingbbq-khaitruongdaotan-900x900-300x300.png",
    title: "Khai trương Sun Homes BBQ với nhiều ưu đãi hấp dẫn",
    text: "Ngày 26/4 vừa qua, vua nướng Hàn Quốc – King BBQ sẽ tiếp tục chuyến [...]",
  },
  {
    id: 3,
    urlImg:
      "/assets/vendors/image/News/khaitruong-king-bbq-tan-son-nhi3-300x200.jpg",
    title: "Sun Homes BBQ tưng bừng khai trương mừng năm mới 2018",
    text: "Công ty Cổ phần Đầu tư Thương mại Quốc tế Mặt Trời Đỏ (REDSUN ITI) [...]",
  },
  {
    id: 4,
    urlImg:
      "/assets/vendors/image/News/screenshot-www.instagram.com-2017-02-07-15-09-36-300x201.png",
    title: " Bạn đã sẵn sàng nhập tiệc cùng Sun Homes BBQ dịp cuối năm chưa?",
    text: "Tất niên năm nay không còn đau đầu suy nghĩ và tìm kiếm địa điểm [...]",
  },
  {
    id: 5,
    urlImg:
      "/assets/vendors/image/News/khaitruong-king-bbq-tan-son-nhi3-300x200.jpg",
    title: " Sun Homes BBQ chào tất cả mọi người! ",
    text: "Nhằm tri ân những khách hàng thân mến đã đồng hành cùng chúng tôi trong [...]",
  },
];
var newsListDiv = document.getElementById("newsList");
var newArticlesList = document.getElementById("newArticlesList");
// Sử dụng vòng lặp for để duyệt qua mảng tin tức và hiển thị thông tin ra HTML
newsArray.forEach((news) => {
  var newsDiv = document.createElement("div");
  newsDiv.className = "News-item";
  newsDiv.innerHTML = `
   <div class="News-item">
                               
                                    <div class="row">
                                        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5">
                                            <div class="news-img">
                                                <img src="${news.urlImg}"
                                                    alt="">
                                            </div>

                                        </div>
                                        <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-7">
                                            <div class="news-item-text">
                                                <div class="item-title">
                                                    <span>${news.title}</span>
                                                </div>
                                                <div class="item-text">
                                                    <p>${news.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="badge-inners">
                                            <div class="post-date-day"><span>06</span></div>
                                            <div class="post-date-month is-xsmall"><span>Th2</span></div>
                                        </div>
                                    </div>
                                
                            </div>
            `;

  // Sử dụng sự kiện click để chuyển hướng đến trang chi tiết
  newsDiv.addEventListener("click", function () {
    // Redirect to the news detail page with the news ID
    window.location.href = "News_details.html?id=" + news.id;
  });

  newsListDiv.appendChild(newsDiv);

  // Thêm tin tức vào danh sách bài viết mới
  var newItem = document.createElement("li");
  newItem.className = "list-text";
  newItem.innerHTML = `<a href="News_details.html?id=${news.id}">${news.title}</a>`;
  newArticlesList.appendChild(newItem);
});
