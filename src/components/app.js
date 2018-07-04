import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withRouter, Switch, Route } from "react-router-dom";
import { Layout } from "../components/common";
import { Home, NotFound, Search, Contact, Store } from "../components";

const styles = {
  fontFamily: "Arial",
  textAlign: "center"
};

const App = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 250, exit: 0 }; // a tiny fade animation
  return (
    <div style={styles} className="app-main">
      <Layout location={location}>
        <TransitionGroup component="main" className="entryPage">
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames="fade"
            appear
          >
            <section>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/results" exact component={Store} />
                <Route component={NotFound} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Layout>
    </div>
  );
};

export default withRouter(App);
