import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import useMobile from '../../hooks/use-mobile';

// Components
import SearchBar from '../SearchBar';
import Jobs from '../Jobs';

const App = () => {
  const isMobile = useMobile();
  const [filteredLangs, setFilteredLangs] = useState([]);

  return (
    <Wrapper>
      <Header isMobile={isMobile} />
      <Content>
        <SearchBar setFilteredLangs={setFilteredLangs} filteredLangs={filteredLangs} />
        <Jobs setFilteredLangs={setFilteredLangs} filteredLangs={filteredLangs} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = tw.div``;

const Header = styled.div`
  ${({ isMobile }) =>
    isMobile
      ? `background-image: url('../../assets/images/bg-header-mobile.svg');`
      : `background-image: url('../../assets/images/bg-header-desktop.svg');`}
  ${tw`bg-desaturated-dark-cyan bg-no-repeat bg-cover h-header-lg mob:h-header-sm`}
`;

const Content = tw.div`px-pg sm:px-pg-sm`;

export default App;
