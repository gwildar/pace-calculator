import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Grid, Row, Col } from 'react-bootstrap';

import paceCalculator from './reducers.js';

import CalculatorContainer from './containers/CalculatorContainer.js';

import 'bootstrap-less/bootstrap/bootstrap.less';
import './main.less';

const store = createStore(paceCalculator);

ReactDOM.render(
  <Provider store={store}>
    <Grid>
      <Row className="show-grid">
        <Col sm={6} smOffset={3}>
          <CalculatorContainer />
        </Col>
      </Row>
    </Grid>
  </Provider>,
  document.getElementById('app')
);
