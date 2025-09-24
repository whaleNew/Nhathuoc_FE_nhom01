<template>
    <div class="header-wrapper">
        <!--start header -->
        <header>
            <div class="topbar d-flex align-items-center">
                <nav class="navbar navbar-expand">
                    <div class="topbar-logo-header">
                        <div class="">
                            <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
                        </div>
                        <div class="">
                            <h4 class="logo-text">Nhà thuốc Genz</h4>
                        </div>
                    </div>
                    <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
                    <div class="search-bar flex-grow-1">
                        <div class="position-relative search-bar-box">
                            <input type="text" class="form-control search-control" placeholder="Nhập để tìm kiếm..." > 
                            <span class="position-absolute top-50 search-show translate-middle-y"></span>
                            <span class="position-absolute top-50 search-close translate-middle-y"><i
                                    class='bx bx-x'></i></span>
                        </div>
                    </div>
                    <div class="top-menu ms-auto">
                        <ul class="navbar-nav align-items-center">
                            <li class="nav-item mobile-search-icon">
                                <a class="nav-link" href="#"> <i class='bx bx-search'></i>
                                </a>
                            </li>
                            <!-- đăng nhập và đăng ký -->
                              <li class="nav-item">
                                <router-link to="/admin/dang-nhap" class="nav-link" style="font-size: 14px; padding: 5px 10px;">
                                    <i class="bx bx-log-in-circle"></i> Đăng nhập
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/admin/dang-ky" class="nav-link" style="font-size: 14px; padding: 5px 10px;">
                                    <i class="bx bx-log-in-circle"></i> Đăng ký
                                </router-link>
                            </li>
                            
                            <li class="nav-item dropdown dropdown-large">
                                <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span
                                        class="alert-count">1</span>
                                    <i class='bx bx-bell'></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">   
                                    <a href="javascript:;">
                                        <div class="msg-header">
                                            <p class="msg-header-title">Thông báo</p>                                     
                                        </div>
                                    </a>
                                    <div class="header-notifications-list">
                                        <a class="dropdown-item" href="javascript:;">
                                            <div class="d-flex align-items-center">
                                                <div class="notify bg-light-primary text-primary"><i
                                                        class="bx bx-group"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="msg-name">???<span
                                                            class="msg-time float-end">14 giây trước</span></h6>
                                                    <p class="msg-info">5 khách hàng mới</p>
                                                </div>
                                            </div>
                                        </a>
                                       
                                    </div>
                                    <a href="javascript:;">
                                        <div class="text-center msg-footer">View All Notifications</div>
                                    </a>
                                </div>
                            </li>
                            
                             <li class="nav-item dropdown dropdown-large">
                                <router-link to="/admin/cart">
                                    <a class="nav-link" href="/admin/cart">
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <span class="alert-count">1</span>
                                    </a>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="user-box dropdown">
                        <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../../assets/images/avatars/avatar-2.png" class="user-img" alt="user avatar">
                            <div class="user-info ps-3">
                                <p class="user-name mb-0">Khách hàng 01</p>
                                <p class="designattion mb-0">VIP 01</p>
                            </div>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="javascript:;"><i
                                        class="bx bx-user"></i><span>Profile</span></a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:;"><i
                                        class="bx bx-cog"></i><span>Settings</span></a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:;"><i
                                        class='bx bx-home-circle'></i><span>Dashboard</span></a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:;"><i
                                        class='bx bx-dollar-circle'></i><span>Earnings</span></a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:;"><i
                                        class='bx bx-download'></i><span>Downloads</span></a>
                            </li>
                            <li>
                                <div class="dropdown-divider mb-0"></div>
                            </li>
                            <li><a class="dropdown-item" href="javascript:;"><i
                                        class='bx bx-log-out-circle'></i><span>Logout</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <!--end header -->
        <!--navigation-->
        <div class="nav-container primary-menu">
            <div class="mobile-topbar-header">
                <div>
                    <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
                </div>
                <div>
                    <h4 class="logo-text">Rukada</h4>
                </div>
                <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
                </div>
            </div>
            <nav class="navbar navbar-expand-xl w-100">
                <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                    <li class="nav-item dropdown">
                        <router-link to="/homepage">
                            <a class="nav-link" href="/homepage">
                                <div class="parent-icon"><i class='bx bx-home-circle'></i>
                                </div>
                                <div class="menu-title">Trang chủ</div>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link to="/admin/thuoc">
                            <a class="nav-link" href="/admin/thuoc">
                                <div class="menu-title">Thuốc</div>
                            </a>
                        </router-link>
                        <ul class="dropdown-menu">
                            <li> <a class="dropdown-item" href="/thuoc/thuoc-khong-ke-don">
                                    Thuốc không kê đơn
                                </a>
                            </li>
                            <li> <a class="dropdown-item" href="/thuoc/thuoc-ke-don">
                                    Thuốc kê đơn
                                </a>
                            </li>
                            <li> <a class="dropdown-item" href="/thuoc/thuoc-khac">
                                    Thuốc khác
                                </a>
                            </li>

                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
        <!--end navigation-->
    </div>
    <!--end header wrapper-->
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <router-view></router-view>

        </div>
    </div>
</template>
<script>
import "../../assets/js/bootstrap.bundle.min.js";
	import "../../assets/js/jquery.min.js";
	import "../../assets/plugins/simplebar/js/simplebar.min.js";
	import "../../assets/plugins/metismenu/js/metisMenu.min.js";
	import "../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
	import "../../assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js";
    import "../../assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js";
	import "../../assets/plugins/chartjs/js/Chart.min.js";
	import "../../assets/plugins/chartjs/js/Chart.extension.js";
	import "../../assets/js/index.js";
	import "../../assets/js/app.js";
export default {

}

</script>
<style>
@import "../../assets/plugins/simplebar/css/simplebar.css";
@import "../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../assets/plugins/metismenu/css/metisMenu.min.css";
@import "../../assets/css/pace.min.css";
@import "../../assets/css/dark-theme.css";
@import "../../assets/css/semi-dark.css";
@import "../../assets/css/header-colors.css";
@import "../../assets/css/app.css";
@import "../../assets/css/icons.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css");
</style>