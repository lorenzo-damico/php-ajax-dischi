const $ = require("jquery");
const Handlebars = require("handlebars");

$(document).ready(function () {

  // Funzione che stampa i dischi con handlebars.
  function renderAlbums(data) {

    var source = $("#album-template").html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < data.length; i++) {

      var context = {
        "poster": data[i].poster,
        "title": data[i].title,
        "author": data[i].author,
        "year": data[i].year
      };

      var html = template(context);
      $(".albums").append(html);
    }
  }

  // Funzione che stampa l'errore.
  function renderError() {

    var source = $("#error-template").html();
    var template = Handlebars.compile(source);

    var html = template();
    $(".albums").append(html);
  }

  // 1. Effettuo una chiamata ajax all'api che ho creato per ottenere le info
  //    degli album.
  $.ajax(
    {
      "url": "http://localhost/php-ajax-dischi/api/server.php",
      "method": "GET",
      "success": function (data) {
        if (data.length != 0) {
          renderAlbums(data);
        } else {
          renderError();
        }
      },
      "error": function (err) {
        alert("Errore!");

      }
    }
  );

});
