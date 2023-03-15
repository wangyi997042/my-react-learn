
import React, { useState, Component } from "react";

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
//   useHistory,
//   useLocation,
//   useRouteMatch,
//   useParams,
//   withRouter,
//   Prompt,
// } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
  withRouter,
} from "./k-react-router-dom";



import './index.less';

import HomePage from "./page/HomePage";
import Page404 from "./page/404";
import LoginPage from "./page/LoginPage";
import UserPage from "./page/UserPage";
import { Button } from "antd";

function RouterPage() {
  const [state, setState] = useState(1);

  return <div>
    <Button onClick={() => setState(state + 1)}>{state}</Button>
    <Router>
      <Link to='/'> 首页 </Link>
      <Link to='/user'> 用户 </Link>
      <Link to='/login'> 登陆 </Link>
      <Link to={`/product/123?a=${state}`}> 商品 </Link>
      <Link to={`/product1/123?a=${state}`}> 商品1 </Link>

      <Switch>
        <Route
          path="/"
          exact
          children={children}
        >
        </Route>
        {/* <Redirect from="/user" to="/login" /> */}
        <Route path="/user" component={UserPage} />
        <Route path="/login" component={LoginPage} />
        <Route path={`/product/:id`} render={() => <Product />} />
        <Route path={`/product1/:id`} render={() => <Product2 />} />
        <Route component={Page404} />
      </Switch>
    </Router>
  </div>


}

function children(props) {
  console.log("children props", props);

  return <div>children</div>;
}

function Product() {

  const { params, url } = useRouteMatch();
  const ppp = useParams();
  const uLoc = useLocation()
  const uHis = useHistory()
  const { id } = params;
  console.log(ppp)
  console.log(uHis)
  console.log(uLoc)

  return (
    <div>
      <h1>Search-{id}</h1>
      <Link to={url + "/detail"}>详情</Link>
      <Route path={url + "/detail"} component={Detail} />
    </div>
  )
}


class Product1 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {/* <h1>search-{id}</h1> */}
        2
      </div>
    )
  }
}

const Product2 = withRouter(Product1)

const Detail = () => {
  return (
    <div>Detail</div>
  )
}
export default RouterPage;