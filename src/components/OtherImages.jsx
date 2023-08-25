import React from 'react'
import ProductImage from './ProductImage';
import { styled } from 'styled-components';
import filenameparser from "../helpers/file";

const OtherImagesStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
`;

const OtherImages = ({images, selectedimage}) => {
    
    const { filename, extension, basename } = filenameparser(selectedimage);
    let rawfilename = basename + '-thumbnail.' + extension;
    selectedimage = selectedimage.replace(filename, rawfilename);

    let imgthumbnailscomp = [];
    images.forEach(function(img, i) {
        imgthumbnailscomp.push( <ProductImage key={Math.random(i+1)} image={img} width="90px" height="90px" isrounded={1} islayer={1} selectedimage={selectedimage} /> );
    });
    return (
        <OtherImagesStyled>
            {imgthumbnailscomp}
        </OtherImagesStyled>
    );
}

export default OtherImages