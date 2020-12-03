import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import headerStyle from './styles';

function Header() {

  const classes = headerStyle();

  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <span className={classes.logo}>wookie <br /> movies</span>
          </Grid>

          <Grid container item className={classes.searchWrapper} xs={6}>
            <form className={classes.searchForm} noValidate autoComplete="off">
              <TextField placeholder="Search" fullWidth variant="outlined" />
            </form>
            <SearchIcon className={classes.searchIcon} />
          </Grid>
        </Grid>
      </Container>
    </div>

  );
}

export default Header;
