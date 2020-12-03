import { makeStyles, createStyles } from '@material-ui/core/styles';

const homeStyle = makeStyles(() =>
    createStyles({
        loader: {
            textAlign: 'center',
            paddingTop: '40px'
        }
    })
);

export default homeStyle;