import { Col } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { selectCommentsByProjectId } from './commentsSlice';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CommentsList = ({ projectId }) => {
  const { isLoading, errMsg } = useSelector((state) => state.comments);
  const comments = useSelector(selectCommentsByProjectId(projectId));

  if (isLoading)  return <Loading />;
  if (errMsg)     return <Error errMsg={errMsg} />;

  return (
    <Col md="5" className="m-1">
      <h4>Comments</h4>

      {/* show a message when the list is empty */}
      {comments.length === 0 && (
        <p className="text-muted">There are no comments for this project yet.</p>
      )}

      {/* render any existing comments */}
      {comments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}

      {/* always show the form/button */}
      <CommentForm projectId={projectId} />
    </Col>
  );
};

export default CommentsList;