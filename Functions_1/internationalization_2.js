/**
 * Building on your solutions from the previous exercises, write a function
 * localGreet that takes a locale as input, and returns a greeting. The locale
 * allows us to greet people from different countries differently also when
 * they share the language, for example:
 */

function greet(langCode) {
  switch (langCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
    default: return 'N/A';
  }
}

function extractLanguage(locale) {
  return locale.slice(0, 2);
}

function extractRegion(locale) {
  return locale.slice(3, 5);
}

function localGreet(locale) {
  let lang = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(lang);
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

/**
 * Distinguish greetings for English speaking countries like the US, UK, Canada,
 * or Australia in your implementation, and feel free to fall back on the
 * language-specific greetings in all other cases, for example:
 */

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

/**
 * When implementing localGreet, make sure to re-use your extractLanguage,
 * extractRegion and greet functions from the previous exercises.
 * 
 * (If you're interested, you can find a list of locales here:
 * http://www.localeplanet.com/icu/iso639.html)
 */