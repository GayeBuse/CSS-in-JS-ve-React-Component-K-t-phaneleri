import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* ADIM 2? */
import Offer from './components/Offer';

function App() {
  return (
    <>
      <Header />
      <div className="content-section">
        {/* ADIM 3: Offer component'ini burada kullanabilirsin */}
        <Offer />
      </div>
      <Footer />
    </>
  );
}

export default App;
