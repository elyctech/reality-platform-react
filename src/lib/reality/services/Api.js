class Api
{
  constructor(host, port)
  {
    this.host = host;
    this.port = port;
  }

  callEndpoint(endpoint, method, parameters)
  {
    const body  = JSON.stringify(parameters);

    return window.fetch(
      `${this.host}:${this.port}/${endpoint}`,
      {
        "body"    : body,
        "headers" : new Headers({
          "Content-Length"  : body.length,
          "Content-Type"    : "application/json"
        }),
        "method"  : method
      }
    ).then(
      (response) =>
      {
        //TODO Check status code
        return response.json();
      }
    );
  }

  delete(endpoint, parameters)
  {
    return this.callEndpoint(
      endpoint,
      "delete",
      parameters
    );
  }

  get(endpoint, parameters)
  {
    return this.callEndpoint(
      endpoint,
      "get",
      parameters
    );
  }

  post(endpoint, parameters)
  {
    return this.callEndpoint(
      endpoint,
      "post",
      parameters
    );
  }

  put(endpoint, parameters)
  {
    return this.callEndpoint(
      endpoint,
      "put",
      parameters
    );
  }
}

export default Api;
