Chèn vào đầu sách:

<body>

<div style="page-break-after: always;"></div>

<p class="start-page">

<img src="images/image26.jpeg" alt="Nhật Ký TKC-VH T42-C2 BỒ ĐỀ SONG THỤ KIM CƯƠNG  Cội Mai Vàng Vĩnh Cửu Author Tran Khac Cuong"/>

</p>
	


!======================CSS Page Style===========!


/* 1. THIẾT LẬP KHỔ GIẤY VÀ LỀ TỔNG THỂ (6x9 inch) */
@page {
    size: 6in 9in;
    /* Giữ nguyên lề của bạn, chỉ tăng lề dưới lên 1in để nâng số trang */
    margin: 0.76in 0.625in 1in 0.625in; 

    /* Đánh số trang ở giữa dưới cùng - ĐÃ NÂNG LÊN */
    @bottom-center {
        content: counter(page);
        font-family: serif;
        font-size: 10pt;
        margin-bottom: 0.5in; /* Nâng số trang lên cách mép 0.5in */
    }
}

/* 2. THIẾT LẬP LỀ GÁY (MIRROR MARGINS) */
@page :left {
    margin-left: 0.625in;
    margin-right: 0.8in;
    @top-left { content: none !important; } /* ĐÃ BỎ TIÊU ĐỀ */
}

@page :right {
    margin-left: 0.8in;
    margin-right: 0.625in;
    @top-right { content: none !important; } /* ĐÃ BỎ TIÊU ĐỀ */
}

/* 3. ĐỊNH NGHĨA KIỂU TRANG KHÔNG ĐÁNH SỐ */
@page no_numbering {
    @bottom-center { content: none !important; }
    @top-left { content: none !important; }
    @top-right { content: none !important; }
}

@page :first {
    @bottom-center { content: none !important; }
    @top-left { content: none !important; }
    @top-right { content: none !important; }
}

/* 4. CẤU TRÚC ĐIỀU KHIỂN SỐ TRANG */
.start-page {
    prince-page-group: start;
    counter-reset: page 0;
}

/* 5. TỐI ƯU HÌNH ẢNH - ĐÃ TĂNG LÊN 96% */
img {
    display: block;
    width: 96% !important; /* Tăng lên 96% theo ý bạn, vẫn an toàn */
    max-width: 100% !important;
    height: auto !important;
    margin: 1.5em auto !important;
    border-radius: 18px !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    page-break-inside: avoid !important;
}



/* 6. ĐỊNH DẠNG VĂN BẢN SERIF (TỐI ƯU CHO TIẾNG VIỆT) */
body {
    /* Ép hệ thống dùng font có chân chuẩn nhất */
    font-family: serif; 
    font-size: 11.5pt; /* Tăng nhẹ size để Serif hiển thị sắc sảo, không bị vụn chữ */
    line-height: 1.55; /* Độ giãn dòng chuẩn để dấu tiếng Việt không chạm nhau */
    text-align: justify;
    orphans: 3;
    widows: 3;
    /* Khử răng cưa giúp chữ in ra sắc nét hơn */
    -webkit-font-smoothing: antialiased;
}

p {
    margin-top: 0;
    margin-bottom: 0;
    text-indent: 0.3in; /* Thụt đầu dòng chuẩn sách in */
}



