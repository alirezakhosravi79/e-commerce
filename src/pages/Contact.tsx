function ContactPage() {
  return (
    <div className="bg-black min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* اطلاعات تماس */}
          <div className="md:w-1/2 bg-gray-100 p-6 rounded-2xl shadow-md space-y-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Get in Touch</h2>
            <p className="text-gray-700">
              We’d love to hear from you. Reach out anytime.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li><strong>📍 Address:</strong> 123 Hero Street, Metropolis, NY</li>
              <li><strong>📧 Email:</strong> support@superstore.com</li>
              <li><strong>📞 Phone:</strong> +1 (800) 123-4567</li>
              <li><strong>🕒 Hours:</strong> Mon - Fri: 9 AM - 6 PM</li>
              <li><strong>🌐 Website:</strong> www.superstore.com</li>
              <li>
                <strong>🔗 Social:</strong>{" "}
                <a href="#" className="text-blue-600 hover:underline">Instagram</a>,{" "}
                <a href="#" className="text-blue-600 hover:underline">Facebook</a>,{" "}
                <a href="#" className="text-blue-600 hover:underline">Twitter</a>
              </li>
              <li>
                <strong>🗺️ Location:</strong> 
                <div className="mt-2">
                  <iframe
                    className="w-full h-40 rounded-lg border border-gray-300"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.196265937104!2d-122.4010748241776!3d37.78991101206081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d13f2f67%3A0x4cd5c2a50c41a42f!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1684774732321!5m2!1sen!2sus"
                    allowFullScreen={false}
                    loading="lazy"
                    title="Company Location"
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>

          {/* فرم تماس */}
          <div className="md:w-1/2 bg-gray-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Send a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-gray-800">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-800">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-800">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
