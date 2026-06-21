import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required.'
    } else if (form.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters.'
    }
    return newErrors
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setErrors({})
  }

  return (
    <>
      <section className="hero">
        <h1>Get in Touch</h1>
        <p>Interested in my work or want to discuss an opportunity? Send a message.</p>
      </section>

      <section>
        <div className="card">
          {submitted && (
            <p className="success" role="alert">
              ✅ Message sent successfully. I will get back to you soon.
            </p>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <p className="error" id="name-error" role="alert">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p className="error" id="email-error" role="alert">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <p className="error" id="message-error" role="alert">{errors.message}</p>}
            </div>

            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact