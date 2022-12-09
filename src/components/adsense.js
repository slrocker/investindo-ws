import * as React from "react";

export default class Ad extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }


  render () {
    return (
      <div className='ad'>
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-4815974767842427'
          data-ad-slot='4815974767'
          data-ad-format='auto' />
      </div>
    );
  }
}


// export default ({client, slot, format = 'auto'}) => (
//     <div>
//     <ins className="adsbygoogle"
    
//     data-ad-client={client}
//     data-ad-slot={slot}
//     data-ad-format={format}
//     data-full-width-responsive="true">
//     </ins>
//     </div>
//   )


