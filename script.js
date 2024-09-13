const sliderText = document.querySelector('.slider__text')
const sliderImage = document.querySelector('.slider__image')
const textSlideWrapper = document.querySelector('.slider__wrapper-text')
const imageSlideWrapper = document.querySelector('.slider__wrapper-image')
const imageSliderLine = document.querySelector('.slider__row-image')
const textSliderLine = document.querySelector('.slider__row-text')
const imageSliderItems = document.querySelectorAll('.slider__item-image')
const textSliderItems = document.querySelectorAll('.slider__item-text')
const sliderPagination = document.querySelectorAll('.pagination__item')

let count = 0
let textWidth
let imageWidth

function init() {
	textWidth = textSlideWrapper.offsetWidth
	imageWidth = imageSlideWrapper.offsetWidth
	imageSliderItems.forEach(i => {
		i.style.width = imageWidth + 'px'
	})
	textSliderItems.forEach(i => {
		i.style.width = textWidth + 'px'
	})
	imageSliderLine.style.width = imageWidth * imageSliderItems.length + 'px'
	textSliderLine.style.width = textWidth * textSliderItems.length + 'px'
	imageSliderLine.style.height = 'auto'
	textSliderLine.style.height = 'auto'
	rollSlider()
}

function rollSlider() {
	imageSliderLine.style.transform = `translate(-${+count * imageWidth}px)`
	textSliderLine.style.transform = `translate(-${+count * textWidth}px)`
}

sliderPagination.forEach((item, index) => {
	item.addEventListener('click', () => switchPagination(index))
})

function switchPagination(index) {
	count = index
	rollSlider()
	sliderPagination.forEach(item => {
		item.classList.remove('pagination__item--active')
	})
	sliderPagination[index].classList.add('pagination__item--active')
}

init()

window.addEventListener('resize', () => {
	init()
})
