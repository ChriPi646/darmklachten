export default function Login() {
  return (
    <main style={ padding: '2rem', fontFamily: 'Arial' }>
      <nav style={{ marginBottom: '1rem' }}>
  <a href="/">Home</a> | <a href="/vragen">Vragenlijst</a> | <a href="/login/login">Login</a>
</nav>
      <h1>Login</h1>
      <form>
        <label>Email:<br/><input type="email" name="email" /></label><br/><br/>
        <label>Wachtwoord:<br/><input type="password" name="password" /></label><br/><br/>
        <button type="submit">Inloggen</button>
      </form>
    </main>
  );
}