var i = 0;

function spamton(){
  i = 0;

  var htmlBody = HtmlService.createHtmlOutput("<!DOCTYPE html><html>  <head>    <base target=\"_top\">  </head>  <body>    <h1>    PUT TEXT HERE " + i+ "   </h1>       </p>    <img src=\"PUT DIRECT IMAGE LINK\">  </body></html>").getContent();;

  var emailAddr = '######@gmail.com'

  while (i < 15){
    MailApp.sendEmail({
      to: emailAddr,
      subject:'SUBJECT OF EMAIL' + i,
      htmlBody: htmlBody,
      name: 'NAME OF SENDER'
    });

    var htmlBody = HtmlService.createHtmlOutput("<!DOCTYPE html><html>  <head>    <base target=\"_top\">  </head>  <body>    <h1>    PUT TEXT HERE " + i+ "   </h1>       </p>    <img src=\"PUT DIRECT IMAGE LINK\">  </body></html>").getContent();

    i++;
  }
}
