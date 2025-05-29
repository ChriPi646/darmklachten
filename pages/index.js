import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welkom bij Dr. Digle</h1>
      <p>Kies een onderdeel:</p>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/login/login">Login</Link></li>
        <li><Link href="/plan/sibo">FODMAP Plan</Link></li>
        <li><Link href="/info/fibromyalgie">Info: Fibromyalgie</Link></li>
      </ul>
    </main>
  );
}
