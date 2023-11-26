var urlParams = new URLSearchParams(window.location.search);
var newsId = urlParams.get("id");
var newsDetailArray = [
  {
    id: 1,
    urlImg: "/assets/vendors/image/News/voucher-tng-mon-300x191.jpg",
    title: "“ĂN NGON – QUÀ GIÒN” với voucher tặng món tại Sun Homes BBQ",
    text: `<p><em><strong>Nhằm tri ân những khách hàng thân mến đã đồng hành cùng chúng tôi
                                            trong suốt quá trình xây dựng và
                                            phát triển, King BBQ xin gửi đến quý khách chương trình “Ăn ngon – Quà
                                            giòn” với voucher tặng món dành
                                            riêng tại hệ thống King BBQ Alacarte.</strong></em></p>
                                <p>Sau khi dùng bữa tại bất kì nhà hàng King BBQ Alacarte, quý khách được tặng ngay
                                    01 Voucher tặng món trị giá lên
                                    tới 189.000 VNĐ áp dụng cho lần sử dụng sau. Mỗi voucher có giá trị tương đương
                                    với 1 trong 3 món: Bánh hải sản
                                    Hàn Quốc, Sườn Los Angeles 100gr, Gầu bò tươi nướng 100gr.</p>`,
    figure: `<figure id="attachment_12720" class="wp-caption aligncenter"><a href=""><img
                                            class="wp-image-12720 size-full"
                                            src="http://kingbbq.com.vn/wp-content/uploads/2017/02/voucher-tng-mon.jpg"
                                            alt="voucher tặng món" width="580" height="370"></a>
                                    <figcaption class="wp-caption-text">Voucher tặng món trị giá tới 189.000đ tại hệ
                                        thống King BBQ Alacarte
                                    </figcaption>
                                </figure>`,
    text2: `<p><strong>Điều kiện áp dụng Voucher:</strong></p>
                                <p>– Với mỗi hóa đơn có giá trị từ 300.000đ trở lên được áp dụng 01 voucher.</p>
                                <p>– Hóa đơn được áp dụng lũy kế, tối đa 4 voucher/ bill thanh toán.</p>
                                <p>– Voucher không áp dụng cùng Set, combo</p>
                                <p>– Voucher không áp dụng cho T7, CN, ngày lễ.</p>
                                <p>Tại King BBQ, bạn thoải mái thưởng thức những món ăn thơm ngon đúng điệu, giàu
                                    dinh dưỡng&nbsp;đến từ xứ sở Kim
                                    chi trong không gian ấm cúng, sang trọng. “Ăn ngon – Quà giòn” liền tay thật đã
                                    đúng không nào?</p>
                                <p>Vậy còn chần chừ gì nữa, hãy đến King BBQ Alacrate ngay để nhận được những ưu đãi
                                    hấp dẫn nhé!</p>
                                <p><strong>Địa điểm áp dụng:</strong></p>
                                <p>–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; King BBQ tầng 1 tòa nhà
                                    24T2 Hoàng Đạo Thúy, Trung Hòa
                                    Nhân Chính, Cầu Giấy, Hà Nội.</p>
                                <p>–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; King BBQ 31 Phan Chu
                                    Trinh, Q. Hoàn Kiếm, Hà Nội.</p>
                                <p>–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; King BBQ tầng 5, Vincom
                                    Center, 191 Bà Triệu, Hai Bà
                                    Trưng, Hà Nội.</p>
                                <p>–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; King BBQ SO-08, tầng G,
                                    The Garden, Mỹ Đình, Từ Liêm, Hà
                                    Nội.</p>
                                <p>–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; King BBQ R2-14, tầng B2,
                                    Royal City, 72A Nguyễn Trãi,
                                    Thanh Xuân, Hà Nội.</p>
                                <p>–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; King BBQ gian hàng 11B,
                                    đướng số 9, tầng B1, Times City,
                                    458 Minh Khai, Hai Bà Trưng, Hà Nội.</p>
                                <p>–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; King BBQ số 7 Đinh Tiên
                                    Hoàng, Hoàn Kiếm, Hà Nội</p>
                                <p>–&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; King BBQ lô 131-133,
                                    Shopping Center, Indochina Plaza
                                    Hanoi, 241 Xuân Thủy, Cầu Giấy, Hà Nội</p>`,
    text3: "",
  },
  {
    id: 2,
    urlImg:
      "/assets/vendors/image/News/kingbbq-khaitruongdaotan-900x900-300x300.png",
    title: "Khai trương Sun Homes BBQ với nhiều ưu đãi hấp dẫn",
    text: `<p class="fon33 mt1 sapo"><strong>Ngày 26/4 vừa qua, vua nướng Hàn Quốc – King BBQ sẽ tiếp tục chuyến “du hành” của mình tới 109 Đào Tấn. Mừng sự kiện đặc biệt này, King BBQ Đào Tấn dành tặng khách hàng 5000 mã đặt bàn giảm 20% cho khách hàng.</strong></p>`,
    figure: `<div id="divNewsContent" class="fon34 mt3 mr2 fon43 detail-content">
<p>Nằm giữa con phố được mệnh danh là “phố Nhật”, vua nướng Hàn Quốc – King BBQ Đào tấn là nhà hàng King BBQ đầu tiên được nhượng quyền tại Hà Nội – nhằm mang lại một làn gió mới về ẩm thực nơi đây cho thực khách ghé qua.</p>
<p>Vẫn giữ nguyên những nét nổi bật làm nên thương hiệu của mình, đến với King BBQ Đào Tấn, khách hàng không chỉ được thưởng thức những món ăn mang đậm hương vị và phong cách ẩm thực xứ Kim Chi mà còn được cảm nhận không gian văn hóa Hàn trong chính cung cách phục vụ và phong cách bài trí không gian nhà hàng.</p>
<p>Điểm khác biệt trong thực đơn của King BBQ Đào Tấn đó chính là việc nhà hàng sẽ phục vụ cả hình thức buffet và gọi món. Bạn có thể lựa chọn việc ăn thỏa thích với các mức buffet như 199.000 đồng, 279.000 đồng, 329.000 đồng và 349.000 đồng hoặc dùng bữa theo hình thức gọi món. Với thực đơn gần 200 món thượng hạng mà thực khách không thể bỏ qua như: Ba chỉ bò King BBQ, Ba chỉ heo Samyeopsal, Gầu bò sốt Guang Yang, … hay những món đặc trưng Hàn Quốc như Cơm trộn Bibimbab, Canh sườn bò, Kim chi, Bulgogi cũng luôn sẵn sàng phục vụ bạn.</p>
</div>`,
    text2: `<p>Chào mừng người anh em King BBQ Đào Tấn gia nhập đại gia đình vua nướng Hàn Quốc, hàng loạt chương trình ưu đãi vô cùng hot mà bạn không thể bỏ qua nếu là một tín đồ của ẩm thực xứ sở Kim Chi.</p>`,
    text3: `<ul>
<li>Tặng ngay 5000 mã giảm giá 20% khi khách hàng đặt bàn qua Landingpage hoặc hotline: 04.6688 1828, đặc biệt áp dụng cho cả ngày Lễ.</li>
<li>Với nhóm 3 người trở tên, tặng voucher 100 King đồng khi đặt bàn trước qua Hotline: 04.6688 1828</li>
</ul>`,
  },
  {
    id: 3,
    urlImg:
      "/assets/vendors/image/News/khaitruong-king-bbq-tan-son-nhi3-300x200.jpg",
    title: "Sun Homes BBQ tưng bừng khai trương mừng năm mới 2018",
    text: `<p>Công ty Cổ phần Đầu tư Thương mại Quốc tế Mặt Trời Đỏ (REDSUN ITI) vừa chính thức khai trương nhà hàng King BBQ Buffet – Vua nướng Hàn Quốc tại số 310 Tân Sơn Nhì, phường Tân Sơn Nhì, quận Tân Phú, TP.HCM với mong muốn tiếp tục phục vụ thực khách yêu thích ẩm thực Hàn Quốc đặc sắc.</p>`,
    figure: `<p>Cùng với nhiều hệ thống khác trên toàn quốc, King BBQ Buffet là mô hình buffet theo hình thức gọi món, mang đến cho thực khách trải nghiệm ẩm thực nướng đúng chuẩn Hàn Quốc. Với món ăn chất lượng, phục vụ chu đáo và mức giá phù hợp, King BBQ Buffer nhanh chóng chiếm được cảm tình của đông đảo thực khách. Bên cạnh các món thịt bò Mỹ nhập khẩu hảo hạng và hải sản tươi ngon, được tẩm ướp theo công thức bí truyền và sử dụng hệ thống bếp nướng không khói hiện đại ngay tại bàn, thực khách thỏa sức khám phá vô số món ăn yêu thích với hương vị tuyệt hảo trên quầy buffet của King BBQ. Thực đơn phong phú, đa dạng, được chế biến bởi bàn tay khéo léo và tỉ mỉ, kết hợp với kỹ thuật tẩm ướp gia vị đặc biệt của bếp trưởng Park Sung Min có trên 40 năm kinh nghiệm, cùng không gian sang trọng,
     hiện đại, King BBQ Buffet là điểm hẹn lý tưởng cho những ai đam mê món nướng Hàn Quốc đậm đà, tròn vị.</p>`,
    text3: `<p><em>Khu ẩm thực tại tự chọn tại King BBQ Buffet&nbsp;</em></p> <p  class="wp-caption aligncenter">Được biết, Công ty Cổ phần Đầu tư Thương mại Quốc tế Mặt Trời Đỏ (REDSUN ITI) hiện là một trong những công ty ẩm thực hàng đầu tại Việt Nam, với hơn 12 thương hiệu ẩm thực trung và cao cấp: King BBQ, Hotpot Story, Sushi Kei, Seoul Garden, Tasaki BBQ, ThaiExpress, Khao Lao, Capricciosa… Với mục tiêu trở thành đơn vị tiên phong trong lĩnh vực kinh doanh hệ thống chuỗi nhà hàng, REDSUN ITI hiện có hơn 160 nhà hàng trải dài từ Bắc vào Nam, luôn đề cao và cam kết thực hiện sứ mệnh đem tới cho Quý khách hàng những thương hiệu ẩm thực cao cấp, các chuỗi nhà hàng sang trọng, những món ăn tuyệt hảo và dịch vụ đẳng cấp.</p>`,
    text2: `<p>Trong tháng khai trương, King BBQ Buffet Tân Sơn Nhì sẽ dành tặng thực khách nhiều ưu đãi hấp dẫn: Miễn phí 01 suất buffet đồng giá cho nhóm 04 Khách (tính tiền 03 suất). Với mỗi hóa đơn từ 500.000đ trở lên và có sử dụng sản phẩm Strongbow, Khách hàng được tặng 1 bình nước độc đáo. Tặng nước ngọt tươi cho Khách hàng check-in địa điểm nhà hàng trên fanpage King BBQ.</p>`,
  },
  {
    id: 4,
    urlImg:
      "/assets/vendors/image/News/screenshot-www.instagram.com-2017-02-07-15-09-36-300x201.png",
    title: " Bạn đã sẵn sàng nhập tiệc cùng Sun Homes BBQ dịp cuối năm chưa?",
    text: `<p>Tất niên năm nay không còn đau đầu suy nghĩ và tìm kiếm địa điểm để tổ chức bữa tiệc cuối năm cùng gia đình và bạn bè nữa. Chỉ cần đến KingBBQ là sẽ có ngay một địa điểm đúng chuẩn để bạn bung lụa hết sức cùng người thân dịp cuối năm.</p>`,
    figure: `<p>KingBBQ triển khai ưu đãi khách đoàn hấp dẫn:</p>
    <p>+ Áp dụng với hệ thống KingBBQ Alacarte: Từ 10 – 15 người giảm 10% và từ 16 người trở lên giảm 15%</p>
    <p>+ Áp dụng với hệ thống KingBBQ Buffet: Từ 15 – 30 người giảm 10%, từ 31 – 50 người giảm 15% và từ 51 người trở lên giảm 20%.</p>`,
    text2: `<p>Với các món ăn đặc trưng chuẩn vị Hàn, không gian rộng rãi với sức chứa các đoàn khách lớn, phong cách phục vụ chuyên nghiệp, KingBBQ chắc chắn là địa điểm tụ tập cuối năm mà bạn đang tìm kiếm.</p>
    <p>Nướng thật đã tay các món nướng hấp dẫn chuẩn Hàn có dành khoảng thời gian cuối năm để hâm nóng tình cảm cùng bạn bè và gia đình tại KingBBQ – Vietnam ngay nào!</p>`,
    text3: `<p>—————————</p>
<p>KingBBQ – Vua nướng Hàn Quốc</p>
<p>Hotline: 1800 1277 (Miễn phí cước gọi)</p>
<p>Web: http://kingbbq.com.vn/</p>`,
  },
  {
    id: 5,
    urlImg:
      "/assets/vendors/image/News/khaitruong-king-bbq-tan-son-nhi3-300x200.jpg",
    title: " Sun Homes BBQ chào tất cả mọi người! ",
    text: `	<p><em><strong>Nhằm tri ân những khách hàng thân mến đã đồng hành cùng chúng tôi trong suốt quá trình xây dựng và phát triển, King BBQ xin gửi đến quý khách chương trình “Ăn ngon – Quà giòn” với voucher tặng món dành riêng tại hệ thống King BBQ Alacarte.</strong></em></p>
<p>Sau khi dùng bữa tại bất kì nhà hàng King BBQ Alacarte, quý khách được tặng ngay 01 Voucher tặng món trị giá lên tới 189.000 VNĐ áp dụng cho lần sử dụng sau. Mỗi voucher có giá trị tương đương với 1 trong 3 món: Bánh hải sản Hàn Quốc, Sườn Los Angeles 100gr, Gầu bò tươi nướng 100gr.</p>`,
    text2: ``,
    figure: ``,
    text3: ``,
  },
];
var selectedNews = newsDetailArray.find((news) => news.id == newsId);

// Hiển thị chi tiết tin tức
var newsDetailDiv = document.getElementById("newsDetail");
if (selectedNews) {
  var newsDetailHTML = `
                <div class="posts">
                                <div class="entry-header">
                                    <div class="posts-img imgae ">
                                        <a href="">
                                            <img src="${selectedNews.urlImg}">
                                        </a>
                                    </div>

                                    <div class="entry-header-text entry-header-text-bottom text-left">
                                        <h1 class="entry-title">${selectedNews.title}</h1>
                                        <div class="entry-divider is-divider small"></div>

                                        <div class="entry-meta uppercase is-xsmall">
                                            <span class="posted-on">Posted on <a href="" rel="bookmark"><time
                                                        class="entry-date published updated"
                                                        datetime="2023-02-06T16:18:29+07:00">06/02/2023</time></a></span><span
                                                class="byline"> by <span class="meta-author vcard"><a class="url fn n"
                                                        href="">admin</a></span></span>
                                        </div>
                                    </div>
                                </div>
                                ${selectedNews.text}
                                ${selectedNews.figure}
                                ${selectedNews.text2}
                                ${selectedNews.text3}


                                <div class="blog-share text-center">
                                    <div class="is-divider medium d-flex justify-content-center ">
                                        <a href="#" class="fa fa-facebook"></a>
                                        <a href="#" class="fa fa-twitter"></a>
                                        <a href="#" class="fa fa-google"></a>
                                        <a href="#" class="fa fa-linkedin"></a>
                                        <a href="#" class="fa fa-envelope"></a>
                                    </div>
                                </div>
                                <div class="entry-meta text-meta ">
                                    This entry was posted in <a href="http://nhahang.webdemo.vn/category/tin-tuc"
                                        rel="category tag">Tin tức</a>.
                                    Bookmark the <a
                                        href="http://nhahang.webdemo.vn/an-ngon-qua-gion-voi-voucher-tang-mon-tai-sun-homes-bbq"
                                        title="Permalink to “ĂN NGON – QUÀ GIÒN” với voucher tặng món tại Sun Homes BBQ"
                                        rel="bookmark">permalink</a>.
                                </div>
                                <div role="navigation" id="nav-below" class="navigation-post">
                                    <div class="flex-row next-prev-nav bt bb d-inline-flex">
                                        <div class="flex-col flex-grow nav-prev text-left">
                                            <div class="nav-previous"><a href="" rel="prev"><span
                                                        class="hide-for-small"><i
                                                            class="fa-solid fa-chevron-left"></i></span>
                                                    Sun Homes BBQ tưng
                                                    bừng khai trương mừng năm mới 2018</a></div>
                                        </div>
                                        <div class="flex-col flex-grow nav-next text-right">
                                            <div class="nav-next"><a href="" rel="next">“ĂN NGON – QUÀ GIÒN” với voucher
                                                    tặng món tại Sun Homes
                                                    BBQ <span class="hide-for-small"><i
                                                            class="fa-solid fa-chevron-right"></i></span></a></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
            `;
  newsDetailDiv.innerHTML = newsDetailHTML;
} else {
  newsDetailDiv.innerHTML = "<p>Không tìm thấy tin tức.</p>";
}
var newArticlesList = document.getElementById("newArticlesLists");
// Sử dụng vòng lặp for để duyệt qua mảng tin tức và hiển thị thông tin ra HTML
newsDetailArray.forEach((news) => {
  //   var newsDiv = document.createElement("div");
  //   newsDiv.className = "News-item";
  //   newsDiv.innerHTML = `
  //    <div class="News-item">

  //                                     <div class="row">
  //                                         <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-5">
  //                                             <div class="news-img">
  //                                                 <img src="${news.urlImg}"
  //                                                     alt="">
  //                                             </div>

  //                                         </div>
  //                                         <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-7">
  //                                             <div class="news-item-text">
  //                                                 <div class="item-title">
  //                                                     <span>${news.title}</span>
  //                                                 </div>
  //                                                 <div class="item-text">
  //                                                     <p>${news.text}</p>
  //                                                 </div>
  //                                             </div>
  //                                         </div>
  //                                         <div class="badge-inners">
  //                                             <div class="post-date-day"><span>06</span></div>
  //                                             <div class="post-date-month is-xsmall"><span>Th2</span></div>
  //                                         </div>
  //                                     </div>

  //                             </div>
  //             `;

  // Sử dụng sự kiện click để chuyển hướng đến trang chi tiết
  //   newsDiv.addEventListener("click", function () {
  //     // Redirect to the news detail page with the news ID
  //     window.location.href = "News_details.html?id=" + news.id;
  //   });

  //   newsListDiv.appendChild(newsDiv);

  // Thêm tin tức vào danh sách bài viết mới
  var newItem = document.createElement("li");
  newItem.className = "list-text";
  newItem.innerHTML = `<a href="News_details.html?id=${news.id}">${news.title}</a>`;
  newArticlesList.appendChild(newItem);
});
