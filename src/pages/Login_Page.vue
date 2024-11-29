<template>
  <html>
    <head>
      <title>Login</title>
    </head>
    <body>
      <h1>Login</h1>
      <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Login</button>
      </form>
    </body>
  </html>
</template>

<script>

</script>

<style>
.log-in-form-child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 20px;
  background-color: #fff;
}
.sign-up-form {
  position: absolute;
  height: 9.17%;
  width: 52.02%;
  top: 9.5%;
  left: 23.99%;
  font-size: 40px;
  display: inline-block;
  color: #000;
  white-space: pre-wrap;
}
.login-button-child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  background: linear-gradient(111.45deg, #4fb946, #b046b9 90.5%);
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}
.login {
  position: absolute;
  height: 52%;
  width: 39.5%;
  top: 24%;
  left: 38%;
  font-weight: 600;
  display: inline-block;
}
.login-button {
  position: absolute;
  height: 8.33%;
  width: 40.32%;
  top: 22.83%;
  right: 49.6%;
  bottom: 68.83%;
  left: 10.08%;
  font-size: 20px;
  color: #fff;
}
.signup-button-child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  background: linear-gradient(111.45deg, #fff 90.5%);
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}
.signup {
  position: absolute;
  height: 50%;
  width: 38%;
  top: 26%;
  left: 31%;
  font-weight: 600;
  display: inline-block;
}
.signup-button {
  position: absolute;
  height: 8.33%;
  width: 40.32%;
  top: 22.83%;
  right: 9.68%;
  bottom: 68.83%;
  left: 50%;
  backdrop-filter: blur(4px);
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  color: #000;
}
.checkboxes {
  position: absolute;
  height: 3.67%;
  width: 34.27%;
  top: 67%;
  right: 55.65%;
  bottom: 29.33%;
  left: 10.08%;
}
.forgot-password {
  position: absolute;
  height: 3.67%;
  width: 30.44%;
  top: 64%;
  left: 10.89%;
  font-size: 16px;
  color: #b046b9;
  display: inline-block;
}
.signup-now {
  color: #b046b9;
}
.not-a-member-container {
  position: absolute;
  height: 3.67%;
  width: 42.54%;
  top: 86.17%;
  left: 30.24%;
  font-size: 16px;
  display: inline-block;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
}
.inputtext-field-child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #fff;
}
.enter-your-name {
  position: absolute;
  height: 36%;
  width: 85%;
  top: 32%;
  left: 5.67%;
  display: inline-block;
}
.inputtext-field {
  position: absolute;
  height: 8.67%;
  width: 81.05%;
  top: 32%;
  right: 9.07%;
  bottom: 59.33%;
  left: 9.88%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  display: none;
}
.inputtext-field1 {
  position: absolute;
  height: 8.67%;
  width: 81.05%;
  top: 51.33%;
  right: 9.07%;
  bottom: 40%;
  left: 9.88%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}
.inputtext-field2 {
  position: absolute;
  height: 8.67%;
  width: 81.05%;
  top: 38.83%;
  right: 9.07%;
  bottom: 52.5%;
  left: 9.88%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}
.inputtext-field3 {
  position: absolute;
  height: 8.67%;
  width: 81.05%;
  top: 68.5%;
  right: 9.07%;
  bottom: 22.83%;
  left: 9.88%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  display: none;
}
.submit-button-child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: linear-gradient(111.45deg, #4fb946, #b046b9 90.5%);
}
.login1 {
  position: absolute;
  height: 48%;
  width: 14.75%;
  top: 26%;
  left: 42.5%;
  font-weight: 600;
  display: inline-block;
}
.submit-button {
  position: absolute;
  height: 8.33%;
  width: 80.65%;
  top: 70.67%;
  right: 9.27%;
  bottom: 21%;
  left: 10.08%;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
}
.close-icon {
  position: absolute;
  height: 8.67%;
  width: 10.48%;
  top: 0%;
  right: 0%;
  bottom: 91.33%;
  left: 89.52%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  cursor: pointer;
}
.log-in-form {
  position: absolute;
  top: 150px;
  left: 472px;
  width: 496px;
  height: 600px;
}
.login-page {
  width: 100%;
  position: relative;
  background: linear-gradient(111.45deg, #4fb946, #b046b9 90.5%);
  height: 900px;
  overflow: hidden;
  text-align: left;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.75);
  font-family: Inter;
}


</style>

