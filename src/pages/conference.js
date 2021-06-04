import { useEffect, useReducer } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { listTalks, listTalks as ListTalks } from '../graphql/queries';
import { createTalk as CreateTalk } from '../graphql/mutations';

const CLIENT_ID = uuid();
const initialState = {
  error: null,
  talks: [],
  name: '',
  description: '',
  speakerName: '',
  speakerBio: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'set':
      return {
        ...state,
        talks: action.talks
      };
    case 'add':
      return {
        ...state,
        talks: [...state.talks, action.talk]
      };
    case 'error':
      return {
        ...state,
        error: true
      };
    case 'updateInput':
      return {
        ...state,
        [action.inputValue]: action.value
      };
    default:
      // eslint-disable-next-line no-new
      new Error();
  }
}

async function getTalks(dispatch) {
  try {
    const talkData = await API.graphql(graphqlOperation(listTalks));
    console.log('talkData: ', talkData);
    dispatch({
      type: 'set',
      talks: talkData.data.listTalks.items
    });
  } catch (err) {
    dispatch({ type: 'error' });
    console.log('error fetching talks... ', err);
  }
}

export default function Conference() {
  const [talks, updateTalks] = useReducer(reducer, initialState);

  async function getData() {
    try {
      const talkData = await API.graphql(graphqlOperation(ListTalks));
      console.log('talkData: ', talkData);
      updateTalks(talkData.data.listTalks.items);
    } catch (err) {
      console.log('error fetching talks... ', err);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {talks.map((talk, index) => (
        <div key={index}>
          <h3 className="text-xl font-bold">{talk.speakerName}</h3>
          <h5 className="text-lg font-semibold">{talk.name}</h5>
          <p>{talk.description}</p>
        </div>
      ))}
    </div>
  );
}
