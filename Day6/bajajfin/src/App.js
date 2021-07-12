import logo from './logo.svg';
import './App.css';
import HookCounter from './hooks/HookCounter'
import HookCounterTwo from './hooks/HookCounterTwo'
import ObjectHook from './hooks/ObjectHook'
import DocTitle from './hooks/DocTitle'
import PostHook from './hooks/PostHook'

function App() {
  
  return (
    <div className='App'>
      
      <PostHook />

      {/* <DocTitle /> */}

      {/* <ObjectHook /> */}
      {/* <HookCounterTwo /> */}
    </div>
  );
}

export default App;
