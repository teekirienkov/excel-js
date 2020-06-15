class Dom {
}

export function native() {
  return new Dom()
}

native.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
}