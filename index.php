<?php
include "db.php";
include "partials/head.php";
?>



  <body>
    <div class="container">
      <?php foreach ($database as $album) { ?>
        <div class="album">
          <img src="<?php echo $album["poster"]; ?>" alt="copertina album">
          <h2><?php echo $album["title"]; ?></h2>
          <p><?php echo $album["author"]; ?></p>
          <span><?php echo $album["year"]; ?></span>
        </div>
      <?php } ?>
    </div>
  </body>
</html>
