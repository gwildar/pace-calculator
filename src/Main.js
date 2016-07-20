import React from 'react';

import PaceCalculator from './components/PaceCalculator';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// react-bootstrap suggest using the CDN bootstrap styles. I have no wish to do that so instead I'm useing bootstrap-less.
// you could use bootstrap-webpack but then that defeats the purpose of using react-bootstrap. 
// Using both together madness lies.

import "bootstrap-less/bootstrap/bootstrap.less";

export default class Main extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} smOffset={3}> 
            <PaceCalculator />
          </Col>
        </Row>
      </Grid>
    );
  }
}