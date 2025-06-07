// Homepagina met knoppen

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welkom bij The Belly Dr.</h1>
      <p>Kies een van de opties hieronder:</p>
      <div style={{ marginTop: "1rem" }}>
        <button style={{ margin: "1rem" }}>Complete vragenlijst</button>
        <button style={{ margin: "1rem" }}>Gerichte vragenlijst</button>
        <button style={{ margin: "1rem" }}>Klachtendagboek</button>
      </div>
    </div>
  );
}
