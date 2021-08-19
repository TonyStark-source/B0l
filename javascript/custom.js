const mdContent = document.getElementsByClassName('md-content')[0]
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem(location.pathname) != null) {
    mdContent.scrollLeft = localStorage.getItem(location.pathname) 
  }
  mdContent.onscroll = () => {
    localStorage.setItem(location.pathname, mdContent.scrollLeft)
    console.log('scrolling')
  }
})