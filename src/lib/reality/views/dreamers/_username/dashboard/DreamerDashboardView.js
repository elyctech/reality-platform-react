import React  from "react";

class DreamerDashboard extends React.Component
{
  render()
  {
    //TODO Make sure props dreamer and URI dreamer are the same
    return (
      <h1>{this.props.dreamer.username}'s Dashboard</h1>
    );
  }
}

export default DreamerDashboard;
