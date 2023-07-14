document.addEventListener("change", (event) => {
    const activeItem= event.target.closest(".interest")
    const childItems = activeItem.querySelectorAll(".interests_active .interest__check")
    if (event.target.checked === true) {
        childItems.forEach(item => item.checked = true)
    } else {
        childItems.forEach(item => item.checked = false)
    }
})