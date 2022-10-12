const React = require('react');
//add Hello, World and Greet components here. refer to description if you are stuck. good luck :)
// Function hello that returns the render
function Hello(){
  return(
  <h1>
  Hello
  </h1>
  )
}
// Class Greet that has the render function
class Greet extends React.Component {
  render(){
    return(   
      <div>
      < Hello />
      < World />
      </div>
      )
  }
}
// Function World that renders a H2 World
function World(){
  return(
  <h2>
  World!
  </h2>
  )
}
