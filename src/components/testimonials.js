import React from "react"

const Testimonials = () => (
    <section className="main-testimonials">
      <h2 className="main-testimonials-title">What My Colleagues Say About Me</h2>
      <img className="main-testimonials-img" src="https://media.licdn.com/dms/image/C5603AQH6_42MfV_6wg/profile-displayphoto-shrink_800_800/0?e=1558569600&v=beta&t=1ivGkOPsRssP76o5KYvqoLQM62kXjpSBqIsU9GS49jE" alt="Mohammed Hussein" />
      <blockquote className="main-testimonials-blockquote container">
        <q className="main-testimonials-quote">
          David is an amazing engineer with a passion for front end development and deep knowledge about different platforms and programming languages.
          Working closely with David, I could see that he's great at identifying problems and fixing them. He knows how to prioritize when having a lot on his plate.
          He showed that he can step out of his comfort zone to take on critical tasks and was always sharing his knowledge.
        </q>
        <cite className="main-testimonials-cite">
          <div>Mohammed Hussein</div>
          <div>Software Engineer, HBO</div>
        </cite>
      </blockquote>
    </section>
)

export default Testimonials