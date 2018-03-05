import React, { Component } from 'react'
import { Popover, NavBar, Icon } from 'antd-mobile';
import './style.scss'

const Item = Popover.Item;
export default class Header extends Component {
  state = {
    visible: true,
    selected: ''
    // ,
    // navflag: true
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    return (

          <NavBar
          className="nav-bar"
          rightContent={
            <Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Item key="4" value="scan" data-seed="logId">我的收藏</Item>),
                (<Item key="5" value="special" style={{ whiteSpace: 'nowrap' }}>播放记录</Item>),
                (<Item key="6" value="button ct">
                  <span style={{ marginRight: 5 }}>用户登录</span>
                </Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
              }}
              >
                <img className='top-menu-btn' src={require('../../static/images/966c7044844fb8ae4e5cff275c7d93e4.png')} alt=''/>
              </div>
            </Popover>
          }
          >
          <img className='common-logo' src={require('../../static/images/7757c57785d82e3c0e1910c780e101d8.png')} alt=''/>
          </NavBar>

    )
  }
}

 