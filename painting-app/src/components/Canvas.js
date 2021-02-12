import React from 'react'
import { Painterro } from 'painterro' 



export default class Canvas extends React.Component {

    
//in render need to dynamically add user and topic id - right now just hardcoded to 2 for both
    render() {

        Painterro({
          //   saveHandler: function (image, done) {
          //     var formData = new FormData();
          //     formData.append("image", image.asBlob());
          //     formData.append("user_id", 2)
          //     formData.append("topic_id", 2)
          //     // you can also pass suggested filename 
          //     // formData.append('image', image.asBlob(), image.suggestedFileName());
          //     var xhr = new XMLHttpRequest();
          //     xhr.open('POST', 'http://127.0.0.1:3000/paintings', true);
          //     xhr.onload = xhr.onerror = function () {
          //       done(true);
          //     };
          //     xhr.send(formData);
          //   }
          // }).show()
          saveHandler: function (image, done) {
            var formData = new FormData();
            formData.append("image", image.asBlob(), image.suggestedFileName());
            formData.append("user_id", 2)
            formData.append("topic_id", 2)
            // you can also pass suggested filename 
            // formData.append('image', image.asBlob(), image.suggestedFileName());
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
          }
        }).show()

        return (
            <div> 
            {Painterro}
            </div>
        )
    }
}