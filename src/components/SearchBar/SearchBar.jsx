import tw, { styled } from 'twin.macro';
import { nanoid } from 'nanoid';
import { ImCross } from 'react-icons/im';

const SearchBar = ({ setFilteredLangs, filteredLangs }) => {
  const handleDelete = langToDelete =>
    setFilteredLangs(prev => prev.filter(lang => lang != langToDelete));
  const handleClear = () => setFilteredLangs([]);

  return (
    <>
      {filteredLangs.length > 0 && (
        <Wrapper>
          <FilteredItems>
            {filteredLangs.map(lang => (
              <FilteredItem key={nanoid()}>
                <Name>{lang}</Name>
                <Delete onClick={() => handleDelete(lang)}>
                  <ImCross />
                </Delete>
              </FilteredItem>
            ))}
          </FilteredItems>

          <Clear onClick={handleClear}>Clear</Clear>
        </Wrapper>
      )}
    </>
  );
};

const FilteredItems = tw.div`flex-wrap flex justify-start gap-sm items-center`;

const FilteredItem = tw.div`w-max bg-filter-tablets text-desaturated-dark-cyan rounded-sm flex items-stretch justify-between`;

const Delete = tw.button`rounded-tr-sm px-3 rounded-br-sm text-white bg-desaturated-dark-cyan cursor-pointer hover:bg-dark-grayish-cyan`;

const Name = tw.h4`font-bold text-desaturated-dark-cyan p-2`;

const Clear = tw.a`ml-auto text-dark-grayish-cyan font-bold cursor-pointer hover:(text-desaturated-dark-cyan underline)`;

const Wrapper = styled.div`
  ${tw`flex justify-between items-center mx-auto w-full max-w-job bg-white rounded-md py-md px-lg lg:px-md
sm:!px-sm`}
  transform: translateY(-50%);
`;

export default SearchBar;
