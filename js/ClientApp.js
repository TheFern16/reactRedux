import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var div = React.DOM.div;

var MyFirstComponent = React.createClass({
  render: function() {
    return (
      <div>
        <MyTitle title="props are cool" color='rebeccapurple' />
        <MyTitle title="props are cool" color='mediumaquamarine' />
        <MyTitle title="props are cool" color='peru' />
      </div>
    )
  }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));

