import { makeStyles, createStyles } from '@material-ui/core/styles';

const headerStyle = makeStyles(() =>
    createStyles({
        wrapper: {
            borderBottom: '2px solid #000',
            paddingTop: '20px',
            paddingBottom: '20px',
        },
        logo: {
            textTransform: 'uppercase',
            fontSize: '2rem',
            lineHeight: '0.9em'
        },
        searchWrapper: {
            alignItems: 'center',
            flexDirection: 'row-reverse'
        },
        searchForm: {
            width: '61%',
            display: 'inline'
        },
        searchIcon: {
            fontSize: '2.5em',
            marginRight: '1%'
        }
    })
);

export default headerStyle;