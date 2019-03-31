import React, { Component } from "react";
import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";
import "../styles/main.scss";
import SuperComponent from "../components/SuperComponent";
import axios from "axios";

class Index extends SuperComponent {
  static async getInitialProps() {
    let userData = {};
    try {
      const res = await axios.get(
        "http://jsonplaceholder.typicode.com/todos/1"
      );
      userData = res.data;
    } catch (err) {
      console.log(err);
    }

    return { userData };
  }
  constructor(props) {
    super(props);

    this.state = {
      title: "I am index"
    };
  }

  render() {
    const { title } = this.state;
    const { userData } = this.props;
    return (
      <BaseLayout>
        <h1 className="title fromSass">{title}</h1>
        <h2>{userData.title}</h2>
      </BaseLayout>
    );
  }
}

export default Index;
