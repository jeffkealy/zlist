$(document).ready(function () {
  // adding easier to read classes to fb's classses
  $(".x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1lliihq").addClass("card-container");
  $(
    ".x193iq5w.xeuugli.x13faqbe.x1vvkbs.xlh3980.xvmahel.x1n0sxbx.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x4zkp8e.x676frb.x1pg5gke.x1sibtaa.xo1l8bm.xi81zsa.x1yc453h"
  ).addClass("added-by");
  $(
    ".x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.xt0b8zv.xzsf02u.x1s688f"
  ).addClass("name");
  $(".x78zum5.xdt5ytf.xz62fqu.x16ldp7u").addClass("card-content");
  //create removed button
  $("<div class='goodbye'>Remove</div>").insertAfter(".added-by");
  // create list
  $("<div class='remove-list'><h3>On Remove list</h3><div class='remove-list-names'></div></div>").prependTo("body");
  $(".goodbye").click(function () {
    var cardContainer = $(this).closest(".card-container");
    var goodBye = $(this);
    var name = goodBye.closest(".card-content").find(".name").text();
    var nameNoSpaces = name.replace(/\s+/g, "");
    // if card is selected
    if (cardContainer.hasClass("selected")) {
      console.log("removed 'slected' class");
      cardContainer.removeClass("red selected");
      goodBye.text("Remove");
      $(`.remove-list-names .${nameNoSpaces}`).remove();
    }
    // card not selected
    else {
      console.log("added 'slected' class");
      cardContainer.addClass("red selected");
      goodBye.text("Removed list");
      $(`<div class="name-list ${nameNoSpaces}">${name}</div>`).appendTo(".remove-list-names");
    }

    // $(this).css();
  });
});
