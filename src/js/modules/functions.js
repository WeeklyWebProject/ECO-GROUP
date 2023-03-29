export function viewFixedHeader() {
    const fixedHeader = document.querySelector('.fixed-header'),
        defaultHeader = document.querySelector('.header')

    window.addEventListener('scroll', () => {

        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop >= (defaultHeader.clientHeight - 20)) {

            fixedHeader.classList.add('show')
            fixedHeader.classList.remove('hide')

        } else {

            fixedHeader.classList.remove('show')
            fixedHeader.classList.add('hide')

        }

    })
}

export function reviewsSlider() {
    $(document).ready(function () {
        if($('.reviews-slider')) {
            $('.reviews-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 500,
                appendArrows: $('.reviews__navigation'),
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
    });
}

export function newsSlider() {
    $(document).ready(function () {
        if($('.news__slider')) {
            $('.news__slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 500,
                responsive: [
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
    });
}
export function portfolioSlider() {
    $(document).ready(function () {
        if($('.portfolio-mobile__slider')) {
            $('.portfolio-mobile__slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                responsive: [
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
    });
}

export function advantagesMobileSlider() {
    $(document).ready(function () {
        if (window.innerWidth <= 576) {
            if($('.advantages__wrap')) {
                $('.advantages__wrap').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
    
                });
            }
        }
    });
}

export function showFeedbackModal() {
    const modal = document.querySelector('.feadback-modal'),
        openBtn = document.querySelectorAll('.modal-feedback-js'),
        closeBtn = document.querySelector('.feadback-modal__close')

    if (openBtn) {
        openBtn.forEach(el => {
            el.addEventListener('click', () => {
                modal.classList.add('feadback-modal__show')
                modal.classList.remove('feadback-modal__hide')
                document.body.classList.add('no-scroll');

                

            })
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('feadback-modal__show')
            modal.classList.add('feadback-modal__hide')
            document.body.classList.remove('no-scroll');
        })
    }
}

export function tabProducts() {
    const tabBtn = document.querySelectorAll('.products-block__item'),
        tabPanel = document.querySelectorAll('.products-block__panel')

    
    if(tabBtn) { 

        tabBtn.forEach(el => {
            el.addEventListener('click', selectTab)
        });
    
        function selectTab() {
            let currentTab = this.dataset.tab;
    
            for (let i = 0; i < tabBtn.length; i++) {
    
                tabBtn[i].classList.remove('active-tab')
    
    
                if (tabPanel[i].classList.contains(currentTab)) {
                    tabPanel[i].classList.add('active-panel')
                    productsSlider(currentTab);
                    $('.progress-bar').css('width', '15.18%')
                } else {
                    tabPanel[i].classList.remove('active-panel')
                    $('.products-block__slider').slick('destroy');
                }
    
            }
    
            this.classList.add('active-tab')
        }
    
        function productsSlider(tabIndex) {
    
            $(document).ready(function () {
                document.querySelectorAll('.products-block__slider').forEach(el => {
                    $(el).slick({
                        infinite: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                    });
                    $(el).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
    
                        if (nextSlide >= 1) {
                            $('.progress-bar').css('width', calc + '%')
                        } else {
                            $('.progress-bar').css('width', '15.18%')
                        }
                    });
                });
    
            });
        }
        productsSlider();
    }
}

export function footerSpoilerNav() {
    const spoilerBtn = document.querySelectorAll('.footer__title'),
        spolierBody = document.querySelectorAll('.footer__list')

    if(spoilerBtn) {
        spoilerBtn.forEach(function (item, i, arr) {
            spoilerBtn[i].addEventListener('click', () => {
                spolierBody[i].classList.toggle('show-list')
                spoilerBtn[i].classList.toggle('active-spoiler')
            })
        })
    }
}

export function mobileMenu() {

    const openMobileMenu = () => {
        const openBtn = document.querySelector('.burger-menu'),
            mobileMenuBody = document.querySelector('.mobile-menu')

        if (openBtn) {
            openBtn.addEventListener('click', () => {
                mobileMenuBody.classList.add('mobile-menu--open')
            })

            mobileMenuBody.addEventListener('click', (e) => {

                if (e.target.classList.contains('mobile-menu')) {
                    mobileMenuBody.classList.remove('mobile-menu--open')
                }
            })
        }

    }
    openMobileMenu()

    const tabsMenu = () => {
        const tabBtn = document.querySelectorAll('.mobile-menu__btn'),
            tabPanel = document.querySelectorAll('.mobile-menu__col')

        if(tabBtn) {
            tabBtn.forEach(el => { el.addEventListener('click', selectTab) });

            function selectTab() {
                let currentTab = this.dataset.tab;

                for (let i = 0; i < tabBtn.length; i++) {
                    tabBtn[i].classList.remove('selected-menu')

                    if (tabPanel[i].classList.contains(currentTab)) {
                        tabPanel[i].classList.add('active-menu')
                    } else {
                        tabPanel[i].classList.remove('active-menu')
                    }
                }

                this.classList.add('selected-menu')
            }
        }


    }
    tabsMenu()

    const spoilerMenu = () => {
        const spoilerBtn = document.querySelectorAll('.mobille-drop .mobille-drop__title')

        if(spoilerBtn) {
            for (let i = 0; i < spoilerBtn.length; i++) {
                spoilerBtn[i].addEventListener('click', () => {
                    spoilerBtn[i].closest('.mobille-drop').classList.toggle('mobile-drop--open')
                })
    
            }
        }
    }
    spoilerMenu()

}

export function dropSearchPanel() {
    const btn = document.querySelector('.fixed-header__search'),
        wrapperSearch = document.querySelector('.drop-search')

    if(btn) {
        btn.addEventListener('click', () => {
            wrapperSearch.classList.toggle('drop-search--active')
            btn.classList.toggle('fixed-header--show')
        })
    }

}



/*-------- НОВЫЕ ФУНКЦИИ БЕЗ ГЛАВНОЙ СТРАНИЦЫ ------------*/

export function spoilerSidebarItem() {
    const btnSpoiler = document.querySelectorAll('.sidebar-spoiler__title')

    if(btnSpoiler) {
        btnSpoiler.forEach((el) => { 
            el.addEventListener('click',()=> {
                el.closest('.sidebar-spoiler').classList.toggle('active-spoiler')
            }) 
        });
    }
}


export function rangeSlider() {
    const slider = document.getElementById('range-slider');
    if (slider) {
        let minValuePrice = document.querySelector('#price-min');
        let maxValuePrice = document.querySelector('#price-max');

        const valuesInputs = [parseInt(minValuePrice.value.split('').filter(item => item !== ' ').join('')), parseInt(maxValuePrice.value.split('').filter(item => item !== ' ').join(''))];
        const inputs = [minValuePrice, maxValuePrice];
        
        noUiSlider.create(slider, {
            start: [valuesInputs[0], valuesInputs[1]],
            connect: true,
            range: {
                'min': valuesInputs[0],
                'max': valuesInputs[1]
            },   
            
        }); 

        slider.noUiSlider.on('update', function (values, handle) {

            inputs[handle].value = parseInt(values[handle]).toLocaleString('ru');

            document.querySelector('.price-filter__min').textContent = parseInt(values[0]).toLocaleString('ru')
            document.querySelector('.price-filter__max').textContent = parseInt(values[1]).toLocaleString('ru') 

        }); 
    }  
} 

export function sortCatalog() {
    const openSortBtn = document.querySelector('.catalog-sort__title'),
        sortItem = document.querySelectorAll('.catalog-sort__item')
    
    if(openSortBtn){
        openSortBtn.addEventListener('click', ()=> {
            openSortBtn.closest('.catalog-content__sort').classList.toggle('catalog-sort--active')
        })  

        sortItem.forEach(el => {
            el.addEventListener('click', selected)
        });

        function selected() {
            sortItem.forEach(el => {
                el.classList.remove('current-sort')
            });
            openSortBtn.textContent = this.textContent
            this.classList.add('current-sort')
        }


    }
}

export function previewProductSlider() {
    $(document).ready(function () {
        if ($('.card__preview')){

            $('.card__preview').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                arrows: true,
                // fade: true,
                asNavFor: '.card__tumbs',
                responsive: [ 
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1 ,
                            arrows: true,  
                        }
                    }
                ]
            });
            $('.card__tumbs').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 500,  
                asNavFor: '.card__preview', 
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 4 ,  
                        }
                    }
                ]
            }); 

        }
    });
}

export function cardProductTabs() {
    const tabsBtn = document.querySelectorAll('.card-tabs__btn'),
        tabsPanel = document.querySelectorAll('.card-tabs__panel') 

    if (tabsBtn) {
        tabsBtn.forEach(el => {
            el.addEventListener('click', selectedTab)
        });

        function selectedTab() {

            tabsBtn.forEach(el => { 
                el.classList.remove('tabs__btn--active')
            });
            
            this.classList.add('tabs__btn--active')
            let currentTab = this.dataset.tab  
            showTabPanel(currentTab)

        }

        function showTabPanel(tab) {
            tabsPanel.forEach(el => {
                if (el.classList.contains(tab)){
                    el.classList.add('tabs__panel--active')
                }else {
                    el.classList.remove('tabs__panel--active')
                }
            })
        }
    }
}

export function productMobileSpoiler() {
    const btn = document.querySelectorAll('.card-spoiler__title')

    if(btn) {
        btn.forEach(el => {
            el.addEventListener('click', ()=> {
                el.closest('.card-spoiler__item').classList.toggle('card-spoiler--active')
            })
        })
    }
}

export function similarProductsSlider() {
    $(document).ready(function () {
        if($('.similar-products__wrap')) {
            $('.similar-products__wrap').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                speed: 500,
                responsive: [
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2 ,
                        }
                    }
                ]
            });
        }
    });
}

export function reviewTab() {
    const tabBtn = document.querySelectorAll('.reviews-page__tab'),
        tabPanel = document.querySelectorAll('.reviews-page__type')

    if (tabBtn) {
        tabBtn.forEach(el => {
            el.addEventListener('click', activeTab)
        });

        function activeTab(){
            tabBtn.forEach(el => { 
                el.classList.remove('reviews-tab--active')
            });

            this.classList.add('reviews-tab--active')
            let currrentTab = this.dataset.tab
            showTabPanel(currrentTab)

        }

        function showTabPanel(tab){ 
            tabPanel.forEach(el => {
                 
                el.classList.contains(tab) ? el.classList.add('reviews-type--show') : el.classList.remove('reviews-type--show')
            
            });
        }

    } 
}

export function popularServicesSlider() {
    const slider = document.querySelector('.services-slider')

    if(slider){
        $(document).ready(function () {
            $(slider).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 500, 
            });
        });
    }
}

export function employeesSlider() {
    const slider = document.querySelector('.employees__slider')

    if(slider){
        $(document).ready(function () {
            $(slider).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 500,
                responsive: [
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1 ,
                        }
                    }
                ]
            });
        });
    }
}

export function openMobileFilterCatalog() {
    const openBtn = document.querySelector('.open-filer'),
        filterBody = document.querySelector('.catalog-sidebar'),
        closeField = document.querySelector('.close-filter-panel')

       if (openBtn) {
        openBtn.addEventListener('click', () => {
            filterBody.classList.add('filter-open')
            document.body.classList.add('no-scroll')
            closeField.classList.add('filter-open')
        })

        window.document.addEventListener('click', (e)=> { 
            if (e.target.classList.contains('close-filter-panel')) { 
                filterBody.classList.remove('filter-open')
                document.body.classList.remove('no-scroll')
                closeField.classList.remove('filter-open')
            }
        })
       }
}


