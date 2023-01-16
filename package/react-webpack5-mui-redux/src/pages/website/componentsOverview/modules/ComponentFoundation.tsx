import { Grid, Typography } from '@mui/material';

import ComponentCard from './ComponentCard';
import { FOUNDATION_LIST } from './PathConfig';

export default function ComponentFoundation() {
  return (
    <Grid container spacing={3} sx={{ my: 10 }}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h5" paragraph>
          基础
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          颜色, 排版, 阴影…
        </Typography>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Grid container spacing={3}>
          {FOUNDATION_LIST.map((item: any) => (
            <ComponentCard key={item.name} item={item} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
