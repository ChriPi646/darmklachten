import { useEffect, useState } from 'react';

export default function SymptomenResultaat() {
  const [scores, setScores] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('symptoomScores');
    if (stored) {
      setScores(JSON.parse(stored));
    }
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Resultaat van je Symptomenanalyse</h1>
      {Object.keys(scores).length === 0 ? (
        <p>Geen gegevens gevonden. Vul eerst de vragenlijst in.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>Aandoening</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(scores).sort((a, b) => b[1] - a[1]).map(([aandoening, score]) => (
              <tr key={aandoening}>
                <td>{aandoening}</td>
                <td>{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}