import './App.css';
import Aside from './componant/left/aside';
import Links from './componant/right/links';
import Nav from './componant/right/nav'
import Main from './componant/right/main'

function App() {
  return (
    <div className="App flex">
        <Aside />
            <Nav />
            <Links />
            <Main />
    </div>
  );
}

export default App;
