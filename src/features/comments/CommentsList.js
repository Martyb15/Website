import { Col } from "reactstrap";
import Comment from './Comment';
import { selectCommentsByProjectId } from "./commentsSlice";

const CommentsList = ({ projectId }) => {
    const comments = selectCommentsByProjectId(projectId);

    if (comments && comments.length > 0) {
        console.log(comments)
        console.log('comments')
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    );
};

export default CommentsList;