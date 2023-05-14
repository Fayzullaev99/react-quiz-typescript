import React, { useState } from 'react'
import { UseFetch } from '../hooks/useFetch'

function Start() {
    const [amount, setAmount] = useState('10')
    const [difficulty, setDifficulty] = useState('')
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newQuestions = await UseFetch(
            amount,
            difficulty,
            category,
            type,
        );
        console.log(newQuestions);

    }
    return (
        <form onSubmit={onSubmit} className='form'>
            <div className='container'>
                <label className='form__label'>Number of Questions:</label>
                <input type="number" className="form__control" min="1" max="50" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <label className='form__label'>Select Category:</label>
                <select className="form__control" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}>
                    <option value="">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals & Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science & Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime & Manga</option>
                    <option value="32">Entertainment: Cartoon & Animations</option>
                </select>
                <label className='form__label'>Select Difficulty:</label>
                <select className="form__control" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDifficulty(e.target.value)}>
                    <option value="any">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <label className='form__label'>Select Type:</label>
                <select className="form__control" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}>
                    <option value="">Any Type</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                </select>
            </div>
            <button className='form__start' type='submit'>
                Start Play
            </button>
        </form>
    )
}

export default Start