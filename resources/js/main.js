// INPUT-MASK
$('.digit-code').bind('input', function () {
  var $this = $(this);
  setTimeout(function () {
    if ($this.val().length >= parseInt($this.attr("maxlength"), 10))
      $this.next('.digit-code').focus();
  }, 0);
});
// INPUT-MASK-END

// ONLY-NUMBER
$(document).ready(function () {
  $('.numberonly').keypress(function (e) {
    var charCode = (e.which) ? e.which : event.keyCode
    if (String.fromCharCode(charCode).match(/[^0-9]/g))
      return false;
  });
});
// ONLY-NUMBER-END

// SLIDER
(function ($) {
  "use strict";
  // Auto-scroll
  $('#myCarousel').carousel({
    interval: 5000
  });

  // Control buttons
  $('.next').click(function () {
    $('.carousel').carousel('next');
    return false;
  });
  $('.prev').click(function () {
    $('.carousel').carousel('prev');
    return false;
  });
  // SLIDER-END

  // ON-CAROUSEL-SCROLL
  $("#myCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;
    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide -
        (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end 
        if (e.direction == "left") {
          $(
            ".carousel-item").eq(i).appendTo(".carousel-inner");
        } else {
          $(".carousel-item").eq(0).appendTo(".carousel-inner");
        }
      }
    }
  });
})
// ON-CAROUSEL-SCROLL-END

// TIME-RANGE
var b;
var a = document.getElementById('time-range-input');
if (a != null) {
  b = a.value;
}
b = parseInt(b)
function plusValue() {
  if (b < 55) {
    b += 5;
    $('#time-range-input').val(b)
  }
} function minusValue() {
  if (b > 5) {
    b -= 5;
    $('#time-range-input').val(b)
  }
}
// TIME-RANGE-END

// LEFT-BLUE-MENU
document.querySelectorAll(".left-blue-nav ").forEach(a => {
  a.addEventListener("click", () => {
    document.querySelectorAll(".extra").forEach(t => {
      t.style.display = "none";
    })
    let id = a.getAttribute("data-open");
    document.getElementById(id).style.display = 'block';
  });
})
// LEFT-BLUE-MENU-END

// BURGER-MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".fresh-nav-menu");
const navLink = document.querySelectorAll(".fresh-nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
// BURGER-MENU-END

// TELEPHONE-MASK
document.addEventListener('DOMContentLoaded', () => {
  for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
    const pattern = el.getAttribute("placeholder"),
      slots = new Set(el.dataset.slots || "_"),
      prev = (j => Array.from(pattern, (c, i) => slots.has(c) ? j = i + 1 : j))(0),
      first = [...pattern].findIndex(c => slots.has(c)),
      accept = new RegExp(el.dataset.accept || "\\d", "g"),
      clean = input => {
        input = input.match(accept) || [];
        return Array.from(pattern, c =>
          input[0] === c || slots.has(c) ? input.shift() || c : c
        );
      },
      format = () => {
        const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
          i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
          return i < 0 ? prev[prev.length - 1] : back ? prev[i - 1] || first : i;
        });
        el.value = clean(el.value).join``;
        el.setSelectionRange(i, j);
        back = false;
      };
    let back = false;
    el.addEventListener("keydown", (e) => back = e.key === "Backspace");
    el.addEventListener("input", format);
    el.addEventListener("focus", format);
    el.addEventListener("blur", () => el.value === pattern && (el.value = ""));
  }
});
// TELEPHONE-MASK-END

// Basket
$(document).ready(function () {
  $('.minus').click(function (e) {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function (e) {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
// Basket-end

// Basket-quantity-increase
$(document).ready(function () {
  update();
  $(".quant").change(function () {
    // console.log('calling /Cart/AddTocart; id:',$(this).attr('data-id'),' quantity: ', $(this).val());
    '/Cart/AddTocart', {
      id: $(this).attr('data-id'),
      returnUrl: '',
      quantity: $(this).val()
    }
    update();
  });

  function update() {
    var sum = 0.0;
    var quantity;
    $('.cart-1').each(function () {

      quantity = $(this).find('.quant').val();
      var price = parseFloat($(this).find('.price').attr('data-price'));
      var amount = (quantity * price);

      sum += amount;
      $(this).find('.amount').text('' + amount + ' AZN');
    });
    $('.total').html(+sum + ' AZN');
  }
});
// Basket-quantity-increase-end
