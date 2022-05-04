import styled from 'styled-components';
import AlternativeTitle from './components/AlternativeTitle';
import ComplexTitle from './components/ComplexTitle';
import Card from './components/Card';
function App() {
  return (
    <div>
      <ComplexTitle title={'Complex Title'} />
      <AlternativeTitle />
      <Card />
    </div>
  );
}

export default App;
