import { Form } from 'react-bootstrap'

function FilterBar(props) {
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor="filter-type">Filter by Switch Type</Form.Label>
      <Form.Select
        id="filter-type"
        value={props.selectedType}
        onChange={(event) => props.setSelectedType(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Linear">Linear</option>
        <option value="Tactile">Tactile</option>
        <option value="Clicky">Clicky</option>
        <option value="Silent Linear">Silent Linear</option>
        <option value="Silent Tactile">Silent Tactile</option>
        <option value="Hall Effect">Hall Effect</option>
      </Form.Select>
    </Form.Group>
  )
}

export default FilterBar