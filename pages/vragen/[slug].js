import { useRouter } from 'next/router';
import { vragenlijsten } from '../../data/vragenlijsten';
import { useState } from 'react';

export default function VragenFormulier() {
  const router = useRouter();
  const { slug } = router.query;
  const vragenlijst = vragenlijsten[slug];

  const [antwoorden, setAntwoorden] = useState({});

  if (!vragenlijst) return <p>Vragenlijst niet gevonden.</p>;

  const handleChange = (index, value) => {
    setAntwoorden(prev => ({ ...prev, [index]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ingediende antwoorden:', antwoorden);
    alert('Bedankt voor het invullen!');
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>{vragenlijst.aandoening}</h1>
      <form onSubmit={handleSubmit}>
        {vragenlijst.vragen.map((vraag, index) => (
          <div key={index}>
            <p>{vraag}</p>
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
        <button type="submit" style={{ marginTop: '1rem' }}>Verzenden</button>
      </form>
    </main>
  );
}