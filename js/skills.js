(function () {
  "use strict";

  var $log    = null;
  var theater = new TheaterJS();

  theater
  .describe("Skills", { speed: .7, accuracy: .7, invincibility: 6 }, "#skills")

theater
  .on("*", function (eventName, originalEvent, sceneName, arg) {
    var args  = Array.prototype.splice.apply(arguments, [3]),
    log;
    })
  .on("say:start, erase:start", function (eventName) {
    var self    = this,
    current = self.current.voice;

  self.utils.addClass(current, "saying");
  })
  .on("say:end, erase:end", function (eventName) {
    var self    = this,
    current = self.current.voice;

  self.utils.removeClass(current, "saying");
  });

  theater
    .write("Skills:Linux", 5000, toggleClass)
    .write("Skills:LPIC-1 Certified", 5000, toggleClass)
    .write("Skills:Virtualization", 5000, toggleClass)
    .write("Skills:Monitoring", 5000, toggleClass)
    .write("Skills:Amazon Web Services", 5000, toggleClass)
    .write("Skills:Redis", 5000, toggleClass)
    .write("Skills:Asterisk", 5000, toggleClass)
    .write("Skills:Vim ♥", 5000, toggleClass)
    .write(function () { theater.play(true); });

  var body = document.getElementsByTagName("BODY")[0];

  function toggleClass (className) {
    if (typeof className !== "string") className = "light";

    if (theater.utils.hasClass(body, className)) theater.utils.removeClass(body, className);
    else theater.utils.addClass(body, className);
  }

})();
