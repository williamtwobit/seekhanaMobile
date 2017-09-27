import { StackNavigator } from 'react-navigation';

import Landing from './pages/Landing/Landing';
import LessonCard from './pages/Lesson/LessonCard';

export default App = StackNavigator({
  Landing: {screen: Landing},
  LessonCard: {screen: LessonCard}
});
