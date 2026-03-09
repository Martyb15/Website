import { formatDate } from '../../utils/formatDate';

const Comment = ({ comment }) => {
    const { text: commentText, rating, author, date } = comment;

    return (
        <div style={{
            padding: '14px 16px',
            marginBottom: '12px',
            background: '#faf9f7',
            borderRadius: 10,
            borderLeft: '3px solid var(--primary-color)',
        }}>
            <p style={{
                margin: '0 0 8px',
                color: 'var(--text-dark)',
                fontSize: '0.92rem',
                lineHeight: 1.65,
            }}>
                {commentText}
            </p>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                color: 'var(--text-light)',
            }}>
                {/* Star rating */}
                <span style={{ color: '#f59e0b', letterSpacing: '1px' }}>
                    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                </span>
                <span>·</span>
                <span style={{ fontWeight: 600 }}>{author}</span>
                <span>·</span>
                <span>{formatDate(date)}</span>
            </div>
        </div>
    );
};

export default Comment;