"use strict";0<jQuery(".main__banner").length&&jQuery(".main__banner .main__banner--list").slick({infinite:!1,slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0,prevArrow:'<button aria-label="prev" type="button" class="slick-prev">\n\t\t\t<svg width="20" height="32" viewBox="0 0 20 32" fill="none">\n\t\t\t<path d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z" fill="#353535"/>\n\t\t\t</svg>\n        </button>',nextArrow:'<button aria-label="next" type="button" class="slick-next">\n            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M18.9047 17.2436L4.6633 31.4849C3.97646 32.1717 2.86291 32.1717 2.17613 31.4849L0.515117 29.8238C-0.170556 29.1382 -0.171875 28.0269 0.512186 27.3396L11.7987 16L0.512186 4.66039C-0.171875 3.9731 -0.170556 2.86182 0.515117 2.17615L2.17613 0.515134C2.86298 -0.171711 3.97653 -0.171711 4.6633 0.515134L18.9046 14.7564C19.5914 15.4432 19.5914 16.5567 18.9047 17.2436Z" fill="#353535"/>\n            </svg>\n        </button>'});
"use strict";jQuery(".brands__list").slick({infinite:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:424,settings:{slidesToShow:1,slidesToScroll:1}}]});
"use strict";jQuery(document).ready(function(){jQuery(window).width()<991&&jQuery(".footer__wrap .footer__title").click(function(){jQuery(this).toggleClass("active"),jQuery(this).next().slideToggle(200)})});
"use strict";jQuery(".product").each(function(){jQuery(this).find(".button__buy").click(function(){var i=this;jQuery(this).html("Produto Adicionado"),setTimeout(function(){jQuery(i).html("Adicionar")},3e3)})}),jQuery(".variants__list").each(function(){jQuery(this).find(".variants__item:first-child div").addClass("selected")}),jQuery(".variants__item").click(function(){jQuery(this).siblings().find("div").removeClass("selected"),jQuery(this).find("div").addClass("selected")});
"use strict";jQuery(".ruler__list").slick({infinite:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:424,settings:{slidesToShow:1,slidesToScroll:1}}]});
"use strict";0<jQuery(".showcase__list").length&&jQuery(".showcase__list").slick({mobileFirst:!1,slidesToShow:5,slidesToScroll:5,prevArrow:'<button aria-label="prev" type="button" class="slick-prev">\n            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z" fill="black"/>\n            </svg>\n        </button>',nextArrow:'<button aria-label="prev" type="button" class="slick-next">\n            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M18.9047 17.2436L4.6633 31.4849C3.97646 32.1717 2.86291 32.1717 2.17613 31.4849L0.515117 29.8238C-0.170556 29.1382 -0.171875 28.0269 0.512186 27.3396L11.7987 16L0.512186 4.66039C-0.171875 3.9731 -0.170556 2.86182 0.515117 2.17615L2.17613 0.515134C2.86298 -0.171711 3.97653 -0.171711 4.6633 0.515134L18.9046 14.7564C19.5914 15.4432 19.5914 16.5567 18.9047 17.2436Z" fill="black"/>\n            </svg>\n        </button>',responsive:[{breakpoint:424,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2,arrows:!1}},{breakpoint:1e3,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1300,settings:{slidesToShow:4,slidesToScroll:4}}]});