new Swiper('.slider__image-wrapper', {
    direction: 'vertical',

    keyboard: {
        enebled: true,
        pageUpDown: true,
        onlyInViewport: true,
    },

    mousewheel: {
        sensitivity: 1,
        releaseOnEdges: true,
        eventsTarget: ".slider-wrapper"
    },

    hashNavigation: {
        watchState: true,
    }
});