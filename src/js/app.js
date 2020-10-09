const $ = require("jquery");
const Handlebars = require("handlebars");

$(document).ready(function () {

  // INIZIO FUNZIONI

  // Funzione che genera la select.
  function printSelect(data) {

    // Creo array contenente gli autori dei dischi presenti nel database.
    var authors = [];

    for (var i = 0; i < data.length; i++) {

      if (!authors.includes(data[i].author)) {

        authors.push(data[i].author);

        // Stampo con handlebars le opzioni nella select.
        var source = $("#select-template").html();
        var template = Handlebars.compile(source);

        var context = {
          "author": data[i].author
        };

        var html = template(context);
        $("#select-author").append(html);
      }
    }
  }

  // Funzione che stampa tutti gli album con handlebars.
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

  // FINE FUNZIONI

  // INIZIO CODICE

  // Effettuo una chiamata ajax all'api che ho creato per ottenere le info
  // degli album.
  $.ajax(
    {
      "url": "http://localhost/php-ajax-dischi/api/server.php",
      "method": "GET",
      "success": function (data) {
        // Se il database ha contenuto, lo stampo e genero la select con gli autori presenti.
        if (data.length != 0) {
          renderAlbums(data);
          printSelect(data);

        // Altrimenti stampo errore.
        } else {
          renderError();
        }
      },
      "error": function (err) {
        alert("Errore!");

      }
    }
  );

  // FINE CODICE

  // INIZIO EVENTI

  // All'evento change sulla select, effettuo un'altra chiamata ajax.
  $("#select-author").change(
    function () {
      // Salvo il valore della select e pulisco la sezione albums.
      var authorValue = $(this).val();
      $(".albums").html("");

      $.ajax(
        {
          "url": "http://localhost/php-ajax-dischi/api/server.php",
          "data": {
            "author": authorValue
          },
          "method": "GET",
          "success": function (data) {
            renderAlbums(data);
          },
          "error": function (err) {
            alert("Errore!");
          }
        }
      );
    }
  );

  // FINE EVENTI

});
