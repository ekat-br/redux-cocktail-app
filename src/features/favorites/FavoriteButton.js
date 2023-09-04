import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavoritesIds,  toggledFavorite,
} from "./favoritesSlice";
import { styled } from "styled-components";

const FavoriteButton = ({ id }) => {
  const favorizedIds = useSelector(selectFavoritesIds);
  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Stop the click event from propagating to parent elements
    dispatch(toggledFavorite(id));
  };

  return (
    <Button onClick={handleButtonClick}>
      {favorizedIds.includes(id) ? "❤️" : "🤍"}
    </Button>
  );
};



export default FavoriteButton;

const Button = styled.button`
  background-color: "#E0E0E0";
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: "#B0B0B0"; 
  }
`;
