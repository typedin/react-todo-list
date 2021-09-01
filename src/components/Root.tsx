import App from "./App";
import React from "react";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NoMatch from "../pages/NoMatch";
import BlogPost from "../pages/BlogPost";
import NavigationBar from "./NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Root: React.FC<{}> = () => {
  const routes = [
    { path: "/", name: "Home", Component: App, exact: true },
    { path: "/about", name: "About", Component: About, exact: false },
    { path: "/contact", name: "Contact", Component: Contact, exact: false },
    { path: "/blog", name: "Blog", Component: Blog, exact: true },
    { path: "/blog/:id", name: "Post", Component: BlogPost, exact: false },
    { path: "*", name: "No Match", Component: NoMatch, exact: false },
  ];

  return (
    <Router>
      <div className="min-height-screen bg-gray-100">
        <NavigationBar />
        <div className="content">
          <Switch>
            {routes.map(({ path, exact, Component }) => (
              <Route key={path} exact={exact} path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Root;
