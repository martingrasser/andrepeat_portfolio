const glob = require("glob");

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("content/images");

  // Passthrough copy for fonts
  eleventyConfig.addPassthroughCopy("content/fonts");

  // Projects collection
  eleventyConfig.addCollection("projects", function(collection) {
    return collection.getFilteredByGlob("content/projects/*.md");
  });

  return {
    dir: {
      input: "content",
      includes: "../layouts",
      output: "_site"
    }
  };
}; 