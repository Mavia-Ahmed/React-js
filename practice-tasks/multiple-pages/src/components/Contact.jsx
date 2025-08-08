const Contact = () => {
    return (
        <div>
            <main className="contact-page">
                <h1>Contact Me</h1>
                <p>Have questions, feedback, or want to collaborate? Reach out using the form below.</p>

                <form>
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" required />

                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Your email" required />

                    <label for="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Your message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </main>
        </div>
    );
};

export default Contact;