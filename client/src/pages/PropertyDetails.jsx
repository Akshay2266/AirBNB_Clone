import React from "react";
import styled from "styled-components";
import { Rating } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.bg || "#f5f5f5"};
  border-radius: 12px;
`;

const PropertyCard = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary || "#333"};
`;

const Desc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary || "#666"};
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary || "#333"};
`;

const PriceDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Span = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary || "#999"};
  text-decoration: line-through;
`;

const Percent = styled.span`
  font-size: 16px;
  color: green;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PropertyDetails = () => {
  const properties = [
    {
      _id: "1",
      img: "https://via.placeholder.com/250",
      title: "Beautiful Beach House",
      desc: "A stunning house located near the beach with amazing sea views.",
      rating: 4.5,
      price: {
        org: 250,
        mrp: 300,
        off: 17,
      },
    },
    // Add more property objects as needed
  ];

  return (
    <Container>
      {properties.map((property) => (
        <PropertyCard key={property._id}>
          <Image src={property.img} alt={property.title} />
          <Details>
            <Title>{property.title}</Title>
            <Desc>{property.desc}</Desc>
            <PriceDetails>
              <Price>${property.price.org}</Price>
              <Span>${property.price.mrp}</Span>
              <Percent>{property.price.off}% off</Percent>
            </PriceDetails>
            <RatingContainer>
              <Rating
                name={`rating-${property._id}`}
                value={property.rating}
                readOnly
                precision={0.5}
              />
              <span>({property.rating})</span>
            </RatingContainer>
          </Details>
        </PropertyCard>
      ))}
    </Container>
  );
};

export default PropertyDetails;
