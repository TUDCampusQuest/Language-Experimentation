import { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [ping, setPing] = useState(null);

  useEffect(() => {
    // try a sample public JSON endpoint
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(r => r.json())
      .then(setPing)
      .catch(() => setPing({ error: 'fetch failed' }));
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui', padding: 16 }}>
      <h1>Campus Quest (Vite + React)</h1>

      <section style={{ display: 'grid', gap: 12, maxWidth: 640 }}>
        <div style={{ padding: 12, border: '1px solid #ddd', borderRadius: 8 }}>
          <h2>Counter</h2>
          <button onClick={() => setCount(c => c + 1)}>
            Clicked {count} times
          </button>
        </div>

        <div style={{ padding: 12, border: '1px solid #ddd', borderRadius: 8 }}>
          <h2>Fetch test</h2>
          <pre>{JSON.stringify(ping, null, 2)}</pre>
        </div>
      </section>
    </div>
  );
}
