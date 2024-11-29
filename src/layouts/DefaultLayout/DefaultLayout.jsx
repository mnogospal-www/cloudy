import { Outlet } from 'react-router';
import { Container, FirstScreen, Footer, Header } from './components/exporter';

function DefaultLayout() {
  return (
    <>
      <FirstScreen>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </FirstScreen>
      <Footer />
    </>
  );
}

export { DefaultLayout };
