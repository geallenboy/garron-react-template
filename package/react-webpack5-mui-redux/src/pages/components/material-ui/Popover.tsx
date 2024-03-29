import { Box, Button, Container, Popover, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../Block';

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default function PopoversComponent() {
  const [click, setCLick] = useState(null);
  const [hover, setHover] = useState(null);

  const handleClick = (event: any) => {
    setCLick(event.currentTarget);
  };

  const handleClose = () => {
    setCLick(null);
  };

  const handleHoverOpen = (event: any) => {
    setHover(event.currentTarget);
  };

  const handleHoverClose = () => {
    setHover(null);
  };

  return (
    <RootStyle title={`组件: Popover${title_main}`}>
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme: any) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Popover"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Popover' }]}
            moreLink="https://mui.com/zh/material-ui/react-popover/"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
          <Block title="Click" sx={style}>
            <Button variant="contained" onClick={handleClick}>
              Open Popover
            </Button>
            <Popover
              open={Boolean(click)}
              anchorEl={click}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center'
              }}
            >
              <Box sx={{ p: 2, maxWidth: 280 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Etiam feugiat lorem non metus
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
                </Typography>
              </Box>
            </Popover>
          </Block>

          <Block title="Hover" sx={style}>
            <Typography
              aria-owns={hover ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handleHoverOpen}
              onMouseLeave={handleHoverClose}
            >
              Hover with a Popover.
            </Typography>
            <Popover
              id="mouse-over-popover"
              open={Boolean(hover)}
              anchorEl={hover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              onClose={handleHoverClose}
              disableRestoreFocus
              sx={{
                pointerEvents: 'none'
              }}
            >
              <Box sx={{ p: 2, maxWidth: 280 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Etiam feugiat lorem non metus
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
                </Typography>
              </Box>
            </Popover>
          </Block>
        </Stack>
      </Container>
    </RootStyle>
  );
}
