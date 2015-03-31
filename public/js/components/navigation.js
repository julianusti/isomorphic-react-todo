import React from 'react';

let Navigation = React.createClass({
  render: function() {
    return (
      <div class="masthead clearfix">
        <div class="inner">
          <h3 class="masthead-brand">Cover</h3>
          <nav>
            <ul class="nav masthead-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
});

export default Navigation;