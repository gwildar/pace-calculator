import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Grid, Row, Col } from 'react-bootstrap';

import updateCalculator from './reducers.js';

import PaceCalculator from './components/PaceCalculator.jsx';

import 'bootstrap-less/bootstrap/bootstrap.less';
import './main.less';

const store = createStore(updateCalculator);

ReactDOM.render(
  <Provider store={store}>
    <Grid>
      <Row className="show-grid">
        <Col sm={6} smOffset={3}>
          <PaceCalculator />
        </Col>
      </Row>
    </Grid>
  </Provider>,
  document.getElementById('app')
);
