var connect = require('connect');
var serve_static = require('serve-static');

var app = connect();
var static_handler = serve_static(
  'public',
  {
    'extensions': ['html', 'htm']
  }
);

app.use(static_handler);

var port = process.env['PORT'] || 3000;
app.listen(port);
console.log("Listening on " + port);

