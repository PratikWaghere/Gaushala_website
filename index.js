function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en', // The default language of your website
      includedLanguages: 'en,hi,bn,te,ta,gu,ml,kn,mr,pa,ur,mar', // List of languages to include
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }

 
  