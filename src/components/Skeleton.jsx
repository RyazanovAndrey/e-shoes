import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={270}
    height={416}
    viewBox="0 0 270 416"
    backgroundColor="#e8e8e8"
    foregroundColor="#ffffff"
    {...props}
  >
    <circle cx="182" cy="160" r="2" /> 
    <rect x="4" y="-5" rx="20" ry="20" width="227" height="213" /> 
    <circle cx="39" cy="256" r="30" /> 
    <circle cx="111" cy="254" r="30" /> 
    <circle cx="186" cy="251" r="30" /> 
    <rect x="10" y="303" rx="5" ry="5" width="201" height="10" /> 
    <rect x="8" y="334" rx="10" ry="10" width="88" height="47" /> 
    <rect x="117" y="334" rx="10" ry="10" width="103" height="43" />
  </ContentLoader>
)

export default Skeleton
