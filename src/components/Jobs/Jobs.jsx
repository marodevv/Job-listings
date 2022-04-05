import { useState, useEffect } from 'react';
import tw from 'twin.macro';
import { nanoid } from 'nanoid';
import useNonInitialEffect from '../../hooks/use-non-initial-effect';
import useAxios from '../../hooks/use-axios';
import axios from '../../api/jobLister';
import Job from './Job';

const Jobs = ({ setFilteredLangs, filteredLangs }) => {
  const [jobs, setJobs] = useState([]);

  const { response, error, isLoading, refetch } = useAxios({
    axiosInstance: axios,
    method: 'GET',
  });

  //* Fetched jobs
  useEffect(() => refetch('../../data.json'), []);

  //* Assigned jobs
  useNonInitialEffect(() => {
    setJobs(response);
  }, [response]);

  //* Filtered jobs
  useNonInitialEffect(() => {
    setJobs(
      response.filter(job =>
        filteredLangs.every(filteredLang => job.languages.includes(filteredLang))
      )
    );
  }, [filteredLangs]);

  return (
    <Wrapper>
      {jobs.map(job => (
        <Job
          key={nanoid()}
          setFilteredLangs={setFilteredLangs}
          filteredLangs={filteredLangs}
          job={job}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = tw.div`w-full flex flex-col justify-between items-center gap-md mt-md`;

export default Jobs;
