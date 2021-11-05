(function() {
    var span = document.querySelector('footer>span');
    if (span) {
      span.innerText = 'Flutter 2.5.3 • 2021-10-15 20:33 • 18116933e7 • stable';
    }
    var sourceLink = document.querySelector('a.source-link');
    if (sourceLink) {
      sourceLink.href = sourceLink.href.replace('/master/', '/18116933e7/');
    }
  })();