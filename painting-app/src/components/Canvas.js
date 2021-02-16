import React from 'react'
import { Painterro } from 'painterro' 



export default class Canvas extends React.Component {
  state = {
    showCanvas: true,
    ptro: Painterro({
      hiddenTools: ['crop', 'close', 'settings', 'resize'],
      saveHandler: function (image, done) {
        var formData = new FormData();
        formData.append("image", image.asBlob(), image.suggestedFileName());
        formData.append("user_id", 2)
        formData.append("topic_id", 2)
        fetch('http://127.0.0.1:3000/paintings', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }, 

    })
  }

  hideCanvas = () => {
    this.setState({
      showCanvas: false
    })
  }


  chooseCanvasShow = (ptro) => {
   return  this.state.showCanvas ? ptro.show() : ptro.hide()
  }

  componentWillUnmount() {
    this.state.ptro.hide()
  }

  
    
//in render need to dynamically add user and topic id - right now just hardcoded to 2 for both
    render() {
      

      //  let ptro = Painterro({
      //     hiddenTools: ['crop', 'close', 'settings', 'resize'],
      //     saveHandler: function (image, done) {
      //       var formData = new FormData();
      //       formData.append("image", image.asBlob(), image.suggestedFileName());
      //       formData.append("user_id", 2)
      //       formData.append("topic_id", 2)
      //       fetch('http://127.0.0.1:3000/paintings', {
      //         method: 'POST',
      //         body: formData
      //       })
      //       .then(response => response.json())
      //       .then(data => {
      //         console.log('Success:', data);
      //       })
      //       .catch((error) => {
      //         console.error('Error:', error);
      //       });
      //     }, 
    
      //   })
  
        this.state.ptro.show()
        // debugger
        
        return (
            <div id='canvas'>
              
           
            </div>
        )
    }
}