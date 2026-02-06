import React from 'react'
import AIEditor from './components/AIEditor'

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          AI Assisted Text Editor
        </h1>
        <p className="mt-2 text-zinc-500">
          Select text and fix grammar with one click
        </p>
      </header>
      <main className="mx-auto mt-10 max-w-3xl">
        <AIEditor />
      </main>
    </div>
  )
}

export default App
