import { useEffect, useState } from 'react';
import { symptomenmatrix } from '../../data/symptomenmatrix';
import jsPDF from 'jspdf';

import 'jspdf-autotable';

export default function SymptomenResultaat() {
  const [scores, setScores] = useState({});
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoData, setLogoData] = useState('');
  const [digesticaData, setDigesticaData] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('symptoomScores');
    if (stored) {
      setScores(JSON.parse(stored));
    }
    loadImage('/logo.png', setLogoData);
    loadImage('/digestica.png', setDigesticaData);
  }, []);

  const loadImage = (src, callback) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0);
      callback(canvas.toDataURL('image/png'));
    };
    img.src = src;
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    if (logoData) doc.addImage(logoData, 'PNG', 10, 10, 50, 15);
    doc.setFontSize(16);
    doc.text('Symptomenanalyse – Resultaatoverzicht', 10, 35);
    doc.setFontSize(10);
    doc.text(`Datum: ${new Date().toLocaleDateString()}`, 10, 42);

    const headers = [['Aandoening', 'Score', 'Interpretatie']];
    const maxScores = {};
    symptomenmatrix.forEach(v => {
      v.scoortOp.forEach(a => { maxScores[a] = (maxScores[a] || 0) + 1 });
    });

    const rows = Object.entries(scores).map(([a, s]) => {
      const max = maxScores[a] || 1;
      const perc = Math.round((s / max) * 100);
      const label = perc >= 70 ? 'Waarschijnlijk' : perc >= 40 ? 'Mogelijk' : 'Onwaarschijnlijk';
      return [a, `${s} / ${max} (${perc}%)`, label];
    });

    doc.autoTable({
      startY: 50,
      head: headers,
      body: rows,
    });

    if (digesticaData) {
      doc.addImage(digesticaData, 'PNG', 150, 260, 40, 10);
    }

    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text(
      'Disclaimer: Digestica biedt geen medische diagnose. Raadpleeg altijd een arts of diëtist bij twijfel.',
      10,
      275
    );

    doc.save('symptomenanalyse.pdf');
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Resultaat van je Symptomenanalyse</h1>
      <button onClick={generatePDF}>Download PDF</button>
    </main>
  );
}