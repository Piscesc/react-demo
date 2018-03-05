import React, { Component } from 'react'

import './style.scss'

export default class NavMenu extends Component {
  state = {
    navflag: true
  };
  handleSwitch() {
    this.setState({
      navflag:!this.state.navflag
    });
  }
  render() {
    return (
        <div className='nav-menu'>
          <div className={ this.state.navflag ? 'nav-menu-one':'nav-menu-two'}>
            <div className={ this.state.navflag ? 'nav-line':'nav-box'}>
              
                  <a className="nav_item" href="/index">首页</a>
                  <a className="nav_item" href="/category/ted">TED</a>
                  <a className="nav_item" href="/category/ocw">国际名校</a>
                  <a className="nav_item" href="/category/cuvocw">国内名校</a>
                  <a className="nav_item" href="/category/speech">演讲</a>
                  <a className="nav_item" href="/category/khan">可汗学院</a>
                  <a className="nav_item" href="/category/dengxiachen">灯下尘</a>
                  <a className="nav_item" href="/category/quweiketang">趣味课堂</a>
                  <a className="nav_item" href="/category/kesuinibian">课随你变</a>
                  <a className="nav_item" href="/category/zhishigongxiang">知识共享</a>
                  <a className="nav_item" href="/category/spcollection">态度公开课</a>
              
            </div>
            <div className='container'>
              <span className='more-btn' onClick={this.handleSwitch.bind(this)}>^</span>
            </div>
          </div>
        </div>
    )
  }
}

 