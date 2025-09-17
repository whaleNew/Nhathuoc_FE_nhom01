<template>
    <div class="row">
        <div class="col-lg-9">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between mb-2">
                        <h5 class="fw-bold">Giỏ hàng <span>(1)</span></h5>
                        <a href="#" class="text-primary text-decoration-none">Xóa</a>
                    </div>
                    <div class="row mt-3">
                        <div class="col-lg-6 col-md-3">
                            <input type="checkbox" checked> Sản phẩm
                        </div>
                        <div class="col-lg-2 col-md-3">Đơn giá</div>
                        <div class="col-lg-2 col-md-3">Số lượng</div>
                        <div class="col-lg-2 col-md-3 text-center">Thành tiền</div>
                    </div>
                    <hr>
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-3 d-flex mt-3">
                            <input type="checkbox" checked class="me-2">
                            <img style="height: 80px;"
                                src="https://production-cdn.pharmacity.io/digital/256x256/plain/e-com/images/product/20240830021826-0-P21027_1.jpg"
                                alt="Sản phẩm" class="me-3">
                            <div>
                                <p class="mb-1"><b>Kẹo ngậm Hati-tux Candy hỗ trợ giảm viêm họng (20 gói x 10 viên)</b>
                                </p>
                                <select class="form-select form-select-sm w-auto">
                                    <option selected>Phân loại: Hộp</option>
                                    <option selected>Phân loại: Vỉ</option>
                                    <option selected>Phân loại: Chai</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 text-end"><b>280.000 đ</b></div>
                        <div class="col-lg-2 col-md-3 text-end">
                            <button class="btn btn-light border rounded-circle px-2 py-0">−</button>
                            <span class="mx-2"><b>1</b></span>
                            <button class="btn btn-light border rounded-circle px-2 py-0">+</button>
                        </div>
                        <div class="col-lg-3 col-md-3 text-end">
                            <b> 280.000 đ</b>
                            <button class="btn btn-link text-dark ms-2"><i class="fa-solid fa-trash"
                                    data-bs-toggle="modal" data-bs-target="#xoaModal"></i></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-lg-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <i class="fa-solid fa-ticket me-2"></i><b>Thêm voucher</b>
                        </div>
                        <span class="text-muted">Chọn voucher</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Tạm tính</p>
                        <p>32.050đ</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Mã khuyến mãi</p>
                        <p>-</p>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between">
                        <p class="mt-2">Tổng tiền</p>
                        <h4>32.050đ</h4>
                    </div>
                    <router-link to="/checkout" class="btn btn-primary w-100">
                        Mua hàng (1)
                    </router-link>


                </div>
            </div>
        </div>
        <!-- Xóa giỏ hàng -->
        <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa giỏ hàng</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger" role="alert">
                            Bạn có chắc chắn muốn xóa sản phẩm này không???
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-danger">Xóa</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style></style>
