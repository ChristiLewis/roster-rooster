//PLACEHOLDER FOR HTML BUILDER
var stream = fs.createWriteStream(fileName);

stream.once('open', function(fd) {
  var html = buildHtml();

  stream.end(html);
});

//PLACEHOLDER FOR NODEMAILER FUNCTIONALITY

let configOptions = {
    host: "1.2.3.4",
    port: 465,
    secure: true,
    tls: {
        // must provide server name, otherwise TLS certificate check will fail
        servername: "example.com"
    }
}
