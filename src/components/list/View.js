import React, { Component } from 'react'

import { ListView } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import axios from 'axios'
import NavMenu from '../navMenu/View'
import Header from '../header/View'
import Lists from '../lists/View'
import './style.css'

const NUM_SECTIONS = 40;
const NUM_ROWS_PER_SECTION = 40;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      list:[],
      dataSource,
      isLoading: true,
    };
    this.handleGetList = this.handleGetList.bind(this)
  }

  handleGetList(res) {
    genData();
    this.setState({
      list:res.data.data,
      dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
      isLoading: false,
    })
  }

  componentDidMount() {
    axios('/open/mob/subscribe/home/list.do?rtypes=2')
      .then(this.handleGetList)
  }

  onEndReached = (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    let data = this.state.list.reverse()
    let index = data.length - 1;
    const row = () => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <Lists value={obj}/>
      );
    };

    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        className="am-list sticky-list"
        useBodyScroll
        renderSectionWrapper={sectionID => (
          <StickyContainer
            key={`s_${sectionID}_c`}
            className="sticky-container"
            style={{ zIndex: 4 }}
          />
        )}
        renderSectionHeader={sectionData => (
          <Sticky>
            {({
              style,
            }) => (
              <div
                style={{
                  ...style,
                  zIndex: 3,
                  backgroundColor: 'green',
                  color: 'white',
                }}
              ><NavMenu/></div>
            )}
          </Sticky>
        )}
        renderHeader={() => <Header/>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        // pageSize={10}
        onScroll={() => { console.log('scroll'); }}
        scrollEventThrottle={200}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

