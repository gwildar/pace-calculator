import React from 'react';

import PaceCalculator from './components/PaceCalculator.jsx';

import { Grid, Row, Col } from 'react-bootstrap';

// react-bootstrap suggest using the CDN bootstrap styles.
// I have no wish to do that so instead I'm useing bootstrap-less.
// you could use bootstrap-webpack but then that brings in the JS as well.
// Using both together looked frankly a bit bonkers

import 'bootstrap-less/bootstrap/bootstrap.less';
import './main.less';

const Main = () => (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} smOffset={3}>
        <PaceCalculator />
      </Col>
    </Row>
  </Grid>
);

export default Main;
