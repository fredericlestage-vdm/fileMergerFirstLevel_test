$(document).ready(function() {
  let tests = [];

  tests.push(test_base);

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

    wrapper.append(left);
    wrapper.append(right);

    $('#content').append(content);
  })
});
