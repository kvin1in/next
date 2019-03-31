import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";

class Leader extends Component {
  static async getInitialProps({ query }) {
    const leaderId = query.id;
    let leader = {};

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${leaderId}`
      );
      leader = response.data;
    } catch (err) {
      console.log(err);
    }

    return { leader };
  }

  render() {
    const { leader } = this.props;
    return (
      <BaseLayout>
        <h1>Leader</h1>
        <h2>{leader.id}</h2>
        <h2>{leader.title}</h2>
      </BaseLayout>
    );
  }
}

export default withRouter(Leader);
