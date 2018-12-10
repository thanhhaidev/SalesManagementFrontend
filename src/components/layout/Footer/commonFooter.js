import React, { Component } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

class commonFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        Thanh Hai Dev - 2018 - Sales Management
      </Footer>
    );
  }
}

export default commonFooter;
