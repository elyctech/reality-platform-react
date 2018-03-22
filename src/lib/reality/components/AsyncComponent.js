import React  from "react";

class AsyncComponent extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state  = {
      "asyncLoaded" : false
    };

    this.loadComponent();
  }

  loadComponent()
  {
    this.load()
    .then(
      () =>
      {
        this.setState({
          "asyncLoaded" : true
        })
      }
    );
  }

  load()
  {
    return Promise.resolve();
  }

  render()
  {
    let component;

    if (this.state.asyncLoaded)
    {
      component = this.asyncRender();
    }
    else
    {
      component = this.props.children;
    }

    return component;
  }
}

export default AsyncComponent;