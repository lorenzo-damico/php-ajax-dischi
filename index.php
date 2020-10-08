<!--
Attraverso l’utilizzo di AJAX: al caricamento della pagina ajax chiederà
attraverso una chiamata i dischi a php e li stamperà attraverso handlebars.

Bonus:
Attraverso un’altra chiamata ajax, filtrare gli album per artista
-->

<?php
include "partials/head.php";
include "partials/header.php";
?>


    <main>
      <div class="container">
        <select id="select-author">
          <option value="All">All</option>

        </select>
        <div class="albums">







        </div>
      </div>
    </main>

<?php include "partials/template.php" ?>
