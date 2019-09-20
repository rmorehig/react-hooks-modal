import React from 'react'
import PropTypes from 'prop-types'

const ArticleDetail = ({article}) => (
    article && 
        (
            <div>
                <h4>{article.title}</h4>
                <div>{article.body}</div>
            </div>
        )
)

ArticleDetail.propTypes = {
    article: PropTypes.object.isRequired,
}

export default ArticleDetail
