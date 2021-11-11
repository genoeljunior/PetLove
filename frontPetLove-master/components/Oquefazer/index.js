import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';


const Banner = () =>(
<Container>
  <Row>
    <Col>
        <Row>
        <Col>
          <h1 className="topoq optext">O que deseja Fazer?</h1>
        </Col>
        <Col >
            <div className="topoq">
              <Image src="/pegadas.png" width={256} height={105} />
            </div>
        </Col>
        </Row> 
    </Col>
    <Col>
    <Row>
        <Col className="btado d-grid gap-2">
            <Button className="btcoracao d-grid gap-2" variant="primary" size="lg"><span className="textado">Adoção </span></Button>{' '}
        </Col>
        <Col className="d-grid gap-2">
            <Button className="btpegada d-grid gap-2" variant="primary" size="lg" link href="/cadastropet"><span className="textado">Doação</span></Button>
        </Col>
        </Row> 

          
             
    </Col>
  </Row>
  <Row>

  </Row>
</Container>

);

export default Banner;