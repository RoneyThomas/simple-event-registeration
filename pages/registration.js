import Layout from '../components/layout'

import React, { Component } from 'react'
import { Button, LinearProgress } from '@material-ui/core';
import {FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    // width: '25ch',
    // width: 400,
  },
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 120,
  // },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Registration() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: 'hai',
    email: '',
    phone: '',
    numberOfRegisterants: 1,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
    return (
        <Layout>
          <section className="section">
            <p>
            If you or anyone at your houshold is at risk of developing severe complications from an illness due to underlying medical conditions and age. We recomend you stay home.</p>
            <p>We are also live streaming every Sunday on YouTube, every week a live stream link will be posted on the Church WhatsApp group. We do not take any responsibility for any illness that you may get. You must practice all the protocols that have been advised by the Government of Ontario and take all precautions necessary to protect yourself and your family. If you have any concerns, please plan to watch the live stream services until you feel it is safe to return.
            </p>
            <h2>Who is at high risk?</h2>
            <p>
              <ul>
<li>People with medical conditions including:</li>
<li>Heart disease</li>
<li>Hypertension (high blood pressure)</li>
<li>Lung disease</li>
<li>Diabetes</li>
<li>Cancer</li>
<li>People with weakened immune systems from a medical condition or treatment, such as chemotherapy</li>
<li>Older adults</li>
</ul>
            </p>
          </section>
          <h2>Register</h2>
<form className={classes.root}>
{/* <form> */}
<TextField
          id="my-name"
          label="Name"
          placeholder="Name"
          fullWidth
          color="secondary"
        />
        <TextField
          label="Email"
          id="my-email"
          placeholder="Email"
          fullWidth
          className={classes.textField}
        />
        <div style={{ display: 'flex' , alignSelf: 'flex-end'}}>
        <TextField
          label="Phone"
          id="my-phone"
          placeholder="Phone Number"
          fullWidth
          style = {{marginRight: 16}}
          className={classes.textField}
        />
        <Select
          value={state.numberOfRegisterants}
          onChange={handleChange}
          name="age"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'age' }}
          style={{ alignSelf: 'flex-end'}}
          defaultValue
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
        {/* <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        > */}
        </div>
</form>
        </Layout>
      )
  }