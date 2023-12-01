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


// set default order number
$('#orderNumber').val($.now());

// payment popup
$(".show-payment-popup").on('click', function(e){
  e.preventDefault();
  $('#orderNumber').val($.now());

  $.magnificPopup.open({
    items: {
      src: "#payment",
    },
    type: "inline",
    mainClass: "my-mfp-slide-bottom",
    closeOnBgClick: true,
    fixedContentPos: false,
  });
});

// click on group switch in popup
$('#payment-switch-group').on('click', function (){
  $('#payment-switch-group').addClass('--active');
  $('#payment-switch-solo').removeClass('--active');
  $('#descr').val('Групповой план');
  $('#price').val('50000');
  $('#priceVal').val('50000');
});

// click on solo switch in popup
$('#payment-switch-solo').on('click', function (){
  $('#payment-switch-group').removeClass('--active');
  $('#payment-switch-solo').addClass('--active');
  $('#descr').val('Индивидуальный план');
  $('#price').val('100000');
  $('#priceVal').val('100000');
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
// const ctx = document.getElementById('myChart');
//
// new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: [0, 3, 8, 12, 14, 19, 24, 28],
//     datasets: [{
//       // label: false,
//       data: [102000, 101500, 103000, 102000, 103000, 105000, 106000, 110000],
//       borderColor : "#FFAD33",
//       // fill: true,
//       // fillColor: "#ff0000",
//       borderWidth: 2,
//       lineTension: 0.3,
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: false
//       }
//     }
//   }
// });

// MAIL
$("#main-form").submit(function (e) {
  e.preventDefault();
  console.log("sending");

  $.ajax({
    type: "POST",
    url: "mail.php",
    data: $(this).serialize(),
  })
    .done(function () {
      $(this).find("input").val("");

      console.log("sent");

      $.magnificPopup.open({
        items: {
          src: "#thankyou",
        },
        closeOnBgClick: true,
        fixedContentPos: false,
        callbacks: {
          open: function () {
            jQuery("body").addClass("noscroll");
          },
          close: function () {
            jQuery("body").removeClass("noscroll");
          },
        },
        removalDelay: 300,
        mainClass: "mfp-letter my-mfp-slide-bottom",
      });
    })
    .fail(function () {
      $(this).find("input").val("");

      console.log("mail error");

      $.magnificPopup.open({
        items: {
          src: "#mail-error",
        },
        closeOnBgClick: true,
        fixedContentPos: false,
        callbacks: {
          open: function () {
            jQuery("body").addClass("noscroll");
          },
          close: function () {
            jQuery("body").removeClass("noscroll");
          },
        },
        removalDelay: 300,
        mainClass: "mfp-letter my-mfp-slide-bottom",
      });
    });

  return false;
});

// BUY MAIL
$("#buy-form").submit(function (e) {
  e.preventDefault();
  console.log("sending");
  // console.log($(this).serialize());

  $.ajax({
    type: "POST",
    url: "buy-mail.php",
    data: $(this).serialize(),
  })
    .done(function () {
      $(this).find("input").val("");

      console.log("sent");

      $.magnificPopup.open({
        items: {
          src: "#thankyou",
        },
        closeOnBgClick: true,
        fixedContentPos: false,
        callbacks: {
          open: function () {
            jQuery("body").addClass("noscroll");
          },
          close: function () {
            jQuery("body").removeClass("noscroll");
          },
        },
        removalDelay: 300,
        mainClass: "mfp-letter my-mfp-slide-bottom",
      });
    })
    .fail(function () {
      $(this).find("input").val("");

      console.log("mail error");

      $.magnificPopup.open({
        items: {
          src: "#mail-error",
        },
        closeOnBgClick: true,
        fixedContentPos: false,
        callbacks: {
          open: function () {
            jQuery("body").addClass("noscroll");
          },
          close: function () {
            jQuery("body").removeClass("noscroll");
          },
        },
        removalDelay: 300,
        mainClass: "mfp-letter my-mfp-slide-bottom",
      });
    });

  return false;
});

// СЕЛЕКТЫ

const newElement = function (element, attrs, content) {
  let el = document.createElement(element);
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (content) el.innerHTML = content;
  return el;
};
const selectors = document.querySelectorAll("select");

selectors.forEach((selector) => {
  let selectedOption = null;

  let create_cs_selector = () => {
    let el = document.createElement("div");
    el.className = "cs-selector";
    el.setAttribute("data-selected", selectedOption || selector.value);
    el.setAttribute("data-active", 0);
    el.setAttribute("aria-label", "select");
    return el;
  };
  let cs_selector_DOM = create_cs_selector();

  let create_cs_selected_box = () => {
    let icon_container = newElement(
      "div",
      { class: "cs-selector-icon" },
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>'
    );
    let selected_option = newElement(
      "div",
      { class: "cs-selected-option" },
      selector.options[selector.selectedIndex].text
    );
    let wrapper = newElement("div", { class: "cs-selected-box" });

    wrapper.appendChild(selected_option);
    wrapper.appendChild(icon_container);

    return wrapper;
  };
  let cs_selected_box = create_cs_selected_box();

  let create_cs_options = () => {
    let options = selector.querySelectorAll("option");
    let ul = newElement("ul", { class: "cs-options-list" });
    options.forEach((option) => {
      let value = option.getAttribute("value"),
        text = option.innerText;

      let li = newElement(
        "li",
        { class: "cs-options-list", "data-value": value },
        text
      );

      if (option.selected) selectedOption = value;
      if (option.classList.contains("cs-selector-label"))
        li.className = "cs-selector-label";
      else li.className = "cs-option";

      li.addEventListener("click", (e) => {
        e.stopPropagation();
        cs_selected_box.childNodes[0].innerHTML = text;
        cs_selector_DOM.setAttribute("data-active", 0);
        cs_selector_DOM.setAttribute("data-selected", value);
      });

      ul.appendChild(li);
    });

    return ul;
  };
  let cs_options = create_cs_options();

  cs_selector_DOM.appendChild(cs_selected_box);
  cs_selector_DOM.appendChild(cs_options);
  cs_selector_DOM.addEventListener("click", (e) => {
    e.stopPropagation();

    let _self = cs_selector_DOM,
      active = _self.getAttribute("data-active");

    if (active == 0) _self.setAttribute("data-active", 1);
    else _self.setAttribute("data-active", 0);
  });

  document.addEventListener("click", (e) => {
    cs_selector_DOM.setAttribute("data-active", 0);
  });

  selector.parentNode.insertBefore(cs_selector_DOM, selector);
  selector.remove();
});

// АНИМАЦИИ ПО СКРОЛЛУ
$(window).scroll(function () {
  var topOfWindow = $(window).scrollTop() + $(window).innerHeight();

  // анимация чарта
  if ($("#services").offset().top < topOfWindow) {
    $(".chart").addClass("--show");
  }

  // анимация руки
  if ($("#arm-animate").offset().top < topOfWindow) {
    $("#arm-animate").addClass("cta__src--animate");
  }
});
// //animate start video
// var myVideo = document.getElementById("video-example-1");

// КАЛЬКУЛЯТОР

// рейты
let rates = {};

// функция конвертации
let convert = function (c1, c2) {
  return rates[c2] / rates[c1];
};

// функция рассчета
let calculate = function () {
  // переменные из калькулятора
  let currencyPair = $("#currencyPair .cs-selected-option").text();
  let currency1 = currencyPair.split("/")[0];
  let currency2 = currencyPair.split("/")[1];
  let positionSize = $("#positionSize").val();
  let accountCurrency = $("#accountCurrency .cs-selected-option").text();

  // аск прайс из АПИ
  let askPrice = convert(currency1, currency2);
  // курс обмена на валюту аккаунта из АПИ
  let accountCurrencyExchangeRate = convert(currency2, accountCurrency);

  // размер пункта
  let pointValue = 0.0001;
  if (currency1 === "JPY" || currency2 === "JPY" || accountCurrency === "JPY") {
    pointValue = 0.01;
  }

  // рассчитанные пипы
  let pipValue;

  console.log("==============================================");
  console.log("НАЧАЛО РАССЧЕТА");
  console.log("валютная пара: " + currency1 + "/" + currency2);
  console.log("positionSize: " + positionSize);
  console.log("askPrice из апи : " + askPrice);
  console.log("валюта аккаунта: " + accountCurrency);
  console.log("pointValue, размер пункта: " + pointValue);
  console.log(
    "курс обмена на валюту аккаунта из апи: " + accountCurrencyExchangeRate
  );

  // рассчет пипов
  if (accountCurrency == currency1) {
    console.log("валюта аккаунта совпадает с первой валютой");
    pipValue = positionSize * pointValue * askPrice;
  } else if (accountCurrency == currency2) {
    console.log("валюта аккаунта совпадает со второй валютой");
    pipValue = (positionSize * pointValue) / askPrice;
  } else {
    console.log("валюта аккаунта не совпадает с валютной парой");
    pipValue =
      ((positionSize * pointValue) / askPrice) * accountCurrencyExchangeRate;
  }
  console.log("посчитанные пипы: " + pipValue);

  // перевод в валюту аккаунта

  //округление
  pipValue = pipValue.toFixed(4);
  console.log("округление пипов: " + pipValue);

  if (pipValue == 0) {
    pipValue = 0.0001;
    console.log(
      "пипы получились меньше чем 0.0001, так что выставляем это значение"
    );
  }

  // вывод результата
  console.log("PIP VALUE: " + pipValue);
  $("#pipOutput").text(pipValue);
};

// читаем данные из файла
$.getJSON("rates.json", function (data) {
  rates = data;
  console.log("=============== КУРСЫ ИЗ ФАЙЛА ===============");
  console.log(rates);
}).then(function () {
  // задаем курс доллара под калькулятором
  $("#current-dollar-course").text(convert("USD", "RUB").toFixed(2));

  // прогоняет рассчеты один раз
  calculate();

  // внесение Ask Price в поле
  $("#askPrice").val(
    convert(
      $("#currencyPair .cs-selected-option").text().split("/")[0],
      $("#currencyPair .cs-selected-option").text().split("/")[1]
    )
  );

  // внесение Ask Price в поле при изменении валютной пары
  $("#currencyPair .cs-selector .cs-option").each(function () {
    $(this).on("click", function () {
      $("#askPrice").val(
        convert(
          $("#currencyPair .cs-selected-option").text().split("/")[0],
          $("#currencyPair .cs-selected-option").text().split("/")[1]
        )
      );
    });
  });

  // рассчет пипов по клику
  $("#calculate").on("click", function () {
    calculate();
  });
});

// ЛИБА АНИМАЦИЙ ПО СКРОЛЛУ

if (window.innerWidth < 576) {
  function removeAos() {
    var elem = document.getElementById("aos-css-file");
    elem.parentNode.removeChild(elem);
    return false;
  }
  removeAos();
}

//
// var inputCheck = $("#iplan");
// var price = $("#priceStudy");
//
// inputCheck.on("click", function () {
//   if (inputCheck.is(":checked")) {
//     price.text("110 000 ₽ / МЕС.");
//   } else price.text("55 000 ₽ / МЕС.");
// });

AOS.init();
