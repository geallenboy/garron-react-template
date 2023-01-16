import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import phoneFill from '@iconify/icons-eva/phone-fill';
import videoFill from '@iconify/icons-eva/video-fill';
import { Icon } from '@iconify/react';
import { Avatar, AvatarGroup, Box, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { capitalCase } from 'change-case';

import { MIconButton } from '@/components/@material-extend';
import BadgeStatus from '@/components/BadgeStatus';
import { fToNow } from '@/utils/formatTime';

const RootStyle = styled('div')(({ theme }) => ({
  flexShrink: 0,
  minHeight: 92,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 3)
}));

function OneAvatar({ participants }: any) {
  const participant = [...participants][0];

  if (participant === undefined) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <Avatar src={participant.avatar} alt={participant.name} />
        <BadgeStatus
          status={participant.status}
          sx={{ position: 'absolute', right: 2, bottom: 2 }}
        />
      </Box>
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{participant.name}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {participant.status !== 'offline'
            ? capitalCase(participant.status)
            : fToNow(participant.lastActivity)}
        </Typography>
      </Box>
    </Box>
  );
}

function GroupAvatar({ participants }: any) {
  return (
    <div>
      <AvatarGroup
        max={3}
        sx={{
          mb: 0.5,
          '& .MuiAvatar-root': { width: 32, height: 32 }
        }}
      >
        {participants.map((participant: any) => (
          <Avatar key={participant.id} alt={participant.name} src={participant.avatar} />
        ))}
      </AvatarGroup>
      <Link
        variant="body2"
        underline="none"
        component="button"
        color="text.secondary"
        onClick={() => {}}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {participants.length} 人员
          <Icon icon={arrowIosForwardFill} />
        </Box>
      </Link>
    </div>
  );
}

export default function ChatHeaderDetail({ participants, ...other }: any) {
  const isGroup = participants.length > 1;

  return (
    <RootStyle {...other}>
      {isGroup ? (
        <GroupAvatar participants={participants} />
      ) : (
        <OneAvatar participants={participants} />
      )}

      <Box sx={{ flexGrow: 1 }} />
      <MIconButton>
        <Icon icon={phoneFill} width={20} height={20} />
      </MIconButton>
      <MIconButton>
        <Icon icon={videoFill} width={20} height={20} />
      </MIconButton>
      <MIconButton>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </MIconButton>
    </RootStyle>
  );
}
