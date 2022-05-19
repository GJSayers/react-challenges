import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import Content from './components/Content';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <Content />
      <UncontrolledForm />
      <SearchBar />
    
    </div>
  );
}

export default App;