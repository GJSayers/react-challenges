import "./App.module.css";
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
import HTTPRequests from "./components/HTTPRequests";
import HTTPPost from "./components/HTTPPost";
import HTTPHooks from "./components/HTTPHooks";
import ContentAPI from "./components/ContentAPI";
// import PostItemAPI from "./components/PostItemAPI";

function App() {
  return (
    <div className="{css.App}">
      {/* Add your components here */}
        <Sidebar / >
        {/* <Content / >
        <UncontrolledForm /> 
        <SearchBar / >
        <ControlledFormHooks / >
        <UseStateWithArrays / >
        <UseStateWithObjects / >
        <ClassCounter / >
        <UseEffectCounter / >
        <UseEffectCounterContainer / >
        <ContentHooks / >
        <HTTPRequests / >
        <HTTPPost / >
        <HTTPHooks / > */}
        <ContentAPI / >
        {/* <PostItemAPI / > */}
      
    </div>
  );
}

export default App;
