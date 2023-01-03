import { Footer, Main, Navbar, Sidebar } from './components';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="grid-container">
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
