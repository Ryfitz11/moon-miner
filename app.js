

let cheese = 0
let totalMultiplier = 1
let collectionInterval = 1

let clickUpgrade = {
  pickaxe: {
    price: 2,
    quantity: 0,
    multiplier: 1
  },
  carts: {
    price: 10,
    quantity: 0,
    multiplier: 5
  }
}
let autoUpgrade = {
  rovers: {
    price: 10,
    quantity: 0,
    multiplier: 1
  },
  falcon: {
    price: 100,
    quantity: 0,
    multiplier: 10
  }
}

function startInterval() {

  collectionInterval = setInterval(collectAutoUpgrades, 1000);
}

function collectAutoUpgrades(collectionInterval, cheese) {

  for (let i = 0; i < autoUpgrade.length; i++) {
    collectionInterval += autoUpgrade[i].quantity * autoUpgrade[i].multiplier
    cheese += collectionInterval
  }
}


function buyRover() {
  if (cheese >= autoUpgrade.rovers.price) {
    autoUpgrade.rovers.quantity++
    cheese -= autoUpgrade.rovers.price
    autoUpgrade.rovers.price += 10
    collectionInterval += autoUpgrade.rovers.quantity
    update()

  }
}
function buyFalcon() {
  if (cheese >= autoUpgrade.falcon.price) {
    autoUpgrade.falcon.quantity++
    cheese -= autoUpgrade.falcon.price
    autoUpgrade.falcon.price += 10000
    collectionInterval += autoUpgrade.falcon.quantity
    update()

  }
}

function mine() {
  cheese += totalMultiplier
  update()
}
function buyPickaxe() {
  if (cheese >= clickUpgrade.pickaxe.price) {
    cheese -= clickUpgrade.pickaxe.price
    clickUpgrade.pickaxe.quantity++
    totalMultiplier += 1
    clickUpgrade.pickaxe.price += 2
    update()
  }
}
function buyCart() {
  if (cheese >= clickUpgrade.carts.price) {
    cheese -= clickUpgrade.carts.price
    clickUpgrade.carts.quantity++
    totalMultiplier += 10
    clickUpgrade.carts.price += 10
    update()
  }
}

function update() {

  document.getElementById('total').innerText = `${cheese}`
  document.getElementById("pickprice").innerText = `Cost: ${clickUpgrade.pickaxe.price}`
  document.getElementById("picktotal").innerText = `Pickaxes: ${clickUpgrade.pickaxe.quantity + 1}`
  document.getElementById("cartprice").innerText = `Cost: ${clickUpgrade.carts.price}`
  document.getElementById("carttotal").innerText = `Carts: ${clickUpgrade.carts.quantity}`
  document.getElementById("roverprice").innerText = `Cost: ${autoUpgrade.rovers.price}`
  document.getElementById("rovertotal").innerText = `Rovers: ${autoUpgrade.rovers.quantity}`
  document.getElementById("falconprice").innerText = `Cost: ${autoUpgrade.falcon.price}`
  document.getElementById("falcontotal").innerText = `Falcons: ${autoUpgrade.falcon.quantity}`
}
// function mineAuto() {
// }
//create a second function similar to the mine function that increase the cheese based on how many auto upgrades we have and how much their multipliers are. (hint: math)

//setInterval(funcName, amountOfTime(in milliseconds))
startInterval()
