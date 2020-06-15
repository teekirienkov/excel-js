// global component Excel
import {native} from "@core/dom";

export class Excel {
  constructor(selector, options) {
    this.$el = native(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = native.create('div', 'excel');

    // перебор классов
    this.components.forEach(Component => {
      // const $el = document.createElement('div');
      // $el.classList.add(Component.className); // static method
      const $el = native.create('div', Component.className)

      const component = new Component($el); // создаем инстансы

      $el.html(component.toHTML()); // method toHTML присутствует у каждого класса компонентов
      $root.append($el);
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}