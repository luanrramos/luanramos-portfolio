import initDropdownMenu from './modules/dropdown-menu.js';
initDropdownMenu();


export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
  };
}


f = function(e) {
  setTimeout(function() {
      if (d = document.documentElement.clientWidth,
      void 0 === c) {
          var t = !!e && !0 === e.reserveScrollBarGap
            , n = window.innerWidth - document.documentElement.clientWidth;
          t && n > 0 && (c = document.body.style.paddingRight,
          document.body.style.paddingRight = n + "px",
          $("#curtain, #nav,header#header,#nav-overlay-content .content,.loader,.scroll-container .scroll-wrapper.on,section.case-study-next-project,.document-overlay,.loader-preloader,#nav footer").css("width", "calc(100% - " + n + "px)"),
          $("a.scroll-top").css("margin-right", n + "px"),
          -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && 0 == p && (mediaQueriesHelper.init(document.documentElement.clientWidth - d),
          p = !0))
      }
      void 0 === u && (u = document.body.style.overflow,
      document.body.style.overflow = "hidden")
  })
}
, v = function() {
  setTimeout(function() {
      void 0 !== c && (document.body.style.paddingRight = c,
      $("#curtain, #nav,header#header,#nav-overlay-content .content,.loader,.scroll-container .scroll-wrapper.on,section.case-study-next-project,.document-overlay,.loader-preloader,#nav footer").css("width", "100%"),
      $("a.scroll-top").css("margin-right", "auto"),
      c = void 0),
      void 0 !== u && (document.body.style.overflow = u,
      u = void 0)
  })
}