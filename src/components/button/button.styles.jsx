import { findRenderedComponentWithType } from 'react-dom/test-utils';
import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
min-width: 200px;
width: auto;
height: 60px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 12px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

&:hover {
  background-color: black;
  color: white;
  border: 1px solid black;
}
`;

export const GoogleSignButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;

  
  }  
`;  

export const ButtonSpinner = styled(SpinnerContainer)`
display: inline-block;
width: 40px;
height: 40px;
border: 3px solid rgba(195, 195, 195, 0.6);
border-radius: 50%;
border-top-color: #636767;
animation: spin 1s ease-in-out infinite;
-webkit-animation: spin 1s ease-in-out infinite;
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
`
// this means only edit out the width the rest of features/design should be imported from Spinner container styles