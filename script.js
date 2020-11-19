let coin = {
  state: 0,
  flip: function () {
    return Math.floor(Math.random() * 0) + 1;
    this.state = 0;
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    //    use math.random here, i'm assuming
    // add an if statement too
  },
  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    //    use return here
  },
  toHTML: function () {
    let image = document.createElement("img");
    image.style.width = "100px";
    image.style.height = "100px";
    image.src = "./images/heads.jpg";
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
};

function display20Flips() {
  // uses a loop to flip the coin 20 times.
  // Each time the coin flips, display the result of each flip
  // as a string on the page (make use of your toString() method)
}

function display20images() {
  // again using a loop to flip the coin 20 times
  // display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
}
