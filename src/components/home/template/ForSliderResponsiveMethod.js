export default function forSliderResponsiveMethod(slickSettings, sliderWidth){
    let containerWidth = document.getElementById('container').offsetWidth;
    let countSlide = (containerWidth-30)/sliderWidth
    if (containerWidth < 1230) {
        slickSettings.slidesToShow = countSlide
        if(slickSettings.infinite) slickSettings.initialSlide = parseInt(countSlide)+1-countSlide
    }
    return {...slickSettings}
}