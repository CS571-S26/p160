import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import switches from '../data/switches.js'
import SearchBar from '../components/SearchBar.jsx'
import FilterBar from '../components/FilterBar.jsx'
import SwitchCard from '../components/SwitchCard.jsx'

function BrowsePage(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('All')

  const displayedSwitches = switches.filter(switchObj => {
    const matchesSearch = switchObj.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesType =
      selectedType === 'All' || switchObj.type === selectedType

    return matchesSearch && matchesType
  })

  return (
    <div>
      <h2>Browse Switches</h2>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <FilterBar
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <p>Showing {displayedSwitches.length} switch(es).</p>

      <Row>
        {displayedSwitches.length > 0 ? (
          displayedSwitches.map(switchObj => (
            <Col key={switchObj.id} xs={12} md={6} lg={4} className="mb-4">
              <SwitchCard
                switchData={switchObj}
                currentUser={props.currentUser}
                isFavorite={props.favoriteSwitches.some(
                  favorite => favorite.id === switchObj.id
                )}
                handleToggleFavorite={props.handleToggleFavorite}
              />
            </Col>
          ))
        ) : (
          <p>No switches match your search.</p>
        )}
      </Row>
    </div>
  )
}

export default BrowsePage