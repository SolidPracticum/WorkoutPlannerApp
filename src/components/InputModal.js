import React, { useState } from 'react'
import './InputModal.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../redux/Slice'
import { Link } from 'react-router-dom'
import { t } from 'i18next'
function InputModal(props) {
	const [ageD, setAgeD] = useState('')
	const [weightD, setWeightD] = useState('')
	const [heightD, setHeightD] = useState('')
	const data = useSelector((state) => state.slice.data)
	const dispatch = useDispatch()

	const addHandler = () => {
		if (
			ageD.trim().length === 0 ||
			weightD.trim().length === 0 ||
			heightD.trim().length === 0
		)
			return alert('заполните все поля ')
		dispatch(
			addData({
				age: ageD,
				weight: weightD,
				height: heightD,
			}),
		)
		setAgeD('')
		setWeightD('')
		setHeightD('')
	}
	console.log(data)
	return (
		<div className='bg'>
			<div className='inputMain'>
				<span className='back'>
					<Link to='/thirdModal'>
						<img alt='back' src='/images/fourthModal/<.png' />
					</Link>
				</span>

				<div className='inputMainText'>
					<h1>{props.t('h1')}</h1>
					<p>{props.t('p')}</p>
				</div>
				<span onClick={props.toggleCounter} className='close'>
					<img alt='close' src='/images/fourthModal/x.png' />
				</span>
			</div>

			<div className='inputField'>
				<div className='inputField_firstBlock'>
					<img alt='age' src='/images/fourthModal/v.png' />
					<span>{props.t('age')}</span>
				</div>

				<div>
					<input
						value={ageD}
						onChange={(event) => setAgeD(event.target.value)}
						min='1'
						max='100'
						type='number'
					/>
				</div>
			</div>
			<div className='inputField'>
				<div className='inputField_firstBlock'>
					<img alt='weight' src='/images/fourthModal/v.png' />
					<span>{props.t('weight')}</span>
				</div>

				<div>
					<input
						value={weightD}
						onChange={(event) => setWeightD(event.target.value)}
						type='number'
						min='1'
						max='100'
					/>
				</div>
			</div>
			<div className='inputField'>
				<div className='inputField_firstBlock'>
					<img alt='height' src='/images/fourthModal/rost.png' />
					<span> {props.t('height')}</span>
				</div>

				<div>
					<input
						min='1'
						max='100'
						type='number'
						value={heightD}
						onChange={(event) => setHeightD(event.target.value)}
					/>
				</div>
			</div>
			<button onClick={addHandler} className='next'>
				{t('next')}
			</button>
		</div>
	)
}

export default InputModal
