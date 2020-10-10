import React from 'react';
import Related from './Related';
import {Link} from 'react-router';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

export default function RelatedMovies({data}) {
  const StyledLink = styled(Link)`
    &:hover {
      text-decoration:none;
    }
  `;
    let relatedMovies = data.map(function(related) {
      if(related.profile_path != null) {
        return(
          
            <Col xs={4} sm={3} md={2} key={movie.id} >
              <StyledLink to={'/star/'+movie.id} ><Cast movie={movie} /></StyledLink>
            </Col>
          
        );
      }

      return null;
    });

    return(
      
        <div>
        <h2>Related Movies</h2>
        <Row>
          {relatedMovies}
        </Row>
        
        </div>
      
      
    );
}
