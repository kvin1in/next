import React, { Component } from "react";
import BaseLayout from "./layouts/BaseLayout";

class SuperComponent extends Component {
  constructor(props) {
    super(props);
    this.somVar = "Just var";
  }

  alertName(title) {
    alert(title);
  }

  render() {
    return (
      <BaseLayout>
        <h1 className="title ">Hello From Index page</h1>
      </BaseLayout>
    );
  }
}

export default SuperComponent;
