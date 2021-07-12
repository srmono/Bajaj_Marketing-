import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent'
import LifeCycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo'
import Person from './components/Person'
import ErrorBoundary from './components/ErrorBoundary'
import PostList from './components/PostList'

function App() {
  
  return (
    <div className='App'>

      {/* <PostList /> */}
      
      {/* <ErrorBoundary>
          <Person name="venkat" /> 
      </ErrorBoundary>

      <ErrorBoundary>
          <Person name="shreyas"/>
      </ErrorBoundary> */}

      

      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}

      {/* <Message /> */}
      {/* <Welcome prof="engineer" name="Shreyas" />
      <Greet name="Venkat" />
      <Greet name="Shreyas" />
      <Greet name="React" /> */}
    </div>
  );
}

export default App;
