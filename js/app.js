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

// // popups
//
// $(document).on("click", ".show-sontact-us", function () {
//   let service = $(this).data("service");
//   $(".popup__select").val(service);
// });
//
// $(".show-sontact-us").magnificPopup({
//   items: {
//     src: ".popup--contact-us",
//   },
//   type: "inline",
//   mainClass: "my-mfp-slide-bottom",
//   fixedContentPos: true,
// });
//
// $(".show-thank-you").magnificPopup({
//   items: {
//     src: ".popup--thank-you",
//   },
//   type: "inline",
//   mainClass: "my-mfp-slide-bottom",
//   fixedContentPos: true,
// });


// chart
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [0, 3, 8, 12, 14, 19, 24, 28],
    datasets: [{
      // label: false,
      data: [102000, 101500, 103000, 102000, 103000, 105000, 106000, 110000],
      borderColor : "#FFAD33",
      // fill: true,
      // fillColor: "#ff0000",
      borderWidth: 2,
      lineTension: 0.3,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});


// MAIL
$("#main-form").submit(function (e) {
  e.preventDefault();
  console.log("sending");

  $.ajax({
    type: "POST",
    url: "mail.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");

    console.log("sent");
    // $.magnificPopup.open({
    //   items: {
    //     src: "#thankyou",
    //   },
    //   mainClass: "mfp-letter",
    // });
  });

  return false;
});