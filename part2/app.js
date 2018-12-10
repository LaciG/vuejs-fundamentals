var one = new Vue({
  //Multiple Vue Instances
  el: '#vue-app-one',
  data: {
    title: 'Vue App One'
  },
  methods: {

  },
  computed: {
    greet: function() {
      return 'Hello from App one';
    }
  }
});

var two = new Vue({
  //Multiple Vue Instances
  el: '#vue-app-two',
  data: {
    title: 'Vue app Two'
  },
  methods: {
    changeTitle: function() {
      one.title = "Title Changed";
    }
  },
  computed: {
    greet: function() {
      return 'Yo from app two';
    }
  }
});

two.title = "Changed from outside";
