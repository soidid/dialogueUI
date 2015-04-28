/** @jsx React.DOM */
var React = require('react/addons');

require('./Tag.css');

var Tag = React.createClass({
  
  getInitialState(){
    return {
      shouldShow: false
    }
  },

  _onToggleShow(){
    this.setState({
      shouldShow: !this.state.shouldShow
    });

  },
  render () {
    var {shouldShow} = this.state;
    var inner = shouldShow ? (
        <div>
          <div className="Tag-event">
            <div>2015/03/12 司法法制委員會質詢</div>
            <div className="Tag-quote">「總有個短、中、長程計畫；不需要修法的，先去處理，包括社會權的部分先給他們保障；第二個階段是訂定同志伴侶法；第三個階段再看看是不是能夠訂定同性婚姻法。是不是這樣？」</div>
            <div className="Tag-button">看全文</div>
          </div>
          <div className="Tag-event">
            <div>2014/12/22 司法法制委員會質詢</div>
            <div className="Tag-quote">大法官會議也做了解釋，婚姻家庭是整個憲法的保障，憲法不應該因為不同的人而有所歧視，而且，性別平等教育法中也規定，不可以因為性別的認同，而有所歧視，這些也都是法律的規定啊！</div>
          </div>
          <div className="Tag-event">
            <div>2014/12/18 司法法制委員會質詢</div>
            <div className="Tag-quote">我們看到很多國家都承認同性婚姻，他們甚至於可以去登記，如果他們在國外已經是合法登記的同性婚姻，今天他們到國內來，他們可不可以拿國外合法登記的結婚證書到國內來登記結婚？</div>
          </div>
        </div>):"";
    return (
      <div className="Tags">
          <div className="Tag">
              <div className="Tag-main"
                   onClick={this._onToggleShow}>
                 <div className="Tag-title">支持同性婚姻</div>
                 <div className="Tag-titleCount">12</div>
              </div>
              {inner}
          </div>
          <div className="Tag">
              <div className="Tag-main">
                 <div className="Tag-title">支持勞動人權</div>
                 <div className="Tag-titleCount">6</div>
              </div>
          </div>
          <div className="Tag">
              <div className="Tag-main">
                 <div className="Tag-title">支持國會轉播</div>
                 <div className="Tag-titleCount">1</div>
              </div>
          </div>
          
      </div>
          
    );
  }
});

module.exports = Tag;


