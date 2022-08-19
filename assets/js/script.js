var root = document.querySelector(".root");
var name = `
╭──❲root@ibnusaid❳<br>
╰──➤
`;
root.innerHTML = name;

var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 150,
});
/*ChinuLz Ganteng*/
typewriter
  .pauseFor(1000)
  .typeString("Hi, Iam Ibnu Said")
  .pauseFor(1500)
  .deleteChars(18)
  .typeString("Loading...")
  .pauseFor(3000)
  .start();

setTimeout(() => {
  window.location.assign("./pages/");
}, 12000);
