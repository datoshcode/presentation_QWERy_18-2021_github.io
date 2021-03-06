new Gallery(document.getElementById('gallery'), {
    margin: 10,
    dots: false
});

/**
 * Burger
 */

const BODY_BURDER_OPENED = 'body_burder-opened';

const bodyNode = document.querySelector('body');
const burgerControlNode = document.querySelector('.burger-menu__control');
const burgerSpaceCoverNode = document.querySelector('.cover-space__burger');

burgerControlNode.addEventListener('click', (_event) => {
    if (bodyNode.classList.contains(BODY_BURDER_OPENED)) {
        bodyNode.classList.remove(BODY_BURDER_OPENED);
    } else {
        bodyNode.classList.add(BODY_BURDER_OPENED);
    }
});

burgerSpaceCoverNode.addEventListener('click', (_event) => {
    bodyNode.classList.remove(BODY_BURDER_OPENED);
});


$(".scroll-down").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
