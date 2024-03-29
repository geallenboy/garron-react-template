import { Box, Container, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_main } from '@/config';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../../Block';
import CustomizedStepper from './CustomizedStepper';
import HorizontalLinearStepper from './HorizontalLinearStepper';
import LinearAlternativeLabel from './LinearAlternativeLabel';
import VerticalLinearStepper from './VerticalLinearStepper';

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function StepperComponent() {
  return (
    <RootStyle title={`组件: StepperView${title_main}`}>
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
            heading="Stepper"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Stepper' }]}
            moreLink="https://mui.com/zh/material-ui/react-stepper/"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Block title="Horizontal Linear Stepper">
            <Paper
              sx={{
                p: 3,
                width: '100%',
                boxShadow: (theme: any) => theme.customShadows.z8
              }}
            >
              <HorizontalLinearStepper />
            </Paper>
          </Block>

          <Block title="Linear Alternative Label">
            <Paper
              sx={{
                p: 3,
                width: '100%',
                boxShadow: (theme: any) => theme.customShadows.z8
              }}
            >
              <LinearAlternativeLabel />
            </Paper>
          </Block>

          <Block title="Vertical Linear Stepper">
            <Paper
              sx={{
                p: 3,
                width: '100%',
                boxShadow: (theme: any) => theme.customShadows.z8
              }}
            >
              <VerticalLinearStepper />
            </Paper>
          </Block>

          <Block title="Customized Stepper">
            <Paper
              sx={{
                p: 3,
                width: '100%',
                boxShadow: (theme: any) => theme.customShadows.z8
              }}
            >
              <CustomizedStepper />
            </Paper>
          </Block>
        </Stack>
      </Container>
    </RootStyle>
  );
}
