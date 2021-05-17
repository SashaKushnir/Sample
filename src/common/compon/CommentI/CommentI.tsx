import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import {CommentItem} from "../../../redux/history/newHistoryReducer";
import {useDispatch} from "react-redux";
import {newBanknoteActions} from "../../../redux/newBanknote/newBanknoteActions";
import useOnClickOutside from "../../customHook/onMouseClickOutOfComponent";
import {useRouteMatch} from "react-router-dom";
import {ticketsActions} from "../../../redux/tickets/ticketsActions";
import {servicesActions} from "../../../redux/services/servicesActions";

export interface CommentIProps {
    commentI: CommentItem
    parentId: number
    index: number
}

export const CommentI: React.FC<CommentIProps> = ({commentI, parentId, index}) => {
    const textInp = React.createRef<HTMLInputElement>()
    const d = useDispatch()
    const ref = useRef();
    useOnClickOutside(ref, () => setEditModeFalse());
    const [editMode, setEditMode] = useState(false)
    const [commentVal, setCommentVal] = useState(commentI.text)
    const {url} = useRouteMatch()

    useEffect(() => {
        if(!commentVal)
        setEditMode(true)
    },[])

    useEffect(() => {
        if(editMode) {
            textInp.current?.focus()
        }
    },[editMode])


    const setEditModeTrue = () => {
        setEditMode(true)
    }

    const setEditModeFalse = () => {
        setCommentVal(commentVal.trim())
        const commentForActions = {
            target_id: commentI.target_id,
            text: commentVal,
            target_type: commentI.type?commentI.type:""
        }
        switch (url) {
            case "/content/new/menus":
                d(newBanknoteActions.saveComment(commentForActions, index, parentId))
                break
            case "/content/new/tickets":
                d(ticketsActions.addTicketComment(commentForActions, index, parentId))
                break
            case "/content/new/entertainments":
                d(servicesActions.addServiceComment(commentForActions, index, parentId))
        }

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