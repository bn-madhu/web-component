import './App.css';
import MyWebComponent from './components/Mywebcomponent';
import HelloWorld from './components/HelloWorld';

function App(props) {
  return (
    <div className="App">
      {/* <MyWebComponent props={props} /> */}
      <hello-world-web-component name="Madhu"></hello-world-web-component>
    </div>
  );
}

export default App;
