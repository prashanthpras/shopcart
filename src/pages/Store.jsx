import { Row, Col } from "react-bootstrap";
import Items from "../data/Items.json";
import { StoreItems } from "../components/StoreItems";

const Store = () => {
  return (
    <>
      <h3>Store</h3>
      <Row md={2} xs={1} lg={3} className="g-3">
        {Items.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Store;
