function About() {
  return (
    <>
      <section className="hero">
        <h1>About Me</h1>
      </section>

      <section>
        <div className="card">
          <img
            src="/profile.jpg"
            alt="Profile photo of Ali Akbar Rahimi"
            className="profile-img"
          />
          <h2>Ali Akbar Rahimi</h2>
          <p>
            I'm a Digital Business & Data Science student at UE University of Europe
            for Applied Sciences in Hamburg. I have a strong interest in data analysis,
            machine learning, and backend development.
          </p>
          <p>
            I completed a two-week intensive Python course covering everything from
            fundamentals to real-world computational applications. Outside of studying,
            I build and maintain production applications — including Credio, a live
            mobile app with real users.
          </p>
        </div>

        <div className="card">
          <h3>Education</h3>
          <p>Bachelor's in Digital Business & Data Science — UE University of Europe for Applied Sciences, Hamburg</p>
        </div>

        <div className="card">
          <h3>Interests</h3>
          <div className="skills-grid">
            {['Data Analysis', 'Machine Learning', 'Backend Development', 'Mobile Apps', 'Open Source'].map(tag => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About