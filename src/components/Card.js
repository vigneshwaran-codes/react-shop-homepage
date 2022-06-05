import React from 'react'
import { Figure, Row, Col, Button, Card } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

export default function CardList ({ increment, decrement }) {
  return (
    <div style={{ margin: '100px' }}>
      <Row>
        <Col md={3} className='mb-4'>
          <Card style={{ width: '18rem' }}>
            <Figure>
              <Figure.Image
                width={450}
                height={300}
                alt='450x300'
                src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
              />
            </Figure>
            <Card.Body>
              <Card.Title>
                <h1 style={{ fontSize: '20px' }}>Fancy Product</h1>
              </Card.Title>
              <Card.Text>$40.00 - $80.00</Card.Text>
              <Button variant='outline-dark'>View Options</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className='mb-4'>
          <Card style={{ width: '18rem' }} className='col-md-3'>
            <Figure>
              <Figure.Image
                width={450}
                height={300}
                alt='450x300'
                src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
              />
            </Figure>
            <Card.Body>
              <Card.Title>
                <h1 style={{ fontSize: '20px' }}>Fancy Product</h1>
              </Card.Title>
              <Rating initialValue={5} />
              <Card.Text><span className='strike'>$20.00</span> $18.00</Card.Text>
              <Button onClick={increment} variant='outline-dark'>Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className='mb-4'>
          <Card style={{ width: '18rem' }}>
            <Figure>
              <Figure.Image
                width={450}
                height={300}
                alt='450x300'
                src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
              />
            </Figure>
            <Card.Body>
              <Card.Title>
                <h1 style={{ fontSize: '20px' }}>Fancy Product</h1>
              </Card.Title>
              <Card.Text><span className='strike'>$50.00</span> $25.00</Card.Text>
              <Button onClick={increment} variant='outline-dark'>Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>{' '}
        <Col md={3} className='mb-4'>
          <Card style={{ width: '18rem' }}>
            <Figure>
              <Figure.Image
                width={450}
                height={300}
                alt='450x300'
                src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
              />
            </Figure>
            <Card.Body>
              <Card.Title>
                <h1 style={{ fontSize: '20px' }}>Fancy Product</h1>
              </Card.Title>
              <Rating initialValue={5} />
              <Card.Text>$40.00</Card.Text>
              <Button onClick={increment} variant='outline-dark'>Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className='mb-4'>
          <Card style={{ width: '18rem' }}>
            <Figure>
              <Figure.Image
                width={450}
                height={300}
                alt='450x300'
                src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
              />
            </Figure>
            <Card.Body>
              <Card.Title>
                <h1 style={{ fontSize: '20px' }}>Sale Item</h1>
              </Card.Title>
              <Card.Text><span className='strike'>$40.00</span> $25.00</Card.Text>
              <Button onClick={increment} variant='outline-dark'>Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>{' '}
        <Col md={3} className='mb-4'>
          <Card style={{ width: '18rem' }}>
            <Figure>
              <Figure.Image
                width={450}
                height={300}
                alt='450x300'
                src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
              />
            </Figure>
            <Card.Body>
              <Card.Title>
                <h1 style={{ fontSize: '20px' }}>Fancy Product</h1>
              </Card.Title>
              <Card.Text>$40.00 - $80.00</Card.Text>
              <Button onClick={increment} variant='outline-dark'>Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>{' '}
        <Col md={3} className='mb-4'>
          <Card style={{ width: '18rem' }}>
            <Figure>
              <Figure.Image
                width={450}
                height={300}
                alt='450x300'
                src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
              />
            </Figure>
            <Card.Body>
              <Card.Title>
                <h1 style={{ fontSize: '20px' }}>Special Item</h1>
              </Card.Title>
              <Rating initialValue={5} />
              <Card.Text><span className='strike'>$20.00 </span> $18.00</Card.Text>
              <Button onClick={increment} variant='outline-dark'>Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>{' '}
        <Col md={3} className='mb-4'>
          <Card style={{ width: '18rem' }}>
            <Figure>
              <Figure.Image
                width={450}
                height={300}
                alt='450x300'
                src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
              />
            </Figure>
            <Card.Body>
              <Card.Title>
                <h1 style={{ fontSize: '20px' }}>Popular Item</h1>
              </Card.Title>
              <Rating initialValue={5} />
              <Card.Text>$40.00</Card.Text>
              <Button onClick={increment} variant='outline-dark'>Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
