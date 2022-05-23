import "./App.css";
import css from "./App.module.css"
import Sidebar from "./components/Sidebar";
import Content from './components/Content';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import ClassCounter from './components/ClassCounter';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import ContentHooks from "./components/ContentHooks";

function App() {
  return (
    <div className="App">
      {/* Add your components here */}

      <div>
      <Sidebar />
      </div>

      {/* <div>
      <Content />
      </div> */}

      <div>
      {/* <UncontrolledForm /> */}
      </div>

      <div>
      {/* <SearchBar /> */}
      </div>

      {/* <div>
      <ControlledFormHooks />
      </div>

      <div>
      <UseStateWithArrays />
      </div> */}

      {/* <div>
       <UseStateWithObjects />
      </div>

      <div>
      <ClassCounter />
      </div> */}

      {/* <div>
      <UseEffectCounter />
      </div> */}

      {/* <div>
      <UseEffectCounterContainer />
      </div> */}

      <div>
        <ContentHooks />
      </div>

    </div>
  );
}

export default App;
