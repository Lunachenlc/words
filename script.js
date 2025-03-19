function createElement (type, props, ...children) {
  const $el = document.createElement(type)
  Object.keys(props).forEach(prop => $el[prop] = props[prop])
  $el.append(...children)
  return $el
}

const words = [
  'computer',
  'desk',
  'book',
  'chair'
]

const $form = document.getElementById('form')
const $word = document.getElementById('word')
const $words = document.getElementById('words')

/**
 * displaywords
 * create a word element for each word in the provided array
 * @param {array} arods
 */
function displayWords (words) {
  $words.innerHTML = ' '
  // const $els = words.map(word =>
  //   createElement('div', { className: 'word' }, word)  不知道做什么的
  // )
  $words.append(
    ...words.map(word => 
    createElement('div', { className: 'word' }, word)
  )

  )
}

displayWords(words)

$words.addEventListener('click', function (e) {
  if (e.target.classList.contains('word')) {
    words.splice(words.indexOf(e.target.textContent), 1)
    displayWords(words)
  }
})

const $anchor = document.getElementById('anchor')
$anchor.addEventListener('click', function (e) {
  e.preventDefault();
}
)

$form.addEventListener('submit', function (e) {
  e.preventDefault();
  // console.log($word.value)
  if ($form.checkVisibility())
  words.push($word.value)
  displayWords(words)
  $form.reset()
}
)

$word.addEventListener('input', function (e){
  if (words.includes($word.value)) {
    // input invalid
    $word.setCustomValidty('This word is already in the list')
  } else {
    // input valid
    $word.setCustomValidty('')
  }
}
)
