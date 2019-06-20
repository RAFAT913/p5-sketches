//globals
let bios
let process_manager
let taskbar

function setup() {
  createCanvas(innerWidth, innerHeight)
  bios = new BIOS()
  process_manager = new ProcessManager()
  taskbar = new Taskbar()

  process_manager.createProcess("Process 01", "P1")
  process_manager.createProcess("Process 02", "P2")
}


function draw() {
  background(200)
  noStroke()
  
  bios.run()
  process_manager.runStack()
  taskbar.render()

  if (bios.isTherePressedKey()) {
    console.log(bios.getPressedKey().key)
    bios.clearPressedKey()
  }
}