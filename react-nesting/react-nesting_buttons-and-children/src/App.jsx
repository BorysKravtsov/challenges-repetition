import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Click Me!</Button>
    </main>
  );
}

// Reusable Button component
function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}