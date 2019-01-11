// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .

document.addEventListener("DOMContentLoaded", function(event) {
  document.body.addEventListener("ajax:success", function(event) {
    var data = event.detail[0],
      status = event.detail[1],
      xhr = event.detail[2],
      $res = document.getElementById("results");
    $res.innerHTML = "";
    if (!data || data.items.length == 0) {
      $res.innerHTML = "<h3>Nothing found!</h3>";
      return;
    }
    var $list = document.createElement("DIV");

    $list.className = "list-group";
    for (var i = 0; i < data.items.length; i++) {
      var $a = document.createElement("A");
      $a.className = "list-group-item list-group-item-action";
      $a.setAttribute("target", "_blank");
      $a.setAttribute("href", data.items[i].html_url);
      $a.innerHTML = `<h3>${
        data.items[i].name
      } <span class="badge badge-light">${
        data.items[i].full_name
      }</span></h3> <p>${data.items[i].description}</p>`;
      $list.appendChild($a);
    }
    $res.appendChild($list);
  });
});
