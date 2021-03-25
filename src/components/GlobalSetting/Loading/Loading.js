import React from 'react'
import { useSelector } from 'react-redux';
import styleLoading from './Loading.module.css'

export default function Loading() {
    const {isLoading} = useSelector(state => state.LoadingReducer)

    if (isLoading) {
        return (
            <div className={styleLoading.bgLoading}>
                <img src={require('../../../assets/Loading/25.gif').default} alt="loading"/>
            </div>
        )
    } else {
        return ''
    }
}
