import mockData from '../../../data/mockData.json';
import MessageStatusBarPresenter from './MessageStatusBarPresenter';

function MessageStatusBarContainer() {
  const firstData = mockData[0];

  return <MessageStatusBarPresenter data={firstData} />;
}

export default MessageStatusBarContainer;
