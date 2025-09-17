<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-5">
        <div class="card border-top border-0 border-3 border-dark login-card">
          <div class="card-body p-4">
            <div class="card-title text-center">
              <i class="fa-solid fa-user-doctor fs-1"></i>
              <h5 class="mb-3 mt-2 text-custom-title">Đăng Nhập</h5>
            </div>
            <hr />
            <form class="vstack gap-2" @submit.prevent="handleLogin">
              <div>
                <label for="inputLastEnterUsername" class="form-label mb-1 small">Tài khoản / Email</label>
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-transparent"><i class="bx bxs-user"></i></span>
                  <input
                    type="text"
                    class="form-control border-start-0"
                    id="inputLastEnterUsername"
                    placeholder="Nhập tài khoản hoặc email"
                    v-model="username"
                  />
                </div>
              </div>

              <div>
                <label for="inputLastEnterPassword" class="form-label mb-1 small">Mật khẩu</label>
                <div class="input-group input-group-sm">
                  <span class="input-group-text bg-transparent"><i class="bx bxs-lock-open"></i></span>
                  <input
                    :type="passwordFieldType"
                    class="form-control border-start-0"
                    id="inputLastEnterPassword"
                    placeholder="Mật khẩu"
                    v-model="password"
                  />
                  <span
                    class="input-group-text bg-transparent"
                    style="cursor: pointer;"
                    @click="togglePasswordVisibility"
                  >
                    <i :class="passwordVisible ? 'bx bx-show' : 'bx bx-hide'"></i>
                  </span>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck3" />
                  <label class="form-check-label small" for="gridCheck3">Nhớ tôi</label>
                </div>
                <a href="javascript:;" class="small">Quên mật khẩu?</a>
              </div>

              <button type="submit" class="btn btn-dark btn-sm w-100 mt-2">
                <i class="bx bxs-lock-open me-1"></i>Đăng nhập
              </button>
              <p class="text-center small mb-0 mt-2">
                <i class="fa-solid fa-eye me-1"></i>Bạn chưa có tài khoản?
                <a href="/admin/dang-ky">Đăng ký tại đây</a>
              </p>
              <hr />
              <p class="text-center small mb-1">hoặc Đăng nhập với:</p>
              <button type="button" class="btn btn-facebook btn-sm w-100">
                <i class="bx bxl-facebook me-1"></i> Facebook
              </button>
              <button type="button" class="btn btn-light btn-sm w-100">
                <i class="bx bxl-google me-1"></i> Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordVisible: false,
      username: '',
      password: '',
    };
  },
  computed: {
    passwordFieldType() {
      return this.passwordVisible ? 'text' : 'password';
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    handleLogin() {
      if (this.username === 'admin' && this.password === '123') {
        this.$router.push('/homepage');
      } else {
        alert('Thông tin đăng nhập không đúng!');
      }
    },
  },
};
</script>

<style>
.login-card {
  max-width: 400px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.85);
}

.text-custom-title {
  font-size: 1.4rem;
  color: #088f31;
  font-weight: 600;
}

.btn-facebook {
  background-color: #3b5998;
  color: white;
}
.btn-facebook:hover {
  background-color: #2d4373;
}

.btn-light {
  border: 1px solid #ccc;
  color: #333;
}
</style>
