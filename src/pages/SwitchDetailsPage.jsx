import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import switches from '../data/switches.js'

function SwitchDetailsPage(props) {
  const { id } = useParams()

  const switchObj = switches.find(sw => sw.id === Number(id))

  function getEmbedLink(videoLink) {
    if (!videoLink) return null

    if (videoLink.includes('youtube.com/watch?v=')) {
      const url = new URL(videoLink)
      const videoId = url.searchParams.get('v')
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }

    if (videoLink.includes('youtube.com/shorts/')) {
      const parts = videoLink.split('/shorts/')
      const videoId = parts[1]?.split('?')[0]
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }

    if (videoLink.includes('youtu.be/')) {
      const parts = videoLink.split('youtu.be/')
      const videoId = parts[1]?.split('?')[0]
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }

    if (videoLink.includes('youtube.com/embed/')) {
      return videoLink
    }

    return null
  }

  if (!switchObj) {
    return (
      <>
        <h2>Switch Not Found</h2>
        <p>The switch you are looking for does not exist.</p>
        <Button as={Link} to="/browse">
          Back to Browse
        </Button>
      </>
    )
  }

  const isFavorite = props.favoriteSwitches.some(
    favorite => favorite.id === switchObj.id
  )

  const embedLink = getEmbedLink(switchObj.videoLink)

  function handleFavoriteClick() {
    props.handleToggleFavorite(switchObj)
  }

  return (
    <>
      <h2>{switchObj.name}</h2>

      <Card className="mt-3">
        <Card.Body>
          <Card.Subtitle className="mb-3 text-muted">
            {switchObj.company}
          </Card.Subtitle>

          <Card.Text>
            <strong>Type:</strong> {switchObj.type}
          </Card.Text>

          <Card.Text>
            <strong>Actuation Force:</strong> {switchObj.actuationForce}
          </Card.Text>

          <Card.Text>
            <strong>Category:</strong> {switchObj.category}
          </Card.Text>

          <Card.Text>
            <strong>Description:</strong> {switchObj.description}
          </Card.Text>

          <Button
            variant={isFavorite ? 'danger' : 'primary'}
            onClick={handleFavoriteClick}
            className="me-2"
          >
            {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          </Button>

          <Button as={Link} to="/browse" variant="secondary">
            Back to Browse
          </Button>

          {embedLink && (
            <div className="mt-4">
              <h4>Sound Test</h4>
              <div className="ratio ratio-16x9">
                <iframe
                  src={embedLink}
                  title={`${switchObj.name} video`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  )
}

export default SwitchDetailsPage