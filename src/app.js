// Arrays para generar excusas
let who = [
  'The dog', 'My grandma', 'The mailman', 'My bird', 'The cat',
  'My little brother', 'The neighbor', 'A squirrel', 'My hamster',
  'The delivery guy', 'My cousin', 'A raccoon', 'The janitor',
  'My pet turtle', 'A mysterious stranger'
];

let action = [
  'ate', 'peed', 'crushed', 'broke', 'stole', 'hid', 'destroyed',
  'chewed', 'spilled coffee on', 'threw away', 'lost', 'stepped on',
  'sat on', 'scratched', 'knocked over'
];

let what = [
  'my homework', 'my phone', 'the car', 'my laptop', 'my backpack',
  'my notebook', 'my project', 'my presentation', 'my flash drive',
  'my textbook', 'my calculator', 'my assignment', 'my report',
  'my essay', 'my research papers'
];

let when = [
  'before the class', 'when I was sleeping', 'while I was exercising',
  'during my lunch', 'while I was praying', 'right before the deadline',
  'when I was in the bathroom', 'during the power outage',
  'while I was helping my mom', 'during the thunderstorm',
  'when I was walking to school', 'at exactly midnight',
  'during my favorite TV show', 'while I was studying for another exam',
  'when I left it on the table'
];

// Función para generar excusa aleatoria
function generateRandomExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  
  return randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen;
}

// Función para generar nueva excusa
function generateExcuse() {
  console.log("Generando nueva excusa...");
  
  let excuseElement = document.getElementById('excuse');
  let button = document.getElementById('generateBtn');
  
  // Efecto de loading
  button.classList.add('loading');
  excuseElement.style.opacity = '0.5';
  
  // Generar nueva excusa después de un pequeño delay
  setTimeout(() => {
    let newExcuse = generateRandomExcuse();
    excuseElement.textContent = newExcuse;
    
    // Quitar efecto de loading
    button.classList.remove('loading');
    excuseElement.style.opacity = '1';
    
    console.log("Nueva excusa generada: " + newExcuse);
  }, 300);
}

// Cuando carga la página
window.onload = function() {
  console.log("Hello Rigo from the console!");
  console.log("Página cargada, generando primera excusa...");
  generateExcuse();
}