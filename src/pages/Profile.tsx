import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const Profile = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <Container>
      <h2>Favorites</h2>
      <ListGroup>
        {favorites.map((pokemon) => (
          <ListGroup.Item className='favPokemon' key={pokemon.id}>
            <Link className='linkfav' to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
            <Button
              variant="danger"
              size="sm"
              className="delbutton"
              onClick={() => removeFavorite(pokemon.id)}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Profile;
