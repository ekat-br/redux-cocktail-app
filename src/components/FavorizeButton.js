import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorizedIds,
  toggleFavorize,
} from "../features/favorize/favorizeSlice";
import { styled } from "styled-components";

const FavorizeButton = ({ id }) => {
  const favorizedIds = useSelector(selectFavorizedIds);
  const dispatch = useDispatch();

  return (
    <FavoriteButton onClick={() => dispatch(toggleFavorize(id))}>
      {favorizedIds.includes(id) ? "❤️" : "🤍"}
    </FavoriteButton>
  );
};

export default FavorizeButton;

const FavoriteButton = styled.button`
  background-color: "#E0E0E0";
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: "#B0B0B0"; /* Darker Pink for hover */
  }
`;
