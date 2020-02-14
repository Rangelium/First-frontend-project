if (($(window).width() < 800) | ($(document).width() < 800)) {
  window.location.href = "mobile.html";
}
// PreLoader
setTimeout(() => {
  $(document).ready(() => {
    $(".preloader").css("opacity", "0");
    setTimeout(() => {
      $(".preloader").css("display", "none");
    }, 1000);
  });
}, 1200);

$(".header-title").click(() => {
  location.reload(true);
});

// Start form
$(".btn_start").click(function() {
  $(".sec_1").css("width", "100vw");
  $("video").css("top", "-95px");
  $("footer").css("top", "100%");
  $("aside").css("right", "-20vw");

  setTimeout(() => {
    $(".title").css("top", "70px");
    $(".btn_start").css("top", "100px");
  }, 400);

  setTimeout(() => {
    $("aside").css("display", "none");
    $("footer").css("display", "none");
    $(".sec_1").css("opacity", "0");
  }, 1600);

  setTimeout(() => {
    $(".sec_2").css("width", "100%");
    $(".sec_2").css("height", "85vh");
    $(".sec_2").css("opacity", "1");
  }, 2200);

  setTimeout(() => {
    $(".sec_1").css("display", "none");
    $(".sec_2").css("z-index", "1000");
  }, 3200);

  // Beautifull appearence start
  setTimeout(() => {
    $(".item").css("bottom", "0");
    $(".item").css("opacity", "1");
    $(".item").css("left", "0");
    $(".item").css("right", "0");
    $(".kek").css("bottom", "-30px");

    $(".choose").css("opacity", "1");
    $(".choose").css("left", "0");
    $(".choose").css("bottom", "0");

    $(".item_3_label").css("opacity", "1");
    $(".item_3_label").css("bottom", "0");

    $(".item_2_label").css("opacity", "1");

    $(".contact_person").css("opacity", "1");
    $(".contact_person").css("top", "-55px");
  }, 3600);

  // Beautifull appearence end
});

//  FORM

let show_alert = function() {
  $(".bad-form").css({
    opacity: "1",
    top: "50%"
  });
  $(".sec_2").css({
    opacity: "0.6",
    filter: "brightness(30%)",
    "pointer-events": "none"
  });
  setTimeout(() => {
    $(".bad-form").css({
      opacity: "0",
      top: "-30%"
    });
    $(".sec_2").css({
      opacity: "1",
      filter: "none",
      "pointer-events": "all"
    });
  }, 1600);
};

// If paid show how much
$("#paid").click(function() {
  if (!$(".paid_input").is(":checked")) {
    $(".if_paid").css("opacity", "1");
  }
});
setInterval(() => {
  if (!$(".paid_input").is(":checked")) {
    $(".if_paid").css("opacity", "0");
  }
}, 20);

// If need help which
$("#yes_help").click(function() {
  if (!$(".yes_input").is(":checked")) {
    $(".help_box").css("top", "50px");
    $(".help_box").css("left", "40px");
    setTimeout(() => {
      $(".if_help_yes").css("opacity", "1");
      $(".if_help_yes").css("pointer-events", "all");
    }, 600);
  }
});
setInterval(() => {
  if (!$(".yes_input").is(":checked")) {
    $(".if_help_yes").css("opacity", "0");
    $(".if_help_yes").css("pointer-events", "none");
    $(".help_box").css("top", "10px");
    $(".help_box").css("left", "35%");
  }
}, 20);

// Possible num of trainees part start
$(".next").click(function() {
  $(".num", $(this).parent()).html(
    (parseInt($(".num", $(this).parent()).html()) + 1).toString()
  );
  $("input", $(this).parent()).attr("value", $(".num", $(this).parent()).html());
});
$(".prev").click(function() {
  let min = parseInt($(".num", $(this).parent()).attr("data-min"));
  $(".num", $(this).parent()).html(
    (parseInt($(".num", $(this).parent()).html()) - 1).toString()
  );
  if (parseInt($(".num", $(this).parent()).html()) < min) {
    $(".num", $(this).parent()).html(min.toString());
  }
  $("input", $(this).parent()).attr("value", $(".num", $(this).parent()).html());
});

// Contact_info section
$(".icon_container").click(() => {
  $(".icon_container").css("transform", "perspective(500px) rotateY(180deg)");
  $(".icon_container").css("pointer-events", "none");
  $(".contact_info_container").css("transform", "perspective(500px) rotateY(360deg)");
  $(".contact_info_container").css("pointer-events", "all");
});

// Next, prev bnt section with progress bar
let reveal_back_btn = function() {
  $(".back_btn").css("opacity", "0.7");
  $(".back_btn").css("pointer-events", "all");
};
let hide_back_btn = function() {
  $(".back_btn").css("opacity", "0");
  $(".back_btn").css("pointer-events", "none");
};
let reveal_next_btn = function() {
  $(".next_btn").css("opacity", "0.7");
  $(".next_btn").css("pointer-events", "all");
};
let hide_next_btn = function() {
  $(".next_btn").css("opacity", "0");
  $(".next_btn").css("pointer-events", "none");
};
let turn_off_events_for_btn = function(name) {
  $(name).css("pointer-events", "none");
  setTimeout(() => {
    $(name).css("pointer-events", "all");
  }, 2400);
};

// Check form
let check_form = function(form) {
  let res = true;

  // Check standart inputs
  let tmp_arr = $("input.std_input", form);
  for (let i = 0; i < tmp_arr.length; i++) {
    if ($(tmp_arr[i]).val() === "") {
      return false;
    }
    if ($(tmp_arr[i]).css("color") === "rgb(255, 0, 0)") {
      return false;
    }
  }

  // Check radio boxes
  let tmp_arr_tmp = $("input", form);
  tmp_arr = [];
  for (let i = 0; i < tmp_arr_tmp.length; i++) {
    if ($(tmp_arr_tmp[i]).attr("type") === "radio") {
      tmp_arr.push(tmp_arr_tmp[i]);
    }
  }
  for (let i = 0; i < tmp_arr.length; i++) {
    if (!$(tmp_arr[i]).is(":checked")) {
      for (let j = 0; j < tmp_arr.length; j++) {
        if (i === j) {
          continue;
        }
        if ($(tmp_arr[i]).attr("name") === $(tmp_arr[j]).attr("name")) {
          if (!$(tmp_arr[j]).is(":checked")) {
            res = false;
          } else {
            res = true;
            break;
          }
        }
      }
      if (!res) {
        return false;
      }
    }
  }

  // Check checkboxes
  tmp_arr_tmp = $("input", form);
  tmp_arr = [];
  for (let i = 0; i < tmp_arr_tmp.length; i++) {
    if ($(tmp_arr_tmp[i]).attr("type") === "checkbox") {
      tmp_arr.push(tmp_arr_tmp[i]);
    }
  }
  if (tmp_arr.length !== 0) {
    res = false;
    for (let i = 0; i < tmp_arr.length; i++) {
      if ($(tmp_arr[i]).is(":checked")) {
        res = "true";
      }
    }
    if (!res) {
      return false;
    }
  }

  // Check textareas
  tmp_arr = $("textarea", form);
  for (let i = 0; i < tmp_arr.length; i++) {
    if ($(tmp_arr[i]).attr("class") === "not_required") {
      continue;
    }
    if ($(tmp_arr[i]).val() === "") {
      return false;
    }
  }

  // Check criterias
  if ($("li", ".crit_list").length === 0) {
    return false;
  }

  return res;
};

// Click next_btn
$(".next_btn").click(function() {
  if (check_form("#form" + $(".curr_page").html())) {
    turn_off_events_for_btn(".next_btn");
    turn_off_events_for_btn(".back_btn");
    if (parseInt($(".curr_page").html()) === 1) {
      $("#form1").css("overflow", "hidden");
      $("#form1").css("height", "0");
      setTimeout(() => {
        $("#form2").css("opacity", "1");
        $("#form2").css("width", "calc(100% - 40px)");
        reveal_back_btn();
      }, 1200);
    } else if (parseInt($(".curr_page").html()) === 2) {
      $("#form2").css("opacity", "0");
      $("#form2").css("width", "0");
      setTimeout(() => {
        $("#form3").css("opacity", "1");
        $("#form3").css("top", "20px");
      }, 1200);
    } else if (parseInt($(".curr_page").html()) === 3) {
      $("#form3").css("opacity", "0");
      $("#form3").css("top", "-100%");
      hide_next_btn();
      setTimeout(() => {
        $("#form4").css("opacity", "1");
        $("#form4").css("top", "20px");
        $("#form4").css("left", "20px");
      }, 1200);
    }

    $("progress").attr("value", (parseInt($("progress").attr("value")) + 35).toString());
    if (parseInt($("progress").attr("value")) > 100) {
      $("progress").attr("value", "100");
    }

    $(".curr_page").html((parseInt($(".curr_page").html()) + 1).toString());
    if (parseInt($(".curr_page").html()) > 4) {
      $(".curr_page").html("4");
    }
  } else {
    show_alert();
  }
});

// Click back_btn
$(".back_btn").click(function() {
  turn_off_events_for_btn(".back_btn");
  turn_off_events_for_btn(".next_btn");
  if (parseInt($(".curr_page").html()) === 2) {
    $("#form2").css("opacity", "0");
    $("#form2").css("width", "0");
    hide_back_btn();
    setTimeout(() => {
      $("#form1").css("height", "100%");
      setTimeout(() => {
        $("#form1").css("overflow", "visible");
      }, 1200);
    }, 1200);
  } else if (parseInt($(".curr_page").html()) === 3) {
    $("#form3").css("opacity", "0");
    $("#form3").css("top", "-100%");
    setTimeout(() => {
      $("#form2").css("opacity", "1");
      $("#form2").css("width", "calc(100% - 40px)");
    }, 1200);
  } else if (parseInt($(".curr_page").html()) === 4) {
    $("#form4").css("opacity", "0");
    $("#form4").css("top", "-100%");
    $("#form4").css("left", "-100%");
    reveal_next_btn();
    setTimeout(() => {
      $("#form3").css("opacity", "1");
      $("#form3").css("top", "20px");
    }, 1200);
  }

  $("progress").attr("value", (parseInt($("progress").attr("value")) - 35).toString());
  if (parseInt($("progress").attr("value")) < 0) {
    $("progress").attr("value", "0");
  }

  $(".curr_page").html((parseInt($(".curr_page").html()) - 1).toString());
  if (parseInt($(".curr_page").html()) < 1) {
    $(".curr_page").html("1");
  }
});

// Start date not editable
document.getElementById("not_editable").readOnly = true;

// Criteria part
$("#add_crit").click(function() {
  if ($(".inputed_crit").val() === "") {
    alert("Criteria cannot be empty!");
  } else if ($(".inputed_crit").val().length > 30) {
    alert("Too much signs(max 20)");
  } else {
    $("ol", ".crit_list").append(
      "<li style='opacity: 0;'><i class='far fa-trash-alt'></i><input type='hidden' name='Main selection criteria[]' value='" +
        $(".inputed_crit").val() +
        "'>" +
        $(".inputed_crit").val() +
        "</li>"
    );
    setTimeout(() => {
      $($("li")[$("li").length - 1]).css("opacity", "1");
    }, 10);
    $(".inputed_crit").val("");
  }
});

setInterval(() => {
  $(".fa-trash-alt").click(function() {
    let this_tmp = $(this);
    $(this)
      .parent()
      .css("text-decoration", "line-through");

    setTimeout(() => {
      $(this_tmp)
        .parent()
        .css("opacity", "0");
    }, 300);
    setTimeout(() => {
      $(this_tmp)
        .parent()
        .remove();
      // .css("display", "none");
    }, 800);
  });
}, 20);

// SEND PAGE
$(".button-bird").click(() => {
  $(".container").css("width", "101%");
  $(".container").css("height", "101%");
  $(".container").css("box-shadow", "none");
  $(".container").css("border-radius", "0");
  $(".progress_bar").css("opacity", "0");

  setTimeout(() => {
    $("h2", "#form4").css("opacity", "0");
    $(".container").css("overflow", "visible");

    setTimeout(() => {
      $(".button-bird").attr("class", "button-bird active");
      $(".button-bird__text").html("DONE");
    }, 500);
  }, 1200);

  setTimeout(() => {
    $(".sec_2").css("width", "0");
    $(".sec_2").css("height", "0");
    $(".sec_2").css("opacity", "0");
    $(".sec_1").css("display", "block");
    $("aside").css("display", "block");
    $("footer").css("display", "block");
    $("video").css("opacity", "0");
    setTimeout(() => {
      $(".sec_1").css("opacity", "1");

      $(".sec_1").css("width", "80vw");
      $("video").css("top", "-75px");
      $("footer").css("top", "0");
      $("aside").css("right", "0");

      setTimeout(() => {
        $(".title").css("top", "20px");
        $(".btn_start").css("top", "50px");
      }, 400);

      setTimeout(() => {
        $("video").css("opacity", "1");

        setTimeout(() => {
          $("#form").submit();
        }, 600);
      }, 1600);
    }, 1600);
  }, 4500);
});

// Checker
setInterval(() => {
  if (parseInt($(".curr_page").html()) === 2) {
    $("#form2").css("pointer-events", "all");
  }
}, 40);

// Some small editions
let tmp_tmp_arr = $("input");
for (let i = 0; i < tmp_tmp_arr.length; i++) {
  $(tmp_tmp_arr[i]).attr("autocomplete", "off");
}

// Customize p in checkbox/radio
tmp_arr = $(".box_tmp");
let tmp_arr2 = $(".faculty");
let tmp_arr3 = $(".option");
setInterval(() => {
  for (let i = 0; i < tmp_arr.length; i++) {
    if ($("input", tmp_arr[i]).is(":checked")) {
      $("p", tmp_arr[i]).css("color", "white");
    } else {
      $("p", tmp_arr[i]).css("color", "black");
    }
  }
  for (let i = 0; i < tmp_arr2.length; i++) {
    if ($("input", tmp_arr2[i]).is(":checked")) {
      $("p", tmp_arr2[i]).css("color", "white");
    } else {
      $("p", tmp_arr2[i]).css("color", "black");
    }
  }
  for (let i = 0; i < tmp_arr3.length; i++) {
    if ($("input", tmp_arr3[i]).is(":checked")) {
      $("p", tmp_arr3[i]).css("color", "white");
    } else {
      $("p", tmp_arr3[i]).css("color", "black");
    }
  }
  if ($(".curr_page").html() === "2") {
    let tmp_arr4 = $(".choose");
    for (let i = 0; i < tmp_arr4.length; i++) {
      if ($("input", tmp_arr4[i]).is(":checked")) {
        $("p", tmp_arr4[i]).css("color", "white");
      } else {
        $("p", tmp_arr4[i]).css("color", "black");
      }
    }
  }
}, 20);
