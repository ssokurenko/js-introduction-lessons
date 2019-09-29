showUsers = function (users) {
  const $container = $('#users');
  users.forEach(user => $container.append(
    `<li class="user-item">
      <a href="/#${user.first_name}">
        ${user.first_name} ${user.last_name}
      </a>
    </li>`
  ));

  // Just to illustrate how jQuery works

  $('.user-item')
    .addClass('test')
    .css('color', 'green')
    .css('font-size', '2rem')
    .find('a')
    .css('color', 'violet');
}
