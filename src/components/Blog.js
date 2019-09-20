import React from 'react'
import PropTypes from 'prop-types'
import { useModalWithData } from '../hooks'
import CustomModal from './CustomModal';
import ArticleDetail from './ArticleDetail';
import ArticleList from './ArticleList';

const Blog = ({ articles }) => {
    const [
        setIsOpened,
        isOpened,
        data,
        setData
    ] = useModalWithData();

    return (
        <div>
            <div style={{ padding: '1rem' }} />
            <CustomModal
                title="useModalWithData"
                isActive={isOpened}
                handleClose={() => setIsOpened(false)}
            >
                <ArticleDetail article={data} />
            </CustomModal>
            <ArticleList
                articles={articles}
                setData={setData}
                setIsOpened={setIsOpened}
            />
        </div>
    )
}

Blog.propTypes = {
    articles: PropTypes.array.isRequired,
}

export default Blog
