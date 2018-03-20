class MainController
{
  load()
  {
    const promises  = [],
          state     = {};

    promises.push(
      this.props.dreamerService.getDreamer()
      .then(
        (dreamer) =>
        {
          state.dreamer = dreamer;
        }
      )
    );

    promises.push(
      new Promise(
        (resolve, reject) =>
        {
          setTimeout(resolve, 1500);
        }
      )
    );

    return Promise.all(promises).then(
      () =>
      {
        this.setState(state);
      }
    );
  }

  setDreamer(dreamer)
  {
    this.setState({
      "dreamer" : dreamer
    });
  }
}

export default MainController;
