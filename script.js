let coin = {
  state: 0,
  flip: function () {
    if (Math.random()* 100 < 50) {
        this.state = 0; 
    } else {
      this.state = 1;
    }
    
    
  },
  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    //    use return here
    if (this.state === 1) {
      return "Heads"
    } else {
      return "Tails"
    }
  },
  toHTML: function () {
    let image = document.createElement("img");
    image.style.width = "100px";
    image.style.height = "100px";
   
    if (this.state === 1) {
      image.src = "./images/dentHead.jpg"
    } else {
      image.src = "./images/dentTails.jpg"
    }
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  }
};

let image = document.createElement('img');
image.src = './images/dentHead.jpg'

document.body.append(image)


// let paragraph = document.createElement('p');
// paragraph.innerHTML = 'Heads';

// document.body.append(paragraph)

function display20Flips() {
  // uses a loop to flip the coin 20 times.
  // Each time the coin flips, display the result of each flip
  // as a string on the page (make use of your toString() method)

  for (let i = 0; i < 20; i++) {
    coin.flip()
    document.body.append(coin.toString());
  }
}
display20Flips()

function display20images() {
  // again using a loop to flip the coin 20 times
  // display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
  for (let i = 0; i < 20; i++) {
    coin.flip()
    document.body.append(coin.toHTML());
  }
}

display20images()
