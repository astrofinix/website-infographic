
if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    console.log("test");
    document.getElementById("desktop-view").style.display = "flex";
    document.getElementById("navbar_logo").style.display = "none";
    document.getElementById("sideNav").style.display = "none";
    document.body.style.overflow = "hidden";
    document.addEventListener(
      "touchmove",
      function (event) {
        event.preventDefault();
      },
      { passive: false }
    );
    console.log("mobile --> redirect");
  } else {
    console.log("proceed");
    document.getElementById("desktop-view").style.display = "none";
    document.getElementById("navbar_logo").style.display = "block";
    document.getElementById("sideNav").style.display = "block";
    // For non-mobile devices, do nothing
    
  }