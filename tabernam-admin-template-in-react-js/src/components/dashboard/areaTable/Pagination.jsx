import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'

export default function PaginationRounded() {
  return (
    <Stack spacing={2} style={{marginLeft:"4rem"}}>
   
      <Pagination count={10} variant="outlined" shape="rounded" style={{color:"white"}} />
    </Stack>
  );
}