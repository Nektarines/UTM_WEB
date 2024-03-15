import React from 'react';
import { Card } from 'antd';
import { Image } from 'antd'; // Import for displaying product image

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, price }) => {
  return (
    <Card
      cover={<Image src={image} alt={name} preview={false} style={{ height: 400 }} />} // Set image height
      title={name}
      style={{ width: '500px', margin: '10px' }} // Set card width and margin
    >
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </Card>
  );
};

export default ProductCard;
