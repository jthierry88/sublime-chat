import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow
            projectId='ec66ef14-94a7-4e45-b4a0-4df508262f29'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>
    )
}

export default ChatsPage;