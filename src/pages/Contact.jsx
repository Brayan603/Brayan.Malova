export default function Contact() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="flex flex-col space-y-4 max-w-md">
        <input type="text" placeholder="Your Name" className="p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="p-2 border rounded" />
        <textarea placeholder="Your Message" className="p-2 border rounded h-32"></textarea>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </section>
  );
}
