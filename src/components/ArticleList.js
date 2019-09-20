import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'bloomer';

const ArticleList = ({ articles , setData, setIsOpened}) => {
    return (
        <ul>
            {articles.map( article => {
                const {id, title } = article;
                return (
                    <li key={`article--${id}`}>
                        <div style={{ padding: '1rem' }}>
                            {title}
                            <Button
                                onClick={() => {
                                    setData(article)
                                    setIsOpened(true)
                                }}
                            >
                                View
                            </Button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    setModalData: PropTypes.func.isRequired,
    setModalIsOpened: PropTypes.func.isRequired,
}

export default ArticleList
