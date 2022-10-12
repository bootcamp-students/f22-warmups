const React = require('react');
let Hello =()=><h1>Hello</h1>;
let World =()=><h2>World!</h2>;
class Greet extends React.Component {
  render() {
    return <div><Hello /><World /></div>
  }
}