import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const TransparentTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: 'transparent',
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
      '& .MuiInputBase-input': {
        color: 'white',
      },
      '& .MuiInputLabel-root': {
        color: 'white',
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: 'white',
      },
      '& .MuiInputLabel-root.MuiFormLabel-filled': {
        color: 'white',
      },
      '& .MuiInputBase-root input:-webkit-autofill': {
        backgroundColor: 'transparent !important',
        color: 'white !important',
      },
  }));

export default TransparentTextField;  