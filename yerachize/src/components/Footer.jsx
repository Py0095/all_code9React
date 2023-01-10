import React from 'react';
import styles from '../components/footer.module.css';

class Footer extends React.Component
{
  render()
  {
    return (
        <footer>
            <div>All rights reserved © {this.props.group} 2023</div>
        </footer>
    )
  }
}

Footer.defaultProps={
  group:'Code9 Class'
}



export default Footer;

