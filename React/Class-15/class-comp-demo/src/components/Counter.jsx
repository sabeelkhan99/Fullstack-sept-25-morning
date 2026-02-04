import { Component } from "react";

class Counter extends Component{
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCountHandler = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrementCountHandler = () => {
        this.setState({ count: this.state.count - 1 });
    }

    componentDidMount() {
        console.log('Mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`Prev Count: ${prevState.count}`);
        console.log(`Current Count: ${this.state.count}`);
        console.log('component updated');
    }

    render() {
        console.log('render');
        return <div>
            <h2>Count: {this.state.count}</h2>
            <button onClick={this.incrementCountHandler}>++</button>
            <button onClick={this.decrementCountHandler}>--</button>
        </div>
    }
}

export default Counter;

