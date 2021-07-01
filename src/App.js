import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import About from './rout_component/about';
import Home from './rout_component/home';
import Profile from './rout_component/Profile';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/"> 홈 </Link>
        </li>
        <li>
          <Link to="/about"> 소개 </Link>
        </li>
        
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true}/> {/* exact={true} ==> 경로가 완전히 같을 때만 컴포넌트를 보여줌 */}
      <Route path="/about" component={About}/>
      <Route path="/profiles/:username" component={Profile}/>
    </div>
  );
}

export default App;
