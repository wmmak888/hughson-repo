import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

// This is some ugly code about the link
const ItemCard = ({ title, description, image, path }) => {
  console.log("image", image);
  return (
    <div className="col-md-6 col-sm-12 col-xs-12 mt-4">
      <div className="card h-100">
        <div class="embed-responsive embed-responsive-16by9">
         <Link to={path}>
            {image ? (
               <ItemImage src={image.asset.fluid.src} className="card-img-top embed-responsive-item" />
             ) : null}
          </Link>
        </div>
        <div className="card-body">
          {path ? (
            <Link to={path}>
              <ItemTitle className="card-title">{title}</ItemTitle>
            </Link>
          ) : (
            <ItemTitle className="card-title">{title}</ItemTitle>
          )}

          <ItemDescription className="card-text">{description}</ItemDescription>
        </div>
      </div>
    </div>
  );
};

const ItemTitle = styled.h4`
  color: #0b217b;
  font-size: 1.25rem;
`;
const ItemDescription = styled.p`
  color: #404e62;
  font-size: 1rem;
`;
const ItemImage = styled.img`
  object-fit: cover;
`;

export default ItemCard;
