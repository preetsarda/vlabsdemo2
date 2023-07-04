import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Attack from './Attack';
import Defence from './Defence';
const Lab = () => {
    const [isAttackCompleted, setAttackCompleted] = useState(false);
    const handleAttackCompleted = () => {
        setAttackCompleted(true);
    };
    return (
        <Container>
            <Attack onCompleted={handleAttackCompleted} />
            <Defence disabled={!isAttackCompleted} />

        </Container>
    )
}
export default Lab;