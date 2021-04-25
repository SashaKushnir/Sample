import React from 'react'
import {CommentItem} from "../../../redux/history/newHistoryReducer";

interface CommentIProps {
    commentI: CommentItem
}

export const CommentI: React.FC<CommentIProps> = ({commentI}) => {
    return <div>
        <div>
            TEXT: {commentI.text}
        </div>
    </div>
}