import React, { Component } from "react";
import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";

class About extends Component {
  render() {
    return (
      <BaseLayout>
        <h1 className="title">Hello From About page</h1>
      </BaseLayout>
    );
  }
}

export default About;
