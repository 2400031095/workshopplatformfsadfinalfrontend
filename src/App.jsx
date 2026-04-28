import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">TrainSphere</h1>
      <p className="mt-4 text-slate-600">
        Workshop platform frontend. The application scaffold is in place; feature
        screens will be added here.
      </p>
    </section>
  )
}

function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold text-slate-900">Page not found</h1>
      <Link to="/" className="mt-4 inline-block text-blue-600 underline">
        Go home
      </Link>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
