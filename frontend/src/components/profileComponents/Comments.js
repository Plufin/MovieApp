import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from "react-router-dom";
//LINKKI AVAUTUU UUTEEN IKKUNAAN!;D
const Comments = () => {
  const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;
  const [comments, setComments] = useState([]);
  const [sortingOption, setSortingOption] = useState('newest');
  const amountOfComments = comments.length;
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  }
  useEffect(() =>  {
    let sortBy;
    let url = ''
    switch (sortingOption) {
      case 'oldest':
        sortBy = 'sortByTimeOldUser'
        url = 'http://localhost:3001/reviews/sortByTimeOldUser'
        break;
      case 'mostRated':
        sortBy = 'sortByScoreUser'
        url = 'http://localhost:3001/reviews/sortByScoreUser'
        break;
      case 'leastRated':
        sortBy = 'sortByScoreLeastUser'
        url = 'http://localhost:3001/reviews/sortByScoreLeastUser'
        break;
      default: 
        sortBy = 'sortByTimeNewUser';
        url = 'http://localhost:3001/reviews/sortByTimeNewUser'
        break;
    }
    axios.get(url, { withCredentials: true })
      .then((res) => {
        const commentPromises = res.data.review.map(comment => {
        const id = comment.id_movies || comment.id_series;
        const mediaType = comment.id_movies ? 'movie' : 'tv';
        return axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${tmdbApiKey}`);
        });
        // Wait for all movie/series details requests to complete
        return Promise.all(commentPromises)
        .then(commentDetails => {
          // Combine comment details with original comments
          const updatedComments = res.data.review.map((comment, index) => {
            return {
              ...comment,
              mediaType: comment.id_movies ? 'movies' : 'series', // Add mediaType to distinguish between movie and TV series
              mediaDetails: commentDetails[index].data
            };
          });
          setComments(updatedComments);
          console.log('Kommentit ovaT: ' + JSON.stringify(comments))
        });
      })
      .catch((error) => {
        console.log(error);
      });
      
},[sortingOption]);
  
  return (
    <>
      <CommentContainer>
        <CommentAmount>
          <Section>Reviews</Section>
          <Number>{amountOfComments}</Number>
          <SortingSelect value={sortingOption} onChange={handleSortingChange}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="mostRated">Most Rated</option>
            <option value="leastRated">Least Rated</option>
          </SortingSelect>
        </CommentAmount>
        <CommentHistory>
          {comments.map((comment) => (
            <Comment key={comment.id} to={`/${comment.mediaType}/${comment.id_series || comment.id_movies}`}>
              {comment.mediaDetails && comment.mediaDetails.poster_path && (
                <Image src={`https://image.tmdb.org/t/p/w500${comment.mediaDetails.poster_path}`}
                  alt={comment.mediaDetails.name}
                />
              )}
               <MovieName>{comment.mediaDetails ? comment.mediaDetails.title || comment.mediaDetails.name : ''}
                  <CommentText>{comment.reviews}</CommentText>
                  <RatingsContainer>
                    <Ratings><span role="img" aria-label="Thumbs Up">👍</span>{comment.ratings}
                    </Ratings>
                  </RatingsContainer>
               </MovieName>
            </Comment>
          ))}
          <CommentText>{comments.length === 0 && 'No reviews, yet!'}</CommentText>
        </CommentHistory>
      </CommentContainer>
    </>
  );
};

const Ratings = styled.h3`
  
`;
const RatingsContainer = styled.div`
  margin-left: auto;
  box-sizing: border-box;
`;
const SortingSelect = styled.select`
  margin-left: auto; 
  margin-right: 0;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.5rem;
  border: none; 
  outline: none;
  background: #1F2626;
  color: #F3F3E7;
  border-radius: 12px; 
  height: 70px;
`;

const CommentContainer = styled.div`
  padding: 1rem;
  margin-right: 10rem;
  margin-top: 5rem;
  text-align: left;
  display: flex;
  flex-direction: column;

  @media (max-width: 901px) {
    align-items: center;
  }
`;

const CommentHistory = styled.div`
  max-height: 800px;
  overflow-y: auto;
`;

const Section = styled.h2``;

const Comment = styled(Link)`
  display: flex;
  margin-bottom: 1rem;

  opacity: 1;

  &:hover {
    background-color: #1F2626; /* Darker background color on hover */
    opacity: 0.5;
    cursor: pointer;
  }
`;


const MovieName = styled.h3`
  margin-left: 1rem;
`;

const CommentText = styled.p`
  font-weight: 100;
`;

const CommentAmount = styled.div`
  display: flex;
  align-items: left;
`;

const Number = styled.h3`
  margin-left: 1rem;
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 20px;
  display: inline-block;
`;

const Image = styled.img`
  width: 154px;
  height: 227px;
  border-radius: 12px; 
`;

export default Comments;
