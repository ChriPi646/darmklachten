export default function Dashboard() {
  return (
    <main style={ padding: '2rem', fontFamily: 'Arial' }>
      <img src="/logo.png" alt="Dr. Digle" width="100" />
      <nav style={{ marginBottom: '1rem' }}>
  <a href="/">Home</a> | <a href="/vragen">Vragenlijst</a> | <a href="/login/login">Login</a>
</nav>
      <h1>Dashboard</h1>
    </main>
  );
}