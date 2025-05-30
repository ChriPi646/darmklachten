import { symptomenmatrix } from '../../data/symptomenmatrix';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Symptomenvragenlijst() {
  const [antwoorden, setAntwoorden] = useState({});
  const router = useRouter();

  const handleChange = (index, value) => {
    setAntwoorden(prev => ({ ...prev, [index]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scores = {};
    symptomenmatrix.forEach((vraag, i) => {
      if (antwoorden[i] === 'ja') {
        vraag.scoortOp.forEach(aandoening => {
          scores[aandoening] = (scores[aandoening] || 0) + 1;
        });
      }
    });
    localStorage.setItem('symptoomScores', JSON.stringify(scores));
    router.push('/symptomen/resultaat');
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Symptomenanalyse</h1>
      <form onSubmit={handleSubmit}>
        {symptomenmatrix.map((vraag, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <p>{vraag.vraag}</p>
            <label>
              <input
                type="radio"
                name={`vraag-${index}`}
                value="ja"
                onChange={() => handleChange(index, 'ja')}
              /> Ja
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                name={`vraag-${index}`}
                value="nee"
                onChange={() => handleChange(index, 'nee')}
              /> Nee
            </label>
          </div>
        ))}
        <button type="submit" style={{ marginTop: '1rem' }}>Toon resultaat</button>
      </form>
    </main>
  );
}