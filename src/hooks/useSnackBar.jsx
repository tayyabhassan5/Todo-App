import { useSnackbar } from 'notistack';

const useSnackBar = () => {
    
    const { enqueueSnackbar } = useSnackbar();

    
    return ({ message, variant }) => {
        enqueueSnackbar(message, {
            variant: variant || 'default',
            autoHideDuration: 2000
        });
    };
};

export default useSnackBar;
