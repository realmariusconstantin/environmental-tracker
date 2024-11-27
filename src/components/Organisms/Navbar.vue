<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__menu">
        <ul class="navbar__menu-list">
          <li class="navbar__menu-item">
            <router-link to="/information" class="navbar__menu-link">Information</router-link>
          </li>
          <li class="navbar__menu-item">
            <router-link to="/admin" class="navbar__menu-link">Admin</router-link>
          </li>
          <li class="navbar__menu-item">
            <router-link to="/signup" class="navbar__menu-link">Sign Up</router-link>
          </li>
          <li class="navbar__menu-item">
            <router-link to="/login" class="navbar__menu-link">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default({
  name: 'appNavbar',
})
</script>