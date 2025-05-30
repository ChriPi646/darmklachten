import { useRouter } from 'next/router';

export default function Vraag1() {
  const router = useRouter();

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Vraag 1 van 5</h2>
      <p>Heb je vaak een opgeblazen buik?</p>
      <button onClick={() => router.push('/vragen/vraag2')}>Ja</button>
      <button onClick={() => router.push('/vragen/vraag2')}>Nee</button>
    </main>
  );
}
