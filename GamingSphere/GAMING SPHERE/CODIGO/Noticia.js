function traduzir() {
    const url = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyB5JZgyZejS-IARfcr9h9D7xKJbSA03Xxk"
    const textoTraduzir = document.getElementById('texto-traduzir').value;
    const data = {
      q: textoTraduzir,
      target: 'en',
      source: 'pt'
    };
    jQuery.post(url, data, function(response) {
      const textoTraduzido = response.data.translations[0].translatedText;
      document.getElementById('texto-traduzir').innerHTML = textoTraduzido;
    });
  }
  