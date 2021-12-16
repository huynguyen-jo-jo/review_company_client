
import { Container, Row, Col, Card, Pagination  } from 'react-bootstrap';
import { useState } from 'react'
function Desktop3() {
  const [index, setIndex] = useState([1,2,3,4,5,6,7]);

    return (
        <div style ={{width: '80%', margin: 'auto'}}>
          <Container fluid="sm">
          <Row 
            xl={4} 
            xs={1} 
            md={3}
            className="g-4" 
            style={{marginTop:'20px' }}>
  {Array.from({ length: 16 }).map((_, idx) => (
    <Col>
      <Card style={{marginTop:'20px' }}>
        <Card.Img 
          variant="top" 
          src="https://haymora.com/blog/wp-content/uploads/2021/11/nhung-dieu-the-great-resignation-tiet-lo-ve-van-hoa-lam-viec-sai-lam-350x250.jpeg" />
        <Card.Body>

          <Card.Title style={
            {fontSize: '20px', 
            textAlign: 'initial', 
            cursor: 'pointer',
            marginBottom: '10px'}}
            > 21 nghề dễ dẫn đến ly hôn ở Mỹ
          </Card.Title>
          
          <Card.Subtitle style={
              {fontSize: '11px', 
              textAlign: 'initial', 
              marginBottom: '10px'}}
              >by <b>Minh Nguyen</b>,  25 November, 2021
          </Card.Subtitle>
          
          <Card.Text style={{ textAlign: 'initial'}}
            >Chúng ta đều hiểu việc giữ thái độ bình tĩnh, tích cực trong suốt quá trình phỏng vấn là điều ...
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
          </Row>    
          </Container>
          <Pagination style={{marginTop: '50px', position: 'relative', left: '30%'}} >
            <Pagination.Item>{'<<'}</Pagination.Item>
            <Pagination.Item>{'<'}</Pagination.Item>
            <Pagination.Item>{index[0]}</Pagination.Item>

            <Pagination.Item>{index[1]}</Pagination.Item>
            <Pagination.Item>{index[2]}</Pagination.Item>
            <Pagination.Item active>{index[3]}</Pagination.Item>
            <Pagination.Item>{index[4]}</Pagination.Item>
            <Pagination.Item >{index[5]}</Pagination.Item>

            <Pagination.Item>{index[6]}</Pagination.Item>
            <Pagination.Item>{'>'}</Pagination.Item>
            <Pagination.Item>{'>>'}</Pagination.Item>
          </Pagination>
        </div>
    )
}

export default Desktop3
