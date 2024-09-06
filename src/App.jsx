import {
  Badge,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Image,
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
import absor from "./assets/absor.webp";
import toolz from "./assets/toolz.ico";
import speedtest from "./assets/speedtestbyokla.ico";
import norton from "./assets/norton.ico";
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
          <a href="/"><Badge style={{ fontSize: "1.5rem" }}>Website by Absor</Badge></a>
          <NavbarToggle className="mb-3 ms-4" />
        </NavbarBrand>
        <NavbarCollapse>
          <Nav>
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#tests">Tes</NavLink>
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

const Tests = () => {
  return (
    <div className="my-5" id="tests">
      <Container style={{ minHeight: "100vh", paddingTop: "5rem" }}>
        <Row>
          <Col>
            <p className="teks-judul">Berikut ini beberapa skenario Tes</p>
          </Col>
        </Row>
        <Row>
          <Col md className="text-center">
            <Card className="my-3">
              <CardHeader>
                <CardTitle>Tes Blokir Iklan</CardTitle>
              </CardHeader>
              <CardBody>
                <CardImg src={toolz} />
              </CardBody>
              <CardFooter>
                <CardText>Toolz Adblock Test</CardText>
                <CardLink href="https://d3ward.github.io/toolz/adblock">
                  https://d3ward.github.io/toolz/adblock
                </CardLink>
              </CardFooter>
            </Card>
          </Col>
          <Col md className="text-center">
            <Card className="my-3">
              <CardHeader>
                <CardTitle>Tes Kecepatan Internet</CardTitle>
              </CardHeader>
              <CardBody>
                <CardImg src={speedtest} />
              </CardBody>
              <CardFooter>
                <CardText>Speedtest By Okla</CardText>
                <CardLink href="https://www.speedtest.net/id">
                  https://www.speedtest.net/id
                </CardLink>
              </CardFooter>
            </Card>
          </Col>
          <Col md className="text-center">
            <Card className="my-3">
              <CardHeader>
                <CardTitle>Tes Keamanan Website</CardTitle>
              </CardHeader>
              <CardBody>
                <CardImg src={norton} />
              </CardBody>
              <CardFooter>
                <CardText>Safeweb by Norton</CardText>
                <CardLink href="https://safeweb.norton.com/">
                  https://safeweb.norton.com
                </CardLink>
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
            <p className="teks-judul">Tentang Penulis</p>
            <div className="text-center my-5">
              <Image src={absor} width={"120vh"} />
            </div>
            <p className="teks-isi">
              <span className="me-5" />
              Muhamad Absor Dwiyana adalah seorang mahasiswa yang aktif di
              bidang pemrograman, khususnya dalam pengembangan aplikasi dan
              pengujian perangkat lunak. Dia memiliki beberapa proyek di GitHub,
              termasuk repositori untuk Web Programming, Mobile Programming, dan
              Script. Di GitHub, Absor mengerjakan proyek menggunakan bahasa
              pemrograman seperti HTML, CSS, Javascript, Go dan PHP.
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
              href="https://facebook.com/muhamad-absor-dwiyana"
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
      <Tests />
      <About />
      <Footer />
    </>
  );
};

export default App;
