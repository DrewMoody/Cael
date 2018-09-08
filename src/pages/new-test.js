import React from "react";
import HeaderMini from '../components/headerMini';
import Header from '../components/header';

export default ({ data }) =>
  <div>
    <Header
      heroImg={data.file.childImageSharp.sizes}
      title='Contact Us' text="We're pretty great"
      viewHeight='70vh'
      hideArrow={true}
    />
    {/* <HeaderMini /> */}
    <div className='miniPages'>
      <h1>Contact Us</h1>
      <p>Oh hai Mark.</p>
    </div>
  </div>

export const query = graphql`
  query GetContactImage {
    file(relativePath: { regex: "/contactBackground/" }) {
      childImageSharp {
        sizes(maxWidth:1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;