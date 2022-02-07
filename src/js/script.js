$(document).ready(function () {
    $('.carousel__inner').slick({ // Slider script
        speed: 1000,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider_right.svg"></button>',
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    //TABs
    $('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    //Iforamtion sliders in catalog
    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }

    toggleSlide('.catalog-item__content');
    toggleSlide('.catalog-item__list');

    //Modal windows
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subheader').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    //Validation
    function valideForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Необходимо ввести как минимум {0} символа!")
                },
                phone: "Введите номер телефона",
                email: {
                    required: "Нам необходим ваш email для связи с вами",
                    email: "Ваш email должен быть в формате: name@domain.com"
                }
            }
        });
    }

    valideForm('#order .feed-form');
    valideForm('#consultate .feed-form');
    valideForm('#consultation .feed-form');

    //Phone mask
    $('input[name=phone]').mask("+7 (999) 999-99-99")

    //Send mail from forms
    /*     $('form').submit(function (e) {
            e.preventDefault();
    
            if (!$(this).valid()) {
                return;
            }
    
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function () {
                $(this).find("input").val("");
                $('#consultation, "order').fadeOut()
                $('.overlay, #thanks').fadeIn('slow')
                $('form').trigger('reset');
            });
            return false;
        }); */

    //Smooth scroll
    /*     $(window).scroll(function () {
            if ($(this).srollTop() > 1600) {
                $('.pageup').fadeOut();
            } else {
                $('.pageup').fadeIn();
            }
        }) */
});


