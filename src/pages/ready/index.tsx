import './index.css';

interface ReadyProps {
  continue: () => void;
}

export default function Ready(props: ReadyProps) {
  return (
    <view className="ready_wrapper">
      <text class="title primary">Ready?</text>
      <view class="button text primary" bindtap={props.continue}>
        <text class="icon">play_arrow</text>
        <text>Start</text>
      </view>
    </view>
  );
}
