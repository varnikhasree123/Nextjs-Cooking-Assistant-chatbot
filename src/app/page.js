import styles from './page.module.css';
import ChatComponent from './components/ChatComponent';

export default function Page() {
  return (
    <div className={styles.chatWrapper}>
      <ChatComponent />
    </div>
  );
}
