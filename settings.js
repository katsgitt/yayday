/*
 * QUICK EDIT FILE — start here!
 * Change any text inside the quotes, then save and refresh index.html.
 * You can edit the colors and visual styling in style.css.
 * No build tool or npm required.
 */

const BIRTHDAY_SETTINGS = {
  browserTitle:"Kat's special website",
  heroLine1: "A MILLION Pieces??!! nooooo",
  heroLine2: "Watch the magic of kat's ninjas hehehe",
  heroDescription: "A heart has shattered into millions of tiny, glowing pieces. Kat’s ten little ninjas have one mission: find every piece and put it back together, just for you.",
  letterHeading: "To the main character of today ♡",
  letterBody: "Hieeeee happy happy happyyyyy birthdayyyy, u the best best person, damn u 22 oldie hope this year is kinder to you and you find 2x happiness bcs u deserve it, tysm for everything and sticking around even tho i havent been so good to you , everything means a lot , u do ragebait me but since it is ur bday we will ignore this part, i hate it how you are almost always correct about everything sighs , but how do u do tho? damn impressive, anyways back to the topic, i will pray you get everything u want and get sm sm 10x stronger this year and no one gets to remove that sweet kind of evil smile and laugh of urs, and screw the people who ever did ( i am talking about me too ) i will fite everyone lesss gooo just gimme the list, u r very nice nice , supoortive to everyone ( the only exception is me ), u r always there for people when they need and i love that sm about you since the start, if u remember i told u that i noticed u used to nod for everyone who used to present their ppt in sem 1, i am talking about things like these u do now ( its the diff things u do now , if u get me), i love how u r so confident and strong even if u r hesitating inside or even if u r having or fighting ur own battles inside you never let it show outside i admire that a lot but even tho ik u r strong i hope you find a place where you can be truly you and where you are never afraid to be vulnerable and where you are truly happy, and im sorry i couldnt be that place or person for you, on ur day let us celebrate the amazing person you have become, just be you always and be happy, you are a good person and everyone is very lucky to have you by their side, tysm for everything, happiest birthday my sweet alter <3 i always got ur back even if you dont want it, sorry about how i made things bad never meant anything like that, anyways keeping these things aside, lemme end this here, happy happy birthdayyy tataaa ",
  letterSignature: "WITH LOVE, FROM YOUR TINY NINJA SQUAD ✦",
  footer: "MADE WITH MAGIC & VERY SMALL NINJA ENERGY ✦"
};

// Apply personalized text to the page. Keep these lines unless changing how the site works.
(() => {
  const update = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && typeof value === "string") element.textContent = value;
  };
  document.title = BIRTHDAY_SETTINGS.browserTitle;
  update("#heroLead", BIRTHDAY_SETTINGS.heroLine1);
  update("#heroWish", BIRTHDAY_SETTINGS.heroLine2);
  update("#heroDescription", BIRTHDAY_SETTINGS.heroDescription);
  update("#letterTitle", BIRTHDAY_SETTINGS.letterHeading);
  update("#letterText", BIRTHDAY_SETTINGS.letterBody);
  update("#letterSign", BIRTHDAY_SETTINGS.letterSignature);
  update(".footer", BIRTHDAY_SETTINGS.footer);
})();
