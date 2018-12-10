import React, { Component, Fragment } from "react";
import { Button, Form, Icon, Input, Alert } from "antd";
import { connect } from "react-redux";
const FormItem = Form.Item;
import "./styles.css";
import logo from "../../../assets/logo.png";
import { signInAction } from "../../../actions/index";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signInAction(values, this.props.hashHistory);
      }
    });
  };

  errorMessage() {
    if (this.props.errorMessage) {
      return <Alert message={this.props.errorMessage} type="error" showIcon />;
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <div className="form">
          <div className="logo">
            <img alt="logo" src={logo} />
          </div>
          {this.errorMessage()}
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "Please input your username!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="user"
                      style={{
                        color: "rgba(0,0,0,.25)"
                      }}
                    />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your Password!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="lock"
                      style={{
                        color: "rgba(0,0,0,.25)"
                      }}
                    />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.error };
};

const WrappedNormalLoginForm = Form.create()(Login);

export default connect(
  mapStateToProps,
  { signInAction }
)(WrappedNormalLoginForm);
