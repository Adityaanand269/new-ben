$(window).on("load", function () {
  $(window).width() < 768 &&
    ($(".active__tab").on("click", function (e) {
      $(".nav-pills").slideToggle(400);
    }),
    $("#v-pills-tab .nav-link").on("click", function (e) {
      var activeTab = $(this).text();
      console.log(activeTab),
        $(".nav-pills").slideToggle(400),
        $(".active__tab span").text(activeTab);
    }));
}),
  $(".question__title").click(function (e) {
    e.preventDefault(),
      $(this).parent().find(".question__answer").slideToggle(400),
      $(this).parent().toggleClass("active");
  }),
  $(".faq__questions__buttons .expand__all").click(function (e) {
    e.preventDefault(),
      $(".question__answer").slideDown(600),
      $(".faq__question").addClass("active");
  }),
  $(".faq__questions__buttons .collapse__all").click(function (e) {
    e.preventDefault(),
      $(".question__answer").slideUp(600),
      $(".faq__question").removeClass("active");
  }),
  $(document).ready(function () {
    (showDropdown = !1),
      $(".selectpicker").on("show.bs.select", function (e) {
        showDropdown = !0;
      }),
      $(".selectpicker").on("hide.bs.select", function (e) {
        showDropdown = !1;
      });
  });
