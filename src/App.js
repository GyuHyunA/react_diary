import './App.css';
import { Route, Link } from 'react-router-dom';
import About from './rout_component/about';
import Home from './rout_component/home';
import Profiles from './rout_component/profiles';
import Queryabout from './rout_component/queryabout';
import UseStateA from './usestatecomponent/useState-a';
import PropsA from './props/props-a';




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
        <li>
          <Link to="/queryabout"> 쿼리 </Link>
        </li>
        <li>
          <Link to="/profiles"> 프로필 목록 </Link>
        </li>

        <hr />

        <li>
          <Link to="/usestateA"> UseState 연습 </Link>
          <Route Path="/usestateA" component={UseStateA} />
        </li>

        <li>
          <Link to="/propsA"> Props 연습 </Link>
        </li>

      </ul>

      <hr />
      <Route path="/" component={Home} exact={true} /> {/* exact={true} ==> 경로가 완전히 같을 때만 컴포넌트를 보여줌 */}
      <Route path="/about" component={About} />
      <Route path="/queryabout" component={Queryabout} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/propsA" component={PropsA}/>
    </div>


  );
}

export default App;
