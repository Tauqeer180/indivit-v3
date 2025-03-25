import React from 'react'

export default function Map() {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            width="100%"
            height="400px"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        {/* <style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style> */}
      </div>
    </div>
  )
}
