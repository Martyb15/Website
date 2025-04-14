import { COMMENTS } from "../../app/shared/COMMENTS"

export const selectCommentsByProjectId = ({ projectId }) => {
    return COMMENTS.filter((comment) => comment.projectId === parseInt(projectId));
};