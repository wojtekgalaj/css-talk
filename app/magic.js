$(function () {
  var currentPage = 1
  var $sections = $('section')

  function showPage(nr) {
    $sections.hide()
    $sections.eq(nr - 1).fadeIn('fast')
  }

  showPage(currentPage)

  $('.controlls__turn').on('click', function (e) {
    var isNext = e.target.classList.contains('next')
    currentPage = isNext ? currentPage + 1 : currentPage - 1
    showPage(currentPage)
  })
})
