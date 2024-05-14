import React from "react";
import Comment from "./comment";

function CommentList(props)
{
    const Comments = [
        {
            name: "신채린",
            comment: "안녕하세요. 신채린입니다."
        },
        {   
            name: "박성연",
            comment: "안녕하세요. 신채린입니다."
        },
        {
            name: "신채린",
            comment: "안녕하세요. 신채린입니다."
        },      
    ];
    return(
        <>
        {Comments.map((comment) => {
            return(
                <Comment name = {comment.name} comment = {comment.comment}/>
            );
        })}
        </>
    );
}
export default CommentList;