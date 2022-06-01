const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searBtn = body.querySelector(".serch-box"),
    modeSwitch = body.querySelector(".toggle.swtich"),
    modeText = body.querySelector(".mode-text")

    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
    });