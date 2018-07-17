$(document).ready(function(){
	/* Thêm cuộn cho các liên kết từ navigation đến footer */
	$(".navbar a").on('click', function(event) {
		// Đảm bảo this.hash có một giá trị trước khi ghi đè hành vi mặc định
		if (this.hash !== "") {
			// Ngăn chặn hành vi nhấp chuột vào neo mặc định
			event.preventDefault();

			// Tại biến hash chứa neo mặc định
			var hash = this.hash;

			// Tạo hiệu ứng động 900 mili giây cần để cuộn đến trang chỉ định
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function(){
				// Thêm một neo (#) lên url khi thực hiện click chuột
				window.location.hash = hash;
			});
		}
	});

	/* Hiệu ứng động load trang khi scoll chuột */
	$(window).scroll(function() {
		$(".slideanim").each(function(){
			// Thuộc tính offset trả về tọa độ của phần tử được gọi đến
			var pos = $(this).offset().top;
			// Thuộc tính scrollTop trả về số pixel mà nội dung của phần tử được cuộn theo chiều dọc.
			// Đối tượng cửa sổ đại diện cho một cửa sổ mở trong một trình duyệt.
			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
				$(this).addClass("slide");
			}
		});
	});

});