import { useState } from 'react'

export const useModal = (initialMode = false) => {
    const [isOpened, setIsOpened] = useState(initialMode)
    const toggle = () => setIsOpened(!isOpened)
    return [isOpened, setIsOpened, toggle]
}

export const useModalWithData = (
    initialIsOpened = false,
    initialData = null
) => {
    const [isOpened, setIsOpened] = useModal(initialIsOpened)
    const [data, setData] = useState(initialData)
    const customSetIsModalOpened = isOpened => {
        setIsOpened(isOpened);
        !isOpened && setData(null)
    }
    return [ customSetIsModalOpened, isOpened, data, setData ]
}