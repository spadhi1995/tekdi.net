import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Contact_us  = ({ children }) => {
    return (
    
  <contact>
      <form method="post" action="http://ttpllt-php72.local/gatsby/form_data/">
  <label>
    Name
    <input type="text" name="name" id="name" />
  </label>
  <label>
    Email
    <input type="email" name="email" id="email" />
  </label>
  <label>
    Phone number
    <input type="number" name="subject" id="subject" />
  </label>
  <button type="submit">Send</button>
  <input type="reset" value="Clear" />
</form>
    
  </contact>
    )
}
export default Contact_us
