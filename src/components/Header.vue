<template>
  <div>
    <section class="header sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a href="#"><h2 class="navbar-brand">Mohit Singh</h2></a>
                <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <!-- <i class="fas fa-bars"></i> -->
                <span class="toogle-bar top-toggle"></span>
                <span class="toogle-bar middle-toggle"></span>
                <span class="toogle-bar bottom-toggle"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#"><span></span>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about"><span></span>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#skills"><span></span>Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#experience"><span></span>Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services"><span></span>Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio"><span></span>Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact"><span></span>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
