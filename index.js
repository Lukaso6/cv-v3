
/* parallax */

document.addEventListener("scroll", ()=> {
    let real = document.documentElement.scrollTop

    let elems = document.querySelectorAll(".parralax_container > *")


    for (const [idx, elem] of elems.entries()) {
        let scroll_factor = (elem.getAttribute("data-speed")/100)*-1 +1
        elem.style = `bottom: -${scroll_factor*real}px`
    }
})



