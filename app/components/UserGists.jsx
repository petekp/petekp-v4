import React, { Component } from 'react'
import $ from 'jquery'

class UserGist extends Component{
  getInitialState: () => {
    return (
      username: '',
      lastGistUrl: ''
    )
  }

  componentDidMount: () => {
    $.get(this.props.source, function(result) {
      var lastGist = result[0]
      if this.isMounted()
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        })
      
    }.bind(this))
  }

  render: () => {
    return (
      <div>
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    )
  }
}

module.exports = UserGist
