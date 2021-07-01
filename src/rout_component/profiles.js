import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';

function Profiles() {
  return (
        <>       
        <h3>유저목록 : </h3>
        <ul>
            <li>
                <Link to="/profiles/Leemit">Leemit</Link>
            </li>
            <li>
                <Link to="/profiles/gildong">Gildong</Link>
            </li>
        </ul>

        <Route path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요</div>}/>

        <Route path="/profiles/:username" component={Profile}/>
        </>
    );
}

export default Profiles;
