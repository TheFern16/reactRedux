import React from 'react';

var div = React.dom.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
  render: function() {
    const style = { color: this.props.color }
    return (
      <div>
        <h1 style={ style }></h1>
          { this.props.title }
      </div>
    )
  }
});

export default MyTitle;