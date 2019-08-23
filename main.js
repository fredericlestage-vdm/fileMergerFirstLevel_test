$(document).ready(function() {
  let green = '#4CAF50';
  let red = '#F44336';
  let tests = [];

  tests.push(test_base);
  tests.push(test_new_release);
  tests.push(test_base_first);
  tests.push(test_new_release_first);

  tests.forEach(function(test) {
    let result = merge(test.oldObj, test.newObj, test.propPath, test.onValue);
    let content = $('<div class="test"></div>');
    content.append('<h2>' + test.name + '</h2>');

    let wrapper = $('<div class="content"></div>');
    content.append(wrapper);

    let left = $('<div class="element left"></div>');
    let right = $('<div class="element right"></div>');
    left.append('<h3>Result</h3>');
    right.append('<h3>Expected</h3>');

    let left_inner = $('<div></div>');
    let right_inner = $('<div></div>');
    left_inner.html(JSON.stringify(result));
    right_inner.html(JSON.stringify(test.expected));

    left.append(left_inner);
    right.append(right_inner);

    if (left_inner.text() == right_inner.text()) {
      wrapper.css('border-color', green);
      wrapper.addClass('success');
    } else {
      wrapper.css('border-color', red);
      wrapper.addClass('failure');
    }

    wrapper.append(left);
    wrapper.append(right);

    $('#content').append(content);
  })

  $('header p').html(
    '<span style="color:' + green + ';font-weight:500">Successes: </span>' + $('.success').length +
    ' | ' +
    '<span style="color:' + red + ';font-weight:500">Failures: </span>' + $('.failure').length
  )
});
