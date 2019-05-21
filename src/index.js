const classSelector = '.container-list'

$(classSelector).each((i, el) => {
  console.log(i, $(el))
  $(el)
    .find('.list-item')
    .on('click', (e) => {
      $(e.target)
        .addClass('selected')
        .siblings()
        .removeClass('selected')
    })
})
