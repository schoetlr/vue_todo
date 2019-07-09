var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    todos: [
      { id: 0, text: 'Clean Kitchen' },
      { id: 1, text: 'Mow grass' },
      { id: 2, text: 'Read book' }
    ]
  }
});

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})