var Generator = require("yeoman-generator");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    this.log(yosay("Time to generate your kit!"));
    this.answers = await this.prompt([
      {
        type: "confirm",
        name: "eslint",
        message: "Do you want Eslint?",
      },
      {
        type: "confirm",
        name: "prettier",
        message: "Do you want Prettier?",
      },
      {
        type: "confirm",
        name: "snyk",
        message: "Do you want Snyk?",
      },
      {
        type: "confirm",
        name: "codefactor",
        message: "Do you want Codefactor?",
      },
      {
        type: "confirm",
        name: "emailjs",
        message: "Do you want Emailjs?",
      },
      {
        type: "confirm",
        name: "coffee",
        message: "Do you want Coffee Animation?",
      },
      {
        type: "confirm",
        name: "i18n",
        message: "Do you want Internationalization system ?",
      },
      {
        type: "input",
        name: "theme",
        message: "What theme do you want ?",
        default: "default",
      },
    ]);
  }

  writing() {
    this.log("cool feature", this.answers.codefactor); // user answer `cool` used

    // const templates = ['package.json'];
    // templates.forEach((name) => {
    // 	this.fs.copyTpl(
    // 			this.templatePath(name),
    // 			this.destinationPath(name),
    // 			this
    // 	);
    // });
  }

  install() {
    // this.npmInstall();
  }
};
