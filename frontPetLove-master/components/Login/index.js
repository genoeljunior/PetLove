import { Col, Container, Row } from "reactstrap";
import Image from "next/image";


const Login = () =>(

    <Container >
    <Row>
      <Col >
        <Image src="/log1.jpg" width={570} height={778} />
      </Col>
      <Col >
        <h1>login</h1>
        <form>
          <div >
            <label for="exampleInputEmail1" >Nome</label>
            <input type="Nome" id="exampleInputEmail1" aria-describedby="logNome"/>
            <div id="logNome" >Digite seu nome.</div>
          </div>
          <div >
            <label for="exampleInputPassword1" >Password</label>
            <input type="password" id="exampleInputPassword1"/>
          </div>
          <div>
            <input type="checkbox"  id="exampleCheck1"/>
            <label for="exampleCheck1">Check me out</label>
          </div>
          <div><button type="submit" class="btvejamais">Entrar</button></div>
          
        </form>

      </Col>
    </Row>

  </Container>

);

export default Login;

