export default function Projects() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p className="text-gray-600">A modern React portfolio with Tailwind styling.</p>
        </div>
        <div className="p-4 border rounded shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold">E-commerce App</h3>
          <p className="text-gray-600">React + Firebase project with cart functionality.</p>
        </div>
      </div>
    </section>
  );
}
