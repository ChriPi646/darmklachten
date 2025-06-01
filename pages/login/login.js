export default function Login() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Login</h1>
      <form>
        <label>Email: <input type="email" name="email" /></label><br />
        <label>Wachtwoord: <input type="password" name="password" /></label><br />
        <button type="submit">Inloggen</button>
      </form>
    </main>
  );
}
