import { h } from 'preact';

const EndContent = ({ stateName, isEligible }) => {
  const resourceUrl = `https://wheresmyvaccine.org/resources/${stateName.value}`;

  if (isEligible) {
    return (
      <div className='EndContent Eligible'>
        <h1>Yes!</h1>
        <h2>You can get a COVID-19 vaccine.</h2>
        <p>We think you’re eligible because ....</p>
        <p>
          But, some places have even more specific rules. For example, one first responder might be eligible now, while
          another has to wait until a later time.
        </p>
        <p>Check your state’s website to be sure.</p>
        <a href={resourceUrl}>More resources for {stateName.label}</a>
      </div>
    );
  }

  return (
    <div className='EndContent NotEligible'>
      <h1>Not yet.</h1>
      <h2>You can’t get a COVID-19 vaccine right now :(</h2>
      <p>But keep your hopes up! More and more groups of people are becoming eligible every day.</p>
      <p>Until then, check out some of the resources below to learn more about how the vaccine rollout is going.</p>
      <a href={resourceUrl}>More resources for {stateName.label}</a>
    </div>
  );
};

export default EndContent;
