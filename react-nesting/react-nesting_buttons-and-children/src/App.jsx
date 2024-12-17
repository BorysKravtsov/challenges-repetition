import "./App.css";

export default function App() {
  return (
    <main>
      <Button>h</Button>
      <Button>e</Button>
      <Button>l</Button>
      <Button>p</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
