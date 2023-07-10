const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".tab__content");

const setActiveTab = (evt) => {
  
  const activeTab = evt.target; 

  tabs.forEach((tab) => {
    tab.classList.toggle("tab_active", tab === activeTab);
  })

  const tabIndex = Array.from(tabs).indexOf(activeTab);

  pages.forEach((page, pageIndex) => {
    page.classList.toggle("tab__content_active", pageIndex === tabIndex);
  })
}

tabs.forEach((tab) => tab.addEventListener("click", setActiveTab));

