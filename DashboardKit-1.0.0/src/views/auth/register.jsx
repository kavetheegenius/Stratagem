import { NavLink } from 'react-router-dom';

// react-bootstrap
import { Card, Row, Col, Button, InputGroup, Form } from 'react-bootstrap';

// third party
import FeatherIcon from 'feather-icons-react';

// assets
import logoDark from 'assets/images/logo-dark.svg';

// -----------------------|| SignUp 1 ||-----------------------//

export default function SignUp1() {
  return (
    <div className="auth-wrapper">
      <div className="auth-content text-center">
        <Card className="borderless">
          <Row className="align-items-center text-center">
            <Col>
              <Card.Body className="card-body">
                <img src={logoDark} alt="Stratagem" className="img-fluid mb-4" />
                <h4 className="mb-3 f-w-400">Start Your Trading Journey</h4>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FeatherIcon icon="user" />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Trader username" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FeatherIcon icon="mail" />
                  </InputGroup.Text>
                  <Form.Control type="email" placeholder="Professional email" />
                </InputGroup>
                <InputGroup className="mb-4">
                  <InputGroup.Text>
                    <FeatherIcon icon="lock" />
                  </InputGroup.Text>
                  <Form.Control type="password" placeholder="Secure password" />
                </InputGroup>
                <Form.Check type="checkbox" className="text-left mb-4 mt-2" label="I agree to the Terms of Service and Privacy Policy" defaultChecked />
                <Form.Check type="checkbox" className="text-left mb-4 mt-2" label="Send me market insights and trading opportunities" defaultChecked />
                <Button className="btn-block mb-4">Create Trading Account</Button>
                <p className="mb-2">
                  Already have a Stratagem account?{' '}
                  <NavLink to="/login" className="f-w-400">
                    Access Dashboard
                  </NavLink>
                </p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}