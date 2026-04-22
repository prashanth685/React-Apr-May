import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">MyApp</h1>

          {/* Mobile button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            ☰
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="flex flex-col mt-4 gap-2 md:hidden">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}
      </nav>

      {/* 🧱 Hero */}
      <section className="text-center p-6 md:p-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Mobile First Design
        </h2>
        <p className="text-gray-600 text-sm md:text-lg">
          Build responsive layouts easily.
        </p>
      </section>

      {/* 📦 Cards */}
      <section className="p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Card 1" text="Responsive card layout" />
          <Card title="Card 2" text="Works on all devices" />
          <Card title="Card 3" text="Resize to see effect" />
        </div>
      </section>

      {/* 🔻 Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-6">
        <p className="text-sm md:text-base">© 2026 MyApp</p>
      </footer>
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:scale-105 transition">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
