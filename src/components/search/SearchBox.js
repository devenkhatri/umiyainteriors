import React, { Fragment, useState, useRef } from "react"
import { FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap'
import { IoMdSearch } from "react-icons/io"
import { Typeahead, Highlighter } from 'react-bootstrap-typeahead'
import { navigate } from "@reach/router"
import { getSearchData } from "./SearchData"

const SearchBox = (props, context) => {

  const ref = useRef()

  const searchData = getSearchData()

  const [selected, setSelected] = useState([]);

  //handle the state when the keyword is selected, so redirect to the URL in the data
  if (selected && selected.length > 0) {
    ref.current.getInstance().blur()
    navigate(selected[0].slug)    
  }

  return (
    <Fragment>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1"><IoMdSearch /></InputGroup.Text>
        </InputGroup.Prepend>
        <Typeahead
          id="basic-typeahead-example"
          aria-describedby="basic-addon1"
          labelKey="title"
          bsSize={'sm'}
          multiple={false}
          minLength={2}
          onChange={setSelected}
          options={searchData}
          placeholder="Search here..."
          selected={selected}
          ref={ref}
          renderMenuItemChildren={(option, props, index) => {
            return [
              <Highlighter key="title" search={props.text}>
                {option.title}
              </Highlighter>,
              <div key="type">
                <small>
                  Type: {option.type}
                </small>
              </div>,
            ];
          }}
        />
      </InputGroup>
    </Fragment>
  )
}

export default SearchBox
