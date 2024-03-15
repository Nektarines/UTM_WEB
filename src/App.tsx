import React from 'react';
import { Layout, theme } from 'antd';
import Sidebar from './components/layouts/Sidebar';
import ProductCard from './components/card-products/ProductCard';
import { Row, Col } from 'antd'; // Import for grid layout

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Replace with your actual laptop data (name, description, image URL, price)
  const products = [
    {
      name: 'Apple MacBook Air M2',
      description: 'The best laptop',
      image: 'https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?fit=720%2C720&p=1',
      price: 799.99,
    },
    {
      name: 'Asus ZenBook 14 OLED',
      description: 'The best affordable laptop',
      image: 'https://www.digitaltrends.com/wp-content/uploads/2024/01/asus-zenbook-14-2024-featured-e1706730952599.jpg?fit=720%2C720&p=1',
      price: 999.99,
    },
    {
      name: 'HP Spectre x360 14',
      description: 'Best HP laptop',
      image: 'https://www.digitaltrends.com/wp-content/uploads/2022/07/hp-spectre-x360-13-5-front-angled-e1659295844757.jpg?fit=720%2C720&p=1',
      price: 999.99,
    },
    {
      name: 'Razer Blade 14',
      description: 'The best gaming laptop',
      image: 'https://www.digitaltrends.com/wp-content/uploads/2023/06/razer-blade-14-2023-review-30.jpg?fit=720%2C720&p=1',
      price: 999.99,
    },
    {
      name: 'Dell XPS 13 (9315)',
      description: 'The best budget laptop',
      image: 'https://www.digitaltrends.com/wp-content/uploads/2022/10/IMG_24361-e1666142401941.jpg?fit=720%2C720&p=1',
      price: 999.99,
    },
    {
      name: 'Apple MacBook Pro (M3 Max)',
      description: 'The best content creation laptop',
      image: 'https://www.digitaltrends.com/wp-content/uploads/2023/11/MacBook-Pro-m3-max-1.jpg?fit=720%2C720&p=1',
      price: 999.99,
    },
    {
      name: 'Lenovo Chromebook Duet 3',
      description: 'Best Chromebook',
      image: 'https://www.digitaltrends.com/wp-content/uploads/2022/06/lenovo-chromebook-duet-3-front-view-e1655321450285.jpg?fit=720%2C720&p=1',
      price: 999.99,
    },
    {
      name: 'Microsoft Surface Pro 9',
      description: 'Best 2-in-1 laptop',
      image: 'https://www.digitaltrends.com/wp-content/uploads/2022/10/surface-pro-9-07.jpg?fit=720%2C720&p=1',
      price: 999.99,
    },
    {
      name: 'Lenovo Yoga 9i Gen 8',
      description: 'Best Lenovo laptop',
      image: 'https://www.digitaltrends.com/wp-content/uploads/2023/03/lenovo-yoga-9i-gen-8-featured-e1678992007223.jpg?fit=720%2C720&p=1',
      price: 999.99,
    },
  ];

  return (
    <Layout hasSider>
      <Sidebar />
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: 'auto', overflow: 'initial' }}>
          {/* Grid layout with 3 rows */}
          <Row gutter={16}>
            {products.map((product) => (
              <Col span={8} key={product.name}>
                <ProductCard {...product} />
              </Col>
            ))}
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
