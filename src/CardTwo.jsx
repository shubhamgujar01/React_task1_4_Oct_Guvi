import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardTwo = (props) => {

    const serviceArr = ['Single User', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects',
        'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Report']
    return (
        <div>
            <Card style={{ width: '18rem', height: '400px', borderRadius: '10px', backgroundColor: 'white' }}>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted" style={{textAlign: 'center'}}>{props.subtitle}</Card.Subtitle>
                    <Card.Title style={{textAlign: 'center'}}>{props.title}</Card.Title>
                    <hr></hr>
                    <Card.Text>
                        <ul style={{ textAlign: 'left' }}>
                            {
                                serviceArr.map((elem, index) => {

                                    if (index <= 6) {

                                        return (
                                            <li style={{ listStyle: 'none' }}><span style={{marginRight: '10px'}}><i class="fa-solid fa-check"></i></span>{elem}</li>
                                        )

                                    }
                                    else{
                                        return (
                                            <li style={{ listStyle: 'none',opacity: '0.3' }}><span style={{marginRight: '10px'}}><i class="fa-solid fa-xmark"></i></span>{elem}</li>
                                        )
                                    }

                                })

                            }
                        </ul>
                        <Button variant="primary" style={{ width: '100%', borderRadius: '30px' }}>Button</Button>
                    </Card.Text>

                </Card.Body>
            </Card>


        </div>
    )
}

export default CardTwo;
