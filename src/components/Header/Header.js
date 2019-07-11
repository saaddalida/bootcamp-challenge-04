import React from 'react';
import { FaFacebookSquare, FaCommentAlt } from 'react-icons/fa';

import { Container, Options } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <FaFacebookSquare size={25} />
        <input type="text" />
      </div>

      <div>
        <Options>
          <li>Profile</li>
          <li>Home</li>
          <li>Groups</li>
        </Options>
        <FaCommentAlt size={18} />
      </div>
    </Container>
  );
}
