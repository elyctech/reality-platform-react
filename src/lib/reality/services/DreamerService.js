class DreamerService
{
  constructor(
    api
  ) {
    this.api      = api;
    this.dreamer  = Promise.resolve(null);
  }

  createAccount(
    username,
    password
  ) {
    return this.api.post(
      "dreamers",
      {
        username,
        password
      }
    ).then(
      (dreamer) =>
      {
        this.dreamer  = dreamer;
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
    return this.api.post(
      "dreamers/sessions",
      {
        username,
        password
      }
    ).then(
      (dreamer) =>
      {
        this.dreamer  = dreamer;

        return dreamer;
      }
    );
  }
}

export default DreamerService;
