import {PrettyChatWindow} from 'react-chat-engine-pretty'



const ChatsPage = (props) => {
  

    return <div style={{height:'100vh'}}>
      <PrettyChatWindow
      projectId='0243665a-1635-4dbc-b4a5-620f1ee74fdc'
      username={props.user.username}
      secret={props.user.secret}
      style={{height:'100%'}}
      />
    </div>;
  };
  export default ChatsPage;