import React from 'react';
import style from "../styles/form.modules.css";

const Implementation = () => {
    return (
        <>
            <br/>
            <h3 className="fs-1" style={{textAlign:'Center', color: 'blue'}}>Implementation Details of the Project</h3>
            <br/>
            <div class='form-container'>
                <div class='form'>
                    <div class='form-content'>
                        <div class='form-title'>Eye Disease Detection using VGG-19 CNN Algorithm</div>
                        <ul>
                            <li>The project is implemented with the objective to detect the condiiton of an human eye.</li>
                            <li>This project makes use of the dataset which contains the pre-processed images of left fundus and right fundus of eyes.</li>
                            <li>The images are not labelled, so the details of the images is maintained in CSV file. </li>
                            <li>The CSV file is analyzed using pandas and extracted the condition of the fundus to create a new dataframe.</li>
                            <li>The dataframe contains two features: filename and class(i.e., cataract, glaucoma, etc. ).</li>
                            <li>The dataframe is split in the ratio 80:20 (i.e., training:validation)</li>
                            <li>The model is trained with VGG-19 CNN algorithm. </li>
                            <li>The trained model predicts four categories (i.e., Cataract, Glaucoma, Age-Related Macular Degeneration, Pathological Myophia) with an accuracy of 96% </li>
                            <li>The trained model predicts six categories (i.e., Cataract, Glaucoma, Age-Related Macular Degeneration, Pathological Myopia, Normal, Diabetic Retinopathy) with an accuracy of 80%</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Implementation;