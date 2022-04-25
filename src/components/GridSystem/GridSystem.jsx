import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GridSystem = ({ colCount, children, md }) => {

    let rowCount = Math.floor(children.length / colCount) + 1;
    let index = 0;

    const buildGrid = () => {
        return (
            renderRows()
        )
    }

    const renderRows = () => {
        let rows = [];

        for (let row = 0; row < rowCount; row++) {
            rows.push(
                <Row className='Row'>
                    {
                        renderCols()
                    }
                </Row>
            )
        };
        return rows;
    }

    const renderCols = () => {
        let cols = [];

        for (let col = 0; col < colCount; col++) {
            if (index<children.length) {
                cols.push(
                    <Col className='Col'>
                        {children[index]}
                    </Col>
                )
                index++
            }
        }
        return cols;
    }

    return (
        <Container className='Container'>
            {
                buildGrid()
            }
        </Container>
    )
};

export default GridSystem;