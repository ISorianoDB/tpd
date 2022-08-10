function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('post').addEventListener('click', (event) => {
  let element_unordered = document.getElementById('unordered');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('comment-box').value);

  element_unordered.appendChild(new_li);

});

var images, t;

// Describe this function...
function displayImg() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", images[0]);
}

// Describe this function...
function cycleB() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  t = images.pop();
  images.unshift(t);
}

// Describe this function...
function cycleF() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  t = images.shift();
  images.push(t);
}


images = ['https://raw.githubusercontent.com/ISorianoDB/images/main/1.jpg', 'https://raw.githubusercontent.com/ISorianoDB/images/main/2.jpg', 'https://raw.githubusercontent.com/ISorianoDB/images/main/3.jpg', 'https://raw.githubusercontent.com/ISorianoDB/images/main/4.jpg', 'https://raw.githubusercontent.com/ISorianoDB/images/main/5.jpg', 'https://raw.githubusercontent.com/ISorianoDB/images/main/6.jpg', 'https://raw.githubusercontent.com/ISorianoDB/images/main/7.jpg', 'https://raw.githubusercontent.com/ISorianoDB/images/main/8.jpg', 'https://raw.githubusercontent.com/ISorianoDB/images/main/9.jpg', 'https://raw.githubusercontent.com/ISorianoDB/images/main/10.jpg'];
displayImg();


document.getElementById('p_btn').addEventListener('click', (event) => {
  cycleB();
  displayImg();

});

document.getElementById('n_btn').addEventListener('click', (event) => {
  cycleF();
  displayImg();

});