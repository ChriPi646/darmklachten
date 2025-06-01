import { useEffect, useState } from 'react';
import { symptomenmatrix } from '../../data/symptomenmatrix';

export default function SymptomenResultaat() {
  const [scores, setScores] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem('symptoomScores');
    if (stored) {
      setScores(JSON.parse(stored));
    }
  }, []);

  // Max score per aandoening berekenen
  const maxScores = {};
  symptomenmatrix.forEach(vraag => {
    vraag.scoortOp.forEach(aandoening => {
      maxScores[aandoening] = (maxScores[aandoening] || 0) + 1;
    });
  });

  const interpretatie = (percentage) => {
    if (percentage >= 70) return { label: 'Waarschijnlijk', kleur: '#d4edda' };
    if (percentage >= 40) return { label: 'Mogelijk', kleur: '#fff3cd' };
    return { label: 'Onwaarschijnlijk', kleur: '#f8d7da' };
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Resultaat van je Symptomenanalyse</h1>
      {Object.keys(scores).length === 0 ? (
        <p>Geen gegevens gevonden. Vul eerst de vragenlijst in.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#e9ecef' }}>
              <th>Aandoening</th>
              <th>Score</th>
              <th>Interpretatie</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(scores).sort((a, b) => b[1] - a[1]).map(([aandoening, score]) => {
              const max = maxScores[aandoening] || 1;
              const percentage = Math.round((score / max) * 100);
              const { label, kleur } = interpretatie(percentage);
              return (
                <tr key={aandoening} style={{ backgroundColor: kleur }}>
                  <td>{aandoening}</td>
                  <td>{score} / {max} ({percentage}%)</td>
                  <td>{label}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </main>
  );
}