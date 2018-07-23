import React from 'react';  

import $ from 'jquery';

export default class ArticleView extends React.Component {

    state={
        
    }

    componentDidMount() {
       
        $('#editor').jqte()
        $(".jqte_editor").css('height','400px')
      
        
    }

    submitArticle() {
        
        var content=$("#editor").val();

        alert(content)

        if(content.trim()=='') {

            alert('No content in the Article')

        } else {

                 try {

                $.ajax({
                    method: 'POST',
                    url: 'http://adhirudran.com/ember.php',
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function (data) {
                       
                        alert('Updated successfully');
                    },  
                    data: JSON.stringify({
                    content: content,
                    rating: 0
                    })
                })

                } catch(e) {
                    alert(e.message)
                }

        }
    }

    render() {

        return (
         

        <div className='container-fluid'>

            <div  className='container' > 

                <div id='editor'>

                    {this.props.content}

                </div>

                <button className='btn btn-success float-right' onClick={this.submitArticle.bind(this)}>Post New Article</button>

            </div>

        </div>

               
        )

    }
}