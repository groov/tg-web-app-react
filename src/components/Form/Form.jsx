import React, {useState} from 'react';
import './Form.css'

const Form = () => {

    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Input your data</h3>
            <input
                className={'input'}
                type='text'
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type='text'
                placeholder={'Город'}
                value={city}
                onChange={onChangeCity}

            />

            <input
                className={'input'}
                type='text'
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />

            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ лиц</option>
                <option value={'legal'}>Юр лиц</option>
            </select>
        </div>
    );
};

export default Form;