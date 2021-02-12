import React from 'react'
import { Painterro } from 'painterro' 



export default class Canvas extends React.Component {

    

    render() {

        Painterro({
            saveHandler: function (image, done) {
              var formData = new FormData();
              formData.append('image', image.asBlob());
              // you can also pass suggested filename 
              // formData.append('image', image.asBlob(), image.suggestedFileName());
              var xhr = new XMLHttpRequest();
              xhr.open('POST', 'http://127.0.0.1:3000/paintings', true);
              xhr.onload = xhr.onerror = function () {
                done(true);
              };
              xhr.send(formData);
            }
          }).show()

        return (
            <div> 
            {Painterro}
            </div>
        )
    }
}