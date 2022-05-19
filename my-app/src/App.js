import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import Content from './components/Content';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <div>
      <Sidebar />
      </div>
      
      <div>
      <Content />
      </div>
      
      <div>
      {/* <UncontrolledForm /> */}
      </div>
      
      <div>
      {/* <SearchBar /> */}
      </div>
      <div>
      <ControlledFormHooks />
      </div>
      <div>
      <UseStateWithArrays />
      </div>
      
    
    </div>
  );
}

export default App;