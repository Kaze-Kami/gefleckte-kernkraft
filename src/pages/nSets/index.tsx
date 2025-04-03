import { useStateStore } from '../../state.store.js';
import SettingsPage from '../../components/settings_page/index.jsx';

interface NSetsProps {
  continue: () => void;
}

export default function NSets(props: NSetsProps) {
  const nSets = useStateStore((state) => state.nSets);
  const moreSets = useStateStore((state) => state.moreSets);
  const lessSets = useStateStore((state) => state.lessSets);

  return (
    <SettingsPage
      title="# Sets"
      current={nSets}
      increase={moreSets}
      decrease={lessSets}
      continue={props.continue}
    />
  );
}
