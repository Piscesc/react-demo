import React, { Component } from 'react'

import './style.scss'

export default class Lists extends Component{
  render() {
    let obj = this.props.value
    let a = {
      image:1,
      contentTitle:1,
      contentDesc:1,
      viewCount:10000
    }
    obj = obj ? obj : a
    const counts= (obj.viewCount/10000).toFixed(1)
    return (
      <div>
        <section>
          <a href="/movie?plid=MC82BCQAN&rid=MC8U8L3IB">
            <div>
              <img src={obj.image} className="article_img"/>
              <div className="article_length">
                <span className="article_length_value"></span>
              </div>
            </div>
          </a>
          <div className="article_info">
            <div className="article_time">2017/01/5</div>
            <a href="" className="article_link">
              <div className="article_title">{obj.contentTitle}</div>
              <div className="article_desc">{obj.contentDesc}</div>
            </a>
            <div className="article_btm">
              <span className="article_playtimes">{counts}万人观看</span>
              <span className="share_btn"></span>
            </div>
          </div>
        </section>
      </div>
    )
  }
}