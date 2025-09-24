<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="mt-2">Danh Sách Khách Hàng</h4>
                    <div>
                        <button class="btn btn-primary me-1" @click="Object.assign(create_khach_hang, value)"
                            data-bs-toggle="modal" data-bs-target="#themmoiKhachhangModal">Thêm Mới</button>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered mb-0">
                        <thead>
                            <tr class="text-center align-middle text-nowrap text-light bg-primary">
                                <th>#</th>
                                <th>Mã Khách Hàng</th>
                                <th>Họ Và Tên</th>
                                <th>Email</th>
                                <th>Mật Khẩu</th>
                                <th>Số Điện Thoại</th>
                                <th>Ngày Đăng Ký</th>
                                <th>Trạng Thái</th>
                                <th>Kích Hoạt</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in list_khach_hang" :key="index" class="align-middle">
                                <th class="text-center">{{ index + 1 }}</th>
                                <td class="align-middle text-center">{{ value.ma_khach_hang }}</td>
                                <td class="align-middle text-center">{{ value.ho_va_ten }}</td>
                                <td class="align-middle text-center">{{ value.email }}</td>
                                <td class="align-middle text-center">{{ value.password }}</td>
                                <td class="text-center">{{ value.so_dien_thoai }}</td>
                                <td class="text-center">{{ value.ngay_dang_ky }}</td>
                                <td class="text-center">
                                    <button class="btn btn-success me-1 w-100" v-if="value.trang_thai == 0">Hoạt
                                        Động</button>
                                    <button class="btn btn-danger me-1 w-100" v-else>Tạm Tắt</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-warning me-1 w-100" v-if="value.kich_hoat == 0"
                                        style="color: white;">Chưa Kích
                                        Hoạt</button>
                                    <button class="btn btn-primary me-1 w-100" v-else>Đã Kích Hoạt</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-primary me-1"
                                        @click="Object.assign(update_khach_hang, value)" data-bs-toggle="modal"
                                        data-bs-target="#capNhatKhachhangModal">Cập Nhật</button>
                                    <button class="btn btn-danger" @click="del_khach_hang = value"
                                        data-bs-toggle="modal" data-bs-target="#xoaKhachhangModal">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="themmoiKhachhangModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Thêm Mới Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 mb-2">
                        <label>Mã Khách Hàng</label>
                        <input type="text" class="form-control" v-model="create_khach_hang.ma_khach_hang">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Họ và Tên</label>
                        <input type="text" class="form-control" v-model="create_khach_hang.ho_va_ten">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="create_khach_hang.email">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Password</label>
                        <input type="email" class="form-control" v-model="create_khach_hang.password">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Số Điện Thoại</label>
                        <input type="text" class="form-control" v-model="create_khach_hang.so_dien_thoai">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Ngày Đăng Ký</label>
                        <input type="date" class="form-control" v-model="create_khach_hang.ngay_dang_ky">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Tình Trạng</label>
                        <select v-model="create_khach_hang.trang_thai" class="form-select ">
                            <option value="0">Hoạt Động</option>
                            <option value="1">Tạm Tắt</option>
                        </select>
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Kích Hoạt</label>
                        <select v-model="create_khach_hang.kich_hoat" class="form-select ">
                            <option value="1">Đã Kích Hoạt</option>
                            <option value="0">Chưa Kích Hoạt</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" @click="themMoi()" data-bs-dismiss="modal">Xác
                        Nhận</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="capNhatKhachhangModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Cập Nhật Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 mb-2">
                        <label>Mã Khách Hàng</label>
                        <input type="text" class="form-control" v-model="update_khach_hang.ma_khach_hang">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Họ và Tên</label>
                        <input type="text" class="form-control" v-model="update_khach_hang.ho_va_ten">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="update_khach_hang.email">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Mật Khẩu</label>
                        <input type="text" class="form-control" v-model="update_khach_hang.password">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Số Điện Thoại</label>
                        <input type="text" class="form-control" v-model="update_khach_hang.so_dien_thoai">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Ngày Đăng Ký</label>
                        <input type="date" class="form-control" v-model="update_khach_hang.ngay_dang_ky">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Trạng Thái</label>
                        <select v-model="update_khach_hang.trang_thai" class="form-select">
                            <option value="0">Hoạt Động</option>
                            <option value="1">Tạm Tắt</option>
                        </select>
                    </div>
                    <div class="col-md-12 mb-2">
                        <label>Kích Hoạt</label>
                        <select v-model="update_khach_hang.kich_hoat" class="form-select">
                            <option value="1">Đã Kích Hoạt</option>
                            <option value="0">Chưa Kích Hoạt</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" @click="capNhatKhachHang()"
                        data-bs-dismiss="modal">Xác
                        Nhận</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="xoaKhachhangModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xóa Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i></div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-white">Cảnh Báo!</h6>
                                <div class="text-white">Bạn có chắc chắn xóa tài khoản <b>{{ del_khach_hang.ho_va_ten
                                }}</b> này không!</div>
                            </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" @click="xoaKhachHang()" data-bs-dismiss="modal">Xác
                        Nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            list_khach_hang: [],
            create_khach_hang: {
                ma_khach_hang: '',
                ho_va_ten: '',
                email: '',
                password: '',
                so_dien_thoai: '',
                ngay_dang_ky: '',
                trang_thai: '',
                kich_hoat: ''
            },
            update_khach_hang: {
                ma_khach_hang: '',
                ho_va_ten: '',
                email: '',
                password: '',
                so_dien_thoai: '',
                ngay_dang_ky: '',
                trang_thai: '',
                kich_hoat: ''
            },
            del_khach_hang: {}
        };
    },
    mounted() {
        this.loadData();
        this.$toast.success(`Hey! I'm here`);
    },
    methods: {
        loadData() {
            axios
                .get('http://127.0.0.1:8000/api/khach-hang')
                .then((res) => {
                    this.list_khach_hang = res.data.data;
                });
        },
        themMoi() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/them-moi-khach-hang', this.create_khach_hang)
                .then(response => {
                    if (response.data.status == true) {
                        this.$toast.success(response.data.message);
                        this.loadData();
                        this.getdata();
                    } else {
                        this.$toast.error("Thêm Mới Thất Bại!");
                    }
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    result.forEach((value_1, key_1) => {
                        var xxx = value_1[1];
                        xxx.forEach((value, key) => {
                            this.$toast.error(value);
                        });
                    });
                });
        },
        capNhatKhachHang() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/cap-nhat-khach-hang', this.update_khach_hang)
                .then(response => {
                    if (response.data.status == true) {
                        this.$toast.success(response.data.message);
                        this.loadData();
                    } else {
                        this.$toast.error("Cập Nhật Thất Bại!");
                    }
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    result.forEach((value_1, key_1) => {
                        var xxx = value_1[1];
                        xxx.forEach((value, key) => {
                            this.$toast.error(value);
                        });
                    });
                });
        },
        xoaKhachHang() {
            axios
                .post('http://127.0.0.1:8000/api/khach-hang/xoa-khach-hang', this.del_khach_hang)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    result.forEach((value_1, key_1) => {
                        var xxx = value_1[1];
                        xxx.forEach((value, key) => {
                            this.$toast.error(value);
                        });
                    });
                });
        }
    }
};
</script>

<style></style>
