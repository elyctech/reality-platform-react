class NewDreamerController
{
  createAccount(event)
  {
    event.preventDefault();

    this.props.dreamerService.createAccount(
      this.state.username,
      this.state.password
    ).then(
      (dreamer) =>
      {
        this.props.flashMessageService.queueMessage(
          "Successfully created Dreamer account!",
          "success"
        );

        this.setState({
          "signedUp"  : true
        });
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

export default NewDreamerController;
