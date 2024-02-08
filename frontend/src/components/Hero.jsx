import { Container, Card, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Alley-Oop Analytics</h1>
          <p className="text-center mb-4">
            Welcome to Alley-Oop Analytics! This platform is crafted to enhance
            your sports betting decisions by providing insights into NBA player
            statistics. With Alley-Oop Analytics, you can easily access
            statistics such as points, rebounds, assists, field goal attempts,
            three-point field goal attempts, field goal percentage, three-point
            field goal percentage and tons more for any NBA player.
          </p>

          <p className="text-center mb-4">
            Additionally, you have the ability to view averages for all of these
            stats, empowering you with the data you need to make confident
            decisions in sports discussions and wagers.
          </p>

          <p className="text-center mb-4">
            Sign up today to start making money!
          </p>
          <div className="d-flex">
            <Button variant="primary" href="/register" className="me-3">
              Register
            </Button>
            <Button variant="secondary" href="/login">
              Sign In
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
