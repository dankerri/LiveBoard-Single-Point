import React, { Component } from 'react';
import io from 'socket.io-client'
import QRCode from 'qrcode'
import styled from 'styled-components'

import theUrl from './config'

const socket = io(theUrl)

class App extends Component {
  constructor() {
    super()
    
    this.generateCode = this.generateCode.bind(this)
    
    this.state = {
      string: '',
      url: '',
      count: 0
    }
  
  }

  componentDidMount() {
    socket.on('updateCode', data=>{
      this.generateCode(data.code)
    })
  }

  generateCode (string){
    QRCode.toDataURL(string, (err, url) => {
      this.setState({
        string: string,
        url: url,
        count: this.state.count + 1
      })
    })
  }

  render() {
    return(
      <Div>
        <canvas id="canvas" hidden></canvas>
        <h1>长按图片保存</h1>
        <img src={this.state.url} />
        <h1>{this.state.string}</h1>
        <h5>更新次数{this.state.count}</h5>
      </Div>
    )
  }
}


const Div = styled.div`
  text-align: center;
  img {
    width: 80%;
    max-width: 20rem;
  }
`


export default App;
