import Layout from '../components/layout'
import styles from './index.module.scss'

import React, { Component } from 'react'
import Router from 'next/router'
import Button from '@material-ui/core/Button';

export default class extends Component {

render() {
return (
  <Layout>
    <section className="section">
      <h2>Dearly beloved in XYZ,</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis diam a tincidunt posuere. Praesent scelerisque urna augue, a rhoncus leo hendrerit id. Aenean rhoncus euismod augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam laoreet urna quis urna finibus, sit amet iaculis augue tempus. Vivamus eleifend nulla imperdiet interdum egestas. Fusce enim ipsum, maximus non ultricies non, malesuada et lacus. Duis viverra cursus cursus.
<ul>
  <li>Tested positive for COVID-19 in the last 14 days.</li>
  <li>Exposed to anyone positive with COVID-19 in the last 14 days.</li>
  <li>Traveled outside Canada in the last 14 days.</li>
  <li>In the past 14 days, you or any members of your household experienced any of the following:</li>
  <ul>
    <li>Fever (Temperature above 37.2ºC)</li>
    <li>Cough</li>
    <li>Difficulty breathing</li>
    <li>Shortness of breath</li>
    <li>Sore throat</li>
    <li>Diarrhea</li>
    <li>Body aches</li>
    <li>Loss of taste or smell</li>
  </ul>
</ul>
<div className={styles.covidDisclamirButton}>
<Button variant="contained" color="primary" onClick={() => Router.push('/disclaimer')}>
  YES
</Button>
<div className={styles.spaceBetween}></div>
<Button variant="contained" color="secondary" onClick={() => Router.push('/registration')}>
  No
</Button>
</div>

</p>
    </section>
  </Layout>
);
}
}