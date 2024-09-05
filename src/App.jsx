import {
  Badge,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavItem,
  NavLink,
  Col,
  Row,
  Button,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardImg,
  CardFooter,
  CardText,
  CardLink,
} from "react-bootstrap";
import {
  PiFacebookLogoBold,
  PiGithubLogoBold,
  PiInstagramLogoBold,
} from "react-icons/pi";
import absor from "./assets/absor.png";
import { TbDashboard, TbSourceCode } from "react-icons/tb";

const Navigation = () => {
  return (
    <Navbar
      expand={"md"}
      style={{
        margin: "auto",
        fontSize: "1.2rem",
        borderBottom: "0.1rem solid lightgray",
        backgroundColor: "whitesmoke",
      }}
      className="sticky-top"
    >
      <Container>
        <NavbarBrand className="w-100">
          <Badge style={{ fontSize: "1.5rem" }}>Website by Absor</Badge>
          <NavbarToggle className="mb-3 ms-4" />
        </NavbarBrand>
        <NavbarCollapse>
          <Nav>
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#contents">Contents</NavLink>
            <NavLink href="#about">About</NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

const Hero = () => {
  return (
    <div className="my-5" id="hero">
      <Container
        className="bg-container"
        style={{
          display: "flex",
          minHeight: "100vh",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <div className="my-auto bg-div mx-md-5">
          <p className="teks-judul">Proyek Pengembangan Pi-hole</p>
          <p className="teks-isi p-3">
            Pi-hole adalah perangkat lunak server DNS (Domain Name System) yang
            bekerja sebagai filter iklan dan situs web yang tidak diinginkan di
            jaringan Anda. Sederhananya, Pi-hole akan memblokir iklan yang
            mengganggu saat Anda berselancar internet, baik di komputer,
            smartphone, maupun perangkat lain yang terhubung ke jaringan Anda.
            Selain memblokir iklan, Pi-hole juga bisa digunakan untuk memblokir
            akses ke situs web tertentu yang dianggap tidak sesuai atau
            berbahaya.
          </p>
          <div className="bagian-tombol text-center">
            <Button size="lg" className="tombol btn-success">
              <TbSourceCode /> Source
            </Button>
            <Button size="lg" className="tombol btn-danger">
              Dashboard <TbDashboard />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Contents = () => {
  return (
    <div className="my-5" id="contents">
      <Container style={{ minHeight: "100vh", paddingTop: "5rem" }}>
        <Row>
          <Col>
            <p className="teks-judul">This is my contents</p>
          </Col>
        </Row>
        <Row>
          <Col md className="text-center">
            <Card className="my-3">
              <CardHeader>
                <CardTitle>Proyek Mandalika</CardTitle>
              </CardHeader>
              <CardBody>
                <CardImg src={absor} />
              </CardBody>
              <CardFooter>
                <CardText>Footer</CardText>
                <CardLink>foo.com</CardLink>
              </CardFooter>
            </Card>
          </Col>
          <Col md className="text-center">
            <Card className="my-3">
              <CardHeader>
                <CardTitle>Proyek Mandalika</CardTitle>
              </CardHeader>
              <CardBody>
                <CardImg src={absor} />
              </CardBody>
              <CardFooter>
                <CardText>Footer</CardText>
                <CardLink>foo.com</CardLink>
              </CardFooter>
            </Card>
          </Col>
          <Col md className="text-center">
            <Card className="my-3">
              <CardHeader>
                <CardTitle>Proyek Mandalika</CardTitle>
              </CardHeader>
              <CardBody>
                <CardImg src={absor} />
              </CardBody>
              <CardFooter>
                <CardText>Footer</CardText>
                <CardLink>foo.com</CardLink>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const About = () => {
  return (
    <div className="my-5" id="about">
      <Container style={{ minHeight: "100vh", paddingTop: "5rem" }}>
        <Row>
          <Col>
            <p className="teks-judul">Tentang Absor</p>
            <p className="teks-isi">
              <span className="me-5" />
              Muhamad Absor Dwiyana adalah seorang mahasiswa yang aktif di
              bidang pemrograman, khususnya dalam pengembangan aplikasi dan
              pengujian perangkat lunak. Dia memiliki beberapa proyek di GitHub,
              termasuk repositori untuk tugas UTS Mobile Programming dan
              pengembangan terkait Quality Assurance (QA). Di GitHub, Absor
              Dwiyana mengerjakan proyek menggunakan bahasa pemrograman seperti
              Java, dan fokus pada pengembangan aplikasi mobile serta pengujian
              kualitas perangkat lunak{" "}
              <a href="http://github.com/MuhamadAbsorDwiyana">( GitHub )</a>​​.
              Jika Anda mencari informasi lebih spesifik mengenai Muhamad Absor
              Dwiyana, misalnya dalam konteks profesional lain atau
              keterlibatannya dalam proyek tertentu, mohon informasikan lebih
              lanjut!
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <Button
              href="https://instagram/absorkun"
              size="lg"
              variant="link"
              className="tombol"
            >
              <PiInstagramLogoBold />
            </Button>
            <Button
              href="https://github.com/MuhamadAbsorDwiyana"
              size="lg"
              variant="link"
              className="tombol"
            >
              <PiGithubLogoBold />
            </Button>
            <Button
              href="https://facebook.com/"
              size="lg"
              variant="link"
              className="tombol"
            >
              <PiFacebookLogoBold />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="text-center">
      <p className="text-body-tertiary">&copy; Absor 2024</p>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Contents />
      <About />
      <Footer />
    </>
  );
};

export default App;
