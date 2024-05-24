<script>
  // Función para cargar el tweet
  function cargarTweet() {
    // ID del tweet
    var tweetId = '1791314727919861760Subrosa_b';
    
    // Crear el widget de Twitter
    twttr.widgets.createTweet(
      tweetId,
      document.getElementById('tweetContainer')
    );
  }

  // Llamar a la función para cargar el tweet al cargar la página
  window.onload = cargarTweet;
</script>
