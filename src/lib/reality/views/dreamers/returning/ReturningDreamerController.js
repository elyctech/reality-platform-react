class ReturningDreamerController
{
  logIn(event)
  {
    event.preventDefault();

    this.props.dreamerService.logIn(
      this.state.username,
      this.state.password
    ).then(
      (dreamer) =>
      {
        this.setState({
          "dreamer"  : dreamer
        });

        this.props.setDreamer(
          dreamer
        );
      }
    );
  }

  setUsername(event)
  {
    this.setState({
      "username" : event.target.value
    });
  }

  setPassword(event)
  {
    this.setState({
      "password" : event.target.value
    });
  }
}

export default ReturningDreamerController;
