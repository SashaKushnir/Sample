import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import {CommentItem} from "../../../redux/history/newHistoryReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {newBanknoteActions} from "../../../redux/newBanknote/newBanknoteActions";
import useOnClickOutside from "../../customHook/onMouseClickOutOfComponent";

interface CommentIProps {
    commentI: CommentItem
    parentId: number
    index: number
}

export const CommentI: React.FC<CommentIProps> = ({commentI, parentId, index}) => {
    const textInp = React.createRef<HTMLInputElement>()
    const d = useDispatch()
    const ref = useRef();
    // State for our modal
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setEditModeFalse());
    const [editMode, setEditMode] = useState(false)
    const [commentVal, setCommentVal] = useState(commentI.text)

    let commentsLength: number = 0
    useSelector((state:RootState) => state.createNew.menus?.map((catI) => {
        catI.products.some((proI, index) => {
            return((proI.id === parentId) && (index === proI.comments.length - 1))
        })
    }))
    useEffect(() => {
        setEditMode(true)
    },[])

    useEffect(() => {
        if(editMode) {
            textInp.current?.focus()
        }
    },[editMode])

    useEffect(() => {
        if(commentsLength)
        setEditMode(true)
    },[commentsLength])

    const setEditModeTrue = () => {
        setEditMode(true)
    }

    const setEditModeFalse = () => {
        setCommentVal(commentVal.trim())
        d(newBanknoteActions.saveComment({
            target_id: commentI.target_id,
            text: commentVal,
            target_type: commentI.type?commentI.type:""
        }, index))
        setEditMode(false)

    }

    const changeCommentValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCommentVal(e.target.value)
    }

    return <div>
        {!editMode && <span onClick={setEditModeTrue}>
            TEXT {index + 1}: {commentI.text}
        </span>}
        {editMode && <div ref={ref as any}>
            <input ref={textInp} onBlur={setEditModeFalse} onChange={changeCommentValue} value={commentVal}/>
        </div>}

    </div>
}