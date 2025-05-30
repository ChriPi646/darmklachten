import { useRouter } from 'next/router';
export default function VraagIntro() {
  const router = useRouter();
  return (
    <main style={ padding: '2rem', fontFamily: 'Arial' }>
      <nav style={{ marginBottom: '1rem' }}>
  <a href="/">Home</a> | <a href="/vragen">Vragenlijst</a> | <a href="/login/login">Login</a>
</nav>
      <h1>Start de vragenlijst</h1>
      <p>Beantwoord enkele vragen over je klachten.</p>
      <button onClick={() => router.push('/vragen/vraag1')}>Start</button>
    </main>
  );
}