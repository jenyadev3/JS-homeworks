document.addEventListener("change", (event) => {
    const activeItem= event.target.closest(".interest")
    const childItems = activeItem.querySelectorAll(".interests_active .interest__check")
    return childItems.forEach(item => item.checked = event.target.checked ? true : false)
})