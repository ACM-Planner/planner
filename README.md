# Planner Web Client

[![Build Status](https://travis-ci.org/ACM-Planner/planner.svg?branch=master)](https://travis-ci.org/ACM-Planner/planner) [![david](https://david-dm.org/ACM-Planner/planner.svg)](https://david-dm.org/ACM-Planner/planner) [![Docker Pulls](https://img.shields.io/docker/pulls/acmplanner/planner.svg?maxAge=2592000)](https://hub.docker.com/r/acmplanner/planner/)

Single Page Application written with [React.js](https://facebook.github.io/react/).

## Development

Clone this repository:

```sh
git clone https://github.com/ACM-Planner/planner.git
cd planner
```

Install the dependencies:

```sh
npm install
```

Meanwhile, install Google Chrome extensions for a better development experience (**optional**):

* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

Start the application on port `3000` with:

```sh
npm start
```

To use another port instead of the default:

```sh
PORT=5000 npm start
```

### Create a new Component

We are using **ES6 Components**, this means we create *ES6 classes*. To start:

```sh
# Change 'NewComponent' to the component name
mkdir src/components/NewComponent
touch src/components/NewComponent/index.js
touch src/components/NewComponent/style.css
```

#### Dummy or presentation component

A dummy component is not aware of the global state of Redux. This kind of component are preferred.

```js
// src/components/NewComponent/index.js
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './style.css';

export default class NewComponent extends Component {

  // Props must not be modified
  static propTypes = {
    name: PropTypes.string,
  }

  static defaultProps = {
    name: 'Patricio',
  }

  // State must be changed using this.setState
  state = {
    message: '',
  }

  onChange = (e) => {
    this.setState({ message: e.target.value });
  }

  render() {
    const { name } = this.props;
    const { message } = this.state;

    return (
      <div className={classnames('NewComponent', this.props.className)} style={this.props.style}>
        <h1 className="NewComponent-title">
          Hi {name}!
        </h1>
        <input type="text" value={message} onChange={this.onChange}>
      </div>
    );
  }
}
```

### Need help with [React](https://facebook.github.io/react/) or [Redux](http://redux.js.org/index.html)?

#### React.js tutorial

* https://egghead.io/courses/react-fundamentals

#### Redux tutorial

* https://egghead.io/courses/getting-started-with-redux
* https://egghead.io/courses/building-react-applications-with-idiomatic-redux
