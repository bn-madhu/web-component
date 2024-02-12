import './App.css';
import MyWebComponent from './components/Mywebcomponent';
import HelloWorld from './components/HelloWorld';
import './HelloWorldWebComponent'

function App(props) {
  return (
    <div className="App">
      {/* <MyWebComponent props={props} /> */}
      {/* <hello-world-web-component name="Madhu"></hello-world-web-component> */}
      {/* <script src="./currentDate.js"></script> */}

      <h2>Today's Date</h2>
      The current date is: <current-date></current-date>
      {/* <current-date name="Wc-link"></current-date> */}
    </div>
  );
}

export default App;
