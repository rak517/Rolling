import { useEffect, useState } from 'react';
import ListPagePresenter from './ListPagePresenter';
import fetchRecipientData from '../../api/ListPage/fetchRecipientData';
import { HttpException } from '../../utils/exceptions';

function ListPageContainer() {
  const [popularPapers, setPopularPapers] = useState([]);
  const [recentPapers, setRecentPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results: allData } = await fetchRecipientData(20, 0);
        console.log('Fetched Data:', allData);

        const sortedByReactionCount = [...allData].sort(
          (a, b) => b.reactionCount - a.reactionCount,
        );
        setPopularPapers(sortedByReactionCount);

        const sortedByCreatedAt = [...allData].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        setRecentPapers(sortedByCreatedAt);

        setError(null);
      } catch (error) {
        if (error instanceof HttpException) {
          setError(error.message);
        } else {
          setError('알 수 없는 오류가 발생했습니다.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ListPagePresenter
      popularPapers={popularPapers}
      recentPapers={recentPapers}
      loading={loading}
      error={error}
    />
  );
}

export default ListPageContainer;
