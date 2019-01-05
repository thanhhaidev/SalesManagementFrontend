import React, { PureComponent, Fragment } from "react";
import { Menu, Icon, Layout, Avatar, Popover, Badge } from "antd";
import classnames from "classnames";
import "./styles.css";

const { SubMenu } = Menu;

class Header extends PureComponent {
  handleClickMenu = e => {
    //e.key === 'SignOut' && this.props.onSignOut()
    console.log(e);
  };
  render() {
    const { fixed, collapsed } = this.props;

    const rightContent = [
      <Menu key="user" mode="horizontal" onClick={this.handleClickMenu}>
        <SubMenu
          title={
            <Fragment>
              <span style={{ color: "#999", marginRight: 4 }}>Hi</span>
              <span>Admin</span>
              <Avatar
                style={{ marginLeft: 8 }}
                src="http://localhost:3000/upload/avatars/test.jpg"
              />
            </Fragment>
          }
        >
          <Menu.Item key="SignOut">Sign out</Menu.Item>
        </SubMenu>
      </Menu>
    ];

    rightContent.unshift(
      <Popover
        placement="bottomRight"
        trigger="click"
        key="notifications"
        overlayClassName="notificationPopover"
        getPopupContainer={() => document.querySelector("#layoutHeader")}
        content={
          <div className="notification">
            <div className="clearButton">Clear notifications</div>
          </div>
        }
      >
        <Badge count="4" dot offset={[-10, 10]} className="iconButton">
          <Icon className="iconFont" type="bell" />
        </Badge>
      </Popover>
    );

    return (
      <Layout.Header
        className={classnames("header", {
          fixed: fixed,
          collapsed: collapsed
        })}
        id="layoutHeader"
      >
        <div className="button">
          <Icon
            type={classnames({
              "menu-unfold": collapsed,
              "menu-fold": !collapsed
            })}
          />
        </div>

        <div className="rightContainer">{rightContent}</div>
      </Layout.Header>
    );
  }
}

export default Header;
