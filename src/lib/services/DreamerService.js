class DreamerService
{
  constructor(
    apiService
  ) {
    this.apiService = apiService;
    this.dreamer    = Promise.resolve(null);
  }

  createAccount(
    username,
    password
  ) {
    return this.apiService.callEndpoint(
      "dreamers",
      "post",
      {
        username,
        password
      }
    ).then(
      (response) =>
      {
        this.dreamer  = response.json();

        return this.dreamer;
      }
    );
  }

  getDreamer()
  {
    //TODO If dreamer is null call the API
    return this.dreamer;
  }

  logIn(
    username,
    password
  ) {
    return this.apiService.callEndpoint(
      "dreamers/sessions",
      "post",
      {
        username,
        password
      }
    ).then(
      (response) =>
      {
        this.dreamer  = response.json();

        return this.dreamer;
      }
    );
  }
}

export default DreamerService;
