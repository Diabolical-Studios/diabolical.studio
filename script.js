const pages = [
  {
    title: "Home",
    url: "home.html",
  },
  {
    title: "Portfolio",
    url: "portfolio.html",
  },
  {
    title: "Our Team",
    url: "our-team.html",
  },
  {
    title: "Jobs",
    url: "jobs.html",
  },
  // More pages...
];

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
      let page = this.getAttribute("data-page");
      let leftSide = document.querySelector(".left-side");

      if (page.includes("home")) {
        leftSide.classList.remove("hide-left-side");
      } else {
        leftSide.classList.add("hide-left-side");
      }

      handleLinkClick.call(this, e);
    }

    document
      .querySelector(".dark-light")
      .addEventListener("click", function () {
        var leftSide = document.querySelector(".left-side");

        if (leftSide.classList.contains("hide-left-side")) {
          leftSide.classList.remove("hide-left-side");
        } else {
          leftSide.classList.add("hide-left-side");
        }
      });

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

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".expand-btn");
    if (buttons.length > 0) {
      buttons.forEach(function (btn) {
        console.log("Button found");
        btn.addEventListener("click", function () {
          console.log("Button clicked");
          var card = this.parentElement.parentElement;
          var expandedContent = card.querySelector(".expanded-content");
          console.log("Expanded content found: ", expandedContent);
          if (
            expandedContent.style.display === "none" ||
            expandedContent.style.display === ""
          ) {
            expandedContent.style.display = "block";
            card.classList.add("expanded");
            console.log("Content is expanded");
          } else {
            expandedContent.style.display = "none";
            card.classList.remove("expanded");
            console.log("Content is collapsed");
          }
        });
      });
    } else {
      console.log("No expandable buttons found");
    }
  });

  const cursor = document.querySelector(".custom-cursor");
  const links = document.querySelectorAll("a");
  let isCursorInited = false;

  const initCursor = () => {
    cursor.classList.add("custom-cursor--init");
    isCursorInited = true;
  };

  const destroyCursor = () => {
    cursor.classList.remove("custom-cursor--init");
    isCursorInited = false;
  };

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      cursor.classList.add("custom-cursor--link");
    });

    link.addEventListener("mouseout", () => {
      cursor.classList.remove("custom-cursor--link");
    });
  });

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (!isCursorInited) {
      initCursor();
    }

    cursor.style = `translate: ${mouseX}px ${mouseY}px`;
  });

  document.addEventListener("mouseout", destroyCursor);

  /*
  $(function () {
    // Search bar code
    $(".search-bar input")
      .on("focus", function () {
        $(".header").addClass("wide");
      })
      .on("blur", function () {
        $(".header").removeClass("wide");
      })
      .on("input", handleSearch);

    function handleSearch() {
      const searchTerm = $(this).val().toLowerCase();
      const filteredPages = pages.filter((page) =>
        page.title.toLowerCase().includes(searchTerm)
      );

      displayResults(filteredPages);
    }

    function displayResults(results) {
      const searchResults = $("#search-results");
      searchResults.empty();
    
      if (results.length === 0) {
        const noResultsItem = $("<li>").text("No results found");
        searchResults.append(noResultsItem);
        return;
      }
    
      results.forEach((result) => {
        const item = $("<li>");
        const link = $("<a>")
          .text(result.title)
          .on("click", function(e) {
            e.preventDefault();
            // Find the main menu link with the same 'data-page' attribute and click it
            const correspondingLink = $(`.menu-link[data-page='${result.url}']`);
            console.log(`Clicked on search result with URL ${result.url}`);
            console.log(`Found corresponding main menu link: `, correspondingLink);
            correspondingLink.click();
          });
        item.append(link);
        searchResults.append(item);
      });
    }
  }); */

  // Get all items
  var items = document.querySelectorAll(".left-side .side-menu-link");

  items.forEach(function (item) {
    item.addEventListener("click", function () {
      var leftSide = document.querySelector(".left-side");

      if (window.innerWidth <= 945) {
        // Check if the device width is less than or equal to 945px
        leftSide.classList.add("hide-left-side");
      }
    });
  });

  // Initialize left-side visibility on page load
  window.addEventListener("load", function () {
    var leftSide = document.querySelector(".left-side");

    if (window.innerWidth <= 945) {
      // Check if the device width is less than or equal to 945px
      leftSide.classList.add("hide-left-side");
    } else {
      leftSide.classList.remove("hide-left-side");
    }
  });

  // Update left-side visibility on window resize
  window.addEventListener("resize", function () {
    var leftSide = document.querySelector(".left-side");

    if (window.innerWidth <= 945) {
      // Check if the device width is less than or equal to 945px
      leftSide.classList.add("hide-left-side");
    } else {
      leftSide.classList.remove("hide-left-side");
    }
  });

  function adjustHeight() {
    // Select the .app element
    const app = document.querySelector(".app");

    // Set the height of the .app element
    app.style.height = `${window.innerHeight}px`;
  }

  // Call adjustHeight on load
  window.addEventListener("load", adjustHeight);

  // Update height when window resizes
  window.addEventListener("resize", adjustHeight);

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
