import React from 'react';
import './UploadImage.css';

import { Storage, API, graphqlOperation } from 'aws-amplify';
import Predictions from '@aws-amplify/predictions';
import { createPicture } from '../graphql/mutations';
import awsExports from "../aws-exports";

class UploadImage extends React.Component {



    render() {
        return (
            <div className="UploadImage">
                <div>
                    <p>Please select an image to upload</p>

                </div>
            </div>
        )
    }
}

export default UploadImage;