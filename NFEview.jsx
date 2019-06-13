import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Line } from "react-chartjs-2";
import {
  chartExample1,
  chartExample2,
  chartExample4
} from "./NFEcharts/NFEcharts";
import './ViewEvent.css';

import Index from './NFEcharts/index'


class NFEviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return(
      <Container>
          <Row>
            <Col>
              <Card className="card-chart" >
                <Card.Header as="h5">General Performance</Card.Header>
                  <Card.Body>
                    <Card.Title >Monthly Report</Card.Title>
                      <Card.Text>
                        <Line
                          data={chartExample1[this.state.bigChartData]}
                          options={chartExample1.options}
                        />
                      </Card.Text>
                  </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Card className="card-chart" >
                  <Card.Header as="h5">Total</Card.Header>
                    <Card.Body>
                      <Card.Title >Weekly report</Card.Title>
                        <Card.Text>
                          <Line
                            data={chartExample2.data}
                            options={chartExample2.options}
                          />
                        </Card.Text>
                    </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card className="card-chart" >
                  <Card.Header as="h5">Completed</Card.Header>
                    <Card.Body>
                      <Card.Title >Weekly report</Card.Title>
                        <Card.Text>
                          <Line
                            data={chartExample4.data}
                            options={chartExample4.options}
                          />
                        </Card.Text>
                    </Card.Body>
              </Card>

            </Col> 
          </Row>

          <Index />

      </Container>
    );
  }
}

export default NFEviewPage;
