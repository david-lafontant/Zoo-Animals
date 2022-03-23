import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Zoo from './components/zoo/zoo';
import AnimalDetail from './components/animalDetail/animalDetail';
import Header from './components/header/header';
import elementStore from './redux/configureStore';

function App() {
  return (
    <Provider store={elementStore}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Zoo />} />
          <Route path="/Zoo" element={<Zoo />} />
          <Route path="/AnimalDetail/:id" element={<AnimalDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
