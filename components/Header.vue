<template>
  <div class="navigation-background">
    <div class="navigation-content-container">
      <nuxt-link to="/"
        >
        <img class="logo-img" src="/img/logo.svg" alt="GM Professional Hairstudio" />
      </nuxt-link>
      <div
        class="burger"
      >
        <img class="avatar" :src="profile_picture" alt="Profilbild">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile_image: {
      type: String,
      default: "/logo.svg",
    },
  },
  data: () => {
    return {
      active: false,
    };
  },
};
</script>

<style>
.thin {
  margin-top: 0px;
}

.navigation-background {
  background-color: var(--menu-bg-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
}

.navigation-content-container {
  max-width: 1440px;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 auto;
}

.nav-links {
  display: flex;
  align-items: center;
}

hr {
  margin: 30px 0;
  border: 1px solid #000;
}

.nav-link {
  text-transform: uppercase;
  font-size: 20px;
  line-height: 30px;
  margin: 0px 15px;
  color: var(--orange-color);
  transition: 0.3s ease-in-out;
}

.nav-link:hover {
  color: var(--orange-color-hover);
  transition: 0.3s ease-in-out;
}

a {
  text-decoration: none;
  color: var(--text-dark);
}

.burger {
  display: none;
}

.line-1,
.line-2,
.line-3 {
  width: 30px;
  height: 3px;
  background-color: var(--orange-color);
  margin: 3px 0;
  transition: 0.3s ease-in-out;
}

a:hover {
  cursor: pointer;
}

@media (max-width: 1349px) {
  .navigation-content-container {
    display: flex;
    justify-content: space-between;
  }

  .navigation-content {
    position: absolute;
    display: none;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: var(--menu-bg-color);
    top: 100px;
    transition: 0.5s ease-in-out;
  }

  .burger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .active .line-1 {
    transform: rotate(45deg) translate(6.25px, 6.5px);
  }

  .active .line-2 {
    width: 0px;
  }

  .active .line-3 {
    transform: rotate(-45deg) translate(6.25px, -6.5px);
  }

  .navigation-content.active {
    opacity: 1;
    top: 100px;
    transition: height 0.5s ease-in-out;
    height: 100vh;
    overflow: hidden;
    display: block;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
  }

  .nav-link {
    margin: 20px 0px;
  }
}

@media (max-width: 1000px) {
  .logo-img {
    width: 200px;
  }

  .navigation-background {
    height: auto;
  }

  .navigation-content.active {
    top: 83px;
  }
}
</style>
