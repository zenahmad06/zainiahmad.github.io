window.addEventListener("scroll", function () {
    let header = document.querySelector(".header-box");
    let imageContainer = document.querySelector(".div-image");
    let sidebar = document.querySelector(".profile-sidebar");
    let contentArea = document.querySelector(".content-area");


    if (!header || !imageContainer || !sidebar) {
        console.error("One or more elements (header, imageContainer, sidebar) are missing.");
        return;
    }

    let headerBottom = header.getBoundingClientRect().bottom;
    let imageBottom = imageContainer.getBoundingClientRect().bottom;

    // When both header and image are out of view, make sidebar fixed
    // When sidebar fixed, the content area margin based on full width so we add margin left same as width sidebar
    //when we normal, style marginleft become original and width 100% same as 75% original width content
    //headerBottom <= 0 && imageBottom <= 0) poisiton bottom of each div , out of view if <=0
    if (headerBottom <= 0 && imageBottom <= 0) {
        sidebar.classList.add("fixed");
        sidebar.style.left=0;
        contentArea.style.marginLeft="25%";
        contentArea.style.width="calc(100% - 25%)"
    } else {
        sidebar.classList.remove("fixed");
        sidebar.style.left=0;

        contentArea.style.marginLeft="0%";
        contentArea.style.width="100%"

    }
});






