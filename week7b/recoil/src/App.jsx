import './App.css'
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from '../atoms'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomsCount = useRecoilValue(jobsAtom);
  const NotifAtom = useRecoilValue(notificationsAtom);
  const SelectorNotification = useRecoilValue(totalNotificationSelector);

  const [messageCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

  return (
    <>
      <button>Home</button>

      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobAtomsCount >= 5 ? "5+" : jobAtomsCount})</button>
      <button>Messaging ({messageCount})</button>
      <button>Notifications ({NotifAtom})</button>

      <button onClick={() => {
        setMessagingAtomCount(messageCount+ 1);
      }}>Me ({SelectorNotification})</button>
    </>
  )
}
export default App
