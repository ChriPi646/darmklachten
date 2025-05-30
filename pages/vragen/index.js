import Link from 'next/link';
import { vragenlijsten } from '../../data/vragenlijsten';

export default function VragenIndex() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Kies een vragenlijst</h1>
      <ul>
        {Object.entries(vragenlijsten).map(([slug, lijst]) => (
          <li key={slug}>
            <Link href={`/vragen/${slug}`}>{lijst.aandoening}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}