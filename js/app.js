const header = document.querySelector("[data-js-header]");
const headerScrolledClass =
  header.getAttribute("data-js-header-scrolled") || "";
const headerOpenedClass = header.getAttribute("data-js-header-opened") || "";
const headerToggle = document.querySelector("[data-js-header-toggle]");
const headerToggleActiveClass =
  headerToggle.getAttribute("data-js-header-toggle-active") || "";

function animationHeader(item, currentPosition) {
  if (!item) {
    return;
  }
  currentPosition > 96
    ? item.classList.add(headerScrolledClass)
    : item.classList.remove(headerScrolledClass);
}

animationHeader(
  header,
  window.pageYOffset || document.documentElement.scrollTop
);

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  animationHeader(header, scrolled);
});

headerToggle &&
  header &&
  (headerToggle.onclick = (e) => {
    header.classList.toggle(headerOpenedClass);
    e.target.classList.toggle(headerToggleActiveClass);

    // content padding when burger active
    const homeSection = document.getElementById("home");
    // homeSection.style.paddingTop = "250px";
    homeSection.classList.toggle("home--padding-top");
  });

var headerLinks = document.querySelectorAll(".c-header__menu-link");
headerLinks.forEach(function (headerLink) {
  headerLink.addEventListener("click", function () {
    header.classList.remove("c-header--opened");
    headerToggle.classList.remove("c-header__burger--active");
  });
});

//wa parallax

// popups

$(document).on("click", ".show-sontact-us", function () {
  let service = $(this).data("service");
  $(".popup__select").val(service);
});

$(".show-sontact-us").magnificPopup({
  items: {
    src: ".popup--contact-us",
  },
  type: "inline",
  mainClass: "my-mfp-slide-bottom",
  fixedContentPos: true,
});

$(".show-thank-you").magnificPopup({
  items: {
    src: ".popup--thank-you",
  },
  type: "inline",
  mainClass: "my-mfp-slide-bottom",
  fixedContentPos: true,
});
