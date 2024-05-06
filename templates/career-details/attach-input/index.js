import React from 'react';
import PropTypes from 'prop-types';
import {DropzoneArea} from 'material-ui-dropzone';

import {AttachFileIcon} from 'icons';

import {Dropzone} from './styled-components';

const previewGridProps = {
  item: {xs: 12},
};

const AttachInput = ({name, handleChange, isFocused, ...otherProps}) => (
  <Dropzone isfocused={isFocused.toString()}>
    <DropzoneArea
      Icon={AttachFileIcon}
      maxFileSize={20971520}
      dropzoneText="Attach file..."
      acceptedFiles={[
        'application/pdf, application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ]}
      filesLimit={1}
      previewGridProps={previewGridProps}
      showAlerts={['success', 'error']}
      showPreviewsInDropzone
      showFileNames
      showFileNamesInPreview
      inputProps={{name, accept: '*.pdf, *.doc, *.docx'}}
      onChange={(files) => {
        handleChange(files[0]);
      }}
      {...otherProps}
    />
  </Dropzone>
);

AttachInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

AttachInput.defaultProps = {
  isFocused: false,
};

export {AttachInput as default};
