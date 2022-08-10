import { useState } from 'react';
import Board from '../../Components/Board';
import Footer from '../../Components/Footer';
import Form from '../../Components/Form';
import Header from '../../Components/Header';
import './styles.css';

function Main() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [error, setError] = useState(false);

  return (
    <div className="container">
      <Header />
      <main className='main'>
        <Form
          number={number}
          setNumber={setNumber}
          setResult={setResult}
          error={error}
          setError={setError}
        />
        <Board
          number={number}
          result={result}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
