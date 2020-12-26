import Layout from '../components/layout'
import styles from './index.module.scss'

import React, {Component, useState} from 'react'
import Router from 'next/router'
import Button from '@material-ui/core/Button';
import {KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
const handleDateChange = (date) => {
    setSelectedDate(date);
};

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <Layout>
                <section className="section">
                    <h2>Dearly beloved in XYZ,</h2>
                    <p>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />

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