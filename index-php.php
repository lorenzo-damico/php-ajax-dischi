<!--
Utilizzare:
Html, Sass, PHP
Stampiamo i dischi solo con l’utilizzo di PHP, che stampa direttamente
i dischi in pagina: al caricamento della pagina ci saranno tutti i dischi
(vedi screenshot). In allegato trovate anche il database fake da utilizzare
-->

<?php
include "db.php";
include "partials/head.php";
include "partials/header.php";
?>

    <main>
      <div class="container">
        <div class="albums">
          <?php if (!empty($database)) { ?>
            <?php foreach ($database as $album) { ?>
              <div class="album">
                <div class="album-copertina">
                  <img src="<?php echo $album["poster"]; ?>" alt="copertina album">
                </div>
                <h2><?php echo $album["title"]; ?></h2>
                <div class="album-autore"><?php echo $album["author"]; ?></div>
                <div class="album-anno"><?php echo $album["year"]; ?></div>
              </div>
            <?php } ?>
          <?php } else { ?>
            <div class="errore">
              <h2>Non ci sono album!</h2>
            </div>
          <?php } ?>
        </div>
      </div>
    </main>


  </body>
</html>
