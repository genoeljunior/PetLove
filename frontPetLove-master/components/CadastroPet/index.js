import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from "reactstrap";
import Image from "next/image";

const Banner = () => (
    <Container>
        <Row>
            <Col>
                <Row>
                    <Col>
                        <h1 className="">Adicione seu pet para adoção</h1>
                    </Col>
                    <Col >
                        <div className="">
                            <Image src="/pegadas.png" width={256} height={105} />
                        </div>
                    </Col>
                </Row>
            </Col>
            
        <Row>
            <Col>
                <Row>
                    <Col>
                    <form method="post" action="" id="userdados">
                        <h1>Pet</h1>
                        <p>
                        <label for="nome_pet">Nome</label>
                        <input id="nome_pet" name="nome_pet" required="required" maxLength="25" minLength="2" type ="text" placeholder="nome do pet" />
                        </p>
                        
                        <p>
                        <label for="raca">Raça</label>
                        <input id="raca" name="raca" required="required" maxLength ="40" minLength="2" type ="text" placeholder="raça" />
                        </p>
                       
                        <p>
                        <input type ="submit" value="Adicionar" class="btvejamais" />
                        </p>

                      

                    </form>
                    </Col>
                </Row>   
            </Col>
        </Row >
        </Row>
    </Container >

);

export default Banner;