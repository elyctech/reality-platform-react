const exec  = require("child_process").exec;
const fs    = require("fs");
const http  = require("http");
const url   = require("url");

const renderServerSideModule  = require.resolve("./renderServerSide");

http.createServer(
  (request, response) =>
  {
    const parsedUrl = url.parse(request.url);

    const filePath  = "./dist" + parsedUrl.pathname;

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile())
    {
      response.end(
        fs.readFileSync(filePath)
      );
    }
    else
    {
      global.window = {
        "location"  : parsedUrl
      };

      delete require.cache[renderServerSideModule];
      const  renderServerSide  = require("./renderServerSide");

      const result  = renderServerSide(request.url);

      if (result.status || result.head)
      {
        response.writeHead(
          result.status || 200,
          result.head || {}
        );
      }

      if (result.body)
      {
        response.write(
          result.body
        );
      }

      response.end();
    }
  }
).listen(8080, "localhost",
  () =>
  {
    console.log("Listening on http://localhost:8080/");
  }
);
