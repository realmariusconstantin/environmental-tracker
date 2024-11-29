<script>
export default {
  name: 'Header',
};
</script>

<template>
  <div class="header-buttons">
    <div class="header-button-home">
      <div class="header-button-home-child">
      </div>
<!--      <div class="home">Home</div>-->
      <div class="home">Home</div>
    </div>
    <div class="header-button-home1" id="headerButtonHome1">
      <div class="header-button-home-child">
      </div>
      <div class="impact-tracker">Impact tracker</div>
    </div>
    <div class="header-button-home2" id="headerButtonHome2">
      <div class="header-button-home-child">
      </div>
      <div class="activities">Activities</div>
    </div>
    <div class="header-button-home3" id="headerButtonHome3">
      <div class="header-button-home-child">
      </div>
      <div class="profile">Profile</div>
    </div>
  </div>
</template>

<style>

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.header-button-home-child {
  position: absolute;
  height: 100%;
  width: 99.75%;
  top: 0%;
  right: 0.25%;
  bottom: 0%;
  left: 0%;
  background-color: #fff;
}
.home {
  position: absolute;
  height: 85%;
  width: 85.39%;
  top: 12.5%;
  left: 14.61%;
  display: inline-block;
  background: none;
}
.header-button-home {
  position: absolute;
  height: 100%;
  width: 30.74%;
  top: -1.25%;
  right: 58.71%;
  bottom: 1.25%;
  left: 10.55%;
}
.impact-tracker {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  display: inline-block;
}
.header-button-home1 {
  position: absolute;
  height: 85%;
  width: 56.25%;
  top: 11.25%;
  right: 0%;
  bottom: 3.75%;
  left: 43.75%;
  cursor: pointer;
}
.header-button-home-item {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #fff;
}
.activities {
  position: absolute;
  height: 75%;
  width: 93.81%;
  top: 7.81%;
  left: 6.22%;
  display: inline-block;
}
.header-button-home2 {
  position: absolute;
  height: 100%;
  width: 25.25%;
  top: 0%;
  right: 17.94%;
  bottom: 0%;
  left: 56.81%;
  display: none;
}
.profile {
  position: absolute;
  height: 84.38%;
  width: 90.52%;
  top: 7.81%;
  left: 9.49%;
  display: inline-block;
}
.header-button-home3 {
  position: absolute;
  height: 100%;
  width: 17.93%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 82.07%;
  display: none;
}
.header-buttons {
  position: absolute;
  top: 25px;
  left: 1322px;
  width: 512px;
  height: 80px;
  font-size: 40px;
  color: #000;
}

.contact-admin img{
  padding: 10px 20px;
  width: auto;
  height: 60px;
  margin: auto;
}
</style>