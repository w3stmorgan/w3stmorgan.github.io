module.exports = {
  siteMetadata: {
    description: "Personal page of Ahmet Gochmammedov",
    locale: "en",
    title: "Ahmet Gochmammedov",
    showThemeLogo: false,
    formspreeEndpoint: "https://formspree.io/f/xbjqkrbd",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "dark-blue",
      },
    },
  ],
}
