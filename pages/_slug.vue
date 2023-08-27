<template>
  <div>
    <div class="content-container linktree" style="margin-top: 70px">
      <img class="avatar" :src="page.profile_picture" alt="Profilbild" />
      <h1>{{ page.username }}</h1>

      <div class="link-container">
        <a
          v-for="(link, index) in page.links"
          :key="index"
          class="linktree_btn"
          :href="link.link"
          ><img v-if="link.icon" width="25px" height="25px" style="margin-right: 10px;" :src="link.icon" alt="icon">{{ link.button }}</a
        >
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  layout: "main",
  data() {
    return {
      title: "Home",
    };
  },
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch();
    return { page };
  },

  created() {
    console.log(this.page);
  },

  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description,
        },
      ],
    };
  },
};
</script>

<style>
.content-container a {
  color: var(--orange-color);
  text-decoration: underline;
}

.content-container h4 {
  color: var(--orange-color);
  text-decoration: none;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  margin: 0 auto 30px auto;
  display: block;
}

.linktree {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

.link-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 80%;
}

.linktree_btn {
  border: 2px solid var(--orange-color);
  color: var(--text-light);
  padding: 8px 15px;
  border-radius: 50px;
  margin: 5px 0;
  text-transform: uppercase;
  font-size: 18px;
  transition: 0.3s ease-in-out;
  text-decoration: none !important;
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
