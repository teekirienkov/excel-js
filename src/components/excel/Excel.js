// global component Excel

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement('div');
    $root.classList.add('excel');

    // перебор классов
    this.components.forEach(Component => {
      const $el = document.createElement('div');

      $el.classList.add(Component.className); // static method

      const component = new Component($el); // создаем инстансы

      $el.innerHTML = component.toHTML(); // method toHTML присутствует у каждого класса компонентов
      $root.append($el);
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}