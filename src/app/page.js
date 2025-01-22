import styles from './page.module.css';
import ChatComponent from './components/ChatComponent';

export default function HomePage() {
  return (
    <div className={styles.chatWrapper}>
      <ChatComponent />
    </div>
  );
}
