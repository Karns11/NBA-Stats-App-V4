import { Container, Card, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">NBA Sats App</h1>
          <p className="text-center mb-4">
            Welcome to my NBA Player Stats web application! This platform is
            crafted to enhance your sports betting decisions by providing
            comprehensive insights into NBA player statistics. Simply begin by
            typing the name of any NBA player, and select from the dropdown
            menu. To further refine your search, specify a start date to narrow
            down the selection of games you want to view. Opt for the season
            average checkbox if you wish to explore a player's season averages.
            Stay tuned for ongoing updates as we continue to introduce new
            features to elevate your user experience!
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
