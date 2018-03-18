import fs   from "fs";

import React          from "react";
import ReactDOMServer from "react-dom/server";

import {
  StaticRouter
} from "react-router";

import App  from "./App";

export default (url) =>
{
  const context = {};

  const html = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      {
        "location"  : url,
        "context"   : context
      },
      React.createElement(
        App
      )
    )
  );

  let result  = {};

  if (context.url)
  {
    result  = {
      "status"  : 301,
      "head"    : {
        "Location"  : context.url
      }
    };
  }
  else
  {
    const layout    = fs.readFileSync("./dist/index.html"),
          location  = layout.indexOf("</div>");

    result  = {
      "body"  : layout.slice(0, location).slice(0, -1) + html + layout.slice(location)
    };
  }

  return result;
};
