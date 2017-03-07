import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Grid, Row, Col } from 'react-bootstrap';
import 'bootstrap-less/bootstrap/bootstrap.less';
import 'bootstrap-material-design/less/bootstrap-material-design.less';


import './main.less';
import paceCalculator from './reducers';
import CalculatorContainer from './containers/CalculatorContainer';

const isProduction = process.env.NODE_ENV === 'production';

// Creating store
let store = null;

if (isProduction) {
  const middleware = applyMiddleware(thunk);

  store = createStore(
    paceCalculator,
    middleware,
  );
} else {
  const middleware = applyMiddleware(thunk);
  const enhancer = compose(
    middleware,
  );

  store = createStore(
    paceCalculator,
    enhancer,
  );
}


// Render it to DOM
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
  document.getElementById('app'),
);
