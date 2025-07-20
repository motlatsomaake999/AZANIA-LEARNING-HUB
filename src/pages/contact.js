export default function Contact() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">📞 Contact Us</h1>
      <p className="mt-4 text-lg">
        We&apos;d love to hear from you! Reach out with questions, feedback, or suggestions.
      </p>

      <div className="mt-6 space-y-2 text-left max-w-md mx-auto">
        <p><strong>Email:</strong> info@azanialearninghub.com</p>
        <p><strong>Phone:</strong> +27 72 626 4724</p>
        <p><strong>Address:</strong> 107 Mohlakong village, Limpopo, South Africa</p>
      </div>

      {/* Formspree Contact Form */}
      <form
        action="https://formspree.io/f/manbqoap"
        className="fs-form mt-10 max-w-md mx-auto text-left"
        target="_top"
        method="POST"
      >
        <div className="fs-field mb-4">
          <label className="fs-label block mb-1" htmlFor="name">Name</label>
          <input className="fs-input w-full px-4 py-2 border rounded" id="name" name="name" />
        </div>
        <div className="fs-field mb-4">
          <label className="fs-label block mb-1" htmlFor="email">Email</label>
          <input className="fs-input w-full px-4 py-2 border rounded" id="email" name="email" required />
        </div>
        <div className="fs-field mb-4">
          <label className="fs-label block mb-1" htmlFor="message">Message</label>
          <textarea className="fs-textarea w-full px-4 py-2 border rounded h-32" id="message" name="message"></textarea>
          <p className="fs-description text-sm text-gray-600 mt-1">
            We usually respond within 1–2 business days.
          </p>
        </div>
        <div className="fs-button-group">
          <button className="fs-button bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}