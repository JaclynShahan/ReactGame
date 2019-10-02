import React, { Component } from 'react';
import './board.css'


class Easy extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <div className="board">
                    <div className="s1">1</div>
                    <div className="s2">2</div>
                    <div className="s3">3</div>
                    <div className="s4">4</div>
                    <div className="s5">5</div>
                    <div className="s6">6</div>
                    <div className="s7">7</div>
                    <div className="s8">8</div>
                    <div className="s9">9</div>
                </div>
            </div>
        )
    }
}

export default Easy;