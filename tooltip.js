    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
    
    document.getElementById("sidebar-bar").addEventListener("click", (e) => {
        let logo = e.target.getAttribute("src");

        if (logo === "images/arrow-right.svg") {

            e.target.setAttribute("src", "images/sidebar.svg");
            document.getElementById("logo").setAttribute("src", "images/logo.svg");

            document.querySelectorAll(".sidebar").forEach((link) => {
              link.style.width = "220px";
              document.querySelectorAll(".main-content").forEach((text) => {
                text.style.marginLeft = "220px";
              });
            });

            document.querySelectorAll(".sidebar").forEach((link) => {
              link.style.width = "220px";

              const children = link.querySelector(".sidebar-nav").children;

              Array.from(children).forEach((child) => {
                const span = child.querySelector("span");
                if (span) {
                  span.style.display = "inline";
                }
              });

              document.querySelectorAll(".main-content").forEach((text) => {
                text.style.marginLeft = "220px";
              });

              document.getElementById("footer-logo").removeAttribute("style");

              var tooltipTriggerList = [].slice.call(
                document.querySelectorAll(
                  '.sidebar-nav [data-bs-toggle="tooltip"]'
                )
              );

              tooltipTriggerList.forEach((tooltipTriggerEl) => {
                // new bootstrap.Tooltip(tooltipTriggerEl);
                bootstrap.Tooltip.getInstance(tooltipTriggerEl)?.dispose();
              });

          });
        
        } else {

          e.target.setAttribute("src", "images/arrow-right.svg");
          document.getElementById("logo").setAttribute("src", "images/logo-small.svg");

          document.querySelectorAll(".sidebar").forEach((link) => {

            link.style.width = "90px";

            const children = link.querySelector(".sidebar-nav").children;

            Array.from(children).forEach((child) => {

              const span = child.querySelector("span");
              const text = span?.innerText ? span?.innerText: '';
              if (span) {
                span.style.display = "none";
              }

              const image = child.querySelector("i");
              if (image) {
                if (text) {
                  image.setAttribute("data-bs-toggle", "tooltip");
                  image.setAttribute("data-bs-placement", "right");
                  image.setAttribute("data-bs-title", text);
                }
              }
            });

            document.querySelectorAll(".main-content").forEach((text) => {
              text.style.marginLeft = "90px";
            });

            document.getElementById("footer-logo").setAttribute("style", "display: none !important;");

            var tooltipTriggerList = [].slice.call(document.querySelectorAll('.sidebar-nav [data-bs-toggle="tooltip"]'));
            tooltipTriggerList.forEach((tooltipTriggerEl) => {
              new bootstrap.Tooltip(tooltipTriggerEl);
            });

          });

        }
    });

    // Save scroll position
    document.querySelector('.sidebar').addEventListener('scroll', function() {
      localStorage.setItem('sidebarScroll', this.scrollTop);
    });

    // Restore scroll position on load
    window.addEventListener('DOMContentLoaded', function() {
      const sidebar = document.querySelector('.sidebar');
      const scroll = localStorage.getItem('sidebarScroll');
      if (scroll !== null) sidebar.scrollTop = scroll;
    });