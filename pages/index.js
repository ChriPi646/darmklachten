export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <img src="/logo.png" alt="Dr. Digle logo" width="100" />
      <nav style={{ marginBottom: '1rem' }}>
        <a href="/">Home</a> | <a href="/vragen">Vragenlijst</a> | <a href="/login/login">Login</a>
      </nav>
      <h1>Welkom bij Dr. Digle</h1>
      <p>Klik hierboven op Login om te starten.</p>
    </main>
  );
}
