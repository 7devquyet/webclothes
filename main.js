document.addEventListener("DOMContentLoaded", function() {
    // --------- js for toggle menu-----------------
    let MenuItems = document.getElementById('MenuItems');

    if (MenuItems) {
        MenuItems.style.maxHeight = "0px";

        document.querySelector('.menu-icon').onclick = function() {
            if (MenuItems.style.maxHeight == "0px") {
                MenuItems.style.maxHeight = "200px";
            } else {
                MenuItems.style.maxHeight = "0px";
            }
        };
    }

    // ---------- js for product gallery-----------
    let productImg = document.getElementById('productImg');
    let SmallImg = document.getElementsByClassName('small-img');

    if (productImg && SmallImg.length > 0) {
        for (let i = 0; i < SmallImg.length; i++) {
            SmallImg[i].onclick = function() {
                productImg.src = SmallImg[i].src;
            }
        }
    }

    //----------- js for toggle form-------------
    let LoginForm = document.getElementById('LoginForm');
    let RegForm = document.getElementById('RegForm');
    let Indicator = document.getElementById('Indicator');

    if (LoginForm && RegForm && Indicator) {
        window.register = function() {
            RegForm.style.transform = "translateX(0px)";
            LoginForm.style.transform = "translateX(0px)";
            Indicator.style.transform = "translateX(100px)";
        };

        window.login = function() {
            RegForm.style.transform = "translateX(300px)";
            LoginForm.style.transform = "translateX(300px)";
            Indicator.style.transform = "translateX(0px)";
        };
    }

    //---------------- add to cart--------------
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            alert('Sản phẩm đã được thêm vào giỏ hàng');
        });
    });

    //JavaScript for Slide from Top Animation

    let images = [
        "images/category-1.jpg",
        "images/category-2.jpg",
        "images/category-3.jpg",
        "images/category-4.jpg",
        "images/category-5.jpg",
        "images/category-6.jpg",
        "images/category-7.jpg",
        "images/category-8.jpg",
        "images/category-9.jpg"
    ];

    let currentIndex = 0;

    function slideShow() {
        document.getElementById("category-1").src = images[currentIndex];
        document.getElementById("category-2").src = images[currentIndex + 1];
        document.getElementById("category-3").src = images[currentIndex + 2];
        currentIndex = (currentIndex + 3) % images.length;
    }

    setInterval(slideShow, 3000); // Slide every 3 seconds

// Image slider
// let currentImageIndex = 0;
// const images = document.querySelectorAll('.image-slider .slide');
// const totalImages = images.length;

// function slideShow() {
//     images[currentImageIndex].style.transform = 'translateX(-100%)';
//     images[currentImageIndex].style.opacity = '0';
    
//     currentImageIndex = (currentImageIndex + 1) % totalImages;
    
//     images[currentImageIndex].style.transform = 'translateX(100%)';
//     images[currentImageIndex].style.display = 'block';

//     setTimeout(() => {
//         images[currentImageIndex].style.transform = 'translateX(0)';
//         images[currentImageIndex].style.opacity = '1';
//     }, 50);

//     setTimeout(() => {
//         images[(currentImageIndex - 1 + totalImages) % totalImages].style.display = 'none';
//     }, 1050);
// }

// setInterval(slideShow, 3000); // Slide every 3 seconds

   
   
        // // Lấy danh sách các slide
        // var slides = document.querySelectorAll('.image-slider .slide');
        // var currentSlide = 0;
        // var slideInterval = setInterval(nextSlide, 2000); // Chuyển slide sau mỗi 2 giây

        // function nextSlide() {
        //     // Ẩn slide hiện tại
        //     slides[currentSlide].style.display = 'none';
        //     // Tăng chỉ số của slide hiện tại, hoặc trở về slide đầu tiên nếu đang ở slide cuối cùng
        //     currentSlide = (currentSlide + 1) % slides.length;
        //     // Hiển thị slide tiếp theo
        //     slides[currentSlide].style.display = 'block';
        // }
    


});