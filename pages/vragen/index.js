import { useRouter } from 'next/router';

export default function VraagIntro() {
  const router = useRouter();

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <img src="/logo.png" alt="Logo" width="100" />
      <h1>Start je persoonlijke analyse</h1>
      <p>Beantwoord enkele vragen over je klachten. Je krijgt daarna een eerste inschatting van mogelijke oorzaken zoals PDS, SIBO, intoleranties of stress.</p>
      <button onClick={() => router.push('/vragen/vraag1')}
        style={{ padding: '0.8rem 1.5rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', marginTop: '1rem' }}>
        Start de vragenlijst
      </button>
    </main>
  );
}
