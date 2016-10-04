$(function () {
  console.log('Hi');
  console.log(window.location.pathname);
  
  var pattern = /blob\/master\/(.*)/
  var path = window.location.pathname.match(pattern)[1];

  // For `path`, ask the server for the analysis, and update the DOM with the analysis.
  var destination = "/metaborg/spoofax/blob/master/org.metaborg.core/src/main/java/org/metaborg/core/analysis/IAnalysisService.java";

  $('span:contains("org.metaborg.core.action.IActionService")').html('<a href="' + destination + '">IActionService</a>');
});
