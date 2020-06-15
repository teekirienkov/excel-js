class Dom {
  constructor(selector) {
    if (typeof selector === 'string') {
      this.$el = document.querySelector(selector)
    } else {
      this.$el = selector
    }
  }

  // getter or setter (как textContent)
  html(html) {
    if (typeof html === 'string') {  // если html === string, работаем с ним
      this.$el.innerHTML = html
      return this // это нужно для работы цепочек (промисов и тд)
    }
    return this.$el.outerHTML.trim() // если html != string, получаем элемент (getter)
  }

  clear() {
    this.html('')
    return this // это нужно для работы цепочек (промисов и тд)
  }

  // реализовал тут встроенный метод из-за того, что $root становится инстансом Dom
  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this // это нужно для работы цепочек (промисов и тд)
  }
}

export function native(selector) {
  return new Dom(selector)
}

// create element and elem-classes
native.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes)
  }
  return native(el) // помещаем создаваемый элемент в класс
}

