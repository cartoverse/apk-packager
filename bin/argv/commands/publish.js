module.exports = {
  command: "publish",
  description: "Publish packages to github",
  parse: function(yargs) {
    return yargs
      .reset()
      .usage("Usage: $0 "+module.exports.command+" [root-dir]")
      .argv;
  },
  handler: function(argv) {
    console.log("publish", argv);
  }
};