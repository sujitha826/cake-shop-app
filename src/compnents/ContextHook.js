import React, { useContext } from 'react';
import { UserContext, TopicContext } from '../App';

// Context provides a way to pass data through the component tree without having to pass as props manually down at every level.
function ComponentE() {
    const user = useContext(UserContext);             // Defined and provided to App at the top level with values.
    const topic = useContext(TopicContext);
    return <div> User is - {user} and channel is - {topic}</div>
}

export default ComponentE;