import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';

import SearchNotFound from '@/components/SearchNotFound';

export default function ChatSearchResults({ query, results, onSelectContact }: any) {
  const isFound = results.length > 0;

  return (
    <>
      <Typography paragraph variant="subtitle1" sx={{ px: 3, color: 'text.secondary' }}>
        Contacts
      </Typography>

      <List disablePadding>
        {results.map((result: any) => (
          <ListItemButton
            key={result.id}
            onClick={() => onSelectContact(result)}
            sx={{
              py: 1.5,
              px: 3
            }}
          >
            <ListItemAvatar>
              <Avatar alt={result.name} src={result.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={result.name}
              primaryTypographyProps={{
                noWrap: true,
                variant: 'subtitle2'
              }}
            />
          </ListItemButton>
        ))}
      </List>
      {!isFound && (
        <SearchNotFound
          searchQuery={query}
          sx={{
            p: 3,
            mx: 'auto',
            width: `calc(100% - 48px)`,
            bgcolor: 'background.neutral'
          }}
        />
      )}
    </>
  );
}
