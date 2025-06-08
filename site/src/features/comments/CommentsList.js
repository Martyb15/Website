import { Col } from "reactstrap";
import Comment from './Comment';
import { selectCommentsByProjectId } from "./commentsSlice";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import Error from '../../components/Error';
import Loading from '../../components/Loading';



const CommentsList = ({ projectId }) => {
    const { isLoading, errMsg } = useSelector((state) => state.comments);
    // const { commentsArray, isLoading, errMsg } = useSelector(
    //     (state) => state.comments
    // ); 
    // const comments = selectCommentsByProjectId(projectId)({ comments: { commentsArray } });

    const comments = useSelector(selectCommentsByProjectId(projectId));
    if (isLoading) return <Loading /> 
    if (errMsg) return <Error errMsg={errMsg} />

    if (comments && comments.length > 0) {
        console.log(comments)
        console.log('comments')
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm projectId={projectId}></CommentForm>
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