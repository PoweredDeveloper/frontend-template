import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-slate-950 h-screen flex flex-col gap-2 justify-center items-center">
        <h2 className="text-4xl text-slate-100">Hello, World!</h2>
        <button className="text-white bg-slate-600 rounded-lg px-4 py-2" onClick={() => setCount((v) => v + 1)}>
          {count}
        </button>
      </div>
    </>
  )
}

export default App
