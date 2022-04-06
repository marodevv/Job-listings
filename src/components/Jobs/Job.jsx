import tw, { styled } from 'twin.macro';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';
import jobWrapper from '../../animations/jobWrapper';

const Job = ({ job, filteredLangs, setFilteredLangs }) => {
  const handleClick = langToAdd =>
    setFilteredLangs(prev =>
      prev.some(lang => lang == langToAdd) ? [...prev] : [...prev, langToAdd]
    );

  return (
    <Wrapper variants={jobWrapper} initial='hidden' animate='shown'>
      <Logo logo={job.logo} />
      <Details>
        <Top>
          <Company>{job.company}</Company>
          {job.new && <New>NEW!</New>}
          {job.featured && <Featured>Featured</Featured>}
        </Top>
        <Title>{job.position}</Title>
        <More>
          <Item>{job.postedAt}</Item>
          <Item>{job.contract}</Item>
          <Item>{job.location}</Item>
        </More>
      </Details>

      <Languages>
        {job.languages.map(lang => (
          <Lang
            isFiltered={filteredLangs.includes(lang)}
            onClick={() => handleClick(lang)}
            key={nanoid()}>
            {lang}
          </Lang>
        ))}
      </Languages>
    </Wrapper>
  );
};

const Top = tw.div`flex justify-between items-center gap-sm font-bold`;

const Company = tw.h3`text-desaturated-dark-cyan mr-auto`;

const Featured = tw.p`bg-dark-grayish-cyan text-white uppercase py-1 px-2 pt-1.5 rounded-full`;

const New = tw.p`bg-desaturated-dark-cyan text-white uppercase py-1 px-2 pt-1.5 rounded-full`;

const Title = tw.h1`text-dark-grayish-cyan font-bold hover:text-desaturated-dark-cyan cursor-pointer`;

const More = tw.ul`flex justify-between items-center text-gray marker:text-sm gap-md w-80 max-w-full list-disc lg:gap-sm sm:(list-none gap-xs w-full)`;

const Item = tw.li`pl-2 first:(list-none p-0)`;

const Languages = tw.div`flex justify-between items-center gap-md border-gray font-bold ml-auto mob:(gap-sm border-t pt-4 justify-start w-full) xl:(flex-wrap gap-xs justify-end)`;

const Lang = styled.h4`
  ${tw`bg-filter-tablets text-desaturated-dark-cyan rounded-sm p-2  cursor-pointer hover:(text-white bg-desaturated-dark-cyan)`}
  ${({ isFiltered }) => isFiltered && tw`bg-desaturated-dark-cyan text-white`}
`;

const Details = tw.div`flex flex-col justify-between items-start gap-xs`;

const Logo = styled.img.attrs(({ logo }) => ({ src: logo }))``;

const Wrapper = tw(
  motion.div
)`bg-white mx-auto w-full max-w-job flex justify-between items-center gap-md lg:(gap-sm px-md) py-md px-lg rounded-md mob:(flex-col justify-center items-start) sm:!px-sm`;

export default Job;
