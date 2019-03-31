import React, { Component } from "react";
import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";
import { Link } from "../routes";
import axios from "axios";

class Leaders extends Component {
  static async getInitialProps() {
    let leaders = [];
    try {
      const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
      leaders = res.data;
    } catch (err) {
      console.log(err);
    }
    return { leaders: leaders.splice(0, 10) };
  }

  renderLeaders(leaders) {
    return leaders.map((l, index) => {
      return (
        <li key={index}>
          <Link route={`/about/leader/${l.id}`}>
            <a>
              {l.id} - {l.title}
            </a>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { leaders } = this.props;
    return (
      <BaseLayout>
        <h1 className="title">Hello From Leaders</h1>
        <ul>{this.renderLeaders(leaders)}</ul>
      </BaseLayout>
    );
  }
}

export default Leaders;
