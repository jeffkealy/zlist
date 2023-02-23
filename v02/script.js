$(document).ready(function () {
  // adding easier to read classes to fb's classses
  $("<h2 class='title'>Zlist</h2>").prependTo("body");
  $(
    ".x6s0dn4.x1q0q8m5.x1qhh985.xu3j5b3.xcfux6l.x26u7qi.xm0m39n.x13fuv20.x972fbf.x9f619.x78zum5.x1q0g3np.x1iyjqo2.xs83m0k.x1qughib.xat24cr.x11i5rnm.x1mh8g0r.xdj266r.xeuugli.x18d9i69.x1sxyh0.xurb0ha.xexx8yu.x1n2onr6.x1ja2u2z.x1gg8mnh"
  ).addClass("card");
  $(
    ".x193iq5w.xeuugli.x13faqbe.x1vvkbs.xlh3980.xvmahel.x1n0sxbx.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x4zkp8e.x676frb.x1pg5gke.x1sibtaa.xo1l8bm.xi81zsa.x1yc453h"
  ).addClass("added-by");
  $(
    ".x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.xt0b8zv.xzsf02u.x1s688f"
  ).addClass("name");
  $(
    ".x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.x1heor9g.xt0b8zv.x1s688f"
  )
    .addClass("invited-by-name")
    .attr("target", "_blank");
  $(".x1oo3vh0.x1rdy4ex").addClass("card-list");
  $(".x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1lliihq").parent().addClass("card-container");

  $(".x78zum5.xdt5ytf.xz62fqu.x16ldp7u").addClass("card-content");

  //give each card a class of the person's name
  $(`.name`).each(function (index) {
    let n = $(this).text().replace(/\s/g, "");
    $(this).closest(".card-container").addClass(n);
  });
  //end adding classes

  //create removed button
  $("<div class='goodbye'>Remove</div>").insertAfter(".added-by");
  // create list
  $(`<div class='remove-list'>
      <h3>On Remove list</h3>
      <span class="copy-button">Copy</span>
      <div class='remove-list-names'>
      </div>
    </div>`).prependTo("body");
  $(".name").attr("target", "_blank");

  var removeListLocal = JSON.parse(localStorage.getItem("removeListLocal"));
  // console.log("removeListLocal", removeListLocal);
  var elements;
  // var removeList = removeListLocal;
  if (removeListLocal) {
    var removeList = removeListLocal;

    console.log(removeList);
    removeList.forEach((person) => {
      $(`.card-container.${person.nameNoSpaces}`).addClass(`selected ${person.nameNoSpaces}`);
      $(`.card-container.${person.nameNoSpaces} .goodbye`).text("Removed list");
      $(`
      <div class="name-list-entry ${person.nameNoSpaces}">
        <span class="x-off">X</span>
        <span class="name-list ${person.nameNoSpaces}">
        ${person.name} 
        </span>
      <div>  
        `).appendTo(".remove-list-names");
      elements = $(".name-list"); //generate list of names on remove list for copy button

      // x-off button
      $(".name-list-entry").click(function () {
        let classes = $(this).attr("class");
        let split = classes.split(" ");
        let nameNoSpaces = split[1];
        $(`.card-container.${nameNoSpaces} .goodbye`).text("Remove");
        $(`.card-container.${nameNoSpaces}`).removeClass("selected");
        // console.log("NameListremoveList before", removeList);
        removeList = removeList.filter((remove) => remove.nameNoSpaces !== nameNoSpaces);

        $(this).remove();
        elements = $(".name-list"); //generate list of names on remove list for copy button
        console.log("removeList", removeList);
        localStorage.setItem("removeListLocal", JSON.stringify(removeList));
      });
    });
  } else {
    var removeList = [];
  }

  // remove button
  $(".goodbye").click(function () {
    var cardContainer = $(this).closest(".card-container");
    var goodBye = $(this);
    var name = goodBye.closest(".card-content").find(".name").text();
    var nameNoSpaces = name.replace(/\s+/g, "");
    // var localStorageNames = { ...localStorage };
    var person = { name: name, nameNoSpaces: nameNoSpaces };
    // if card is selected
    if (cardContainer.hasClass("selected")) {
      cardContainer.removeClass("selected");
      goodBye.text("Remove");
      removeList = removeList.filter((remove) => remove.nameNoSpaces !== nameNoSpaces);
    }
    // card not yet selected
    else {
      // console.log("added 'slected' class");
      cardContainer.addClass(`selected ${nameNoSpaces}`);
      goodBye.text("Removed list");
      removeList.push(person);
    }

    // sorty a-z
    // removeList.sort((a, b) => a.nameNoSpaces.localeCompare(b.nameNoSpaces));
    $(".remove-list-names").empty();

    for (let i = 0; i < removeList.length; i++) {
      $(`
      <div class="name-list-entry ${removeList[i].nameNoSpaces}">
        <span class="x-off">X</span>
        <span class="name-list ${removeList[i].nameNoSpaces}">
        ${removeList[i].name} 
        </span>
      <div>  
        `).appendTo(".remove-list-names");
    }

    // x-off button
    $(".name-list-entry").click(function () {
      let classes = $(this).attr("class");
      let split = classes.split(" ");
      let nameNoSpaces = split[1];
      $(`.card-container.${nameNoSpaces} .goodbye`).text("Remove");
      $(`.card-container.${nameNoSpaces}`).removeClass("selected");
      // console.log("NameListremoveList before", removeList);
      removeList = removeList.filter((remove) => remove.nameNoSpaces !== nameNoSpaces);

      $(this).remove();
      elements = $(".name-list"); //generate list of names on remove list for copy button
      console.log("removeList", removeList);
      localStorage.setItem("removeListLocal", JSON.stringify(removeList));
    });

    elements = $(".name-list"); //generate list of names on remove list for copy button
    console.log("removeList", removeList);
    localStorage.setItem("removeListLocal", JSON.stringify(removeList));

    // console.log("localstorage", JSON.parse(localStorage.getItem("removeListLocal")));
    // $(this).css();
  });

  // copy button
  $(".copy-button").click(function () {
    if (elements) {
      let copiedText = "";
      elements.each(function () {
        // copiedText += $(this).text() + "\n";
        copiedText += $(this).text();
      });
      console.log("copiedText", copiedText);
      // Create a temporary input element to copy the text to the clipboard
      const tempInput = $("<textarea>");
      tempInput.val(copiedText);
      $("body").append(tempInput);
      // Select the contents of the temporary input element
      tempInput.select();
      // Copy the text to the clipboard
      document.execCommand("copy");
      // Remove the temporary input element from the DOM
      tempInput.remove();
      $(".copy-button").text("Copied");
      setTimeout(function () {
        $(".copy-button").text("Copy");
      }, 800);
    } else {
      console.log("no text");
    }
  });
});
// function removeFromRemoveList() {
//   console.log("removeFromRemoveList");
// }
