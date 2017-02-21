import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Grid, Row, Col } from 'react-bootstrap';

import paceCalculator from './reducers.js';

import CalculatorContainer from './containers/CalculatorContainer.js';

import 'bootstrap-less/bootstrap/bootstrap.less';
import 'bootstrap-material-design/less/bootstrap-material-design.less';
import './main.less';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  paceCalculator,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Grid>
      <Row>
        <Col sm={6} smOffset={3}>
          <CalculatorContainer />
        </Col>
      </Row>
    </Grid>
  </Provider>,
  document.getElementById('app')
);
