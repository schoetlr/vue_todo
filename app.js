var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      { id: 0, text: 'Clean Kitchen' },
      { id: 1, text: 'Mow grass' },
      { id: 2, text: 'Read book' }
    ]
  },

  methods: {
    lastTodoId: function(){
      var id = this.todos.slice(-1)[0].id;
      return id;
    },

    addTodo: function(){
      var todo = {id: this.lastTodoId() + 1, text: this.newTodo};
      this.todos.push(todo);
      this.newTodo = "";
    },

    onSubmit: function(){
      console.log("submitted");
    }
  }
});

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})