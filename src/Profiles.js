import React from "react";
import Profile from "./Profile";
import { Link, Route } from "react-router-dom";

export default function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/dwhddnjs">dwhddnjs</Link>
        </li>
        <li>
          <Link to="/profiles/homer">homer</Link>
        </li>
        <li>
          <Link to="/profiles/per1215">per1215</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세여</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}
