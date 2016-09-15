$(function () {
  var $sections = $('section')
  var sessionPage = sessionStorage.getItem('page')
  var currentPage = sessionPage || 1

  function showPage(nr) {
    $sections.hide()
    sessionStorage.setItem('page', nr)
    $sections.eq(nr - 1).fadeIn('fast')
  }

  showPage(currentPage)

  $('.controlls__turn').on('click', function (e) {
    var isNext = e.target.classList.contains('next')
    currentPage = isNext ? parseInt(currentPage) + 1 : parseInt(currentPage) - 1
    showPage(currentPage)
  })
})
