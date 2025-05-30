import { useRouter } from 'next/router';
export default function Vraag1() {
  const router = useRouter();
  return (
    <main style={ padding: '2rem', fontFamily: 'Arial' }>
      <nav style={{ marginBottom: '1rem' }}>
  <a href="/">Home</a> | <a href="/vragen">Vragenlijst</a> | <a href="/login/login">Login</a>
</nav>
      <h2>Heb je vaak een opgeblazen buik?</h2>
      <button onClick={() => router.push('/vragen/vraag2')}>Ja</button>
      <button onClick={() => router.push('/vragen/vraag2')}>Nee</button>
    </main>
  );
}