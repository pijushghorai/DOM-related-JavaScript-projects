const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '😃',
  '😁',
  '😬',
];

const randomEmojis = () => {
    return emojis[Math.floor(Math.random() * emojis.length)]
}

const changeEmoji = () => {
    btn.innerHTML = randomEmojis()
}

btn.addEventListener('mouseover', changeEmoji)
