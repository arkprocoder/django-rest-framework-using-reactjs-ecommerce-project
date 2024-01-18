import React, { useEffect } from "react";
import {Link,useParams} from 'react-router-dom'
import {Row, Col, Image,ListGroup,Button,Card,Container} from 'react-bootstrap'
import Rating from '../Rating'
import { listProductDetails } from "../../actions/productsActions";
import {useDispatch,useSelector} from 'react-redux'
import Loader from "../Loader";
import Message from "../Message";

function ProductScreen({params}) {
    const {id}= useParams()
    const dispatch=useDispatch()
    const productDetails = useSelector((state)=>state.productDetails);
    const {error,loading,product}=productDetails
  useEffect(() => {
  
dispatch(listProductDetails(id))

  }, [dispatch,params]);
  return (
    <Container>
    <div>
          <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>


      {loading?(
        <Loader/>
      ): error?(
        <Message variant='danger'>{error}</Message>
      ):(
        <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

    <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.productname}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>Brand: {product.productbrand} </ListGroup.Item>

            <ListGroup.Item>Description: {product.productinfo}</ListGroup.Item>
          </ListGroup>
    </Col>




    <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price} Rs</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.stockcount > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
            <ListGroup.Item>
                <Button className='btn-block btn-success' disabled={product.stockcount==0} type='button'>Add to Cart</Button>

            </ListGroup.Item>


            </ListGroup>
          </Card>
        </Col>

    </Row>

      )}

    </div>
    </Container>
  )
}

export default ProductScreen