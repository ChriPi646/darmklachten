
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    alert(`Inloggen met ${email}`);
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Inloggen</h1>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
