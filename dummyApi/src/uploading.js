import { isString } from 'lodash';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useDropzone } from 'react-dropzone';
import fileFill from '@iconify/icons-eva/file-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import { motion, AnimatePresence } from 'framer-motion';
import { alpha, styled } from '@material-ui/core/styles';
import {
  Box,
  List,
  Stack,
  Paper,
  Button,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import { fData } from '../../utils/formatNumber';
import { MIconButton } from '../@material-extend';
import { varFadeInRight } from '../animate';
import { UploadIllustration } from '../../assets';







// Uploaded Files Display
<List disablePadding sx={{ ...(hasFile && { my: 3 }) }}>
  <AnimatePresence>
    {files.map((file) => {
      const { name, size, preview } = file;
      const key = isString(file) ? file : name;
      if (showPreview) {
        return (
          <ListItem
            key={key}
            component={motion.div}
            {...varFadeInRight}
            sx={{
              p: 0,
              m: 0.5,
              width: 80,
              height: 80,
              borderRadius: 1.5,
              overflow: 'hidden',
              position: 'relative',
              display: 'inline-flex'
            }}
          >
            <Paper
              variant="outlined"
              component="img"
              src={isString(file) ? file : preview}
              sx={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
            />
            <Box sx={{ top: 6, right: 6, position: 'absolute' }}>
              <MIconButton
                size="small"
                onClick={() => onRemove(file)}
                sx={{
                  p: '2px',
                  color: 'common.white',
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                  '&:hover': {
                    bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48)
                  }
                }}
              >
                <Icon icon={closeFill} />
              </MIconButton>
            </Box>
          </ListItem>
        );
      }
      return (
        <ListItem
          key={key}
          component={motion.div}
          {...varFadeInRight}
          sx={{
            my: 1,
            py: 0.75,
            px: 2,
            borderRadius: 1,
            border: (theme) => `solid 1px ${theme.palette.divider}`,
            bgcolor: 'background.paper'
          }}
        >
          <ListItemIcon>
            <Icon icon={fileFill} width={28} height={28} />
          </ListItemIcon>
          <ListItemText
            primary={isString(file) ? file : name}
            secondary={isString(file) ? '' : fData(size)}
            primaryTypographyProps={{ variant: 'subtitle2' }}
            secondaryTypographyProps={{ variant: 'caption' }}
          />
          <ListItemSecondaryAction>
            <MIconButton edge="end" size="small" onClick={() => onRemove(file)}>
              <Icon icon={closeFill} />
            </MIconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    })}
  </AnimatePresence>
</List>


// Action Buttons
{hasFile && (
  <Stack direction="row" justifyContent="flex-end">
    <Button onClick={onRemoveAll} sx={{ mr: 1.5 }}>
      Remove all
    </Button>
    <Button variant="contained">Upload files</Button>
  </Stack>
)}



// Animation
<AnimatePresence>
  {files.map((file) => {
    const { name, size, preview } = file;
    const key = isString(file) ? file : name;
    if (showPreview) {
      // Animation for file preview
      return (
        <ListItem
          key={key}
          component={motion.div}
          {...varFadeInRight}
          sx={{
            p: 0,
            m: 0.5,
            width: 80,
            height: 80,
            borderRadius: 1.5,
            overflow: 'hidden',
            position: 'relative',
            display: 'inline-flex'
          }}
        >
          {/* ... */}
        </ListItem>
      );
    }
    // Animation for file list
    return (
      <ListItem
        key={key}
        component={motion.div}
        {...varFadeInRight}
        sx={{
          // ...
        }}
      >
        {/* ... */}
      </ListItem>
    );
  })}
</AnimatePresence>