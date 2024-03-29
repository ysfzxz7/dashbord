import './App.css';
import Aside from './componant/left/aside';
import Links from './componant/right/links';
import Nav from './componant/right/nav';
import Main from './componant/right/main';

function App() {
  return (
    <div className="App flex bg-gray-main">
      <Aside />
      <div className="">
        <Nav />
        <Links />
        <Main />
      </div>
    </div>
  );
}

export default App;
