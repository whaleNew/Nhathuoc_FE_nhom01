<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-sm auth-card">
          <div class="card-body p-3 p-sm-4">
            <div class="text-center mb-3">
              <h2 class="auth-title">
                <i class="fa-solid fa-user-doctor me-1"></i> Đăng Ký Tài Khoản
              </h2>
              <p class="text-muted small mb-0">
                Đăng ký ngay để dễ dàng mua thuốc và chăm sóc sức khỏe tốt hơn!
              </p>
            </div>

            <form class="vstack gap-2">
              <div>
                <label for="inputName" class="form-label mb-1 small">
                  <i class="fa-brands fa-waze me-1"></i>Họ Và Tên
                </label>
                <input id="inputName" type="text" class="form-control form-control-sm" placeholder="Nhập Họ Và Tên Của Bạn">
              </div>

              <div>
                <label for="inputEmail" class="form-label mb-1 small">
                  <i class="fa-brands fa-glide-g me-1"></i>Email
                </label>
                <input id="inputEmail" type="email" class="form-control form-control-sm" placeholder="Nhập Email Của Bạn">
              </div>

              <div>
                <label for="inputPhone" class="form-label mb-1 small">
                  <i class="fa-brands fa-viber me-1"></i>Số Điện Thoại
                </label>
                <input id="inputPhone" type="text" class="form-control form-control-sm" placeholder="Nhập Số Điện Thoại Của Bạn">
              </div>

              <div>
                <label for="inputBirthdate" class="form-label mb-1 small">
                  <i class="fa-brands fa-renren me-1"></i>Ngày Sinh
                </label>
                <input id="inputBirthdate" type="date" class="form-control form-control-sm">
              </div>

              <div>
                <label for="inputPassword" class="form-label mb-1 small">
                  <i class="fa-brands fa-expeditedssl me-1"></i>Mật Khẩu
                </label>
                <input id="inputPassword" type="password" class="form-control form-control-sm" placeholder="Nhập Mật Khẩu">
              </div>

              <div>
                <label for="inputConfirmPassword" class="form-label mb-1 small">
                  <i class="fa-solid fa-ghost me-1"></i>Xác Nhận Mật Khẩu
                </label>
                <input id="inputConfirmPassword" type="password" class="form-control form-control-sm" placeholder="Xác Nhận Mật Khẩu">
              </div>

              <button type="submit" class="btn btn-success btn-sm w-100 mt-2">
                <i class="bx bxs-lock-open me-1"></i>Đăng Kí
              </button>

              <p class="text-center small mb-0 mt-2">
                <i class="fa-solid fa-eye me-1"></i>Bạn đã có tài khoản?
                <a href="/admin/dang-nhap">Đăng nhập tại đây</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Giới hạn chiều rộng tổng & làm gọn khoảng cách */
.auth-card {
  border-radius: 14px;
}

/* Tiêu đề nhỏ gọn hơn */
.auth-title {
  font-size: 1.25rem; /* ~20px */
  line-height: 1.2;
  margin: 0;
  color: #087951;
}

/* Nhãn & input nhỏ */
.form-label.small { font-size: .86rem; }
.form-control-sm { padding-top: .4rem; padding-bottom: .4rem; }

/* Giảm cỡ icon cho cân đối */
.auth-title .fa-solid,
.form-label i { font-size: .95em; }

/* Nền nhẹ nhàng (tùy chọn) */
.auth-card .card-body {
  background: #f6f4f4;
}

/* Responsive: trên màn nhỏ giữ padding vừa phải */
@media (max-width: 575.98px) {
  .auth-title { font-size: 1.15rem; }
}
</style>
