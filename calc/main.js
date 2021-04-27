//mouse input
let is_mouse_released = true
let is_mouse_pressed = false
let is_mouse_clicking = false
let is_mouse_releasing = false

//grabbing
let is_mouse_grabbing = false
let node_grabbed = null
let node_grab_xoff = NaN
let node_grab_yoff = NaN


let nodes = []

function setup() {
  createCanvas(600, 600);
  nodes.push(new Node(300, 300, 100, 100, 2, 1))
  nodes.push(new Node(100, 100, 100, 100, 2, 3))
}

function draw() {
  mouseInput()
  background(0)

  nodes.forEach((e, i) => e.render())

  if (is_mouse_clicking) {
    if (mouseButton == LEFT) {

      nodes.reverse().forEach((e, i) => {
        if (e.isPointInside(mouseX, mouseY)) {
          is_mouse_grabbing = true
          node_grabbed = e
          node_grab_xoff = mouseX - e.x
          node_grab_yoff = mouseY - e.y
          nodes.move(i, nodes.length)
        }
      })

    }
  }

  if (is_mouse_releasing) {
    if (mouseButton == LEFT) {
      is_mouse_grabbing = false
      node_grabbed = null
      node_grab_xoff = NaN
      node_grab_yoff = NaN
    }
  }

  if (is_mouse_grabbing) {
    node_grabbed.x = mouseX - node_grab_xoff
    node_grabbed.y = mouseY - node_grab_yoff
  }

}






function mouseInput() {
  if (mouseIsPressed) {
    if (!is_mouse_clicking && is_mouse_released) {
      is_mouse_clicking = true
      is_mouse_released = false
    } else {
      is_mouse_clicking = false
    }
    is_mouse_pressed = true
  } else {
    if (!is_mouse_releasing && is_mouse_pressed) {
      is_mouse_releasing = true
      is_mouse_pressed = false
    } else {
      is_mouse_releasing = false
    }
    is_mouse_released = true
  }
}