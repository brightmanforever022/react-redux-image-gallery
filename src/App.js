import React from 'react';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import PhotosScreen from './containers/photos'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-content">
        <PhotosScreen/>
      </div>
      <Footer/>
    </div>
  );
}

export default App
