import './App.css';
import TopHeader from './components/TopHeader';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
        <Header />
        <Quiz />
        <Footer />
      </header>
    </div>
  );
}

export default App;
