<template>
    <div class="row">
        <div class="row">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/homepage">Trang chủ</a></li>
                    <li class="breadcrumb-item"><a href="/thuoc">Thuốc</a></li>
                </ol>
            </nav>
            <h5>Thuốc</h5>
            <div class="row">
                <div class="col-lg-2 col-md-3">
                    <div class="card">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <img style="height: 80px;"
                                    src="https://production-cdn.pharmacity.io/digital/256x256/plain/e-com/images/ecommerce/20240223191727-0-P00126_5.png"
                                    alt="">
                            </div>
                            <div class="col-lg-6">
                                <a href="/thuoc/thuoc-khong-ke-don" class="text-decoration-none">
                                    <p class="mb-0 ">Thuốc không kê đơn</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3">
                    <div class="card">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <img style="height: 80px;"
                                    src="https://production-cdn.pharmacity.io/digital/256x256/plain/e-com/images/ecommerce/20240225122438-0-P11166_1_l.png"
                                    alt="">
                            </div>
                            <div class="col-lg-6">
                                <a href="/thuoc/thuoc-ke-don" class="text-decoration-none">
                                    <p class="mb-0 ">Thuốc kê đơn</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3">
                    <div class="card">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <img style="height: 80px;"
                                    src="https://production-cdn.pharmacity.io/digital/256x256/plain/e-com/images/product/20241114094202-0-P25961_1.jpg?versionId=rSs9EoAPZUJccStkkhOTbWiO_va6Yh2F"
                                    alt="">
                            </div>
                            <div class="col-lg-6">
                                <a href="/thuoc/thuoc-khac" class="text-decoration-none">
                                    <p class="mb-0 ">Thuốc khác</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="d-flex align-items-center gap-2">
                <h6 class="me-4">Bộ lọc</h6>
                <a href="#" class="text-primary text-decoration-none">Thiết lập lại</a>
                <span class="ms-3">Sắp xếp theo:</span>
                <button class="btn btn-outline-secondary">Giá giảm dần</button>
                <button class="btn btn-outline-secondary">Giá tăng dần</button>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-12 mt-3">
            <div class="filter-container">
                <h6 class="form-label">Khoảng giá</h6>
                <input type="number" class="form-control mb-2" placeholder="Tối thiểu">
                <input type="number" class="form-control mb-2" placeholder="Tối đa">
                <button class="btn btn-primary w-100">Áp dụng</button>
                <div class="mt-3">
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="priceRange" id="price1">
                        <p class="form-check-p" for="price1">Dưới 100.000 đ</p>
                    </div>
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="priceRange" id="price2">
                        <p class="form-check-p" for="price2">100.000 đ - 300.000 đ</p>
                    </div>
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="priceRange" id="price3">
                        <p class="form-check-p" for="price3">300.000 đ - 500.000 đ</p>
                    </div>
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="priceRange" id="price4">
                        <p class="form-check-p" for="price4">Trên 500.000 đ</p>
                    </div>
                </div>
                <h6 class="mt-3">Thương hiệu (0)</h6>
                <input type="text" class="form-control mb-2" placeholder="Nhập tên thương hiệu">
                <div class="form-check mt-3 ">
                    <input class="form-check-input" type="checkbox" id="brand1">
                    <p class="form-check-p" for="brand1">Công ty TNHH Dược...</p>
                </div>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="brand2">
                    <p class="form-check-p" for="brand2">Abbott</p>
                </div>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="brand3">
                    <p class="form-check-p" for="brand3">Abbott Laboratories</p>
                </div>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="brand4">
                    <p class="form-check-p" for="brand4">ABC Farmaceutici</p>
                </div>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="brand5">
                    <p class="form-check-p" for="brand5">Actavis</p>
                </div>
                <div class="form-check mt-3 ">
                    <input class="form-check-input" type="checkbox" id="brand1">
                    <p class="form-check-p" for="brand1">BIOFARM</p>
                </div>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="brand2">
                    <p class="form-check-p" for="brand2">Biopharco</p>
                </div>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="brand3">
                    <p class="form-check-p" for="brand3">Biotech VN</p>
                </div>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="brand4">
                    <p class="form-check-p" for="brand4">Biopharma</p>
                </div>
                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="brand5">
                    <p class="form-check-p" for="brand5">Boganic</p>
                </div>
                <a href="#" class="d-block mt-2 text-primary text-center">Xem thêm</a>
            </div>


        </div>
        <div class="col-lg-9 col-md-6">
            <div class="row mt-3">
                <div class="col-lg-3 col-md-6">
                    <div class="card product-card position-relative">
                        <img src="https://production-cdn.pharmacity.io/digital/320x320/plain/e-com/images/ecommerce/P01189_5.jpg"
                            class="product-image" alt="Sản phẩm 1">
                        <div class="card-body text-center">
                            <h6 class="text-truncate">Siro Aerius 0.5mg/ml trị viêm mũi dị ứng, mày đay, ngứa (chai 60ml)</h6>
                            <p class="text-primary fw-bold">87.000 ₫/Chai</p>
                            <button class="btn btn-primary buy-btn">Chọn mua</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card product-card position-relative">
                        <img src="https://production-cdn.pharmacity.io/digital/320x320/plain/e-com/images/ecommerce/P01197.png"
                            class="product-image" alt="Sản phẩm 2">
                        <div class="card-body text-center">
                            <h6 class="text-truncate">Hỗn dịch uống Gaviscon Suspension trị trào ngược dạ dày thực quản (24 gói x 10ml)</h6>
                            <p class="text-primary fw-bold">8.000 ₫/Gói</p>
                            <button class="btn btn-primary buy-btn">Chọn mua</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card product-card position-relative">
                        <img src="https://production-cdn.pharmacity.io/digital/828x828/plain/e-com/images/ecommerce/20241107092028-0-P01219_1.png?versionId=EoZRXNWghb1kIP7lle9ZWRNNigaI2qd."
                            class="product-image" alt="Sản phẩm 3">
                        <div class="card-body text-center">
                            <h6 class="text-truncate">Ống hít Axe Brand inhaler giảm triệu chứng nghẹt mũi, sổ mũi (1 vỉ x 6 ống)</h6>
                            <p class="text-primary fw-bold">15.000 ₫/Cái</p>
                            <button class="btn btn-primary buy-btn">Chọn mua</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card product-card  position-relative">
                        <img src="https://production-cdn.pharmacity.io/digital/828x828/plain/e-com/images/ecommerce/P01222.png"
                            class="product-image" alt="Sản phẩm 4">
                        <div class="card-body text-center">
                            <h6 class="text-truncate">Viên nang Moriamin Forte bổ sung vitamin, duy trì và phục hồi sức khỏe (10 vỉ x 10 viên)</h6>
                            <p class="text-primary fw-bold">34.999 ₫/Vỉ</p>
                            <button class="btn btn-primary buy-btn">Chọn mua</button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row ">
                <div class="col-lg-3 col-md-6">
                    <div class="card product-card position-relative">
                        <img src="https://production-cdn.pharmacity.io/digital/828x828/plain/e-com/images/ecommerce/P01232.png"
                            class="product-image" alt="Sản phẩm 1">
                        <div class="card-body text-center">
                            <h6 class="text-truncate">Viên nén Enervon dự phòng và bổ sung thiếu hụt các vitamin nhóm B, C (10 vỉ x10 viên)</h6>
                            <p class="text-primary fw-bold">22.990 ₫/Vỉ</p>
                            <button class="btn btn-primary buy-btn">Chọn mua</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card product-card position-relative">
                        <img src="https://production-cdn.pharmacity.io/digital/828x828/plain/e-com/images/ecommerce/P01248.png"
                            class="product-image" alt="Sản phẩm 2">
                        <div class="card-body text-center">
                            <h6 class="text-truncate">Thuốc xịt mũi Nasonex 50mcg trị viêm xoang, viêm mũi dị ứng, polyp mũi (chai 60 liều)</h6>
                            <p class="text-primary fw-bold">205.000 ₫/Chai</p>
                            <button class="btn btn-primary buy-btn">Chọn mua</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card product-card position-relative">
                        <img src="https://production-cdn.pharmacity.io/digital/828x828/plain/e-com/images/ecommerce/20241107092030-0-P01050_1.png?versionId=cEAC5ZCjNU6ikack..a5W1YPgg9_Tcsz"
                            class="product-image" alt="Sản phẩm 3">
                        <div class="card-body text-center">
                            <h6 class="text-truncate">Viên hoàn cứng Tottri điều trị trĩ cấp tính, trĩ nội, trĩ ngoại (15 túi x 5g)
                            </h6>
                            <p class="text-primary fw-bold">143.000 ₫/Hộp</p>
                            <button class="btn btn-primary buy-btn">Chọn mua</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card product-card  position-relative">
                        <img src="https://production-cdn.pharmacity.io/digital/828x828/plain/e-com/images/product/20250123100454-0-P26942_1.jpg?versionId=94uMSx50ctuyShebpMSBO2LRGhOwQ1h4"
                            class="product-image" alt="Sản phẩm 4">
                        <div class="card-body text-center">
                            <h6 class="text-truncate">Viên uống PYME ABZ 400MG PYMEPHARCO (Hộp 1 viên)</h6>
                            <p class="text-primary fw-bold">100.000 ₫/Hộp</p>
                            <button class="btn btn-primary buy-btn">Chọn mua</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="text-center">
                    <button class="btn btn-outline-primary w-25 ">Xem thêm</button>
                </div>
            </div>


        </div>
    </div>
    <footer class="bg text-dark mt-5">
        <div class=" footer position-absolute start-0 w-100"></div>
        <div class="container py-4">
            <div class="row">
                <!-- Cột 1: Về GenZ -->
                <div class="col-md-3">
                    <h6 class="fw-bold">Về GenZ</h6>
                    <p>Hệ thống Nhà thuốc GenZ luôn mong muốn được chăm sóc, phục vụ sức khỏe cộng đồng với chất lượng tốt nhất và giá cả hợp lý.</p>
                    <p>Lựa chọn GenZ, lựa chọn an tâm cho sức khỏe bản thân và gia đình!</p>
                </div>

                <!-- Cột 2: Danh mục -->
                <div class="col-md-3">
                    <h6 class="fw-bold">Danh mục</h6>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-primary text-decoration-none">Thuốc</a></li>
                        <li><a href="#" class="text-primary text-decoration-none">Thực phẩm chức năng</a></li>
                        <li><a href="#" class="text-primary text-decoration-none">Dược mỹ phẩm</a></li>
                        <li><a href="#" class="text-primary text-decoration-none">Mẹ và bé</a></li>
                        <li><a href="#" class="text-primary text-decoration-none">Chăm sóc cá nhân</a></li>
                        <li><a href="#" class="text-primary text-decoration-none">Trang thiết bị y tế</a></li>
                        <li><a href="#" class="text-primary text-decoration-none">Chăm sóc sắc đẹp</a></li>
                    </ul>
                </div>

                <!-- Cột 3: Tìm hiểu thêm -->
                <div class="col-md-3">
                    <h6 class="fw-bold">Tìm hiểu thêm</h6>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-primary text-decoration-none">Tư vấn thuốc</a></li>
                        <li><a href="#" class="text-primary text-decoration-none">Đặt thuốc theo đơn</a></li>
                        <li><a href="#" class="text-primary text-decoration-none">Liên hệ dược sỹ</a></li>
                        <li><a href="#" class="text-primary text-decoration-none">Đặt lịch khám</a></li>
                        <li><a href="#" class="text-primary text-decoration-none">Chi tiêu sức khỏe</a></li>
                        <li><a href="#" class="text-primary text-decoration-none">Mã giảm giá riêng</a></li>
                    </ul>
                </div>

                <!-- Cột 4: Liên hệ -->
                <div class="col-md-3">
                    <h6 class="fw-bold">Tổng đài (8:00-22:00)</h6>
                    <p>Tư vấn mua hàng: <a href="tel:18006900" class="text-primary text-decoration-none">18006900</a>
                    </p>
                    <h6 class="fw-bold">Kết nối với chúng tôi</h6>
                    <a href="#" class="me-2"><i class="fab fa-facebook fa-2x text-primary"></i></a>
                    <a href="#" class="me-2"><i class="fab fa-youtube fa-2x text-danger"></i></a>
                </div>
            </div>

            <!-- Thông tin công ty -->
            <div class="row mt-4">
                <div class="text-center">
                    <p class="fw-bold">Công Ty Cổ Phần Dược Phẩm GenZ</p>
                    <p class="small">Trụ sở: 248A Nơ Trang Long, P.12, Q.Bình Thạnh, TP.Hồ Chí Minh, Điện thoại:
                        <a href="tel:18006821" class="text-primary text-decoration-none">1800 6821</a> -
                        Email: <a href="mailto:cskh@nhathuocgenz.vn"
                            class="text-primary text-decoration-none">cskh@nhathuocgenz.vn</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {

}
</script>
<style>
.filter-container {
    max-height: 800px;
    /* Điều chỉnh chiều cao tối đa theo nhu cầu */
    overflow-y: auto;
    /* Thêm thanh trượt khi nội dung vượt quá chiều cao */
    border-right: 1px solid #ddd;
    padding-right: 10px;
}

/* Tùy chỉnh thanh cuộn cho trình duyệt WebKit (Chrome, Edge, Safari) */
.filter-container::-webkit-scrollbar {
    width: 5px;
    /* Giảm độ rộng thanh cuộn */
}

.filter-container::-webkit-scrollbar-track {
    background: #f1f1f1;
    /* Màu nền của track */
    border-radius: 10px;
}

.filter-container::-webkit-scrollbar-thumb {
    background: #888;
    /* Màu của thanh trượt */
    border-radius: 10px;
}

.filter-container::-webkit-scrollbar-thumb:hover {
    background: #555;
    /* Màu khi hover */
}

.footer {
    border-top: 10px solid #004aad;
}
.bg {
    background-color: #E8E8E8;
    margin: -50px -100px;
}

</style>
