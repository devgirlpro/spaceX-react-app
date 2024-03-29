import './App.css';
import { useEffect, useState } from 'react';
import RocketsCard from './components/RocketsCard';
import Modal from './components/Modal';

function App() {
  const [rocketsInfo, setRocketsInfo] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false)


  const rocketsApiLink = 'https://api.spacexdata.com/v4/rockets';

  const fetchRockets = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(rocketsApiLink);
      const data = await response.json();
      console.log('data => ', data);
      setRocketsInfo(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRockets();
  }, []);

  const openModalFunc = () => {
    setOpenModal(true)
  }

  const closeModalFunc = () => {
    setOpenModal(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>spaceX React App</h1>
      </header>
      <RocketsCard rocketsInfo={rocketsInfo} openModalPage={openModalFunc} />
      {openModal && <Modal rocketsInfo={rocketsInfo} closeModalPage={closeModalFunc} />}
    </div>
  );
}

export default App;
