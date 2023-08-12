import React, { useContext } from 'react'
import { AppContext } from '../App'

const CountryInfo = () => {
    const { country, select } = useContext(AppContext);
    return (
        <div className="country">
            <div className="header">
                <span className="name">{country.name.common}</span>
                <button className="fa-solid fa-xmark" onClick={() => select({})}></button>
            </div>
            <div className="flag" style={{ backgroundImage: `url(${country.flags.png})` }}></div>
            <div className="wrapper">
                {Object.entries(country).map(([key, value]) => {
                    return (
                        <div className="data" key={key}>
                            <div className="info">{key}</div>
                            <div className="detail">
                                {Array.isArray(value) && value.map(value => <span key={value}>{value}</span>)}
                                {(!Array.isArray(value) && typeof (value) == "object") && Object.entries(value).map(([key, value]) =>
                                    (!Array.isArray(value) && typeof (value) != "object") && <span key={key}>{key + " : " + value}</span>)}
                                {(!Array.isArray(value) && typeof (value) != "object") && `${value}`}
                            </div>
                        </div>);
                })}
            </div>
        </div>
    )
}

export default CountryInfo
