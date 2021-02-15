import React from 'react'
import { Painterro } from 'painterro' 



export default class Canvas extends React.Component {

    
//in render need to dynamically add user and topic id - right now just hardcoded to 2 for both
    render() {

        Painterro({
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
    
        }).show()

        return (
            <div id='canvas'>
              {Painterro} 
           
            </div>
        )
    }
}