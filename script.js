let codes = document.querySelectorAll(".code")

codes[0].focus()

codes.forEach((curr, index) => {

    curr.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
            curr.value = ""
            setTimeout(() => { codes[index + 1].focus() }, 10)
        }
        if (e.key == 'Backspace') {
            setTimeout(() => { codes[index - 1].focus() }, 10)
        }
    })

})
