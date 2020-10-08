    <!-- TEMPLATE ALBUM -->
    <script id="album-template" type="text/x-handlebars-template">
      <div class="album">
        <div class="album-copertina">
          <img src="{{poster}}" alt="copertina album">
        </div>
        <h2>{{title}}</h2>
        <div class="album-autore">{{author}}</div>
        <div class="album-anno">{{year}}</div>
      </div>
    </script>
    <!-- /TEMPLATE ALBUM -->

    <!-- TEMPLATE ERRORE -->
    <script id="error-template" type="text/x-handlebars-template">
      <div class="errore">
        <h2>Non ci sono album!</h2>
      </div>
    </script>
    <!-- /TEMPLATE ERRORE -->

    <!-- TEMPLATE SELECT -->
    <script id="select-template" type="text/x-handlebars-template">
      <option value="{{author}}">{{author}}</option>
    </script>
    <!-- /TEMPLATE SELECT -->

    <script src="dist/app.js" charset="utf-8"></script>
    
  </body>
</html>
