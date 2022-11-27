import { ArrowDropDown } from '@mui/icons-material';
import { Button, List, ListItem } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SelectList({ data, title }) {
  const navigate = useNavigate();
  const [openList, setOpenList] = useState(false);
  const clickHandler = platform => {
    navigate(`${title}/${platform}`);
    setOpenList(false)
  };
  return (
    <>
      <Button
      sx={{width : '110px'}}
        onClick={() => {
          setOpenList(!openList);
        }}
        endIcon={<ArrowDropDown />}
      >
        {title}
      </Button>
      {openList && (
        <List
          sx={{
            position: 'absolute',
            top: '100%',
            backgroundColor: '#fff',
            zIndex: '99',
            borderRadius: '10px',
          }}
        >
          {data?.map((x, index) => (
            <ListItem key={index}>
              <Button
                onClick={() => {
                  clickHandler(x.value);
                }}
                fullWidth
              >
                {x.name}
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
