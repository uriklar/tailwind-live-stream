module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-background":
          "url('http://pet.oceanwp.org/wp-content/uploads/2021/02/img0345654.png')",
        dogs:
          "url('https://pet.oceanwp.org/wp-content/uploads/2021/02/img56765467654.png')",
        "blue-dog":
          "url('http://pet.oceanwp.org/wp-content/uploads/2021/02/img09890987.png') ",
        "pink-dog":
          "url('http://pet.oceanwp.org/wp-content/uploads/2021/02/img5678545678.png')",
        "yellow-dog":
          "url('http://pet.oceanwp.org/wp-content/uploads/2021/02/img5678765432.png')",
      }),
      fontFamily: {
        mouse: ["Mouse Memoirs", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
