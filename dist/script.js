$(function () {
  // This is the code for the menu links
  $(".menu-link").click(function () {
    $(".menu-link").removeClass("is-active");
    $(this).addClass("is-active");
  });

  // This is the code for the header links
  $(".main-header-link").click(function () {
    $(".main-header-link").removeClass("is-active");
    $(this).addClass("is-active");
  });

  // Fetch API code
  $(function () {
    function handleLinkClick(e) {
      e.preventDefault();

      let page = this.getAttribute("data-page");

      // Fetch the new content only for local links (those with a `data-page` attribute)
      if (page) {
        fetch(page)
          .then((response) => {
            if (response.ok) {
              return response.text();
            } else {
              throw new Error("Error: " + response.statusText);
            }
          })
          .then(
            (data) =>
              (document.querySelector(".content-wrapper").innerHTML = data)
          )
          .catch((error) => console.error("Error:", error));
      }
    }

    function handleMainMenuClick(e) {
      // Show or hide the left-side div based on which main menu link was clicked
      let page = this.getAttribute("data-page");

      if (page.includes("home")) {
        document.querySelector(".left-side").style.display = "block";
      } else {
        document.querySelector(".left-side").style.display = "none";
      }

      handleLinkClick.call(this, e);
    }

    $(".menu-link").click(function () {
      $(".menu-link").removeClass("is-active");
      $(this).addClass("is-active");
    });

    // Fetch API code for main menu links
    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", handleMainMenuClick);
    });

    // Fetch API code for side menu links
    document.querySelectorAll(".side-menu-link").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });
  });

  // Dropdown code
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdowns.forEach((c) => c.classList.remove("is-active"));
      dropdown.classList.add("is-active");
    });
  });

  // Search bar code
  $(".search-bar input")
    .focus(function () {
      $(".header").addClass("wide");
    })
    .blur(function () {
      $(".header").removeClass("wide");
    });

  // Dropdown removal code
  $(document).click(function (e) {
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      dd.removeClass("is-active");
    }
  });

  // Overlay code
  $(function () {
    $(".dropdown").on("click", function (e) {
      $(".content-wrapper").addClass("overlay");
      e.stopPropagation();
    });
    $(document).on("click", function (e) {
      if ($(e.target).is(".dropdown") === false) {
        $(".content-wrapper").removeClass("overlay");
      }
    });
  });

  /* Status button and pop-up code
  $(function () {
    $(".status-button:not(.open)").on("click", function (e) {
      $(".overlay-app").addClass("is-active");
    });
    $(".pop-up .close").click(function () {
      $(".overlay-app").removeClass("is-active");
    });
  });

  $(".status-button:not(.open)").click(function () {
    $(".pop-up").addClass("visible");
  });

  $(".pop-up .close").click(function () {
    $(".pop-up").removeClass("visible");
  });

  // Light-dark toggle button
  const toggleButton = document.querySelector(".dark-light");

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });*/
});
