import Link from "next/link";
import React, { Component } from "react";

class Header extends Component {
  render() {
    const title = this.props.title;
    return (
      <React.Fragment>
        <p>{title}</p>
        <Link href="/">
          <a>Главная</a>
        </Link>
        <Link href="/about">
          <a>Об Академии</a>
        </Link>
        <Link href="/news">
          <a>Новости</a>
        </Link>
        <Link href="/about/leaders">
          <a>Руководство</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Header;
