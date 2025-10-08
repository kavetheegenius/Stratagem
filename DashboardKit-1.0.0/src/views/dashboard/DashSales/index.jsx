// react-bootstrap
import { Row, Col, Card } from 'react-bootstrap';

// third party
import Chart from 'react-apexcharts';

// project imports
import FlatCard from 'components/Widgets/Statistic/FlatCard';
import ProductCard from 'components/Widgets/Statistic/ProductCard';
import FeedTable from 'components/Widgets/FeedTable';
import ProductTable from 'components/Widgets/ProductTable';
import { SalesCustomerSatisfactionChartData } from './chart/sales-customer-satisfication-chart';
import { SalesAccountChartData } from './chart/sales-account-chart';
import { SalesSupportChartData } from './chart/sales-support-chart';
import { SalesSupportChartData1 } from './chart/sales-support-chart1';
import feedData from 'data/feedData';
import productData from 'data/productTableData';

// -----------------------|| TRADING DASHBOARD ||-----------------------//
export default function DashSales() {
  return (
    <Row>
      <Col md={12} xl={6}>
        <Card className="flat-card">
          <div className="row-table">
            <Card.Body className="col-sm-6 br">
              <FlatCard params={{ title: 'Portfolio Value', iconClass: 'text-primary mb-1', icon: 'account_balance', value: '$124,560' }} />
            </Card.Body>
            <Card.Body className="col-sm-6 d-none d-md-table-cell d-lg-table-cell d-xl-table-cell card-body br">
              <FlatCard params={{ title: 'Daily P&L', iconClass: 'text-primary mb-1', icon: 'trending_up', value: '+$2,847' }} />
            </Card.Body>
            <Card.Body className="col-sm-6 card-bod">
              <FlatCard params={{ title: 'Open Positions', iconClass: 'text-primary mb-1', icon: 'open_in_new', value: '24' }} />
            </Card.Body>
          </div>
          <div className="row-table">
            <Card.Body className="col-sm-6 br">
              <FlatCard
                params={{
                  title: 'Win Rate',
                  iconClass: 'text-primary mb-1',
                  icon: 'check_circle',
                  value: '68.2%'
                }}
              />
            </Card.Body>
            <Card.Body className="col-sm-6 d-none d-md-table-cell d-lg-table-cell d-xl-table-cell card-body br">
              <FlatCard params={{ title: 'Risk Level', iconClass: 'text-primary mb-1', icon: 'warning', value: 'Medium' }} />
            </Card.Body>
            <Card.Body className="col-sm-6 card-bod">
              <FlatCard params={{ title: 'Today\'s Trades', iconClass: 'text-primary mb-1', icon: 'swap_horiz', value: '47' }} />
            </Card.Body>
          </div>
        </Card>
        <Row>
          <Col md={6}>
            <Card className="support-bar overflow-hidden">
              <Card.Body className="pb-0">
                <h2 className="m-0">68.2%</h2>
                <span className="text-primary">Win Rate</span>
                <p className="mb-3 mt-3">Successful trades divided by total trades executed.</p>
              </Card.Body>
              <Chart {...SalesSupportChartData()} />
              <Card.Footer className="border-0 bg-primary text-white background-pattern-white">
                <Row className="text-center">
                  <Col>
                    <h4 className="m-0 text-white">72%</h4>
                    <span>This Month</span>
                  </Col>
                  <Col>
                    <h4 className="m-0 text-white">65%</h4>
                    <span>Last Month</span>
                  </Col>
                  <Col>
                    <h4 className="m-0 text-white">61%</h4>
                    <span>3 Months Ago</span>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="support-bar overflow-hidden">
              <Card.Body className="pb-0">
                <h2 className="m-0">1,432</h2>
                <span className="text-primary">Trades Today</span>
                <p className="mb-3 mt-3">Total number of trades executed in current session.</p>
              </Card.Body>
              <Card.Footer className="border-0">
                <Row className="text-center">
                  <Col>
                    <h4 className="m-0">1,130</h4>
                    <span>Yesterday</span>
                  </Col>
                  <Col>
                    <h4 className="m-0">1,251</h4>
                    <span>This Week</span>
                  </Col>
                  <Col>
                    <h4 className="m-0 ">5,235</h4>
                    <span>This Month</span>
                  </Col>
                </Row>
              </Card.Footer>
              <Chart type="bar" {...SalesSupportChartData1()} />
            </Card>
          </Col>
        </Row>
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Header>
            <h5>Portfolio Performance Analysis</h5>
          </Card.Header>
          <Card.Body>
            <Row className="pb-2">
              <div className="col-auto m-b-10">
                <h3 className="mb-1">$124,560</h3>
                <span>Total Portfolio Value</span>
              </div>
              <div className="col-auto m-b-10">
                <h3 className="mb-1">+12.4%</h3>
                <span>YTD Return</span>
              </div>
            </Row>
            <Chart {...SalesAccountChartData()} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xl={6}>
        <Card>
          <Card.Body>
            <h6>Asset Allocation</h6>
            <span>Current distribution of your portfolio across different asset classes and sectors.</span>
            <Row className="d-flex justify-content-center align-items-center">
              <Col>
                <Chart type="pie" {...SalesCustomerSatisfactionChartData()} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* Trading Instruments Table */}
        <ProductTable {...productData} />
      </Col>
      <Col md={12} xl={6}>
        <Row>
          <Col sm={6}>
            <ProductCard params={{ title: 'Daily Gain', primaryText: '+$2,847', icon: 'show_chart' }} />
          </Col>
          <Col sm={6}>
            <ProductCard params={{ variant: 'primary', title: 'Active Alerts', primaryText: '8', icon: 'notifications' }} />
          </Col>
          <Col sm={6}>
            <ProductCard params={{ variant: 'primary', title: 'Avg. Trade Size', primaryText: '$2,450', icon: 'account_balance_wallet' }} />
          </Col>
          <Col sm={6}>
            <ProductCard params={{ title: 'Market Hours', primaryText: '6:42', icon: 'schedule' }} />
          </Col>
        </Row>
        {/* Market Feed Table */}
        <FeedTable {...feedData} />
      </Col>
    </Row>
  );
}