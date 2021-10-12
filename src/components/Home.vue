<template>
  <div class="main">
    <section class="home">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="home-title">
              <button class="hey">Hello I'm</button>
              <h1>Mohit Singh Patel</h1>
              <h6>Web Designer and Developer</h6>
              <div class="social-details">
                <ul>
                  <li><i class="fas fa-envelope"></i>Mohiit77u@gmail.com</li>
                  <li><i class="fas fa-phone"></i>+91 8269584409</li>
                  <li><i class="fas fa-map-marker"></i>Indore (M.P), India</li>
                </ul>
              </div>
              <div class="social">
                <a href="https://www.facebook.com/imohiitsingh" target="blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/_iammohit__/" target="blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/mohit-singh-patel-2b6598189/" target="blank"><i class="fab fa-linkedin" ></i></a>
                <a href="https://github.com/mohit77u" target="blank"><i class="fab fa-github"></i></a>
              </div>
              <a href="#contact"><button class="hirebtn">Hire me</button></a>
            </div>
          </div>
          <div class="col-sm-6">
            <img src="/static/images/banner.png" alt="banner">
          </div>
        </div>
      </div>
    </section>

    <section class="about" id="about">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <img src="/static/images/about.png" alt="About">
          </div>
          <div class="col-sm-6">
            <div class="about-content">
              <h2>About me</h2>
              <div class="inner-line"></div>
              <p>Hello, I'm Mohit, Web-developer based on Indore. I have rich experience in web site design & building and customization. Also I am good at</p>
              <div class="good">
                <button class="good-btn">HTML</button>
                <button class="good-btn">CSS</button>
                <button class="good-btn">JAVASCRIPT</button>
                <button class="good-btn">WORDPRESS</button>
                <button class="good-btn">PHP</button>
                <button class="good-btn">ANGULAR JS</button>
                <button class="good-btn">REACT JS</button>
                <button class="good-btn">VUE JS</button>
                <button class="good-btn">LARAVEL</button>
              </div>
              <a href="#"><button class="downloadcvbtn">Download CV<i class="fas fa-download"></i></button></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="what" id="services">
      <div class="container">
        <h2 class="text-center">What I Do</h2>
        <div class="line">
          <div class="inner-line"></div>
        </div>
        <div class="row">
          <div class="col-sm-4" v-for="(what, index) in whatData" :key="index">
            <div class="what-content">
              <div class="text-center">
                <i v-bind:class= what.icon ></i>
              </div>
              <div class="card-body">
                <h5>{{ what.title }}</h5>
                <p>{{ what.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="ball-group">
          <div class="ball ball1"></div>
          <div class="ball ball2"></div>
        </div>
      </div>
    </section>

    <section class="skills" id="skills">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="skills-data">
              <h2>Technical Skills</h2>
              <div class="line">
                <div class="inner-line"></div>
              </div>
              <div class="skills-progress" v-for="(skill, index) in skillsData" :key="index">
                <div class="top-progress">
                  <p>{{skill.name}}</p>
                  <p>{{skill.percentage}}</p>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" v-bind:style= skill.width aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="skills-data">
              <h2>Professional Skills</h2>
              <div class="line">
                <div class="inner-line"></div>
              </div>
              <div class="single-professional-skils">
                <div class="prof-skill-name">
                  <div>
                    <vue-ellipse-progress 
                    :progress="75"
                    color="#0bceaf"
                    emptyColor="#fff"  
                    :size="100"
                    :thickness="5"
                    emptyThickness="5%"
                    legendClass="legend-custom-style"
                    animation="reverse 2000">
                    <p slot="legend-caption">%</p>
                    </vue-ellipse-progress>
                    <p class="skill-name">Communication</p>
                  </div>
                </div>
                <div class="prof-skill-name">
                  <div>
                    <vue-ellipse-progress              
                    :progress="85"
                    color="#0bceaf"
                    emptyColor="#fff"  
                    :size="100"
                    :thickness="5"
                    emptyThickness="5%"
                    legendClass="legend-custom-style"
                    animation="reverse 2000">
                    <p slot="legend-caption">%</p>
                    </vue-ellipse-progress>
                    <p class="skill-name">Team Work</p>
                  </div>
                </div>
              </div>
              <div class="single-professional-skils">
                <div class="prof-skill-name">
                  <div>
                    <vue-ellipse-progress              
                    :progress="70"
                    color="#0bceaf"
                    emptyColor="#fff"  
                    :size="100"
                    :thickness="5"
                    emptyThickness="5%"
                    legendClass="legend-custom-style"
                    animation="reverse 2000">
                    <p slot="legend-caption">%</p>
                    </vue-ellipse-progress>
                    <p class="skill-name">Project Management</p>
                  </div>
                </div>
                <div class="prof-skill-name">
                  <div>
                    <vue-ellipse-progress              
                    :progress="90"
                    color="#0bceaf"
                    emptyColor="#fff"  
                    :size="100"
                    :thickness="5"
                    emptyThickness="5%"
                    legendClass="legend-custom-style"
                    animation="reverse 2000">
                    <p slot="legend-caption">%</p>
                    </vue-ellipse-progress>
                    <p class="skill-name">Creativity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="edu-exp" id="experience">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="education">
              <h2>Education</h2>
              <div class="inner-line"></div>
              <div class="row">
                 <div class="col-sm-12" v-for="(education, index) in eduData" :key="index">
                  <div class="what-content">
                    <div class="card-body">
                      <h5>{{education.name}} <span class="different">{{education.different}}</span></h5>
                      <p>Passing Year: <span class="different">{{education.year}}</span></p>
                      <p><i>{{education.from}}</i></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
             <div class="experience">
              <h2>Work Experience</h2>
              <div class="inner-line"></div>
              <div class="row">
                 <div class="col-sm-12" v-for="(experience, index) in expData" :key="index">
                  <div class="what-content">
                    <div class="card-body">
                      <h5>{{experience.name}} at <span class="different">{{experience.company}}</span></h5>
                      <p>Working time: <span class="different">{{experience.time}}</span></p>
                      <p>Responsibilty: {{experience.responsibilty}} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio" id="portfolio">
      <div class="container">
        <h2 class="text-center">Recent Portfolio</h2>
        <div class="line">
          <div class="inner-line"></div>
        </div>
        <div class="row">
          <div class="col-sm-4" v-for="(portfolio, index) in portfolioData" :key="index">
            <div class="portfolio-content">
              <img v-bind:src="'/static/images/' + portfolio.image" alt="Portfolio">
              <div class="card-body">
                <h4>{{portfolio.title}}</h4>
                <h6>{{portfolio.type}}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="container">
        <h2 class="text-center">Contact</h2>
        <div class="line">
          <div class="inner-line"></div>
        </div>
        <div class="row">
          <div class="col-sm-4" v-for="(contact, index) in contactData" :key="index">
            <div class="what-content">
              <div class="text-center">
                <i v-bind:class= contact.icon ></i>
              </div>
              <div class="card-body">
                <h5>{{ contact.title }}</h5>
                <p>{{ contact.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="form">
              <form v-on:submit.prevent="addContactData">
                <div class="form-inner">
                  <input type="text" class="form-control first" placeholder="First Name" v-model="contact.firstname">
                  <input type="text" class="form-control" placeholder="Last Name" v-model="contact.lastname">
                </div>
                <div class="form-inner">
                  <input type="mobile" class="form-control first" placeholder="Mobile Number" v-model="contact.mobile">
                  <input type="email" class="form-control" placeholder="Enter E-mail" v-model="contact.email">
                </div>
                <input type="text" class="form-control" placeholder="Wants to hire for Service name..." v-model="contact.service">
                <textarea placeholder="Message" v-model="contact.message"></textarea>
                <button type="submit" class="submitbtn" @click="checkForm">Enquiry</button>
              </form>
              <p class="form-error" v-if="errors.length">Please correct the above fields</p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.90924712367!2d75.7237618214095!3d22.724228429904368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1631204971249!5m2!1sen!2sin" width="100%" height="450px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

import { contactFormData } from '../firebase'

export default {
  name: 'Home',
  data(){
    return{
      errors: [],
      contact: {
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        service: '',
        message: '',
      },
      whatData : [
        { icon: 'fas fa-fill-drip text-secondary', title: 'UI/UX Design', desc: 'You want to choose a Web Designer that has a good experience of the industry and who has gained a good reputation within his or her industry.'},
        { icon: 'fas fa-code text-danger', title: 'Web Development', desc: 'We keep the designs of the website fresh and unique. Being a graphics designer goes a long way in website development considering the images used.'},
        { icon: 'fas fa-laptop-code text-info', title: 'WordPress Development', desc: 'As my themes are developed from scratch and are not dependent on absolutely anything, they can withstand any updates that come along.'},
      ],
      skillsData : [
        { name: 'Html', percentage: '90%', width: 'width: 90%' },
        { name: 'Css', percentage: '85%', width: 'width: 85%' },
        { name: 'WordPress', percentage: '75%', width: 'width: 75%' },
        { name: 'React js', percentage: '45%', width: 'width: 45%' },
        { name: 'Angular js', percentage: '65%', width: 'width: 65%' },
        { name: 'Vue js', percentage: '40%', width: 'width: 40%' },
        { name: 'Laravel', percentage: '50%', width: 'width: 50%' },
      ],
      eduData : [
        { name: 'B.Tech in', different: 'Information Technology', year: '2019', from: 'Indore Institute of Science and Technology, Indore M.P'},
        { name: 'Higher Secondary School', different: '', year: '2013', from: 'Central Academy School, Rewa M.P'},
        { name: 'High School', different: '', year: '2011', from: 'Central Academy School, Rewa M.P'},
      ],
      expData : [
        { name: 'Web Developer', company: 'Mxpertz', time: 'July 2021 - Currently working', responsibilty: 'Project Management'},
        { name: 'Digital Marketing', company: 'AmitKK', time: 'July 2020 - April 2021', responsibilty: 'Digital Marketing, SEO, SMM'},
      ],
      contactData : [
        { icon: 'fas fa-map-marker text-primary', title: 'Address', desc: 'Indore (M.P)'},
        { icon: 'fas fa-envelope text-warning', title: 'Email', desc: 'mohiit77u@gmail.com'},
        { icon: 'fas fa-phone text-info', title: 'Phone', desc: '+91 8269584409'},
      ],
      portfolioData : [
        { title: 'TechyEdz Solutions', image: 'techyedz.jpeg', type: 'WordPress Development'},
        { title: 'The Fertilis Academy', image: 'fertilis.jpeg', type: 'WordPress Development'},
        { title: 'DASVM Technologies', image: 'dasvm.png', type: 'WordPress Development'},
        { title: 'Lifeway Med Center', image: 'lifeway.png', type: 'WordPress Development'},
        { title: 'DS Securities', image: 'ds.png', type: 'WordPress Development'},
      ]
    }
  },
  firebase: {
      contacts: contactFormData
  },
  methods: {
      addContactData: function () {
          contactFormData.push(this.contact)
          this.contact.firstname = ''
          this.contact.lastname = ''
          this.contact.mobile = ''
          this.contact.email = ''
          this.contact.service = ''
          this.contact.message = ''
          alert('Your Details has been sent successfully...')
      },
      checkForm: function (e) {
        if (this.contact.firstname && this.contact.lastname && this.contact.mobile && this.contact.email && this.contact.service) {
          return true;
        }
        this.errors = [];
        if (!this.contact.firstname) {
          this.errors.push('');
        }
        if (!this.contact.lastname) {
          this.errors.push('');
        }
        if (!this.contact.mobile) {
          this.errors.push('');
        }
        if (!this.contact.email) {
          this.errors.push('');
        }
        e.preventDefault();
      },
  }
}
</script>
