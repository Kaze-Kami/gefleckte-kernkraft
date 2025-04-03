import { useStateStore } from '../../state.store.js';
import SettingsPage from '../../components/settings_page/index.jsx';

interface ExTimeProps {
  continue: () => void;
}

export default function ExTime(props: ExTimeProps) {
  const exTime = useStateStore((state) => state.exTime);
  const moreWork = useStateStore((state) => state.moreWork);
  const lessWork = useStateStore((state) => state.lessWork);

  return (
    <SettingsPage
      title="Exercise Time"
      unit="sec"
      current={exTime}
      increase={moreWork}
      decrease={lessWork}
      continue={props.continue}
    />
  );
}
