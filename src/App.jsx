import './App.css';
import Header from './components/Header/Header.jsx';
import Caracteristicas from './components/SectionFeatures/SectionFeatures.jsx';
import History from './components/SectionHistory/SectionHistory.jsx';
import SectionUsage from './components/SectionUsage/SectionUsage.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Caracteristicas />
      <History />
      <SectionUsage />
      <Footer />
    </div>
  );
}

export default App;
