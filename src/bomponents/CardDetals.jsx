import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample({
                        onClick,
                        title,
                        description,
                        srcimg,children}) {

    const printConsole=()=> {
        return onClick(title)
    }


    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={srcimg} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button onClick={printConsole}  variant="primary">Go somewhere</Button>
            {children}
        </Card.Body>
        {/* <Alert/> */}
        </Card>

    );
}

export default BasicExample;