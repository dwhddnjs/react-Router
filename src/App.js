import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import Product from "./Product";
import History from "./History";
import WithRouters from "./WithRouters";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/product">상품</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={History} />
        <WithRouters />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재 하지 않소</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
