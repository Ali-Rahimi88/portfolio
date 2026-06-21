function Home() {
  return (
    <>
      <section className="hero">
        <h1>Hi, I'm Ali Akbar Rahimi 👋</h1>
        <p className="tagline">Digital Business & Data Science Student</p>
        <p>
          I build real-world applications and work with data — often both at the same time.
          Currently studying at UE University of Europe for Applied Sciences, Hamburg.
        </p>
      </section>

      <section>
        <h2>Featured Project</h2>
        <div className="card">
          <h3>Credio — Live Production App</h3>
          <p>
            A full stack credit/debit account management platform for business owners
            and their customers. Built solo, currently live with real users. Handles
            multi-role authentication, real-time updates, push notifications, and data
            workflows across 11 languages.
          </p>
          <div className="skills-grid" style={{ marginBottom: '1rem' }}>
            {['Python', 'Flask', 'PostgreSQL', 'Redis', 'WebSockets', 'Firebase FCM', 'JWT', 'Flutter', 'Render'].map(tag => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.Rahimi.banking_app" target="_blank" rel="noreferrer">View on Google Play</a>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="card">
          <h3>Data & ML</h3>
          <div className="skills-grid">
            {['Python', 'pandas', 'numpy', 'scikit-learn', 'matplotlib', 'Jupyter'].map(tag => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="card">
          <h3>Backend & DevOps</h3>
          <div className="skills-grid">
            {['Flask', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'JWT', 'WebSockets', 'Firebase', 'REST APIs', 'Render'].map(tag => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="card">
          <h3>Other</h3>
          <div className="skills-grid">
            {['Git', 'GitHub', 'SQL', 'HTML', 'CSS'].map(tag => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home