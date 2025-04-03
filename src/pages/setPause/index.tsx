import { useStateStore } from '../../state.store.js';
import SettingsPage from '../../components/settings_page/index.jsx';

interface SetPauseProps {
  continue: () => void;
}

export default function SetPause(props: SetPauseProps) {
  const setPause = useStateStore((state) => state.setPause);
  const moreRest = useStateStore((state) => state.moreRest);
  const lessRest = useStateStore((state) => state.lessRest);

  return (
    <SettingsPage
      title="Set Pause"
      unit="sec"
      current={setPause}
      increase={moreRest}
      decrease={lessRest}
      continue={props.continue}
    />
  );
}
