import React, { Fragment, useState } from "react"
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import { IoMdSearch } from "react-icons/io"
import { Typeahead } from 'react-bootstrap-typeahead'
import options from './sampledata'

const SearchBox = () => {

  const [selected, setSelected] = useState([]);

  return (
    <Fragment>
      <Typeahead
        id="basic-typeahead-example"
        labelKey="name"
        bsSize={'sm'}
        multiple={false}
        minLength={2}
        onChange={setSelected}
        options={options}
        placeholder="Search here..."
        selected={selected}
      />
    </Fragment>
  )
}

export default SearchBox
