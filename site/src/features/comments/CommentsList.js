import { Col } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { selectCommentsByProjectId } from './commentsSlice';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import '../../features/projects/ProjectDetail.css';

const CommentsList = ({ projectId }) => {
  const { isLoading, errMsg } = useSelector((state) => state.comments);
  const comments = useSelector(selectCommentsByProjectId(projectId));

  if (isLoading)  return <Loading />;
  if (errMsg)     return <Error errMsg={errMsg} />;

  return (
    <Col xs="12" style={{ maxWidth: 900 }}>
      <div className="pd-section-card">
        <div className="pd-section-label">
          Comments ({comments.length})
        </div>

        {comments.length === 0 && (
          <p style={{ color: 'var(--text-light)', fontStyle: 'italic', fontSize: '0.9rem' }}>
            No comments yet — be the first to leave feedback.
          </p>
        )}

        {comments.map((c) => (
          <Comment key={c.id} comment={c} />
        ))}

        <div style={{ marginTop: comments.length > 0 ? '1rem' : '0.5rem' }}>
          <CommentForm projectId={projectId} />
        </div>
      </div>
    </Col>
  );
};

export default CommentsList;