import { useStateStore } from '../../state.store.js';
import SettingsPage from '../../components/settings_page/index.jsx';

interface ExPauseProps {
  continue: () => void;
}

export default function ExPause(props: ExPauseProps) {
  const exPause = useStateStore((state) => state.exPause);
  const morePause = useStateStore((state) => state.morePause);
  const lessPause = useStateStore((state) => state.lessPause);

  return (
    <SettingsPage
      title="Exercise Pause"
      unit="sec"
      current={exPause}
      increase={morePause}
      decrease={lessPause}
      continue={props.continue}
    />
  );
}
