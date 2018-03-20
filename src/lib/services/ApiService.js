class ApiService
{
  constructor(host, port)
  {
    this.host = host;
    this.port = port;
  }

  callEndpoint(endpoint, method, parameters)
  {
    const body      = JSON.stringify(parameters);

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
    );
  }
}

export default ApiService;
