<template>
    <div id='page-wrp'>
        <div class="container">
          <div class="inner-flex">
            <section class="left-col">
              <div><img src='../assets/dps.jpg' alt='Dancho Shumtilov' width="400" height="300"></div>
              <article>
                <h2>Dancho <b>Shumtilov</b></h2>
              </article>
              <article>
                <h3 class="article-title">Contact</h3>
                <div class="address-box">                
                  <label class="label">Address:</label>
                  <span>10 Oborishte str, Veliko Tarnovo, Bulgaria</span>
                </div>
                <div class="phone-box">
                  <label class="label">Phone:</label>
                  <span>+359 898 474 937</span>
                </div>
                <div class="email-box">
                  <label class="label">Email:</label>
                  <div><a class='s-link' href="mailto:dancho.shumtilov@gmail.com" title='Conctact me via Email'>dancho.shumtilov@gmail.com</a></div>
                </div>
                <div class="social-box">
                  <label class="label">Linkedin:</label>
                  <div><a class='s-link' href="https://www.linkedin.com/in/dancho-shumtilov-37b090124/" title='Find me on Linkedin'>https://www.linkedin.com/in/dancho-shumtilov-37b090124/</a></div>
                </div>
              </article>

              <article>
                <h3 class="article-title">Languages</h3>
                <label class="label">English</label>
                <ol>
                  <li>Reading - excellent</li>
                  <li>Writing - very good</li>
                  <li>Verbal - good</li>
                </ol>                
              </article>

              <article>
                <h3 class="article-title">Hobbies</h3>
                <ol>
                  <li>Going out with my family</li>
                  <li>Travelink</li>
                  <li>Reading books</li>
                </ol>                
              </article>
            </section>

            <section class="right-col">
              <article>
                <h3 class="article-title">Summary</h3>
                <p>Front end Web Developer experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, JavaScript, CSS, jQuery. Experience with version control systems (SVN, Git). Experience with CSS preprocessors.  Proficient Photoshop user.</p>          
              </article>
              <article>
                <h3 class="article-title">Important Skills</h3>
                <ol>
                  <li>Complex problem solve</li>
                  <li>Strong decision maker</li>
                  <li>Innovative</li>
                </ol>
              </article>
              <article>
                <h3 class="article-title">Experience</h3>
                <p><strong>Front-end Web Developer</strong> 04/2014 to Present Date</p>
                <p><strong>Kukui corp.</strong> Veliko Tarnovo</p>
                  <ul>
                    <li>Cooperate with designers to create clean and intuitive responsive web sites</li>
                    <li>Develop reusable and cross-browser compatible code</li>
                    <li>Responsible to maintain and optimize the code to cover latest SEO and WCAG standards</li>
                  </ul>
              </article>
              <article>
                <h3 class="article-title">Education</h3>
                <ul>
                  <li>1996 - 2001 University of Ruse</li>
                  <li>1992 - 1996 High School of Natural Science and Mathematics, Veliko Tarnovo</li>
                </ul>
              </article>
              
              <article>
                <h3 class="article-title">Certifications</h3>
                <ul>
                  <li>Certified Scrummaster</li>
                </ul>
              </article>
            </section>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CV',
  props: {
  }
}
</script>

<style scoped>
  section  {
    padding: 2.5rem 0 1.25rem;
  }

  article {
    padding: 0 1.25rem;
    margin-bottom: 2.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #111;
    font-weight: 900;
    line-height: 1.2;
  }

  h1, h2 {
    font-size: 2.5rem;
    margin-bottom: 0.75em;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 0.75em;
  }
  
  h4 {
    font-size: 1.75rem;
    margin-bottom: 0.75em;
  }

  h5 {
    font-size: 1.5rem;
    margin-bottom: 0.75em;
  }

  h6 {
    font-size: 1.25rem;
    margin-bottom: 0.75em;
  }


  .left-col img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto 1.25rem;
  }

  .left-col h2 b {
    display: block;
    color: #2e74b5;
  }

  .article-title {
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #bbb;
  }

article .label {
  display: block;
  margin-bottom: 0.25rem;
  color: #111;
  font-weight: 900;
  font-size: 1.25rem;
}

article > div {
  margin-bottom: 1.25rem;
}

article span {
  display: block;
  color: #333;
  font-weight: 400;
  font-size: 1rem;
}

.s-link {
  display: inline-block;
  word-wrap: break-word;
  color: #2e74b5;
  -webkit-animation: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.s-link:focus,
.s-link:hover,
.s-link:active {
  color: #111;
}

@media (min-width: 768px) {
  .inner-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    text-align: left;
  }
  
  .inner-flex .left-col {
    background-color: #e2f0d9;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .inner-flex > section {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    width: 50%;
    max-width: 50%;
  }
}

@media (min-width: 992px) {
  .inner-flex .left-col {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 400px;
    flex: 0 0 400px;
    width: 400px;
    max-width: 400px;
  }

  article {
    padding: 0 2.5rem;
  }  
}

@media (min-width: 1224px) {
  .container {
    width: 964px;
  }
}
</style>
