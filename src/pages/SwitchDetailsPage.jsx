import { Button, Card, Form } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import switches from '../data/switches.js'
import { useEffect, useState } from 'react'

function SwitchDetailsPage(props) {
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const { id } = useParams()

  const switchObj = switches.find(sw => sw.id === Number(id))

  // Function to extract YouTube video ID and return embed link
  // assisted using ai to handle various YouTube URL formats (watch, shorts, youtube, embed)
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

  // Function to handle deleting a review
  function handleDeleteReview(indexToDelete) {
    const confirmed = window.confirm('Are you sure you want to delete your review?')
    if (!confirmed) {
      return
    }
    const updatedReviews = reviews.filter((review, index) => index !== indexToDelete)
    setReviews(updatedReviews)
    localStorage.setItem(`reviews-${switchObj.id}`, JSON.stringify(updatedReviews))
  }
   
    useEffect(() => {
      if (switchObj) {
        const storedReviews =
        JSON.parse(localStorage.getItem(`reviews-${switchObj.id}`)) || []
        setReviews(storedReviews)
      }
    }, [switchObj])

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
  // Determine the correct image source, using placeholder if not available
  // used ai assistance to handle image path correctly with Vite's import.meta.env.BASE_URL 
  const imageSrc = switchObj.image
  ? `${import.meta.env.BASE_URL}switch-images/${switchObj.image}`
  : `${import.meta.env.BASE_URL}switch-images/placeholder.jpg`

  function handleFavoriteClick() {
    props.handleToggleFavorite(switchObj)
  }

    function handleReviewSubmit(e) {
    e.preventDefault()

        if (!props.currentUser) {
      alert('You must be logged in to leave a review!')
      return
    }

    if (!rating || !comment.trim()) {
      alert('Please provide both a rating and a comment!')
      return
    }

    const newReview = {
      username: props.currentUser,
      rating,
      comment: comment.trim()
    }

        const updatedReviews = [...reviews, newReview]
    setReviews(updatedReviews)
    localStorage.setItem(`reviews-${switchObj.id}`, JSON.stringify(updatedReviews))

    setRating(0)
    setComment('')
    alert('Review submitted!')
  }

  return (
  <>
  {/* switch details section */}
  <h1>{switchObj.name}</h1>
<Card className="mt-3 border-0 shadow-sm" style={{ borderRadius: '18px' }}>
  <Card.Body>
    <div className="row align-items-start">
      <div className="col-md-7">
        <Card.Subtitle className="mb-3 text-muted"> {switchObj.company} </Card.Subtitle>

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

        <div className="d-flex gap-2 mt-3">
          <Button
            variant={isFavorite ? 'danger' : 'primary'}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          </Button>

          <Button as={Link} to="/browse" variant="secondary">
            Back to Browse
          </Button>
        </div>
      </div>
      
      {/* switch image and video section */}
      <div className="col-md-5 text-center">
        <img
          src={imageSrc}
          alt={switchObj.name}
          className="img-fluid switch-image"
          style={{
            maxHeight: '260px',
            objectFit: 'contain',
            padding: '1rem'
          }}
        />
      </div>
    </div>

    {embedLink && (
      <div className="mt-4">
        <h2>Sound Test</h2>
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

{/* Reviews section */}
<div className="mt-4">
  <h2>Reviews</h2>
  {props.currentUser ? (
    <Form onSubmit={handleReviewSubmit} className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} onClick={() => setRating(star)} onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setRating(star)
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Rate ${star} stars`}
            style={{cursor: 'pointer', fontSize: '2rem', color: star <= rating ? '#f5c518' : '#d3d3d3', marginRight: '0.25rem'}}>
              ★
              </span>
            ))}
            
            {/* star rating reviews */}
            </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="commentInput">Comment</Form.Label>
              <Form.Control as="textarea" rows={3} id="commentInput" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write your review here..."/>

              </Form.Group>
              <Button type="submit" variant="dark"> Submit Review </Button>
              </Form>
              ) : (
              <p>You must be logged in to leave a review.</p>
              )}
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                <Card key={index} className="mb-3 border-0 shadow-sm">
                  <Card.Body>
                    <Card.Title className="fs-6 mb-2">
                      {review.username}
                      </Card.Title>
                      
                      <div aria-label={`${review.rating} out of 5 stars`} 
                      style={{ color: '#f5c518', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                        </div>
                        <Card.Text>{review.comment}</Card.Text>
                        {props.currentUser === review.username && (
                          <Button variant="danger" size="sm" onClick={() => handleDeleteReview(index)}>Delete Review </Button>
                          )}
                          </Card.Body>
                          </Card>
                          ))
                        ) : (
                        <p>No reviews yet for this switch.</p>
                        )}
                        </div>
                        </>
                        )
                      }

export default SwitchDetailsPage