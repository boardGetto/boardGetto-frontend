import moment from 'moment';

const formatCreatedAt = (createdAt: string) => {
  const now = moment();
  const created = moment(createdAt);

  const diffHours = now.diff(created, 'hours');
  const diffDays = now.diff(created, 'days');

  if (diffHours < 1) {
    return `${diffHours}시간 전`;
  }
  if (diffHours < 24) {
    return `${diffHours}시간 전`;
  }
  if (diffDays < 7) {
    return `${diffDays}일 전`;
  }
  return created.format('YYYY-MM-DD HH:mm:ss');
};

export default formatCreatedAt;
