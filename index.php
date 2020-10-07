<?php
include "db.php";
include "partials/head.php";
?>



  <body>
    <div class="container">
      <?php foreach ($database as $album) { ?>
        <div class="album">
          <img src="<?php echo $album["poster"]; ?>" alt="copertina album">
        </div>
      <?php } ?>
    </div>
  </body>
</html>
