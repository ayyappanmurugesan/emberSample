import Component from '@ember/component';

export default Component.extend({

  didRender() {

      if(typeof this.get('articles')=='undefined') {

          $.getJSON('http://adhirudran.com/article.php').then(data => {
              this.set('articles', data);
          });
      }
  },

  actions: {

    
    userRating(art) {

      var self=this;

      let userrate=$("#rate"+art.id).val();


      try {

      $.ajax({
        method: 'POST',
        url: 'http://adhirudran.com/ember.php',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            self.set('articles',data)
            alert('Updated successfully');
        },  
        data: JSON.stringify({
          content: art.content,
          id: art.id,
          rating: parseInt(userrate)
        })
      })

      } catch(e) {
        alert(e.message)
      }

    } 

  }

});
