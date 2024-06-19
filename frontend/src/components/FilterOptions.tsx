import React from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

interface FilterOptionsProps {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ genres, selectedGenre, onGenreChange, sortBy, onSortChange }) => {
  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel>Genre</InputLabel>
        <Select
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          {genres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterOptions;
