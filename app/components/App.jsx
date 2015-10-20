import React, { Component } from 'react'
import _ from 'lodash';
import range from 'lodash/utility/range';
import { TransitionMotion, spring } from 'react-motion'
import RouteTransition from './RouteTransition'
import MasterNav from './MasterNav'

class App extends Component{
    render(){
        return <div className="App">
            <section className="MasterDetailGrid">
                <MasterNav />
                <div className="Detail">

                    <RouteTransition pathname={this.props.location.pathname} defaultStyles={{opacity: 0, scale: 0}}>
                        {this.props.children}
                    </RouteTransition>
                </div>
            </section>
        </div>;
    }
}

module.exports = App
