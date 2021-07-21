/* Slide change when click capture */
export function sliderChange(slider, slickSettings, spanPrev, spanNext, maxSlide) {
    let currentSlide = slider.current.innerSlider.state.currentSlide

    if (currentSlide >= 0 && !slickSettings.infinite)
        document.getElementById(spanNext).classList.remove('disabled')
    if (currentSlide <= maxSlide && !slickSettings.infinite)
        document.getElementById(spanPrev).classList.remove('disabled')

    if (currentSlide === 0 && !slickSettings.infinite)
        document.getElementById(spanPrev).classList.add('disabled')

    if (currentSlide === maxSlide && !slickSettings.infinite)
        document.getElementById(spanNext).classList.add('disabled')

}

/* Next slide */
export function next(slider, slickSettings, spanPrev, spanNext, maxSlide) {
    let currentSlide = slider.current.innerSlider.state.currentSlide
    if (currentSlide >= 0 && !slickSettings.infinite)
        document.getElementById(spanPrev).classList.remove('disabled')
    if (currentSlide === maxSlide && !slickSettings.infinite)
        document.getElementById(spanNext).classList.add('disabled')

    // console.log(currentSlide)
    // console.log(maxSlide)

    spanNext ? slider.current.slickNext() :
        slider.current.slickGoTo(currentSlide+1)
}

/* Prev slide */
export function previous(slider, slickSettings, spanPrev, spanNext, maxSlide) {
    let currentSlide = slider.current.innerSlider.state.currentSlide
    if (slider.current.innerSlider.state.currentSlide <= maxSlide && !slickSettings.infinite)
        document.getElementById(spanNext).classList.remove('disabled')
    if (slider.current.innerSlider.state.currentSlide <= 1 && !slickSettings.infinite)
        document.getElementById(spanPrev).classList.add('disabled')

    spanPrev ? slider.current.slickPrev() :
        slider.current.slickGoTo(currentSlide-1)
}
