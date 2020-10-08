const $ = require("jquery");
const Handlebars = require("handlebars");

$(document).ready(function () {

  // Funzione che genera la select.
  function printSelect(authors) {

    var source = $("#select-template").html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < authors.length; i++) {

      var context = {
        "author": authors[i]
      };

      var html = template(context);
      $("#select-author").append(html);
    }
  }

  // Funzione che stampa i dischi con handlebars.
  function renderAlbums(data) {

    var source = $("#album-template").html();
    var template = Handlebars.compile(source);

    var authors = [];
    for (var i = 0; i < data.length; i++) {

      authors.push(data[i].author);

      var context = {
        "poster": data[i].poster,
        "title": data[i].title,
        "author": data[i].author,
        "year": data[i].year
      };

      var html = template(context);
      $(".albums").append(html);
    }

    printSelect(authors);
  }

  // Funzione che stampa l'errore.
  function renderError() {

    var source = $("#error-template").html();
    var template = Handlebars.compile(source);

    var html = template();
    $(".albums").append(html);
  }

  // Funzione che filtra gli autori.
  function filterAuthors(data, authorValue) {
    if (authorValue == "All") {

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
    } else {

      for (var i = 0; i < data.length; i++) {
        if (authorValue == data[i].author) {

          var source = $("#album-template").html();
          var template = Handlebars.compile(source);

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
    }
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

  // 2. All'evento change sulla select, effettuo un'altra chiamata ajax.
  $(document).on("change", "#select-author",
    function () {
      var authorValue = $(this).val();
      $(".albums").html("");
      $.ajax(
        {
          "url": "http://localhost/php-ajax-dischi/api/server.php",
          "method": "GET",
          "success": function (data) {
            if (data.length != 0) {
              filterAuthors(data, authorValue);
            } else {
              renderError();
            }
          },
          "error": function (err) {
            alert("Errore!");
          }
        }
      );
    }
  );

});
