export default function Login() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <img src="/logo.png" alt="Dr. Digle logo" width="100" />
      <h1>Loginpagina</h1>
      <form>
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Wachtwoord" /><br />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}