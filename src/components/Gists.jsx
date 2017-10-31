import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    gists: null
  };

  componentDidMount() {
    fetch("https://api.github.com/gists")
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists });
      });
  }

  render() {
    const { gists } = this.state;
    return (
      <Router>
        <Root>
          <Sidebar>
            {gists ? (
              gists.map(gist => (
                <SidebarItem key={gist.id}>
                  <Link to={`/g/${gist.id}`}>
                    {gist.description || "[no description]"}
                  </Link>
                </SidebarItem>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </Sidebar>
          <Main>
            <Route exact path="/" render={() => <h1>Welcome</h1>} />
            <Route path="/g/:gistId" component={Gist} />
          </Main>
        </Root>
      </Router>
    );
  }
}

// const Gist = ({ match }) => <div>{}</div>;
const Gist = ({ gist }) => {
  return (
    <div>
      <h1>{gist.description}</h1>
      <ul>
        {Object.keys(gist.files).map(key => (
          <li>
            <b>{key}</b>
            <LoadFile url={gist.files[key].raw_url}>
              {text => <pre>{text}</pre>}
            </LoadFile>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Root = ({ match }) => <h1>Main</h1>;
const Main = ({ match }) => <h1>Root</h1>;
const Sidebar = ({ match }) => <h1>Sidebar</h1>;
const SidebarItem = ({ match }) => <h1>SidebarItem</h1>;
const Home = ({ match }) => <h1>Home</h1>;
const LoadFile = ({ match }) => <h1>Load File</h1>;

export default App;
