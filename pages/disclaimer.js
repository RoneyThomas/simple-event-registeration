import Layout from '../components/layout'

import React, { Component } from 'react'

export default function Disclaimer() {
    return (
        <Layout>
          <section className="section">
            <h2>We hope you get better soon,</h2>
            <p>
              Please do not come to XYZ and self-isolate at home for 14 days.
              People who tested positive for COVID-19 should remain in quarantine until fully recovered and should wait for two weeks after full recovery before coming to XYZ.
            </p>
          </section>
        </Layout>
      )
  }