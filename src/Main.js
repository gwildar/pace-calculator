import React from 'react'
import PaceCalculator from './components/PaceCalculator'
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// react-bootstrap suggest using the CDN bootstrap styles. No wish to do that so instead use bootstrap-less
// you could use bootstrap-webpack but then that defeats the purpose of using react-bootstrap. 
// Using both together madness lies.

import "bootstrap-less/bootstrap/bootstrap.less";

export default class Main extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <Grid>
            <Row className="show-grid">
              <Col sm={6} smOffset={3}> 
                <PaceCalculator />
              </Col>
            </Row>
          </Grid>
        </body>
      </html>
    )
  }
}