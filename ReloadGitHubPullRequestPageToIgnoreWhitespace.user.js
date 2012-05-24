// ==UserScript==
// @name        Reload GitHub Pull Request page to ignore whitespace
// @namespace   https://bitbucket.org/deadlydog/greasemonkeyscripts
// @description Reloads the GitHub Pull Request page, adjusting the URL to have the Diff ignore whitespace.
// @include     https://github.com/*/pull/*/files
// @exclude     https://github.com/*/pull/*/files?w=1
// @version     1.0
// ==/UserScript==

// Wipe out the head and body contents so that we don't wait for them to load before doing the redirect.
document.head.innerHTML='';
document.body.innerHTML='';

// Redirect to the URL we are at, with the special modifier attached that signals to ignore whitespace in the diffs.
window.location.href=window.location.href + '?w=1';
