import { Form } from 'react-bootstrap'

function SearchBar(props) {
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor="search-switch">Search by Switch Name</Form.Label>
      <Form.Control
        id="search-switch"
        type="text"
        placeholder="Enter a switch name..."
        value={props.searchTerm}
        onChange={(event) => props.setSearchTerm(event.target.value)}
      />
    </Form.Group>
  )
}

export default SearchBar